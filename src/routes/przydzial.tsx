import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { HOUSES, type House } from "@/data/wandlore";
import { createWizard } from "@/lib/wizard-store";
import { useMagicAudio } from "@/components/AudioProvider";

export const Route = createFileRoute("/przydzial")({
  head: () => ({
    meta: [
      { title: "Ceremonia Przydziału — Wszechnica Aeternum" },
      {
        name: "description",
        content:
          "Wybierz swój Dom i podaj personalia. Ceremonia Przydziału Wszechnicy Magii Aeternum.",
      },
    ],
  }),
  component: PrzydzialPage,
});

const RASY = [
  "Człowiek",
  "Elf",
  "Półelf",
  "Gnom",
  "Krasnolud",
  "Centaur",
  "Wila",
  "Wilkołak",
  "Półolbrzym",
  "Inna",
] as const;

function PrzydzialPage() {
  const [step, setStep] = useState<0 | 1>(0);
  const [house, setHouse] = useState<House | null>(null);
  const [imie, setImie] = useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [rasa, setRasa] = useState<string>("Człowiek");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { sparkle, resonance } = useMagicAudio();
  const navigate = useNavigate();

  const chooseHouse = (h: House) => {
    sparkle();
    setHouse(h);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!house) return;
    if (!imie.trim() || !nazwisko.trim()) {
      setError("Podaj imię i nazwisko.");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      resonance();
      await createWizard({
        imie: imie.trim(),
        nazwisko: nazwisko.trim(),
        rasa,
        dom: house.name,
      });
      navigate({ to: "/kreator" });
    } catch (err) {
      console.error(err);
      setError("Nie udało się zapisać. Spróbuj ponownie.");
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <div className="text-center mb-10 animate-fade-up">
        <p className="font-display uppercase tracking-[0.4em] text-xs text-primary/80">
          Ceremonia Przydziału
        </p>
        <h1 className="mt-2 font-display text-3xl sm:text-5xl gold-gradient-text text-glow">
          {step === 0 ? "Wybierz swój Dom" : `Witaj w Domu ${house?.name}`}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
          {step === 0
            ? "To Ty wybierasz Dom — a Dom wybiera Cię z powrotem. Kliknij herb, który do Ciebie mówi."
            : "Podpisz się w Księdze Adeptów, a potem wyruszymy do warsztatu różdżkarza."}
        </p>
      </div>

      {step === 0 && (
        <>
          <div className="grid gap-5 md:grid-cols-3">
            {HOUSES.map((h) => {
              const selected = house?.id === h.id;
              return (
                <button
                  key={h.id}
                  onClick={() => chooseHouse(h)}
                  className={`glass-card glass-card-hover animate-scale-in rounded-2xl p-6 text-left relative overflow-hidden transition-all ${
                    selected
                      ? "ring-2 ring-offset-2 ring-offset-background scale-[1.02]"
                      : "opacity-90 hover:opacity-100"
                  }`}
                  style={
                    selected
                      ? ({ "--tw-ring-color": h.color } as React.CSSProperties)
                      : undefined
                  }
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-50"
                    style={{
                      background: `radial-gradient(ellipse 70% 60% at 50% 0%, ${h.color}55, transparent 70%)`,
                    }}
                  />
                  <div className="relative flex flex-col items-center text-center">
                    <img
                      src={h.crestUrl}
                      alt={`Herb Domu ${h.name}`}
                      className="h-32 w-32 object-contain animate-glow-pulse"
                      style={{ filter: `drop-shadow(0 0 24px ${h.color}aa)` }}
                    />
                    <p className="mt-4 text-sm font-semibold italic text-foreground/80">
                      „{h.motto}"
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                      {h.cechy.map((c) => (
                        <span
                          key={c}
                          className="text-[10px] uppercase tracking-wider rounded-full border px-2 py-0.5"
                          style={{
                            borderColor: `${h.color}66`,
                            color: h.color,
                            backgroundColor: `${h.color}11`,
                          }}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              disabled={!house}
              onClick={() => house && setStep(1)}
              className="rounded-lg bg-gradient-to-b from-primary-glow via-primary to-primary/80 text-primary-foreground px-8 py-3 text-sm font-semibold uppercase tracking-widest shadow-[0_0_36px_-6px_var(--primary-glow)] hover:shadow-[0_0_60px_-4px_var(--primary-glow)] transition-shadow disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {house ? `Wstąp do Domu ${house.name}` : "Wybierz Dom, by kontynuować"}
            </button>
          </div>
        </>
      )}

      {step === 1 && house && (
        <form
          onSubmit={submit}
          className="glass-card animate-fade-up rounded-3xl max-w-xl mx-auto p-8 sm:p-10 relative overflow-hidden"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${house.color}55, transparent 70%)`,
            }}
          />
          <div className="relative">
            <div className="flex items-center gap-4">
              <img
                src={house.crestUrl}
                alt=""
                className="h-16 w-16 object-contain animate-glow-pulse"
                style={{ filter: `drop-shadow(0 0 16px ${house.color}aa)` }}
              />
              <div>
                <p
                  className="font-display text-xl"
                  style={{ color: house.color }}
                >
                  Dom {house.name}
                </p>
                <p className="text-xs italic text-foreground/70">
                  „{house.motto}"
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <Field label="Imię" id="input-imie">
                <input
                  id="input-imie"
                  value={imie}
                  onChange={(e) => setImie(e.target.value)}
                  maxLength={40}
                  required
                  aria-invalid={!!error}
                  className="w-full rounded-lg bg-background/60 border border-primary/25 px-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  placeholder="np. Alina"
                />
              </Field>
              <Field label="Nazwisko" id="input-nazwisko">
                <input
                  id="input-nazwisko"
                  value={nazwisko}
                  onChange={(e) => setNazwisko(e.target.value)}
                  maxLength={60}
                  required
                  aria-invalid={!!error}
                  className="w-full rounded-lg bg-background/60 border border-primary/25 px-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  placeholder="np. Verhelst"
                />
              </Field>
              <Field label="Rasa" id="input-rasa">
                <select
                  id="input-rasa"
                  value={rasa}
                  onChange={(e) => setRasa(e.target.value)}
                  aria-invalid={!!error}
                  className="w-full rounded-lg bg-background/60 border border-primary/25 px-3 py-2 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                >
                  {RASY.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            {error && (
              <p className="mt-4 text-sm text-destructive text-center">{error}</p>
            )}

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => setStep(0)}
                className="rounded-lg border border-primary/25 px-5 py-2.5 text-sm text-foreground/80 hover:border-primary/60 hover:bg-primary/5 transition"
              >
                ← Zmień Dom
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="rounded-lg bg-gradient-to-b from-primary-glow via-primary to-primary/80 text-primary-foreground px-8 py-2.5 text-sm font-semibold uppercase tracking-widest shadow-[0_0_36px_-6px_var(--primary-glow)] hover:shadow-[0_0_60px_-4px_var(--primary-glow)] transition-shadow disabled:opacity-60"
              >
                {submitting ? "Zapisywanie…" : "Do warsztatu różdżkarza →"}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div className="block">
      <label htmlFor={id} className="block text-[10px] uppercase tracking-widest text-primary/80">
        {label}
      </label>
      <div className="mt-1">{children}</div>
    </div>
  );
}
