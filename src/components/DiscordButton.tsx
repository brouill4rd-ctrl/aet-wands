import { useState } from "react";

type Payload = {
  drewno: string;
  rdzen: string;
  elastycznosc: string;
  dlugosc: string;
  wlasciciel?: string;
  dom?: string;
};

export function DiscordButton({ payload }: { payload: Payload }) {
  const [copied, setCopied] = useState(false);

  const onClick = async () => {
    const json = JSON.stringify(payload);
    const b64 =
      typeof btoa !== "undefined"
        ? btoa(unescape(encodeURIComponent(json)))
        : Buffer.from(json, "utf-8").toString("base64");
    const code = `WAND-${b64}`;
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 6000);
  };

  return (
    <button
      onClick={onClick}
      className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl px-6 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      style={{
        backgroundColor: "var(--color-discord)",
        boxShadow:
          "0 12px 40px -12px rgba(88,101,242,0.7), 0 0 0 1px rgba(255,255,255,0.08) inset",
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3c-.174.31-.377.727-.516 1.06a18.27 18.27 0 0 0-5.084 0A12.87 12.87 0 0 0 10.44 3a19.86 19.86 0 0 0-3.76 1.37C2.79 8.94 1.86 13.38 2.33 17.75a19.9 19.9 0 0 0 6.03 3.05c.49-.67.92-1.38 1.29-2.13-.7-.26-1.37-.58-2.01-.96.17-.13.34-.26.5-.4 3.87 1.8 8.06 1.8 11.88 0 .16.14.33.27.5.4-.64.38-1.31.7-2.01.96.37.75.8 1.46 1.29 2.13a19.86 19.86 0 0 0 6.03-3.05c.55-4.98-.9-9.38-3.53-13.38ZM9.68 15.33c-1.18 0-2.15-1.09-2.15-2.42 0-1.34.95-2.43 2.15-2.43 1.2 0 2.17 1.1 2.15 2.43 0 1.33-.95 2.42-2.15 2.42Zm4.64 0c-1.18 0-2.15-1.09-2.15-2.42 0-1.34.95-2.43 2.15-2.43 1.2 0 2.17 1.1 2.15 2.43 0 1.33-.95 2.42-2.15 2.42Z" />
      </svg>
      <span className="text-sm sm:text-base">
        {copied
          ? "✅ Skopiowano kod! Użyj /odbierz_rozdzke na Discordzie"
          : "Odbierz różdżkę na Discordzie"}
      </span>
    </button>
  );
}
