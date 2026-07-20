// Admin authentication — simple password-based system.
// Password is stored in VITE_ADMIN_PASSWORD env var.

const ADMIN_SESSION_KEY = "aeternum.admin_session";

export function loginAdmin(password: string): boolean {
  const expected = import.meta.env.VITE_ADMIN_PASSWORD;
  if (!expected) {
    console.warn("[Admin] VITE_ADMIN_PASSWORD is not set. Admin login disabled.");
    return false;
  }
  if (password === expected) {
    sessionStorage.setItem(ADMIN_SESSION_KEY, "1");
    return true;
  }
  return false;
}

export function isAdmin(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === "1";
}

export function logoutAdmin(): void {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
}
