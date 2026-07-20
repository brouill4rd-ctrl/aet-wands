import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { woodVisual, coreVisual, flexBend } from "@/data/visuals";
import { pickWandStyle, type WandStyle } from "@/data/wandStyles";

type Props = {
  woodId?: string;
  coreId?: string;
  flexId?: string;
  length: number; // inches, 9–15
  houseColor?: string;
  className?: string;
};

/* ── Animated pulsing point-light at the wand tip ── */
function TipGlow({
  position,
  color,
  intensity,
}: {
  position: THREE.Vector3;
  color: string;
  intensity: number;
}) {
  const ref = useRef<THREE.PointLight>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.intensity = intensity * (0.6 + 0.4 * Math.sin(t * 2.5));
  });
  return (
    <pointLight
      ref={ref}
      position={[position.x, position.y, position.z]}
      color={color}
      intensity={intensity}
      distance={3}
      decay={2}
    />
  );
}

/* ── Animated scene background that smoothly transitions ── */
function SceneBg({ color }: { color: string }) {
  const ref = useRef<THREE.Color>(null);
  return <color ref={ref} attach="background" args={[color]} />;
}

/**
 * Fully procedural wand with:
 *   - Spiralling core veins on the shaft
 *   - Ornate tip cage / crystal cluster
 *   - Detailed handle with carved texture
 *   - Pulsing emissive core glow
 *   - Per-style silhouettes
 */
