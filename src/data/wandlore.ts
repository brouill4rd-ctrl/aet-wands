// Adapter around the canonical Aeternum wandlore data.
// Real data lives in ./drewna.js, ./rdzenie.js, ./elastycznosci.js (JS modules).

// @ts-expect-error - JS module, no types
import { bazaDrewien } from "./drewna.js";
// @ts-expect-error - JS module, no types
import { bazaRdzeni } from "./rdzenie.js";
// @ts-expect-error - JS module, no types
import { bazaElastycznosci } from "./elastycznosci.js";

import lycamoor from "@/assets/Lycamoor.png";
import melirgon from "@/assets/Melirgon.png";
import sophinus from "@/assets/Sophinus.png";

export type StatKey =
  | "moc"
  | "lojalnosc"
  | "stabilnosc"
  | "adaptacja"
  | "inteligencja"
  | "kreatywnosc"
  | "odwaga"
  | "dyscyplina"
  | "ambicja"
  | "moralnosc";

export type Statystyki = Record<StatKey, number>;

export type Tag = { nazwa: string; waga: number };

export type Material = {
  id: string;
  nazwa: string;
  angielska: string;
  opis: string;
  statystyki: Statystyki;
  tagi: Tag[];
  specjalizacja: string[];
  antySpecjalizacja?: string[];
  idealnyWlasciciel?: string;
  znanyPrzyklad: string | null;
};

export type Flex = {
  id: string;
  nazwa: string;
  angielska: string;
  opis: string;
  modyfikatory: Partial<Statystyki>;
  idealnyWlasciciel: string;
};

function adaptMaterial(id: string, raw: Record<string, unknown>): Material {
  const r = raw as {
    nazwa: string;
    angielska: string;
    opis: string;
    statystyki: Statystyki;
    tagi: Tag[];
    specjalizacja?: string[];
    antySpecjalizacja?: string[];
    idealnyWlasciciel?: string;
    znanyPrzyklad: string | null;
  };
  return {
    id,
    nazwa: r.nazwa,
    angielska: r.angielska,
    opis: r.opis,
    statystyki: r.statystyki,
    tagi: r.tagi ?? [],
    specjalizacja: r.specjalizacja ?? [],
    antySpecjalizacja: r.antySpecjalizacja,
    idealnyWlasciciel: r.idealnyWlasciciel,
    znanyPrzyklad: r.znanyPrzyklad ?? null,
  };
}

function adaptFlex(id: string, raw: Record<string, unknown>): Flex {
  const r = raw as {
    nazwa: string;
    angielska: string;
    opis: string;
    modyfikatory: Partial<Statystyki>;
    idealnyWlasciciel: string;
  };
  return {
    id,
    nazwa: r.nazwa,
    angielska: r.angielska,
    opis: r.opis,
    modyfikatory: r.modyfikatory ?? {},
    idealnyWlasciciel: r.idealnyWlasciciel,
  };
}

export const WOODS: Material[] = Object.entries(
  bazaDrewien as Record<string, Record<string, unknown>>,
).map(([k, v]) => adaptMaterial(k, v));

export const CORES: Material[] = Object.entries(
  bazaRdzeni as Record<string, Record<string, unknown>>,
).map(([k, v]) => adaptMaterial(k, v));

export const FLEXIBILITIES: Flex[] = Object.entries(
  bazaElastycznosci as Record<string, Record<string, unknown>>,
).map(([k, v]) => adaptFlex(k, v));

// ---------- Houses ----------

export type House = {
  id: "lycamoor" | "melirgon" | "sophinus";
  name: string;
  motto: string;
  cechy: string[];
  dominujaceStaty: StatKey[];
  tagAffinity: string[];
  slynniAbsolwenci: string[];
  crestUrl: string;
  accentVar: string;
  color: string;
  flavor: string;
};

