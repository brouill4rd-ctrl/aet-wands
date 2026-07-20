import { useEffect, useMemo, useState, lazy, Suspense } from "react";
import { useNavigate } from "@tanstack/react-router";
import { MaterialCard } from "./MaterialCard";
import { SearchBar } from "./SearchBar";
import { Stepper } from "./Stepper";
import { WandResult } from "./WandResult";
import { useMagicAudio } from "./AudioProvider";
const WandCanvasClient = lazy(() => import("./WandCanvasClient").then((m) => ({ default: m.WandCanvasClient })));
import {
  WOODS,
  CORES,
  FLEXIBILITIES,
  HOUSES,
  type Material,
  type Flex,
  type House,
} from "@/data/wandlore";
import { getMyWizard, updateWandSpec, type WizardRow } from "@/lib/wizard-store";

type State = {
  wood: Material | null;
  core: Material | null;
  flex: Flex | null;
  dlugosc: number;
};

function filterMats(items: Material[], q: string): Material[] {
  const s = q.trim().toLowerCase();
  if (!s) return items;
  return items.filter(
    (m) =>
      m.nazwa.toLowerCase().includes(s) ||
      m.angielska.toLowerCase().includes(s) ||
      m.tagi.some((t) => t.nazwa.toLowerCase().includes(s)),
  );
}

function filterFlex(items: Flex[], q: string): Flex[] {
  const s = q.trim().toLowerCase();
  if (!s) return items;
  return items.filter(
    (f) =>
      f.nazwa.toLowerCase().includes(s) ||
      f.angielska.toLowerCase().includes(s) ||
      f.idealnyWlasciciel.toLowerCase().includes(s),
  );
}

