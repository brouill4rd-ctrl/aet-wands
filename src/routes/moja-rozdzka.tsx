import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { getMyWizard, clearWizard, type WizardRow } from "@/lib/wizard-store";
import { HOUSES, WOODS, CORES, FLEXIBILITIES } from "@/data/wandlore";
import { WandCanvasClient } from "@/components/WandCanvasClient";
import { CertificateButton } from "@/components/CertificateButton";
import crest from "@/assets/AetCrest1.png";

export const Route = createFileRoute("/moja-rozdzka")({
  head: () => ({
    meta: [
      { title: "Moja różdżka — Wszechnica Aeternum" },
      {
        name: "description",
        content: "Twój zapisany wpis w Księdze Adeptów Wszechnicy Aeternum.",
      },
    ],
  }),
  component: MojaRozdzka,
});

function MojaRozdzka() {
  const [w, setW] = useState<WizardRow | null | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const row = await getMyWizard();
      setW(row);
    })();
  }, []);

  const house = useMemo(
    () => (w ? HOUSES.find((h) => h.name === w.dom) : null),
    [w],
  );

  const wood = useMemo(
    () => (w?.drewno ? WOODS.find((x) => x.nazwa === w.drewno) : undefined),
    [w],
  );
  const core = useMemo(
    () => (w?.rdzen ? CORES.find((x) => x.nazwa === w.rdzen) : undefined),
    [w],
  );
  const flex = useMemo(
    () =>
      w?.elastycznosc
        ? FLEXIBILITIES.find((x) => x.nazwa === w.elastycznosc)
        : undefined,
    [w],
  );

  if (w === undefined) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center text-sm text-muted-foreground">
        Otwieranie Księgi Adeptów…
      </div>
    );
  }

  if (!w) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <p className="font-display text-2xl gold-gradient-text">
          Nie znaleziono Twojego wpisu
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Wygląda na to, że nie przeszedłeś jeszcze Ceremonii Przydziału.
        </p>
        <Link
          to="/przydzial"
          className="mt-6 inline-block rounded-lg bg-gradient-to-b from-primary-glow via-primary to-primary/80 text-primary-foreground px-7 py-3 text-sm font-semibold uppercase tracking-widest shadow-[0_0_36px_-6px_var(--primary-glow)]"
        >
          Rozpocznij Ceremonię
        </Link>
      </div>
    );
  }

  if (!house) return null;
  const hasWand = wood && core && flex && w.dlugosc;

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10 space-y-8">
      <div
        className="glass-card rounded-3xl p-6 sm:p-10 relative overflow-hidden text-center"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 60% at 50% 0%, ${house.color}44, transparent 70%)`,
        }}
      >
        <div className="relative flex flex-col items-center">
          <img
            src={house.crestUrl}
            alt=""
            className="h-32 w-32 object-contain animate-glow-pulse"
            style={{ filter: `drop-shadow(0 0 22px ${house.color}aa)` }}
          />
          <p className="mt-4 font-display uppercase tracking-widest text-xs text-primary/80">
            Wpis w Księdze Adeptów
          </p>
          <h1 className="mt-1 font-display text-3xl sm:text-5xl gold-gradient-text text-glow">
            {w.imie} {w.nazwisko}
          </h1>
          <p className="mt-1 text-sm text-foreground/80">
            {w.rasa} • Dom{" "}
            <span style={{ color: house.color }}>{house.name}</span>
          </p>
        </div>
      </div>

      {hasWand ? (
        <>
          <section className="glass-card rounded-3xl p-4 sm:p-6">
            <div className="aspect-[16/9] min-h-[360px]">
              <WandCanvasClient
                woodId={wood!.id}
                coreId={core!.id}
                flexId={flex!.id}
                length={Number(w.dlugosc)}
                houseColor={house.color}
              />
            </div>
          </section>
          <section className="glass-card rounded-3xl p-6 sm:p-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <Field label="Drewno" value={w.drewno!} />
            <Field label="Rdzeń" value={w.rdzen!} />
            <Field label="Elastyczność" value={w.elastycznosc!} />
            <Field label="Długość" value={`${Number(w.dlugosc).toFixed(2)}"`} />
          </section>
          <div className="flex flex-wrap justify-center gap-3">
            <CertificateButton
              data={{
                imie: w.imie,
                nazwisko: w.nazwisko,
                rasa: w.rasa,
                dom: house.name,
                drewno: w.drewno!,
                rdzen: w.rdzen!,
                dlugosc: Number(w.dlugosc),
                elastycznosc: w.elastycznosc!,
                wlasciwoscSpecjalna: w.wlasciwosc_specjalna ?? "Nieznana",
                houseColor: house.color,
                houseCrestUrl: house.crestUrl,
                schoolCrestUrl: crest,
              }}
            />
            <Link
              to="/kreator"
              className="rounded-lg border border-primary/25 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-foreground/85 hover:border-primary/60 hover:bg-primary/5 transition"
            >
              Ukuj nową różdżkę
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Nie utkałeś jeszcze różdżki. Wróć do warsztatu.
          </p>
          <Link
            to="/kreator"
            className="mt-4 inline-block rounded-lg bg-gradient-to-b from-primary-glow via-primary to-primary/80 text-primary-foreground px-7 py-3 text-sm font-semibold uppercase tracking-widest shadow-[0_0_36px_-6px_var(--primary-glow)]"
          >
            Do warsztatu
          </Link>
        </div>
      )}

      <div className="text-center">
        <button
          onClick={() => {
            clearWizard();
            navigate({ to: "/przydzial" });
          }}
          className="text-[11px] uppercase tracking-widest text-muted-foreground hover:text-destructive transition"
        >
          Rozpocznij Ceremonię od nowa
        </button>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-primary/80">
        {label}
      </p>
      <p className="mt-1 font-display text-lg gold-gradient-text">{value}</p>
    </div>
  );
}
