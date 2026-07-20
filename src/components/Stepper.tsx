const STEPS = ["Drewno", "Rdzeń", "Elastyczność", "Długość"];

export function Stepper({ step }: { step: number }) {
  return (
    <ol className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
      {STEPS.map((label, i) => {
        const active = i === step;
        const done = i < step;
        return (
          <li key={label} className="flex items-center gap-2 sm:gap-3">
            <div
              className={`grid place-items-center h-8 w-8 rounded-full border font-display text-sm transition ${
                active
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_24px_var(--primary-glow)]"
                  : done
                    ? "bg-primary/20 text-primary border-primary/50"
                    : "bg-background/60 text-muted-foreground border-primary/20"
              }`}
            >
              {i + 1}
            </div>
            <span
              className={`text-xs sm:text-sm uppercase tracking-widest ${
                active ? "text-primary" : done ? "text-primary/80" : "text-muted-foreground"
              }`}
            >
              {label}
            </span>
            {i < STEPS.length - 1 && (
              <span
                className={`hidden sm:block h-px w-6 sm:w-10 ${
                  done ? "bg-primary/60" : "bg-primary/15"
                }`}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
