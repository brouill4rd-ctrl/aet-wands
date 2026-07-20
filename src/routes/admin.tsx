import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAdmin } from "@/components/AdminProvider";
import {
  fetchAllOverrides,
  deleteOverride,
  type ContentOverride,
} from "@/lib/content-store";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Panel Admina — Aeternum" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPanel,
});

const SECTION_LABELS: Record<string, string> = {
  drewna: "🌳 Drewna",
  rdzenie: "✨ Rdzenie",
  elastycznosci: "〰️ Elastyczności",
  domy: "🏠 Domy",
  homepage: "🏰 Strona główna",
};

function AdminPanel() {
  const { isAdmin } = useAdmin();
  const [overrides, setOverrides] = useState<ContentOverride[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    const data = await fetchAllOverrides();
    setOverrides(data);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  if (!isAdmin) {
    return (
      <div className="mx-auto max-w-xl px-4 py-20 text-center">
        <p className="font-display text-2xl gold-gradient-text">
          Brak dostępu
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Zaloguj się jako administrator, aby uzyskać dostęp do panelu.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-lg border border-primary/25 px-6 py-3 text-sm text-foreground/80 hover:border-primary/60 hover:bg-primary/5 transition"
        >
          Powrót na stronę główną
        </Link>
      </div>
    );
  }

  const grouped = overrides.reduce(
    (acc, o) => {
      if (!acc[o.section]) acc[o.section] = [];
      acc[o.section].push(o);
      return acc;
    },
    {} as Record<string, ContentOverride[]>,
  );

  const handleDelete = async (o: ContentOverride) => {
    setDeleting(o.id);
    await deleteOverride(o.section, o.item_key, o.field);
    setOverrides((prev) => prev.filter((x) => x.id !== o.id));
    setDeleting(null);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
      <div className="text-center mb-8 animate-fade-up">
        <p className="font-display uppercase tracking-[0.4em] text-xs text-amber-400/80">
          Administracja
        </p>
        <h1 className="mt-2 font-display text-3xl sm:text-5xl gold-gradient-text text-glow">
          Panel Admina
        </h1>
        <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
          Przegląd wszystkich edytowanych treści. Przywróć domyślne wartości lub przejdź
          na stronę, aby edytować inline.
        </p>
      </div>

      {/* Quick links */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <QuickLink to="/" label="Strona główna" />
        <QuickLink to="/encyklopedia" label="Encyklopedia" />
        <QuickLink to="/przydzial" label="Przydział" />
      </div>

      {/* Stats */}
      <div className="glass-card rounded-2xl p-6 mb-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <StatBox label="Nadpisania" value={overrides.length} />
        <StatBox label="Sekcje" value={Object.keys(grouped).length} />
        <StatBox
          label="Drewna"
          value={grouped["drewna"]?.length ?? 0}
        />
        <StatBox
          label="Rdzenie"
          value={grouped["rdzenie"]?.length ?? 0}
        />
      </div>

      {loading ? (
        <div className="text-center py-12 text-sm text-muted-foreground">
          Ładowanie nadpisań…
        </div>
      ) : overrides.length === 0 ? (
        <div className="glass-card rounded-2xl p-10 text-center">
          <p className="font-display text-xl gold-gradient-text">
            Brak nadpisań
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Włącz tryb edycji (ikona ołówka w nawigacji) i kliknij na dowolny tekst na stronie,
            aby go zmienić.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(grouped)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([section, items]) => (
              <div key={section} className="glass-card rounded-2xl p-6">
                <h2 className="font-display text-lg gold-gradient-text mb-4">
                  {SECTION_LABELS[section] ?? section}
                </h2>
                <div className="space-y-3">
                  {items.map((o) => (
                    <div
                      key={o.id}
                      className="rounded-xl bg-background/40 border border-primary/10 p-4 flex flex-col sm:flex-row sm:items-start gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[10px] uppercase tracking-widest text-amber-400/80 font-semibold">
                            {o.item_key}
                          </span>
                          <span className="text-[10px] text-muted-foreground">
                            •
                          </span>
                          <span className="text-[10px] uppercase tracking-widest text-primary/60">
                            {o.field}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-foreground/80 break-words line-clamp-3">
                          {o.value}
                        </p>
                        <p className="mt-1 text-[10px] text-muted-foreground">
                          Zmieniono: {new Date(o.updated_at).toLocaleString("pl-PL")}
                        </p>
                      </div>
                      <button
                        onClick={() => handleDelete(o)}
                        disabled={deleting === o.id}
                        className="shrink-0 rounded-lg border border-red-500/25 px-3 py-1.5 text-[10px] uppercase tracking-widest text-red-400 hover:bg-red-500/10 hover:border-red-500/50 transition disabled:opacity-50"
                      >
                        {deleting === o.id ? "…" : "Przywróć domyślne"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <button
          onClick={load}
          className="rounded-lg border border-primary/25 px-5 py-2 text-sm text-foreground/80 hover:border-primary/60 hover:bg-primary/5 transition"
        >
          Odśwież listę
        </button>
      </div>
    </div>
  );
}

function QuickLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="rounded-lg border border-amber-500/25 px-4 py-2 text-xs uppercase tracking-widest text-amber-400/80 hover:bg-amber-500/10 hover:border-amber-500/50 transition"
    >
      {label} →
    </Link>
  );
}

function StatBox({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <p className="text-2xl font-display gold-gradient-text">{value}</p>
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
        {label}
      </p>
    </div>
  );
}