function Wand({
  woodId,
  coreId,
  flexId,
  length,
  houseColor,
  style,
}: {
  woodId: string;
  coreId: string;
  flexId: string;
  length: number;
  houseColor: string;
  style: WandStyle;
}) {
  const wood = woodVisual(woodId);
  const core = coreVisual(coreId);
  const bend = flexBend(flexId);
  const group = useRef<THREE.Group>(null);
  const coreMatRef = useRef<THREE.MeshStandardMaterial>(null);
  const tipMatRef = useRef<THREE.MeshStandardMaterial>(null);
  const ringMatRefs = useRef<(THREE.MeshStandardMaterial | null)[]>([]);

  // World-space length. inches → units.
  const L = length * 0.18;

  // Style-driven silhouette parameters.
  const cfg = useMemo(() => styleConfig(style, L, bend), [style, L, bend]);

  // Shaft curve.
  const curve = useMemo(() => {
    const b = bend * L * 0.35;
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, -L / 2, 0),
      new THREE.Vector3(b * 0.25, -L / 4, 0),
      new THREE.Vector3(b * 0.55, 0, 0),
      new THREE.Vector3(b * 0.8, L / 4, 0),
      new THREE.Vector3(b, L / 2, 0),
    ]);
  }, [L, bend]);

  // Tapered shaft with carved grooves.
  const shaftGeom = useMemo(() => {
    const segs = 128;
    const radial = 24;
    const g = new THREE.TubeGeometry(curve, segs, 0.05, radial, false);
    const pos = g.attributes.position;
    const tmp = new THREE.Vector3();
    for (let i = 0; i <= segs; i++) {
      const t = i / segs;
      let radius = THREE.MathUtils.lerp(cfg.baseRadius, cfg.tipRadius, t);
      // Style-specific radius modulation.
      radius *= cfg.radiusMod(t);
      // Carved spiral grooves along the shaft.
      const grooveDepth = style === "elegant" ? 0.012 : style === "gnarled" ? 0.02 : 0.008;
      const grooveFreq = style === "elegant" ? 3 : style === "gnarled" ? 7 : 4;
      for (let j = 0; j <= radial; j++) {
        const idx = i * (radial + 1) + j;
        tmp.fromBufferAttribute(pos, idx);
        const center = curve.getPoint(t);
        const dir = tmp.clone().sub(center).normalize();
        const angle = Math.atan2(dir.z, dir.x);
        // Spiral groove modulation.
        const groove =
          1 - grooveDepth * Math.max(0, Math.sin(angle * grooveFreq + t * Math.PI * 12));
        tmp.copy(center).add(dir.multiplyScalar(radius * groove));
        pos.setXYZ(idx, tmp.x, tmp.y, tmp.z);
      }
    }
    pos.needsUpdate = true;
    g.computeVertexNormals();
    return g;
  }, [curve, cfg, style]);

  // Inner core tube.
  const coreGeom = useMemo(
    () => new THREE.TubeGeometry(curve, 96, 0.014, 8, false),
    [curve],
  );

  // Spiralling core veins — three thin tubes winding around the shaft.
  const veinGeoms = useMemo(() => {
    const veins: THREE.TubeGeometry[] = [];
    const veinCount = style === "crystalline" ? 2 : 3;
    for (let v = 0; v < veinCount; v++) {
      const phaseOffset = (v / veinCount) * Math.PI * 2;
      const pts: THREE.Vector3[] = [];
      const steps = 80;
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const center = curve.getPoint(t);
        const tangent = curve.getTangent(t);
        // Calculate perpendicular vectors.
        const up = new THREE.Vector3(0, 1, 0);
        const perp1 = new THREE.Vector3().crossVectors(tangent, up).normalize();
        const perp2 = new THREE.Vector3().crossVectors(tangent, perp1).normalize();
        const spiralAngle = phaseOffset + t * Math.PI * 10;
        const spiralRadius = THREE.MathUtils.lerp(cfg.baseRadius, cfg.tipRadius, t) * 1.02;
        pts.push(
          new THREE.Vector3(
            center.x + Math.cos(spiralAngle) * spiralRadius * perp1.x + Math.sin(spiralAngle) * spiralRadius * perp2.x,
            center.y + Math.cos(spiralAngle) * spiralRadius * perp1.y + Math.sin(spiralAngle) * spiralRadius * perp2.y,
            center.z + Math.cos(spiralAngle) * spiralRadius * perp1.z + Math.sin(spiralAngle) * spiralRadius * perp2.z,
          ),
        );
      }
      const veinCurve = new THREE.CatmullRomCurve3(pts);
      veins.push(new THREE.TubeGeometry(veinCurve, 64, 0.005, 6, false));
    }
    return veins;
  }, [curve, cfg, style]);

  const handleY = useMemo(() => curve.getPoint(0).y + L * 0.12, [curve, L]);

  // Pulsing glow animation.
  useFrame(({ clock }) => {
    if (group.current) group.current.rotation.y += 0.004;
    const t = clock.getElapsedTime();
    const pulse = 0.7 + 0.3 * Math.sin(t * 2.0);
    if (coreMatRef.current) {
      coreMatRef.current.emissiveIntensity = core.intensity * pulse;
    }
    if (tipMatRef.current) {
      tipMatRef.current.emissiveIntensity = (style === "crystalline" ? 4.0 : 3.5) * pulse;
    }
    ringMatRefs.current.forEach((m) => {
      if (m) m.emissiveIntensity = 0.7 + 0.4 * Math.sin(t * 1.8);
    });
  });

  const tipPos = curve.getPoint(1);

  // Tip cage geometry — wireframe structure around the glowing tip.
  const tipCageGeom = useMemo(() => {
    if (style === "crystalline") {
      return new THREE.IcosahedronGeometry(0.09, 0);
    }
    if (style === "ornate" || style === "elegant") {
      return new THREE.OctahedronGeometry(0.08, 0);
    }
    return null;
  }, [style]);

  // Pommel geometry — style-specific.
  const pommelGeom = useMemo(() => {
    switch (style) {
      case "crystalline":
        return new THREE.OctahedronGeometry(0.14, 0);
      case "feral":
        return new THREE.DodecahedronGeometry(0.13, 0);
      case "elegant":
        return new THREE.SphereGeometry(0.12, 32, 32);
      case "ornate":
        return new THREE.IcosahedronGeometry(0.13, 1);
      case "gnarled":
        return new THREE.DodecahedronGeometry(0.15, 0);
      default:
        return new THREE.SphereGeometry(0.13, 24, 24);
    }
  }, [style]);

  // Handle carving rings — extra decorative rings on the grip.
  const handleDecoRings = useMemo(() => {
    const count = style === "ornate" ? 6 : style === "elegant" ? 5 : 3;
    const spacing = L * 0.11 / (count + 1);
    return Array.from({ length: count }, (_, i) => -L * 0.055 + spacing * (i + 1));
  }, [style, L]);

  return (
    <group ref={group} rotation={[0, 0, 0.1]}>
      {/* Shaft */}
      <mesh geometry={shaftGeom} castShadow>
        <meshStandardMaterial
          color={wood.color}
          roughness={wood.roughness}
          metalness={cfg.shaftMetalness}
          envMapIntensity={1.2}
          flatShading={style === "crystalline"}
        />
      </mesh>

      {/* Glowing inner core */}
      <mesh geometry={coreGeom}>
        <meshStandardMaterial
          ref={coreMatRef}
          color={core.color}
          emissive={core.emissive}
          emissiveIntensity={core.intensity}
          toneMapped={false}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Spiralling core veins */}
      {veinGeoms.map((geom, i) => (
        <mesh key={`vein-${i}`} geometry={geom}>
          <meshStandardMaterial
            color={core.color}
            emissive={core.emissive}
            emissiveIntensity={core.intensity * 0.6}
            toneMapped={false}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}

      {/* Handle group */}
      <group position={[0, handleY - L * 0.09, 0]}>
        {/* Grip */}
        <mesh castShadow>
          <cylinderGeometry
            args={[cfg.gripTopR, cfg.gripBotR, L * 0.11, cfg.gripSegments]}
          />
          <meshStandardMaterial
            color={wood.accent}
            roughness={0.7}
            metalness={cfg.gripMetalness}
            envMapIntensity={0.9}
          />
        </mesh>

        {/* Decorative carving rings on grip */}
        {handleDecoRings.map((y, i) => (
          <mesh key={`deco-${i}`} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[cfg.gripTopR * 0.95 + 0.005, 0.004, 8, 32]} />
            <meshStandardMaterial
              color={wood.accent}
              roughness={0.5}
              metalness={0.6}
              envMapIntensity={0.8}
            />
          </mesh>
        ))}

        {/* Accent rings — tinted by house color */}
        {cfg.ringYs.map((y, i) => (
          <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[cfg.gripTopR + 0.01, 0.009, 14, 36]} />
            <meshStandardMaterial
              ref={(el) => { ringMatRefs.current[i] = el; }}
              color={houseColor}
              emissive={houseColor}
              emissiveIntensity={0.9}
              metalness={0.9}
              roughness={0.25}
              toneMapped={false}
            />
          </mesh>
        ))}

        {/* Style-specific handle ornaments */}
        {style === "feral" &&
          [0, 1, 2, 3, 4].map((i) => {
            const a = (i / 5) * Math.PI * 2;
            return (
              <mesh
                key={i}
                position={[
                  Math.cos(a) * (cfg.gripBotR + 0.02),
                  -L * 0.04,
                  Math.sin(a) * (cfg.gripBotR + 0.02),
                ]}
                rotation={[Math.PI / 2, 0, -a]}
              >
                <coneGeometry args={[0.03, 0.1, 6]} />
                <meshStandardMaterial
                  color={wood.accent}
                  roughness={0.35}
                  metalness={0.7}
                  envMapIntensity={1.0}
                />
              </mesh>
            );
          })}

        {style === "ornate" &&
          [0, 1, 2, 3, 4, 5].map((i) => {
            const a = (i / 6) * Math.PI * 2;
            return (
              <mesh
                key={i}
                position={[
                  Math.cos(a) * (cfg.gripBotR + 0.001),
                  0,
                  Math.sin(a) * (cfg.gripBotR + 0.001),
                ]}
                rotation={[0, -a, 0]}
              >
                <boxGeometry args={[0.022, L * 0.09, 0.005]} />
                <meshStandardMaterial
                  color={houseColor}
                  emissive={houseColor}
                  emissiveIntensity={0.5}
                  metalness={0.85}
                  roughness={0.3}
                />
              </mesh>
            );
          })}

        {/* Feral style — claw marks on grip */}
        {style === "feral" &&
          [0, 1, 2].map((i) => {
            const a = (i / 3) * Math.PI * 2 + 0.3;
            return (
              <mesh
                key={`claw-${i}`}
                position={[
                  Math.cos(a) * (cfg.gripTopR - 0.01),
                  L * 0.015,
                  Math.sin(a) * (cfg.gripTopR - 0.01),
                ]}
                rotation={[0, -a, Math.PI * 0.08]}
              >
                <boxGeometry args={[0.006, L * 0.07, 0.002]} />
                <meshStandardMaterial
                  color="#1a0a05"
                  roughness={0.9}
                  metalness={0.1}
                />
              </mesh>
            );
          })}

        {/* Pommel */}
        <mesh position={[0, -L * 0.062, 0]} geometry={pommelGeom}>
          <meshStandardMaterial
            color={wood.accent}
            metalness={0.75}
            roughness={0.3}
            envMapIntensity={1.1}
          />
        </mesh>

        {/* Pommel accent gem */}
        <mesh position={[0, -L * 0.062, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial
            color={houseColor}
            emissive={houseColor}
            emissiveIntensity={1.2}
            metalness={0.3}
            roughness={0.2}
            toneMapped={false}
            transparent
            opacity={0.85}
          />
        </mesh>
      </group>

      {/* Tip / focus stone */}
      <mesh position={tipPos}>
        <sphereGeometry args={[style === "crystalline" ? 0.06 : 0.05, 20, 20]} />
        <meshStandardMaterial
          ref={tipMatRef}
          color={core.color}
          emissive={core.emissive}
          emissiveIntensity={3.5}
          metalness={style === "crystalline" ? 0.5 : 0.3}
          roughness={0.15}
          toneMapped={false}
        />
      </mesh>

      {/* Tip cage — wireframe structure */}
      {tipCageGeom && (
        <mesh position={tipPos}>
          <primitive object={tipCageGeom} attach="geometry" />
          <meshStandardMaterial
            color={wood.accent}
            metalness={0.8}
            roughness={0.3}
            wireframe
            transparent
            opacity={0.6}
            envMapIntensity={1.5}
          />
        </mesh>
      )}

      {/* Outer glow sphere at tip */}
      <mesh position={tipPos}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color={core.emissive}
          emissive={core.emissive}
          emissiveIntensity={0.8}
          toneMapped={false}
          transparent
          opacity={0.15}
          depthWrite={false}
        />
      </mesh>

      {/* Tip glow light */}
      <TipGlow position={tipPos} color={core.emissive} intensity={2.5} />

      {/* Primary aura sparkles */}
      <Sparkles
        count={80}
        scale={[0.7, L * 1.3, 0.7]}
        size={3.5}
        speed={0.6}
        color={core.emissive}
        opacity={0.8}
      />

      {/* Ambient dust around the wand */}
      <Sparkles
        count={30}
        scale={[2.5, L * 2.0, 2.5]}
        size={1.5}
        speed={0.15}
        color="#d4af37"
        opacity={0.3}
      />
    </group>
  );
}

