import { Link } from "@tanstack/react-router";
import { useState } from "react";
import crest from "@/assets/AetCrest1.png";
import { useMagicAudio } from "./AudioProvider";
import { useAdmin } from "./AdminProvider";

export function Navbar() {
  const { enabled, toggle } = useMagicAudio();
  const { isAdmin, editMode, login, logout, toggleEditMode } = useAdmin();
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = login(password);
    if (ok) {
      setShowLogin(false);
      setPassword("");
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-background/50 border-b border-primary/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link to="/" className="flex min-w-0 items-center gap-3 group">
            <img
              src={crest}
              alt="Wszechnica Magii Aeternum"
              className="h-10 w-10 shrink-0 object-contain animate-glow-pulse"
            />
            <div className="min-w-0 leading-tight">
              <div className="font-display text-sm sm:text-base tracking-widest uppercase gold-gradient-text">
                Aeternum
              </div>
              <div className="hidden sm:block text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                Wszechnica Magii
              </div>
            </div>
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2 text-sm">
            <Link
              to="/przydzial"
              className="rounded-md px-3 py-1.5 text-foreground/80 hover:text-primary hover:bg-primary/5 transition"
              activeProps={{ className: "text-primary bg-primary/10" }}
            >
              Przydział
            </Link>
            <Link
              to="/kreator"
              className="rounded-md px-3 py-1.5 text-foreground/80 hover:text-primary hover:bg-primary/5 transition"
              activeProps={{ className: "text-primary bg-primary/10" }}
            >
              Kreator
            </Link>
            <Link
              to="/moja-rozdzka"
              className="rounded-md px-3 py-1.5 text-foreground/80 hover:text-primary hover:bg-primary/5 transition"
              activeProps={{ className: "text-primary bg-primary/10" }}
            >
              Moja różdżka
            </Link>
            <Link
              to="/encyklopedia"
              className="rounded-md px-3 py-1.5 text-foreground/80 hover:text-primary hover:bg-primary/5 transition"
              activeProps={{ className: "text-primary bg-primary/10" }}
            >
              Encyklopedia
            </Link>
            {isAdmin && (
              <Link
                to="/admin"
                className="rounded-md px-3 py-1.5 text-foreground/80 hover:text-amber-400 hover:bg-amber-400/5 transition"
                activeProps={{ className: "text-amber-400 bg-amber-400/10" }}
              >
                Panel
              </Link>
            )}
            <button
              onClick={toggle}
              aria-label={enabled ? "Wycisz muzykę" : "Włącz muzykę"}
              className="ml-1 sm:ml-2 grid place-items-center h-9 w-9 rounded-md border border-primary/20 text-primary hover:border-primary/60 hover:bg-primary/10 transition"
              title={enabled ? "Muzyka: WŁ" : "Muzyka: WYŁ"}
            >
              {enabled ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10v4a1 1 0 0 0 1 1h3l4 3V6L7 9H4a1 1 0 0 0-1 1z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10v4a1 1 0 0 0 1 1h3l4 3V6L7 9H4a1 1 0 0 0-1 1z"/><line x1="16" y1="9" x2="22" y2="15"/><line x1="22" y1="9" x2="16" y2="15"/></svg>
              )}
            </button>

            {/* Admin button */}
            {isAdmin ? (
              <div className="ml-1 flex items-center gap-1">
                <button
                  onClick={toggleEditMode}
                  className={`grid place-items-center h-9 w-9 rounded-md border transition ${
                    editMode
                      ? "border-amber-400/60 bg-amber-400/15 text-amber-400"
                      : "border-primary/20 text-primary/60 hover:border-amber-400/40 hover:text-amber-400"
                  }`}
                  title={editMode ? "Tryb edycji: WŁ" : "Tryb edycji: WYŁ"}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                  </svg>
                </button>
                <button
                  onClick={logout}
                  className="grid place-items-center h-9 w-9 rounded-md border border-primary/20 text-primary/60 hover:border-red-400/40 hover:text-red-400 transition"
                  title="Wyloguj admina"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="ml-1 grid place-items-center h-9 w-9 rounded-md border border-primary/20 text-primary/40 hover:border-primary/40 hover:text-primary/70 transition"
                title="Logowanie admina"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </button>
            )}
          </nav>
        </div>

        {/* Admin edit mode indicator bar */}
        {editMode && (
          <div className="bg-amber-500/10 border-t border-amber-500/20 px-4 py-1.5 text-center">
            <span className="text-[10px] uppercase tracking-widest text-amber-400/80">
              ✏️ Tryb edycji aktywny — kliknij na dowolny tekst, aby go zmienić
            </span>
          </div>
        )}
      </header>

      {/* Admin login dialog */}
      {showLogin && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowLogin(false)}
        >
          <form
            onSubmit={handleLogin}
            onClick={(e) => e.stopPropagation()}
            className="glass-card rounded-2xl p-8 w-full max-w-sm mx-4 animate-scale-in"
          >
            <h2 className="font-display text-xl gold-gradient-text text-center">
              Logowanie Admina
            </h2>
            <p className="mt-2 text-xs text-muted-foreground text-center">
              Podaj hasło administratora
            </p>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setLoginError(false);
              }}
              autoFocus
              placeholder="Hasło"
              className="mt-4 w-full rounded-lg bg-background/60 border border-primary/25 px-3 py-2.5 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
            />
            {loginError && (
              <p className="mt-2 text-xs text-red-400 text-center">
                Nieprawidłowe hasło
              </p>
            )}
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => setShowLogin(false)}
                className="flex-1 rounded-lg border border-primary/25 px-4 py-2 text-sm text-foreground/80 hover:border-primary/60 hover:bg-primary/5 transition"
              >
                Anuluj
              </button>
              <button
                type="submit"
                className="flex-1 rounded-lg bg-gradient-to-b from-primary-glow via-primary to-primary/80 text-primary-foreground px-4 py-2 text-sm font-semibold uppercase tracking-widest shadow-[0_0_24px_-6px_var(--primary-glow)] transition-shadow"
              >
                Zaloguj
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
