import type { Material, StatKey } from "@/data/wandlore";
import { STAT_LABELS } from "@/data/wandlore";

const AXES: StatKey[] = [
  "moc",
  "lojalnosc",
  "stabilnosc",
  "inteligencja",
  "kreatywnosc",
  "odwaga",
];

export function RadarChart({
  wood,
  core,
}: {
  wood: Material;
  core: Material;
}) {
  const size = 320;
  const cx = size / 2;
  const cy = size / 2;
  const R = size * 0.38;
  const n = AXES.length;

  const pointFor = (i: number, v: number) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const r = (Math.max(0, Math.min(10, v)) / 10) * R;
    return [cx + Math.cos(angle) * r, cy + Math.sin(angle) * r] as const;
  };

  const gridRings = [0.25, 0.5, 0.75, 1];
  const axisEnd = (i: number) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    return [cx + Math.cos(angle) * R, cy + Math.sin(angle) * R] as const;
  };

  const polyPoints = (mat: Material) =>
    AXES.map((k, i) => pointFor(i, mat.statystyki[k] ?? 0).join(","))
      .join(" ");

  return (
    <div className="w-full max-w-md mx-auto">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-auto animate-fade-up">
        {/* rings */}
        {gridRings.map((s, i) => (
          <polygon
            key={i}
            points={AXES.map((_, j) => {
              const angle = (Math.PI * 2 * j) / n - Math.PI / 2;
              return `${cx + Math.cos(angle) * R * s},${cy + Math.sin(angle) * R * s}`;
            }).join(" ")}
            fill="none"
            stroke="currentColor"
            className="text-primary/15"
          />
        ))}
        {/* axes */}
        {AXES.map((k, i) => {
          const [ex, ey] = axisEnd(i);
          const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
          const lx = cx + Math.cos(angle) * (R + 22);
          const ly = cy + Math.sin(angle) * (R + 22);
          return (
            <g key={k}>
              <line
                x1={cx}
                y1={cy}
                x2={ex}
                y2={ey}
                stroke="currentColor"
                className="text-primary/15"
              />
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-muted-foreground"
                style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase" }}
              >
                {STAT_LABELS[k]}
              </text>
            </g>
          );
        })}
        {/* wood polygon */}
        <polygon
          points={polyPoints(wood)}
          fill="rgba(212, 175, 55, 0.18)"
          stroke="#d4af37"
          strokeWidth={1.5}
        />
        {/* core polygon */}
        <polygon
          points={polyPoints(core)}
          fill="rgba(124, 58, 237, 0.18)"
          stroke="#a78bfa"
          strokeWidth={1.5}
        />
      </svg>
      <div className="mt-3 flex items-center justify-center gap-5 text-xs">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-sm bg-primary" /> Drewno: {wood.nazwa}
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-sm bg-accent" /> Rdzeń: {core.nazwa}
        </span>
      </div>
    </div>
  );
}