/** Per-style silhouette parameters. */
function styleConfig(style: WandStyle, _L: number, _bend: number) {
  const base = {
    baseRadius: 0.09,
    tipRadius: 0.018,
    shaftMetalness: 0.15,
    gripTopR: 0.12,
    gripBotR: 0.14,
    gripSegments: 24,
    gripMetalness: 0.25,
    ringYs: [0.03, -0.03] as number[],
    radiusMod: (_t: number) => 1,
  };
  switch (style) {
    case "elegant":
      return {
        ...base,
        baseRadius: 0.08,
        tipRadius: 0.012,
        shaftMetalness: 0.35,
        gripTopR: 0.1,
        gripBotR: 0.11,
        gripSegments: 32,
        gripMetalness: 0.6,
        ringYs: [0.02, -0.005, -0.03],
      };
    case "gnarled":
      return {
        ...base,
        baseRadius: 0.11,
        tipRadius: 0.022,
        gripTopR: 0.14,
        gripBotR: 0.17,
        gripSegments: 12,
        radiusMod: (t: number) =>
          1 + 0.22 * Math.sin(t * Math.PI * 10) + 0.1 * Math.sin(t * Math.PI * 27),
      };
    case "ornate":
      return {
        ...base,
        baseRadius: 0.09,
        tipRadius: 0.014,
        shaftMetalness: 0.4,
        gripTopR: 0.13,
        gripBotR: 0.15,
        gripMetalness: 0.6,
        ringYs: [0.04, 0.01, -0.02, -0.04],
      };
    case "crystalline":
      return {
        ...base,
        baseRadius: 0.075,
        tipRadius: 0.02,
        shaftMetalness: 0.5,
        gripTopR: 0.09,
        gripBotR: 0.11,
        gripSegments: 6,
        gripMetalness: 0.75,
        ringYs: [0],
        radiusMod: (t: number) => 1 + 0.08 * Math.sin(t * Math.PI * 6),
      };
    case "feral":
      return {
        ...base,
        baseRadius: 0.1,
        tipRadius: 0.02,
        gripTopR: 0.13,
        gripBotR: 0.16,
        gripSegments: 20,
        gripMetalness: 0.45,
        ringYs: [0.035],
        radiusMod: (t: number) =>
          1 + 0.1 * Math.max(0, Math.sin(t * Math.PI * 14)),
      };
    case "classic":
    default:
      return base;
  }
}

