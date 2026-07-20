import type { House } from "@/data/wandlore";
import { STAT_LABELS } from "@/data/wandlore";
import { EditableText } from "./EditableText";

export function HouseCard({
  house,
  featured = false,
}: {
  house: House;
  featured?: boolean;
}) {
  return (
    <article
      className="glass-card glass-card-hover animate-scale-in rounded-2xl p-6 relative overflow-hidden"
      style={
        {
          "--house-glow": house.color,
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 0%, ${house.color}44, transparent 70%)`,
        }}
      />
      <div className="relative flex flex-col items-center text-center">
        <div
          className="relative"
          style={{
            filter: `drop-shadow(0 0 24px ${house.color}88)`,
          }}
        >
          <img
            src={house.crestUrl}
            alt={`Herb Domu ${house.name}`}
            className={`${featured ? "h-40 w-40" : "h-32 w-32"} object-contain animate-glow-pulse`}
          />
        </div>
        <h3 className="mt-3 font-display text-2xl gold-gradient-text">
          Dom {house.name}
        </h3>
        <p className="mt-1 text-xs italic text-foreground/70">
          „<EditableText
            section="domy"
            itemKey={house.id}
            field="motto"
            defaultValue={house.motto}
          />"
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-1.5">
          {house.cechy.map((c) => (
            <span
              key={c}
              className="text-[10px] uppercase tracking-wider rounded-full border px-2 py-0.5"
              style={{
                borderColor: `${house.color}66`,
                color: house.color,
                backgroundColor: `${house.color}11`,
              }}
            >
              {c}
            </span>
          ))}
        </div>
        <div className="mt-4 text-sm text-foreground/80 max-w-sm">
          <EditableText
            section="domy"
            itemKey={house.id}
            field="flavor"
            defaultValue={house.flavor}
            as="p"
            className="text-sm text-foreground/80"
          />
        </div>
        <dl className="mt-4 space-y-1.5 text-xs text-foreground/70 text-left w-full">
          <div>
            <dt className="inline uppercase tracking-widest text-primary/80 text-[10px] mr-1.5">
              Dominujące staty:
            </dt>
            <dd className="inline">
              {house.dominujaceStaty.map((s) => STAT_LABELS[s]).join(", ")}
            </dd>
          </div>
          <div>
            <dt className="inline uppercase tracking-widest text-primary/80 text-[10px] mr-1.5">
              Powinowactwo:
            </dt>
            <dd className="inline">{house.tagAffinity.slice(0, 5).join(", ")}</dd>
          </div>
          <div>
            <dt className="inline uppercase tracking-widest text-primary/80 text-[10px] mr-1.5">
              Słynni absolwenci:
            </dt>
            <dd className="inline">{house.slynniAbsolwenci.join(", ")}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
