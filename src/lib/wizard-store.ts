import { supabase } from "@/integrations/supabase/client";

const OWNER_KEY = "aeternum.owner_id";
const WIZARD_KEY = "aeternum.wizard_id";

function generateUUID(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function getOwnerId(): string {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem(OWNER_KEY);
  if (!id) {
    id = generateUUID();
    localStorage.setItem(OWNER_KEY, id);
  }
  return id;
}

export function getWizardId(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(WIZARD_KEY);
}

export function setWizardId(id: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(WIZARD_KEY, id);
}

export function clearWizard() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(WIZARD_KEY);
}

export type WizardRow = {
  id: string;
  owner_id: string;
  imie: string;
  nazwisko: string;
  rasa: string;
  dom: string;
  drewno: string | null;
  rdzen: string | null;
  elastycznosc: string | null;
  dlugosc: number | null;
  wlasciwosc_specjalna: string | null;
  created_at: string;
  updated_at: string;
};

export async function createWizard(input: {
  imie: string;
  nazwisko: string;
  rasa: string;
  dom: string;
}): Promise<WizardRow> {
  const owner_id = getOwnerId();
  const { data, error } = await supabase
    .from("wizards")
    .insert({ ...input, owner_id })
    .select()
    .single();
  if (error) throw error;
  setWizardId((data as WizardRow).id);
  return data as WizardRow;
}

export async function getMyWizard(): Promise<WizardRow | null> {
  const id = getWizardId();
  if (!id) return null;
  const { data, error } = await supabase
    .from("wizards")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) return null;
  return (data as WizardRow) ?? null;
}

export async function updateWandSpec(
  id: string,
  spec: {
    drewno: string;
    rdzen: string;
    elastycznosc: string;
    dlugosc: number;
    wlasciwosc_specjalna: string;
  },
): Promise<WizardRow> {
  const { data, error } = await supabase
    .from("wizards")
    .update(spec)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data as WizardRow;
}