/**
 * Compute a dark background color from house color.
 * Mix the house hue at very low lightness for atmosphere.
 */
function darkBgFromHouse(houseColor: string): string {
  try {
    const c = new THREE.Color(houseColor);
    const hsl = { h: 0, s: 0, l: 0 };
    c.getHSL(hsl);
    // Very dark, slightly tinted.
    c.setHSL(hsl.h, hsl.s * 0.35, 0.04);
    return `#${c.getHexString()}`;
  } catch {
    return "#0a0a12";
  }
}

export function WandCanvas({
  woodId = "dab",
  coreId = "pioro_feniksa",
  flexId = "umiarkowana",
  length,
  houseColor = "#e8b53a",
  className,
}: Props) {
  const style = pickWandStyle(woodId, coreId);
  const bgColor = darkBgFromHouse(houseColor);

  return (
    <div className={className ?? "w-full h-full"} style={{ position: "relative" }}>
      {/* Vignette overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          borderRadius: "inherit",
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />
      <Canvas
        camera={{ position: [0, 0, 3.4], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
        style={{ borderRadius: "inherit" }}
      >
        <SceneBg color={bgColor} />
        <fog attach="fog" args={[bgColor, 4, 10]} />

        {/* Dramatic lighting */}
        <ambientLight intensity={0.18} />
        <directionalLight position={[3, 4, 5]} intensity={1.2} color="#fff5e0" />
        <directionalLight position={[-3, 2, -4]} intensity={0.5} color={houseColor} />
        {/* Rim light from behind */}
        <directionalLight position={[0, -1, -5]} intensity={0.7} color="#aab8ff" />
        <pointLight position={[-2, -2, 2]} intensity={0.8} color={houseColor} distance={8} />
        {/* Under-glow */}
        <pointLight position={[0, -3, 0]} intensity={0.4} color={houseColor} distance={5} />

        <Suspense fallback={null}>
          <Environment preset="night" />
          <Wand
            woodId={woodId}
            coreId={coreId}
            flexId={flexId}
            length={length}
            houseColor={houseColor}
            style={style}
          />
        </Suspense>

        {/* Post-processing bloom for magical glow */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.6}
            luminanceSmoothing={0.5}
            intensity={1.2}
            mipmapBlur
          />
        </EffectComposer>

        <OrbitControls
          enablePan={false}
          minDistance={2}
          maxDistance={6}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
}
