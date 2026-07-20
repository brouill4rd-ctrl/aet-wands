// Six procedural wand styles. A concrete style is picked from the
// combination of wood + core tags. Each style is rendered by WandCanvas
// as a set of Three.js primitives — no GLB assets required today, but the
// picker output ("elegant" | "gnarled" | ...) is stable so it can be
// swapped for real GLB models later without touching call sites.

export type WandStyle =
  | "elegant"
  | "gnarled"
  | "ornate"
  | "crystalline"
  | "feral"
  | "classic";

export const WAND_STYLES: Record<WandStyle, { label: string; blurb: string }> = {
  elegant: { label: "Dostojna", blurb: "Smukła, gładka, subtelny grawer." },
  gnarled: { label: "Sękata", blurb: "Organiczna, korzeniowa, żywa." },
  ornate: { label: "Zdobiona", blurb: "Rzeźbione runy na trzonku." },
  crystalline: { label: "Krystaliczna", blurb: "Ostre fasety, eteryczna końcówka." },
  feral: { label: "Bestialska", blurb: "Kolce i pazury przy rękojeści." },
  classic: { label: "Klasyczna", blurb: "Prosta różdżka Mistrza Tahiego." },
};

// Tag-based routing. Order matters — first match wins.
const WOOD_STYLE_HINTS: Array<{ style: WandStyle; ids: string[] }> = [
  { style: "elegant", ids: ["heban", "hebanowe", "cis", "orzech", "wisnia"] },
  { style: "gnarled", ids: ["glog", "jarzab", "wiaz", "czarny_bez"] },
];

const CORE_STYLE_HINTS: Array<{ style: WandStyle; ids: string[] }> = [
  {
    style: "feral",
    ids: [
      "struna_smoka",
      "serce_smoka",
      "luska_bazyliszka",
      "kolce_manticore",
      "krew_gryzelusa",
    ],
  },
  {
    style: "crystalline",
    ids: [
      "pyl_gwiezdny",
      "wlos_syreny",
      "wlos_testrala",
      "lza_feniksa",
    ],
  },
  {
    style: "ornate",
    ids: [
      "pioro_feniksa",
      "pero_gryfa",
      "serce_gryfa",
      "wlos_wili",
      "wlos_veeli",
      "wlos_jednorozca",
    ],
  },
];

export function pickWandStyle(woodId?: string, coreId?: string): WandStyle {
  if (coreId) {
    for (const h of CORE_STYLE_HINTS) if (h.ids.includes(coreId)) return h.style;
  }
  if (woodId) {
    for (const h of WOOD_STYLE_HINTS) if (h.ids.includes(woodId)) return h.style;
  }
  return "classic";
}
