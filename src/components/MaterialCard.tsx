import { useState } from "react";
import type { Material, Flex } from "@/data/wandlore";
import { MiniStats } from "./StatBar";
import { EditableText } from "./EditableText";
import { useAdmin } from "./AdminProvider";

type Props = {
  item: Material | Flex;
  selected?: boolean;
  onClick?: () => void;
  showStats?: boolean;
  extendedLore?: boolean;
  /** Section identifier for content overrides: 'drewna' | 'rdzenie' | 'elastycznosci' */
  section?: string;
};

function isMaterial(item: Material | Flex): item is Material {
  return "statystyki" in item;
}

function getSectionForItem(item: Material | Flex): string {
  if (!isMaterial(item)) return "elastycznosci";
  // Distinguish woods from cores by checking if the item has antySpecjalizacja
  // (cores always have it, even if empty array, while woods might not)
  if ("antySpecjalizacja" in item) return "rdzenie";
  return "drewna";
}

export function MaterialCard({
  item,
  selected,
  onClick,
  showStats = true,
  extendedLore = false,
  section: sectionProp,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const mat = isMaterial(item) ? item : null;
  const { editMode, getValue } = useAdmin();
  const section = sectionProp ?? getSectionForItem(item);

  const tags = mat
    ? mat.tagi.slice(0, 5).map((t) => t.nazwa)
    : (item as Flex).idealnyWlasciciel
      ? [(item as Flex).idealnyWlasciciel]
      : [];

  // In edit mode, get potentially overridden values
  const displayOpis = editMode
    ? getValue(section, item.id, "opis", item.opis)
    : getValue(section, item.id, "opis", item.opis);

  const isClickable = !!onClick;

  return (
    <div
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onClick={onClick}
      className={`glass-card glass-card-hover animate-scale-in text-left rounded-2xl p-5 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
        selected
          ? "ring-2 ring-primary/80 -translate-y-1 shadow-[0_0_50px_-10px_var(--primary-glow)]"
          : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-display text-xl gold-gradient-text truncate">
            {item.nazwa}
          </h3>
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
            {item.angielska}
          </p>
        </div>
      </div>

      <div className={`mt-3 transition-all duration-300 ${isExpanded ? "" : "h-[5.75rem]"}`}>
        <EditableText
          section={section}
          itemKey={item.id}
          field="opis"
          defaultValue={item.opis}
          multiline
          as="p"
          className={`text-sm text-foreground/80 leading-relaxed text-justify ${isExpanded ? "" : "line-clamp-4"}`}
        />
      </div>

      {displayOpis.length > 180 && (
        <div className="mt-1 flex justify-end">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="text-xs font-medium text-primary/70 hover:text-primary transition-colors underline-offset-4 hover:underline"
          >
            {isExpanded ? "Zwiń" : "Zobacz więcej"}
          </button>
        </div>
      )}

      {tags.length > 0 && mat && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-wider rounded-full border border-primary/25 bg-primary/5 text-primary/90 px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {mat && showStats && <MiniStats stats={mat.statystyki} />}

      {extendedLore && mat && (
        <div className="mt-4 space-y-1.5 text-xs text-foreground/70">
          {mat.idealnyWlasciciel && (
            <p>
              <span className="uppercase tracking-widest text-primary/80 text-[10px] mr-1.5">
                Idealny właściciel:
              </span>
              <EditableText
                section={section}
                itemKey={item.id}
                field="idealnyWlasciciel"
                defaultValue={mat.idealnyWlasciciel}
              />
            </p>
          )}
          {mat.znanyPrzyklad && (
            <p>
              <span className="uppercase tracking-widest text-primary/80 text-[10px] mr-1.5">
                Znany właściciel:
              </span>
              <EditableText
                section={section}
                itemKey={item.id}
                field="znanyPrzyklad"
                defaultValue={mat.znanyPrzyklad}
              />
            </p>
          )}
          {mat.specjalizacja?.length > 0 && (
            <p>
              <span className="uppercase tracking-widest text-primary/80 text-[10px] mr-1.5">
                Specjalizacja:
              </span>
              {mat.specjalizacja.slice(0, 3).join(", ")}
            </p>
          )}
        </div>
      )}

      {extendedLore && !mat && (
        <div className="mt-4 text-xs text-foreground/70">
          <p>
            <span className="uppercase tracking-widest text-primary/80 text-[10px] mr-1.5">
              Idealny właściciel:
            </span>
            <EditableText
              section="elastycznosci"
              itemKey={item.id}
              field="idealnyWlasciciel"
              defaultValue={(item as Flex).idealnyWlasciciel}
            />
          </p>
        </div>
      )}
    </div>
  );
}
