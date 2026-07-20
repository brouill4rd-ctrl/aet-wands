// Visual mappings for the 3D wand model.
// Wood id → primary color/roughness. Core id → glow color.
// Fallbacks used when a specific id isn't listed.

type WoodVisual = { color: string; roughness: number; accent: string };

export const WOOD_VISUALS: Record<string, WoodVisual> = {
  dab: { color: "#6b4a2b", roughness: 0.75, accent: "#2b1a0a" },
  czarny_bez: { color: "#2a2320", roughness: 0.55, accent: "#0a0906" },
  ostrokrzew: { color: "#8a5a3b", roughness: 0.6, accent: "#3b2213" },
  wierzba: { color: "#c9a877", roughness: 0.7, accent: "#6b4a2b" },
  jesion: { color: "#d6c39b", roughness: 0.6, accent: "#7a684a" },
  wiaz: { color: "#8b6a4a", roughness: 0.7, accent: "#3b2b1b" },
  brzoza: { color: "#eadfc6", roughness: 0.55, accent: "#a58b6a" },
  klon: { color: "#c98a5a", roughness: 0.6, accent: "#6b3a1a" },
  buk: { color: "#b78d61", roughness: 0.6, accent: "#5b3a1a" },
  jarzab: { color: "#a45a3a", roughness: 0.65, accent: "#4b1a0a" },
  glog: { color: "#5a3a2a", roughness: 0.7, accent: "#1a0a05" },
  cis: { color: "#3a2a1a", roughness: 0.55, accent: "#a34a2a" },
  hebanowe: { color: "#151013", roughness: 0.35, accent: "#3a2a3a" },
  heban: { color: "#151013", roughness: 0.35, accent: "#3a2a3a" },
  jodla: { color: "#c9a877", roughness: 0.65, accent: "#5a3a1a" },
  swierk: { color: "#d6b88b", roughness: 0.65, accent: "#5a3a1a" },
  sosna: { color: "#e0b47a", roughness: 0.65, accent: "#7a4a1a" },
  akacja: { color: "#a67a4a", roughness: 0.55, accent: "#4a2a10" },
  orzech: { color: "#4a2a1a", roughness: 0.5, accent: "#1a0806" },
  wisnia: { color: "#8b3a3a", roughness: 0.55, accent: "#3a0a0a" },
};

export function woodVisual(id: string): WoodVisual {
  return WOOD_VISUALS[id] ?? { color: "#8b6a4a", roughness: 0.65, accent: "#3b2b1b" };
}

type CoreVisual = { color: string; emissive: string; intensity: number };

export const CORE_VISUALS: Record<string, CoreVisual> = {
  pioro_feniksa: { color: "#ff9a3a", emissive: "#ff6a1a", intensity: 2.4 },
  wlos_jednorozca: { color: "#f5f0ff", emissive: "#c9b8ff", intensity: 2.0 },
  struna_smoka: { color: "#ff3a3a", emissive: "#c91a1a", intensity: 2.6 },
  wlos_testrala: { color: "#6a3aff", emissive: "#2a0a6a", intensity: 2.2 },
  luska_bazyliszka: { color: "#3aff6a", emissive: "#0a6a2a", intensity: 2.1 },
  serce_gryfa: { color: "#ffd23a", emissive: "#c98a1a", intensity: 2.3 },
  wlos_wili: { color: "#ffd2f0", emissive: "#c96acf", intensity: 2.0 },
  krew_gryzelusa: { color: "#c90a3a", emissive: "#6a0000", intensity: 2.4 },
  pero_gryfa: { color: "#ffd23a", emissive: "#c98a1a", intensity: 2.3 },
  serce_smoka: { color: "#ff2a1a", emissive: "#c90a00", intensity: 2.7 },
  wlos_syreny: { color: "#3ac9d6", emissive: "#0a6a8a", intensity: 2.0 },
  lza_feniksa: { color: "#ffb56a", emissive: "#c98a1a", intensity: 2.2 },
  kolce_manticore: { color: "#c96a3a", emissive: "#6a1a0a", intensity: 2.4 },
  wlos_veeli: { color: "#ffd2f0", emissive: "#c96acf", intensity: 2.0 },
  pyl_gwiezdny: { color: "#c9d6ff", emissive: "#6a8acf", intensity: 2.3 },
};

export function coreVisual(id: string): CoreVisual {
  return CORE_VISUALS[id] ?? { color: "#e8b53a", emissive: "#c98a1a", intensity: 2.0 };
}

// Flexibility → bend factor (0 stiff, 1 whippy).
export function flexBend(id: string): number {
  const s = id.toLowerCase();
  if (s.includes("sztyw")) return 0.05;
  if (s.includes("solid") || s.includes("twarda")) return 0.1;
  if (s.includes("umiarkowana") || s.includes("umiark")) return 0.25;
  if (s.includes("giet") || s.includes("elast")) return 0.5;
  if (s.includes("bardzo") && s.includes("gie")) return 0.75;
  if (s.includes("gicz") || s.includes("whip") || s.includes("smyc")) return 0.9;
  return 0.3;
}
