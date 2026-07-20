import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { isAdmin as checkAdmin, loginAdmin, logoutAdmin } from "@/lib/admin-auth";
import {
  fetchAllOverrides,
  saveOverride,
  deleteOverride,
  buildOverrideMap,
  type ContentOverride,
} from "@/lib/content-store";

type AdminContextType = {
  isAdmin: boolean;
  editMode: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  toggleEditMode: () => void;
  /** Override lookup map: `${section}.${itemKey}.${field}` → value */
  overrides: Map<string, string>;
  /** Save an override and update local cache */
  save: (section: string, itemKey: string, field: string, value: string) => Promise<boolean>;
  /** Delete an override (restore default) and update local cache */
  remove: (section: string, itemKey: string, field: string) => Promise<boolean>;
  /** Get value with override fallback */
  getValue: (section: string, itemKey: string, field: string, defaultValue: string) => string;
  /** Force reload of overrides */
  reload: () => Promise<void>;
};

const AdminContext = createContext<AdminContextType | null>(null);

export function useAdmin(): AdminContextType {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used within AdminProvider");
  return ctx;
}

/** Optional hook that doesn't throw if outside provider */
export function useAdminSafe(): AdminContextType | null {
  return useContext(AdminContext);
}

function buildFullMap(overrides: ContentOverride[]): Map<string, string> {
  const map = new Map<string, string>();
  for (const o of overrides) {
    map.set(`${o.section}.${o.item_key}.${o.field}`, o.value);
  }
  return map;
}

export function AdminProvider({ children }: { children: ReactNode }) {
  const [admin, setAdmin] = useState(() => checkAdmin());
  const [editMode, setEditMode] = useState(false);
  const [overrides, setOverrides] = useState<Map<string, string>>(new Map());
  const [rawOverrides, setRawOverrides] = useState<ContentOverride[]>([]);

  const loadOverrides = useCallback(async () => {
    const data = await fetchAllOverrides();
    setRawOverrides(data);
    setOverrides(buildFullMap(data));
  }, []);

  // Load overrides on mount
  useEffect(() => {
    loadOverrides();
  }, [loadOverrides]);

  const login = useCallback((password: string): boolean => {
    const ok = loginAdmin(password);
    if (ok) setAdmin(true);
    return ok;
  }, []);

  const logout = useCallback(() => {
    logoutAdmin();
    setAdmin(false);
    setEditMode(false);
  }, []);

  const toggleEditMode = useCallback(() => {
    setEditMode((v) => !v);
  }, []);

  const save = useCallback(
    async (section: string, itemKey: string, field: string, value: string): Promise<boolean> => {
      const result = await saveOverride(section, itemKey, field, value);
      if (result) {
        setOverrides((prev) => {
          const next = new Map(prev);
          next.set(`${section}.${itemKey}.${field}`, value);
          return next;
        });
        return true;
      }
      return false;
    },
    [],
  );

  const remove = useCallback(
    async (section: string, itemKey: string, field: string): Promise<boolean> => {
      const ok = await deleteOverride(section, itemKey, field);
      if (ok) {
        setOverrides((prev) => {
          const next = new Map(prev);
          next.delete(`${section}.${itemKey}.${field}`);
          return next;
        });
        return true;
      }
      return false;
    },
    [],
  );

  const getValue = useCallback(
    (section: string, itemKey: string, field: string, defaultValue: string): string => {
      return overrides.get(`${section}.${itemKey}.${field}`) ?? defaultValue;
    },
    [overrides],
  );

  return (
    <AdminContext.Provider
      value={{
        isAdmin: admin,
        editMode: admin && editMode,
        login,
        logout,
        toggleEditMode,
        overrides,
        save,
        remove,
        getValue,
        reload: loadOverrides,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