export const HOUSES: House[] = [
  {
    id: "lycamoor",
    name: "Lycamoor",
    motto: "Płomień, który nie zna zawahania",
    cechy: ["Odwaga", "Ambicja", "Instynkt", "Ogień"],
    dominujaceStaty: ["moc", "odwaga", "ambicja"],
    tagAffinity: ["potega", "walka", "ogien", "odwaga", "ambicja", "dominacja", "mrok"],
    slynniAbsolwenci: ["Ignis Vardan", "Morena Wolf", "Kastor Ashfell"],
    crestUrl: lycamoor,
    accentVar: "var(--color-house-lycamoor)",
    color: "#e2723a",
    flavor: "Wilk płomienia — dla tych, których magia płonie od pierwszego zaklęcia.",
  },
  {
    id: "melirgon",
    name: "Melirgon",
    motto: "Wierność słodsza niż miód",
    cechy: ["Lojalność", "Uzdrawianie", "Wspólnota", "Cierpliwość"],
    dominujaceStaty: ["lojalnosc", "stabilnosc", "moralnosc"],
    tagAffinity: [
      "lojalnosc",
      "harmonia",
      "uzdrawianie",
      "ochrona",
      "pomocnosc",
      "wiernosc",
      "czystosc",
      "empatia",
    ],
    slynniAbsolwenci: ["Aurelia Mielikka", "Bardan Honeywise", "Serafina Amber"],
    crestUrl: melirgon,
    accentVar: "var(--color-house-melirgon)",
    color: "#e8b53a",
    flavor: "Pszczoła bursztynu — serce, które trzyma cały ul razem.",
  },
  {
    id: "sophinus",
    name: "Sophinus",
    motto: "W gwiazdach wypisana jest prawda",
    cechy: ["Mądrość", "Wróżbiarstwo", "Cierpliwość", "Głębia"],
    dominujaceStaty: ["inteligencja", "dyscyplina", "kreatywnosc"],
    tagAffinity: [
      "inteligencja",
      "analiza",
      "precyzja",
      "kontrola",
      "wiedza",
      "wrozbiarstwo",
      "magia_niewerbalna",
      "spokoj",
    ],
    slynniAbsolwenci: ["Celestyn Nautilus", "Vera Tidewhisper", "Iris Marlowe"],
    crestUrl: sophinus,
    accentVar: "var(--color-house-sophinus)",
    color: "#3ab8d6",
    flavor: "Delfin gwiazd — umysł, który słyszy szept głębin nocnego nieba.",
  },
];

// ---------- Compatibility & house affinity ----------

export const STAT_LABELS: Record<StatKey, string> = {
  moc: "Moc",
  lojalnosc: "Lojalność",
  stabilnosc: "Stabilność",
  adaptacja: "Adaptacja",
  inteligencja: "Inteligencja",
  kreatywnosc: "Kreatywność",
  odwaga: "Odwaga",
  dyscyplina: "Dyscyplina",
  ambicja: "Ambicja",
  moralnosc: "Moralność",
};

export function combineStats(wood: Material, core: Material, flex: Flex): Statystyki {
  const keys = Object.keys(STAT_LABELS) as StatKey[];
  const out = {} as Statystyki;
  for (const k of keys) {
    const base = ((wood.statystyki[k] ?? 0) + (core.statystyki[k] ?? 0)) / 2;
    const mod = flex.modyfikatory[k] ?? 0;
    out[k] = Math.max(-5, Math.min(10, base + mod));
  }
  return out;
}

export type CompatibilityResult = {
  percent: number;
  sharedTags: string[];
  verdict: "harmonijna" | "przyzwoita" | "napieta" | "chaotyczna";
};

export function compatibility(
  wood: Material,
  core: Material,
  flex: Flex,
): CompatibilityResult {
  // Shared tag score (weighted)
  const coreMap = new Map<string, number>();
  for (const t of core.tagi) coreMap.set(t.nazwa, t.waga);
  const shared: { nazwa: string; waga: number }[] = [];
  let tagScore = 0;
  for (const t of wood.tagi) {
    const cw = coreMap.get(t.nazwa);
    if (cw) {
      const w = Math.min(t.waga, cw);
      tagScore += w;
      shared.push({ nazwa: t.nazwa, waga: w });
    }
  }
  // stat alignment: closer stats => higher score
  const keys = Object.keys(STAT_LABELS) as StatKey[];
  let statScore = 0;
  for (const k of keys) {
    const diff = Math.abs((wood.statystyki[k] ?? 0) - (core.statystyki[k] ?? 0));
    statScore += 10 - diff; // max 10 per stat
  }
  // normalize statScore (max 100)
  const statPct = Math.max(0, Math.min(100, statScore));

  // flex bonus: reward positive net modifiers
  const flexNet = Object.values(flex.modyfikatory).reduce(
    (a, b) => (a ?? 0) + (b ?? 0),
    0,
  ) as number;
  const flexBonus = Math.max(-6, Math.min(10, flexNet));

  const raw = 30 + tagScore * 2.2 + statPct * 0.55 + flexBonus * 1.2;
  const percent = Math.max(2, Math.min(99, Math.round(raw)));

  let verdict: CompatibilityResult["verdict"] = "przyzwoita";
  if (percent >= 80) verdict = "harmonijna";
  else if (percent >= 55) verdict = "przyzwoita";
  else if (percent >= 35) verdict = "napieta";
  else verdict = "chaotyczna";

  return {
    percent,
    sharedTags: shared
      .sort((a, b) => b.waga - a.waga)
      .slice(0, 6)
      .map((t) => t.nazwa),
    verdict,
  };
}

