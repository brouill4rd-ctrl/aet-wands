// Content override store — CRUD operations for site_content table.
// Overrides are layered on top of default data from JS files.

import { supabase } from "@/integrations/supabase/client";

export type ContentOverride = {
  id: string;
  section: string;
  item_key: string;
  field: string;
  value: string;
  updated_at: string;
};

// ---------- Read ----------

export async function fetchOverrides(section: string): Promise<ContentOverride[]> {
  const { data, error } = await supabase
    .from("site_content")
    .select("*")
    .eq("section", section);
  if (error) {
    console.error("[ContentStore] fetchOverrides error:", error);
    return [];
  }
  return (data ?? []) as ContentOverride[];
}

export async function fetchAllOverrides(): Promise<ContentOverride[]> {
  const { data, error } = await supabase
    .from("site_content")
    .select("*")
    .order("section")
    .order("item_key");
  if (error) {
    console.error("[ContentStore] fetchAllOverrides error:", error);
    return [];
  }
  return (data ?? []) as ContentOverride[];
}

// ---------- Write ----------

export async function saveOverride(
  section: string,
  itemKey: string,
  field: string,
  value: string,
): Promise<ContentOverride | null> {
  const { data, error } = await supabase
    .from("site_content")
    .upsert(
      { section, item_key: itemKey, field, value },
      { onConflict: "section,item_key,field" },
    )
    .select()
    .single();
  if (error) {
    console.error("[ContentStore] saveOverride error:", error);
    return null;
  }
  return data as ContentOverride;
}

// ---------- Delete ----------

export async function deleteOverride(
  section: string,
  itemKey: string,
  field: string,
): Promise<boolean> {
  const { error } = await supabase
    .from("site_content")
    .delete()
    .eq("section", section)
    .eq("item_key", itemKey)
    .eq("field", field);
  if (error) {
    console.error("[ContentStore] deleteOverride error:", error);
    return false;
  }
  return true;
}

export async function deleteAllOverridesForSection(section: string): Promise<boolean> {
  const { error } = await supabase
    .from("site_content")
    .delete()
    .eq("section", section);
  if (error) {
    console.error("[ContentStore] deleteAllOverridesForSection error:", error);
    return false;
  }
  return true;
}

// ---------- Helpers ----------

/** Build a lookup map from overrides: `${itemKey}.${field}` → value */
export function buildOverrideMap(overrides: ContentOverride[]): Map<string, string> {
  const map = new Map<string, string>();
  for (const o of overrides) {
    map.set(`${o.item_key}.${o.field}`, o.value);
  }
  return map;
}

/** Get an override value or fall back to the default */
export function getOverrideValue(
  map: Map<string, string>,
  itemKey: string,
  field: string,
  defaultValue: string,
): string {
  return map.get(`${itemKey}.${field}`) ?? defaultValue;
}
