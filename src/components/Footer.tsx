import crest from "@/assets/AetCrest1.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-primary/10 bg-background/40 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-10 text-center">
        <img
          src={crest}
          alt="Aeternum"
          className="mx-auto h-14 w-14 opacity-80 animate-glow-pulse"
        />
        <p className="mt-3 font-display text-xs tracking-[0.4em] uppercase text-primary/80">
          Wszechnica Magii Aeternum
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Ex arbore aeterna — magia crescit.
        </p>
        <p className="mt-4 text-[10px] uppercase tracking-widest text-muted-foreground/60">
          © {new Date().getFullYear()} · Kreator Różdżek
        </p>
      </div>
    </footer>
  );
}
