import type { StatKey } from "@/data/wandlore";

const LABELS: Partial<Record<StatKey, string>> = {
  moc: "Moc",
  lojalnosc: "Lojalność",
  inteligencja: "Inteligencja",
};

export function MiniStats({
  stats,
  keys = ["moc", "lojalnosc", "inteligencja"],
}: {
  stats: Record<string, number>;
  keys?: StatKey[];
}) {
  return (
    <div className="mt-3 space-y-1.5">
      {keys.map((k) => {
        const v = Math.max(0, Math.min(10, stats[k] ?? 0));
        const pct = (v / 10) * 100;
        return (
          <div key={k} className="text-[11px]">
            <div className="flex items-center justify-between">
              <span className="uppercase tracking-wider text-muted-foreground">
                {LABELS[k] ?? k}
              </span>
              <span className="tabular-nums text-primary/90">{v}/10</span>
            </div>
            <div className="mt-0.5 h-1.5 rounded-full bg-primary/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary/70 via-primary to-primary-glow"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
