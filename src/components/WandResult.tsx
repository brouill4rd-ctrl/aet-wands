import { useEffect, useState, lazy, Suspense } from "react";
import type { Material, Flex, House } from "@/data/wandlore";
import { compatibility, ailanTahiDescription } from "@/data/wandlore";
import { RadarChart } from "./RadarChart";
import { DiscordButton } from "./DiscordButton";
const WandCanvasClient = lazy(() => import("./WandCanvasClient").then(m => ({ default: m.WandCanvasClient })));
import { CertificateButton } from "./CertificateButton";
import type { WizardRow } from "@/lib/wizard-store";
import crest from "@/assets/AetCrest1.png";

export function WandResult({
  wood,
  core,
  flex,
  dlugosc,
  wizard,
  house,
  onReset,
}: {
  wood: Material;
  core: Material;
  flex: Flex;
  dlugosc: number;
  wizard: WizardRow;
  house: House;
  onReset: () => void;
}) {
  const compat = compatibility(wood, core, flex);
  const description = ailanTahiDescription(wood, core, flex, dlugosc, compat);
  const wlasciwosc =
    core.tagi[0]?.nazwa
      ?.replace(/_/g, " ")
      .replace(/^./, (c) => c.toUpperCase()) ?? "Nieznana";

  const barColor =
    compat.percent >= 75
      ? "var(--color-success)"
      : compat.percent >= 40
        ? "var(--color-warning)"
        : "var(--color-destructive)";

  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(compat.percent), 200);
    return () => clearTimeout(t);
  }, [compat.percent]);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 space-y-8 animate-fade-up">
      <div className="text-center">
        <p className="font-display uppercase tracking-[0.4em] text-xs text-primary/80">
          Ceremonia zakończona
        </p>
        <h1 className="mt-2 font-display text-4xl sm:text-6xl gold-gradient-text text-glow">
          Twoja różdżka
        </h1>
        <p className="mt-2 text-sm text-foreground/80">
          {wizard.imie} {wizard.nazwisko} — Dom{" "}
          <span style={{ color: house.color }}>{house.name}</span>
        </p>
      </div>

      {/* 3D showcase */}
      <section
        className="rounded-3xl relative overflow-hidden"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 30%, ${house.color}22, #0a0a12 70%), #0a0a12`,
          border: `1px solid ${house.color}33`,
          boxShadow: `0 0 60px -20px ${house.color}55, 0 0 120px -40px ${house.color}22, inset 0 1px 0 ${house.color}22`,
          animation: "wand-showcase-breathe 4s ease-in-out infinite",
        }}
      >
        <style>{`
          @keyframes wand-showcase-breathe {
            0%, 100% { box-shadow: 0 0 60px -20px ${house.color}55, 0 0 120px -40px ${house.color}22, inset 0 1px 0 ${house.color}22; }
            50% { box-shadow: 0 0 80px -15px ${house.color}77, 0 0 160px -30px ${house.color}33, inset 0 1px 0 ${house.color}33; }
          }
        `}</style>
        <div className="aspect-[4/3] sm:aspect-[16/9] w-full sm:min-h-[440px] max-h-[60vh] sm:max-h-none">
          <Suspense fallback={<div className="w-full h-full min-h-[280px] sm:min-h-[440px] grid place-items-center text-xs text-muted-foreground bg-[#0a0a12] rounded-3xl">Przygotowywanie widoku 3D...</div>}>
            <WandCanvasClient
              woodId={wood.id}
              coreId={core.id}
              flexId={flex.id}
              length={dlugosc}
              houseColor={house.color}
            />
          </Suspense>
        </div>
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            Obracaj myszą · Scroll = zoom
          </p>
        </div>
      </section>

      {/* Spec */}
      <section className="glass-card rounded-3xl p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Spec label="Drewno" value={wood.nazwa} sub={wood.angielska} />
          <Spec label="Rdzeń" value={core.nazwa} sub={core.angielska} />
          <Spec label="Elastyczność" value={flex.nazwa} sub={flex.angielska} />
          <Spec label="Długość" value={`${dlugosc.toFixed(2)} cala`} sub="~inch" />
        </div>
      </section>

      {/* Compatibility */}
      <section className="glass-card rounded-3xl p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <p className="font-display uppercase tracking-widest text-xs text-primary/80">
              Kompatybilność
            </p>
            <h2 className="mt-1 font-display text-2xl text-foreground">
              {compat.verdict === "harmonijna"
                ? "Harmonijna więź"
                : compat.verdict === "przyzwoita"
                  ? "Solidne przymierze"
                  : compat.verdict === "napieta"
                    ? "Napięta relacja"
                    : "Chaotyczne zaklęcie"}
            </h2>
          </div>
          <div
            className="font-display text-5xl tabular-nums"
            style={{ color: barColor, textShadow: `0 0 24px ${barColor}` }}
          >
            {compat.percent}%
          </div>
        </div>
        <div className="mt-4 h-3 rounded-full bg-primary/10 overflow-hidden">
          <div
            className="h-full rounded-full transition-[width] duration-[1600ms] ease-out"
            style={{
              width: `${width}%`,
              background: `linear-gradient(90deg, ${barColor}, color-mix(in oklab, ${barColor} 60%, white))`,
              boxShadow: `0 0 24px ${barColor}`,
            }}
          />
        </div>
        {compat.sharedTags.length > 0 && (
          <p className="mt-3 text-xs text-muted-foreground">
            <span className="uppercase tracking-widest text-primary/70 mr-1">
              Wspólne motywy:
            </span>
            {compat.sharedTags.join(", ")}
          </p>
        )}
      </section>

      {/* Description */}
      <section 
        className="rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl transform rotate-[-1deg] mx-2 my-6"
        style={{
          background: "radial-gradient(circle at center, #fcf4e3 0%, #ecd6ad 100%)",
          color: "#2c1c0c",
          boxShadow: "inset 0 0 30px rgba(100, 60, 20, 0.15), 0 10px 40px rgba(0,0,0,0.4)"
        }}
      >
        <div 
          className="absolute inset-0 pointer-events-none opacity-25" 
          style={{ 
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%22 height=%22100%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')", 
            mixBlendMode: "multiply" 
          }} 
        />
        <p className="font-display uppercase tracking-widest text-xs opacity-60 mb-4 border-b border-[#2c1c0c]/15 pb-3 relative z-10">
          Z notatnika Mistrza Tahiego
        </p>
        <blockquote 
          className="leading-relaxed relative z-10"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "1.75rem",
            fontWeight: 500,
          }}
        >
          "{description}"
        </blockquote>
      </section>

      {/* Radar */}
      <section className="glass-card rounded-3xl p-6 sm:p-8">
        <p className="font-display uppercase tracking-widest text-xs text-primary/80 text-center">
          Charakter materiałów
        </p>
        <div className="mt-4">
          <RadarChart wood={wood} core={core} />
        </div>
      </section>

      {/* Certificate */}
      <section
        className="glass-card rounded-3xl p-6 sm:p-10 relative overflow-hidden"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 60% at 50% 0%, ${house.color}33, transparent 70%)`,
        }}
      >
        <div className="relative flex flex-col items-center text-center">
          <img
            src={house.crestUrl}
            alt={`Herb Domu ${house.name}`}
            className="h-24 w-24 object-contain animate-glow-pulse"
            style={{ filter: `drop-shadow(0 0 22px ${house.color}aa)` }}
          />
          <p className="mt-4 font-display uppercase tracking-widest text-xs text-primary/80">
            Certyfikat Mistrza Tahiego
          </p>
          <h3 className="mt-1 font-display text-2xl sm:text-3xl gold-gradient-text">
            Odbierz swój dokument
          </h3>
          <p className="mt-2 text-sm text-foreground/80 max-w-md">
            Pobierz oficjalny certyfikat posiadania różdżki — z Twoim imieniem, Domem i pełną specyfikacją.
          </p>
          <div className="mt-6">
            <CertificateButton
              data={{
                imie: wizard.imie,
                nazwisko: wizard.nazwisko,
                rasa: wizard.rasa,
                dom: house.name,
                drewno: wood.nazwa,
                rdzen: core.nazwa,
                dlugosc,
                elastycznosc: flex.nazwa,
                wlasciwoscSpecjalna: wlasciwosc,
                houseColor: house.color,
                houseCrestUrl: house.crestUrl,
                schoolCrestUrl: crest,
              }}
            />
          </div>
        </div>
      </section>

      {/* Discord + reset */}
      <section className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col items-center gap-4 text-center">
        <p className="font-display uppercase tracking-widest text-xs text-primary/80">
          Zabierz różdżkę do Wielkiej Sali
        </p>
        <p className="text-sm text-muted-foreground max-w-md">
          Skopiuj magiczny kod i wpisz komendę{" "}
          <code className="text-primary/90">/odbierz_rozdzke</code> na naszym Discordzie.
        </p>
        <DiscordButton
          payload={{
            wlasciciel: `${wizard.imie} ${wizard.nazwisko}`,
            dom: house.name,
            drewno: wood.nazwa,
            rdzen: core.nazwa,
            elastycznosc: flex.nazwa,
            dlugosc: dlugosc.toFixed(2),
          }}
        />
        <button
          onClick={onReset}
          className="mt-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition"
        >
          Ukuj kolejną różdżkę
        </button>
      </section>
    </div>
  );
}

function Spec({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="text-center sm:text-left">
      <p className="text-[10px] uppercase tracking-widest text-primary/80">
        {label}
      </p>
      <p className="mt-1 font-display text-xl sm:text-2xl gold-gradient-text truncate">
        {value}
      </p>
      <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
        {sub}
      </p>
    </div>
  );
}