export function houseAffinity(
  wood: Material,
  core: Material,
  flex: Flex,
): { house: House; score: number } {
  const combined = combineStats(wood, core, flex);
  const allTags = new Set<string>([
    ...wood.tagi.map((t) => t.nazwa),
    ...core.tagi.map((t) => t.nazwa),
  ]);
  const scored = HOUSES.map((h) => {
    const statScore = h.dominujaceStaty.reduce((a, k) => a + (combined[k] ?? 0), 0);
    const tagScore = h.tagAffinity.reduce(
      (a, t) => a + (allTags.has(t) ? 4 : 0),
      0,
    );
    return { house: h, score: statScore * 1.4 + tagScore };
  }).sort((a, b) => b.score - a.score);
  return scored[0];
}

// ---------- Ailan Tahi-style prose ----------

export function ailanTahiDescription(
  wood: Material,
  core: Material,
  flex: Flex,
  dlugosc: number,
  compat: CompatibilityResult,
): string {
  const opener = [
    `Ciekawe połączenie. Z jednej strony ${wood.nazwa.toLowerCase()}, bardzo pamiętliwe drewno. Z drugiej ${core.nazwa.toLowerCase()}, materiał, który nie wybacza pośpiechu.`,
    `Spójrzmy... ${wood.nazwa.toLowerCase()} i ${core.nazwa.toLowerCase()}. Oba te materiały czekały w mojej pracowni na kogoś o konkretnym charakterze.`,
    `Trzymasz w dłoni ${wood.nazwa.toLowerCase()}, a wewnątrz kryje się ${core.nazwa.toLowerCase()}. To drewno opadło z drzewa we właściwym czasie i czekało na ten rdzeń.`,
  ][Math.floor((wood.nazwa.length + core.nazwa.length) % 3)];

  const body =
    compat.verdict === "harmonijna"
      ? `Pasują do siebie. Ta różdżka ma ${dlugosc.toFixed(2)} cala, a jej natura jest ${flex.nazwa.toLowerCase()}. Nie będzie stawiać oporu, szybko się zgracie, jeśli tylko zaufasz swojemu instynktowi.`
      : compat.verdict === "przyzwoita"
        ? `To dobre, rzemieślnicze połączenie. Mierzy ${dlugosc.toFixed(2)} cala i jest ${flex.nazwa.toLowerCase()}. Nie odda ci pełni swoich możliwości od razu, ale cierpliwość zawsze popłaca.`
        : compat.verdict === "napieta"
          ? `Trudne drewno i niespokojny rdzeń. ${flex.nazwa} elastyczność i długość ${dlugosc.toFixed(2)} cala sprawiają, że różdżka ma swój własny, oporny charakter. Musisz pokazać jej, kto tu rządzi, ale z szacunkiem.`
          : `Zaskakujący wybór. Czuję wyraźne napięcie między drewnem a rdzeniem. Jest ${flex.nazwa.toLowerCase()} i ma ${dlugosc.toFixed(2)} cala. Będzie wymagała od ciebie żelaznej dyscypliny. W przeciwnym razie to ona zacznie kontrolować ciebie.`;

  const tagLine = compat.sharedTags.length
    ? `Współdzielą jednak pewną cechę: ${compat.sharedTags.slice(0, 3).join(", ")}.`
    : `Brak tu wyraźnych punktów styku, musisz być ich łącznikiem.`;

  const idealOwner = wood.idealnyWlasciciel 
    ? wood.idealnyWlasciciel.charAt(0).toUpperCase() + wood.idealnyWlasciciel.slice(1)
    : "";

  const closer =
    idealOwner.length
      ? `Mówi się, że takie drewno rozkwita w dłoniach kogoś takiego: ${idealOwner.toLowerCase()}. Ale pamiętaj... to drewno pamięta, a rdzeń czuje. Decyzję zawsze podejmuje jednak dłoń.`
      : `Pamiętaj — magia nie rodzi się z samej siły rdzenia. Rdzeń to tylko narzędzie, które przypomina ci, kim naprawdę jesteś.`;

  return `${opener} ${body} ${tagLine} ${closer} Ja nie tworzę różdżek. Ja po prostu pomagam im odnaleźć właściwe dłonie.`;
}
