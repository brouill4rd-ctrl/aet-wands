import { useState } from "react";
import { generateCertificatePdf, type CertificateData } from "@/lib/certificate";
import { useMagicAudio } from "./AudioProvider";

export function CertificateButton({ data }: { data: CertificateData }) {
  const [busy, setBusy] = useState(false);
  const { resonance } = useMagicAudio();
  const handle = async () => {
    setBusy(true);
    try {
      resonance();
      await generateCertificatePdf(data);
    } finally {
      setBusy(false);
    }
  };
  return (
    <button
      onClick={handle}
      disabled={busy}
      className="rounded-lg bg-gradient-to-b from-primary-glow via-primary to-primary/80 text-primary-foreground px-8 py-3 text-sm font-semibold uppercase tracking-widest shadow-[0_0_36px_-6px_var(--primary-glow)] hover:shadow-[0_0_60px_-4px_var(--primary-glow)] transition-shadow disabled:opacity-60"
    >
      {busy ? "Pieczętowanie…" : "Pobierz certyfikat (PDF)"}
    </button>
  );
}
