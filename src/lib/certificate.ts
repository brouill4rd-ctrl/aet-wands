import { createRoot } from "react-dom/client";
import { createElement } from "react";
import { CertificateTemplate } from "@/components/CertificateTemplate";

export type CertificateData = {
  imie: string;
  nazwisko: string;
  rasa: string;
  dom: string;
  drewno: string;
  rdzen: string;
  dlugosc: number;
  elastycznosc: string;
  wlasciwoscSpecjalna: string;
  houseColor: string; // hex
  houseCrestUrl: string;
  schoolCrestUrl: string;
};

/**
 * Renders the CertificateTemplate off-screen, snapshots it with html2canvas
 * (so full Unicode / Polish diacritics render correctly using web fonts),
 * embeds the PNG in an A4 PDF, and triggers a download.
 */
export async function generateCertificatePdf(data: CertificateData) {
  // Dynamically load heavy libraries only when needed
  const [jspdfMod, html2canvasMod] = await Promise.all([
    import("jspdf"),
    import("html2canvas")
  ]);
  const jsPDF = jspdfMod.jsPDF || jspdfMod.default || jspdfMod;
  const html2canvas = html2canvasMod.default || html2canvasMod;

  // Off-screen host
  const host = document.createElement("div");
  host.style.position = "fixed";
  host.style.left = "-10000px";
  host.style.top = "0";
  host.style.pointerEvents = "none";
  host.style.zIndex = "-1";
  document.body.appendChild(host);

  const root = createRoot(host);

  try {
    // We need a real DOM node to hand to html2canvas. Use a ref-callback promise.
    const el = await new Promise<HTMLDivElement>((resolve) => {
      const capture = (node: HTMLDivElement | null) => {
        if (node) resolve(node);
      };
      root.render(createElement(CertificateTemplate, { data, ref: capture }));
    });

    // Wait a frame so images/fonts have a chance to load before snapshot.
    await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 60)));
    // Wait for embedded images to load (crest URLs).
    const imgs = Array.from(el.querySelectorAll("img"));
    await Promise.all(
      imgs.map(
        (img) =>
          new Promise<void>((resolve) => {
            if (img.complete && img.naturalWidth > 0) return resolve();
            img.onload = () => resolve();
            img.onerror = () => resolve();
          }),
      ),
    );
    // Ensure any web fonts used are loaded.
    if (document.fonts && "ready" in document.fonts) {
      try {
        await document.fonts.ready;
      } catch {
        /* noop */
      }
    }

    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false,
      onclone: (clonedDoc, clonedElement) => {
        // html2canvas fails parsing oklch/oklab colors from Tailwind v4.
        // We isolate the target element and neutralize ALL global styles in the clone
        // BEFORE html2canvas attempts to parse their computed styles.
        
        clonedDoc.body.innerHTML = '';
        clonedDoc.body.appendChild(clonedElement);
        
        clonedDoc.body.style.background = 'transparent';
        clonedDoc.body.style.backgroundImage = 'none';
        clonedDoc.documentElement.style.background = 'transparent';
        clonedDoc.documentElement.style.backgroundImage = 'none';

        const style = clonedDoc.createElement('style');
        style.innerHTML = `
          :root {
            --background: #1e1e1e !important;
            --foreground: #ffffff !important;
            --card: #2a2a2a !important;
            --card-foreground: #ffffff !important;
            --popover: #2a2a2a !important;
            --popover-foreground: #ffffff !important;
            --primary: #d4af37 !important;
            --primary-foreground: #000000 !important;
            --primary-glow: #e5c158 !important;
            --secondary: #2b2b5c !important;
            --secondary-foreground: #ffffff !important;
            --muted: #3a3a3a !important;
            --muted-foreground: #a0a0a0 !important;
            --accent: #5e2a7a !important;
            --accent-foreground: #ffffff !important;
            --destructive: #aa3333 !important;
            --destructive-foreground: #ffffff !important;
            --border: transparent !important;
            --color-border: transparent !important;
            --input: #3a3a3a !important;
            --ring: transparent !important;
            --success: #33aa55 !important;
            --warning: #cc9933 !important;
            --house-lycamoor: #cc5522 !important;
            --house-melirgon: #eebb33 !important;
            --house-sophinus: #3388cc !important;
          }
          * {
            border-color: transparent;
            outline-color: transparent;
          }
        `;
        clonedDoc.head.appendChild(style);
      }
    });

    const pngData = canvas.toDataURL("image/png");

    // A4 portrait in mm
    const doc = new jsPDF({
      unit: "mm",
      format: "a4",
      orientation: "portrait",
      compress: true,
    });
    const W = 210;
    const H = 297;
    doc.addImage(pngData, "PNG", 0, 0, W, H, undefined, "FAST");

    const safeName = `${data.nazwisko}_${data.imie}`
      .replace(/[^a-zA-Z0-9_-]/g, "")
      .toLowerCase();
    doc.save(`certyfikat-rozdzki-${safeName || "aeternum"}.pdf`);
  } finally {
    root.unmount();
    host.remove();
  }
}
