import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MaterialCard } from "@/components/MaterialCard";
import { HouseCard } from "@/components/HouseCard";
import { SearchBar } from "@/components/SearchBar";
import { EditableText } from "@/components/EditableText";
import {
  WOODS,
  CORES,
  FLEXIBILITIES,
  HOUSES,
  type Material,
  type Flex,
} from "@/data/wandlore";

export const Route = createFileRoute("/encyklopedia")({
  head: () => ({
    meta: [
      { title: "Encyklopedia Wandlore — Aeternum" },
      {
        name: "description",
        content:
          "Encyklopedia wandlore Wszechnicy Aeternum: drewna, rdzenie, elastyczności i Domy.",
      },
      { property: "og:title", content: "Encyklopedia Wandlore — Aeternum" },
      {
        property: "og:description",
        content: "Kompendium drewien, rdzeni, elastyczności i Domów Wszechnicy.",
      },
    ],
  }),
  component: Encyklopedia,
});

type Tab = "drewna" | "rdzenie" | "elastycznosc" | "domy";

const TABS: { id: Tab; label: string }[] = [
  { id: "drewna", label: "Drewna" },
  { id: "rdzenie", label: "Rdzenie" },
  { id: "elastycznosc", label: "Elastyczności" },
  { id: "domy", label: "Domy" },
];

function filterMats(items: Material[], q: string): Material[] {
  const s = q.trim().toLowerCase();
  if (!s) return items;
  return items.filter(
    (m) =>
      m.nazwa.toLowerCase().includes(s) ||
      m.angielska.toLowerCase().includes(s) ||
      m.tagi.some((t) => t.nazwa.toLowerCase().includes(s)) ||
      (m.znanyPrzyklad ?? "").toLowerCase().includes(s),
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

function Encyklopedia() {
  const [tab, setTab] = useState<Tab>("drewna");
  const [q, setQ] = useState("");

  const woods = useMemo(() => filterMats(WOODS, q), [q]);
  const cores = useMemo(() => filterMats(CORES, q), [q]);
  const flex = useMemo(() => filterFlex(FLEXIBILITIES, q), [q]);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <div className="text-center mb-8 animate-fade-up">
        <p className="font-display uppercase tracking-[0.4em] text-xs text-primary/80">
          <EditableText
            section="encyklopedia"
            itemKey="header"
            field="subtitle"
            defaultValue="Wandlore"
          />
        </p>
        <h1 className="mt-2 font-display text-3xl sm:text-5xl gold-gradient-text text-glow">
          <EditableText
            section="encyklopedia"
            itemKey="header"
            field="title"
            defaultValue="Encyklopedia"
          />
        </h1>
        <div className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
          <EditableText
            section="encyklopedia"
            itemKey="header"
            field="description"
            defaultValue="Wszystko, co adept powinien wiedzieć o materiałach różdżkowych."
            as="p"
            className="text-sm text-muted-foreground"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => {
              setTab(t.id);
              setQ("");
            }}
            className={`rounded-full px-4 py-1.5 text-xs uppercase tracking-widest transition ${
              tab === t.id
                ? "bg-primary text-primary-foreground shadow-[0_0_24px_-4px_var(--primary-glow)]"
                : "border border-primary/25 text-foreground/80 hover:border-primary/60 hover:bg-primary/5"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab !== "domy" && (
        <div className="mb-6 max-w-xl mx-auto">
          <SearchBar value={q} onChange={setQ} />
        </div>
      )}

      {tab === "drewna" && (
        <Grid>
          {woods.map((w) => (
            <MaterialCard key={w.id} item={w} extendedLore section="drewna" />
          ))}
        </Grid>
      )}
      {tab === "rdzenie" && (
        <Grid>
          {cores.map((c) => (
            <MaterialCard key={c.id} item={c} extendedLore section="rdzenie" />
          ))}
        </Grid>
      )}
      {tab === "elastycznosc" && (
        <Grid>
          {flex.map((f) => (
            <MaterialCard key={f.id} item={f} extendedLore showStats={false} section="elastycznosci" />
          ))}
        </Grid>
      )}
      {tab === "domy" && (
        <Grid>
          {HOUSES.map((h) => (
            <HouseCard key={h.id} house={h} featured />
          ))}
        </Grid>
      )}
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  );
}