export function KreatorFlow() {
  const [wizard, setWizard] = useState<WizardRow | null>(null);
  const [loadingWizard, setLoadingWizard] = useState(true);
  const [step, setStep] = useState(0);
  const [state, setState] = useState<State>({
    wood: null,
    core: null,
    flex: null,
    dlugosc: 12,
  });
  const [query, setQuery] = useState("");
  const [selectingId, setSelectingId] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const { sparkle, resonance } = useMagicAudio();
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    (async () => {
      const w = await getMyWizard();
      if (!mounted) return;
      if (!w) {
        navigate({ to: "/przydzial" });
        return;
      }
      setWizard(w);
      setLoadingWizard(false);
    })();
    return () => {
      mounted = false;
    };
  }, [navigate]);

  const house: House | null = useMemo(() => {
    if (!wizard) return null;
    return HOUSES.find((h) => h.name === wizard.dom) ?? null;
  }, [wizard]);

  const goto = (s: number) => {
    setQuery("");
    setSelectingId(null);
    setStep(s);
  };

  const pick = <K extends keyof State>(key: K, val: State[K], id: string) => {
    sparkle();
    setSelectingId(id);
    setState((s) => ({ ...s, [key]: val }));
    setTimeout(() => goto(step + 1), 550);
  };

  const finalize = async () => {
    if (!wizard || !state.wood || !state.core || !state.flex) return;
    resonance();
    const wlasciwosc =
      state.core.tagi[0]?.nazwa
        ?.replace(/_/g, " ")
        .replace(/^./, (c) => c.toUpperCase()) ?? "Nieznana";
    try {
      const updated = await updateWandSpec(wizard.id, {
        drewno: state.wood.nazwa,
        rdzen: state.core.nazwa,
        elastycznosc: state.flex.nazwa,
        dlugosc: state.dlugosc,
        wlasciwosc_specjalna: wlasciwosc,
      });
      setWizard(updated);
    } catch (e) {
      console.error(e);
    }
    setShowResult(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const reset = () => {
    setState({ wood: null, core: null, flex: null, dlugosc: 12 });
    setStep(0);
    setShowResult(false);
    setQuery("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredWoods = useMemo(() => filterMats(WOODS, query), [query]);
  const filteredCores = useMemo(() => filterMats(CORES, query), [query]);
  const filteredFlex = useMemo(() => filterFlex(FLEXIBILITIES, query), [query]);

  if (loadingWizard || !wizard || !house) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center text-sm text-muted-foreground">
        Otwieranie księgi adeptów…
      </div>
    );
  }

  if (showResult && state.wood && state.core && state.flex) {
    return (
      <WandResult
        wood={state.wood}
        core={state.core}
        flex={state.flex}
        dlugosc={state.dlugosc}
        wizard={wizard}
        house={house}
        onReset={reset}
      />
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      <div className="text-center mb-6 animate-fade-up">
        <p className="font-display uppercase tracking-[0.4em] text-xs text-primary/80">
          Warsztat różdżkarza
        </p>
        <h1 className="mt-2 font-display text-3xl sm:text-5xl gold-gradient-text text-glow">
          {wizard.imie}, uczyń swoją różdżkę
        </h1>
        <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
          Dom <span style={{ color: house.color }}>{house.name}</span> — cztery kroki: drewno, rdzeń, elastyczność, długość. Model 3D reaguje na każdy wybór.
        </p>
      </div>

      <Stepper step={step} />

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div>
          {step < 3 && (
            <div className="mb-6 max-w-xl">
              <SearchBar
                value={query}
                onChange={setQuery}
                placeholder={
                  step === 0
                    ? "Szukaj drewna (np. dąb, ostrokrzew, potęga)…"
                    : step === 1
                      ? "Szukaj rdzenia (np. smok, jednorożec, lojalność)…"
                      : "Szukaj elastyczności (np. sprężysta)…"
                }
              />
            </div>
          )}

          {step === 0 && (
            <Grid>
              {filteredWoods.map((w) => (
                <MaterialCard
                  key={w.id}
                  item={w}
                  section="drewna"
                  selected={selectingId === w.id || state.wood?.id === w.id}
                  onClick={() => pick("wood", w, w.id)}
                />
              ))}
            </Grid>
          )}

          {step === 1 && (
            <Grid>
              {filteredCores.map((c) => (
                <MaterialCard
                  key={c.id}
                  item={c}
                  section="rdzenie"
                  selected={selectingId === c.id || state.core?.id === c.id}
                  onClick={() => pick("core", c, c.id)}
                />
              ))}
            </Grid>
          )}

          {step === 2 && (
            <Grid>
              {filteredFlex.map((f) => (
                <MaterialCard
                  key={f.id}
                  item={f}
                  showStats={false}
                  section="elastycznosci"
                  selected={selectingId === f.id || state.flex?.id === f.id}
                  onClick={() => pick("flex", f, f.id)}
                />
              ))}
            </Grid>
          )}

          {step === 3 && (
            <div className="glass-card animate-fade-up rounded-3xl p-8 sm:p-10 text-center">
              <p className="font-display uppercase tracking-widest text-xs text-primary/80">
                Krok 4
              </p>
              <h2 className="mt-1 font-display text-3xl sm:text-4xl gold-gradient-text">
                Długość różdżki
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Idealna różdżka pasuje do sylwetki jej czarodzieja. Wybierz mądrze.
              </p>

              <div className="mt-10">
                <div className="text-6xl sm:text-7xl font-display gold-gradient-text tabular-nums text-glow">
                  {state.dlugosc.toFixed(2)}
                  <span className="text-2xl align-top ml-1 text-primary/60">
                    cala
                  </span>
                </div>
              </div>

              <input
                type="range"
                min={9}
                max={15}
                step={0.25}
                value={state.dlugosc}
                onChange={(e) =>
                  setState((s) => ({ ...s, dlugosc: parseFloat(e.target.value) }))
                }
                className="w-full mt-8 accent-primary"
                aria-label="Długość różdżki w calach"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2 px-1">
                <span>9"</span>
                <span>12"</span>
                <span>15"</span>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => goto(2)}
                  className="rounded-lg border border-primary/25 px-5 py-2.5 text-sm text-foreground/80 hover:border-primary/60 hover:bg-primary/5 transition"
                >
                  ← Wstecz
                </button>
                <button
                  onClick={finalize}
                  className="rounded-lg bg-gradient-to-b from-primary-glow via-primary to-primary/80 text-primary-foreground px-8 py-2.5 text-sm font-semibold uppercase tracking-widest shadow-[0_0_36px_-6px_var(--primary-glow)] hover:shadow-[0_0_60px_-4px_var(--primary-glow)] transition-shadow"
                >
                  Ukuj różdżkę
                </button>
              </div>
            </div>
          )}

          {step > 0 && step < 3 && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => goto(step - 1)}
                className="rounded-lg border border-primary/25 px-5 py-2 text-sm text-foreground/80 hover:border-primary/60 hover:bg-primary/5 transition"
              >
                ← Wstecz
              </button>
            </div>
          )}
        </div>

        {/* Live 3D preview */}
        <aside className="lg:sticky lg:top-24 h-fit">
          <div
            className="rounded-3xl relative overflow-hidden"
            style={{
              background: `radial-gradient(ellipse 80% 60% at 50% 30%, ${house.color}1a, #0a0a12 70%), #0a0a12`,
              border: `1px solid ${house.color}22`,
              boxShadow: `0 0 40px -15px ${house.color}44, inset 0 1px 0 ${house.color}15`,
            }}
          >
            <p className="relative font-display uppercase tracking-widest text-[10px] text-primary/80 text-center pt-4">
              Podgląd 3D — obracaj myszą
            </p>
            <div className="relative mt-2 aspect-[4/5] sm:aspect-[3/4] w-full max-h-[55vh] sm:max-h-none sm:min-h-[360px]">
              <Suspense fallback={<div className="w-full h-full min-h-[250px] sm:min-h-[360px] grid place-items-center text-xs text-muted-foreground">Przygotowywanie warsztatu 3D...</div>}>
                <WandCanvasClient
                  woodId={state.wood?.id}
                  coreId={state.core?.id}
                  flexId={state.flex?.id}
                  length={state.dlugosc}
                  houseColor={house.color}
                />
              </Suspense>
            </div>
            <div className="relative mt-3 pb-4 px-4 grid grid-cols-2 gap-2 text-[11px] text-foreground/80">
              <MiniSpec label="Drewno" value={state.wood?.nazwa ?? "—"} />
              <MiniSpec label="Rdzeń" value={state.core?.nazwa ?? "—"} />
              <MiniSpec label="Elast." value={state.flex?.nazwa ?? "—"} />
              <MiniSpec label="Długość" value={`${state.dlugosc.toFixed(2)}"`} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function MiniSpec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-primary/15 bg-background/40 px-2 py-1.5">
      <p className="text-[9px] uppercase tracking-widest text-primary/70">
        {label}
      </p>
      <p className="mt-0.5 truncate text-foreground/90">{value}</p>
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
  );
}
