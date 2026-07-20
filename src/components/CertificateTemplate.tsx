import { forwardRef } from "react";
import type { CertificateData } from "@/lib/certificate";
import ailanSignatureImg from "@/assets/signatures/ailan-signature.png";
import ecamhiSignatureImg from "@/assets/signatures/ecamhi-sign.png";

/**
 * Off-screen HTML template rendered to canvas by html2canvas.
 * Fixed A4 dimensions at 96 DPI: 794 × 1123 px.
 * Uses Cinzel (already loaded in __root.tsx) + Georgia fallback for
 * body copy — both cover full Polish diacritics.
 */
function withAlpha(hex: string, alphaHex: string) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  const a = parseInt(alphaHex, 16) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export const CertificateTemplate = forwardRef<HTMLDivElement, { data: CertificateData }>(
  function CertificateTemplate({ data }, ref) {
    const {
      imie,
      nazwisko,
      rasa,
      dom,
      drewno,
      rdzen,
      dlugosc,
      elastycznosc,
      wlasciwoscSpecjalna,
      houseColor,
      houseCrestUrl,
      schoolCrestUrl,
    } = data;

    const dateStr = new Date().toLocaleDateString("pl-PL", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    // Base tokens (values are chosen so text is legible against parchment).
    const gold = "#d4af37";
    const parchment = "#1c1610";
    const parchmentSoft = "#26201a";
    const ink = "#f0e4c8";
    const inkSoft = "#c8b688";

    return (
      <div
        ref={ref}
        className="certificate-template-export"
        style={{
          width: 794,
          height: 1123,
          position: "relative",
          background: parchment,
          color: ink,
          fontFamily: "'Georgia', 'Times New Roman', serif",
          overflow: "hidden",
          boxSizing: "border-box",
          // Custom props consumed inline below.
          ["--hc" as string]: houseColor,
          ["--color-border" as string]: "transparent",
          ["--border" as string]: "transparent",
        }}
      >
        <style>{`
          .certificate-template-export * {
            border-color: transparent;
            outline-color: transparent;
          }
        `}</style>
        {/* Inner background */}
        <div
          style={{
            position: "absolute",
            inset: 22,
            background: `radial-gradient(ellipse at 50% 0%, ${withAlpha(houseColor, "22")}, transparent 60%), ${parchmentSoft}`,
          }}
        />

        {/* Gold outer frame */}
        <div
          style={{
            position: "absolute",
            inset: 38,
            border: `2px solid ${gold}`,
            boxShadow: `inset 0 0 0 4px ${parchmentSoft}, inset 0 0 0 5px ${withAlpha(gold, "55")}`,
          }}
        />
        {/* House-colour inner frame */}
        <div
          style={{
            position: "absolute",
            inset: 56,
            border: `1px solid ${houseColor}`,
            boxShadow: `0 0 22px ${withAlpha(houseColor, "55")}`,
          }}
        />

        {/* Corner ornaments */}
        {[
          { top: 44, left: 44 },
          { top: 44, right: 44 },
          { bottom: 44, left: 44 },
          { bottom: 44, right: 44 },
        ].map((pos, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: 40,
              height: 40,
              borderColor: houseColor,
              borderStyle: "solid",
              borderWidth: 0,
              ...pos,
              ...(pos.top !== undefined ? { borderTopWidth: 2 } : { borderBottomWidth: 2 }),
              ...(pos.left !== undefined ? { borderLeftWidth: 2 } : { borderRightWidth: 2 }),
            }}
          />
        ))}

        {/* House crest watermark */}
        {houseCrestUrl && (
          <div
            style={{
              position: "absolute",
              width: 500,
              height: 500,
              left: 147,
              top: 311,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={houseCrestUrl}
              alt=""
              crossOrigin="anonymous"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                opacity: 0.08,
                filter: "blur(0.3px)",
              }}
            />
          </div>
        )}

        {/* Content wrapper */}
        <div
          style={{
            position: "relative",
            padding: "82px 88px 88px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
          }}
        >
          {/* School crest */}
          {schoolCrestUrl && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 96,
                margin: "0 auto",
              }}
            >
              <img
                src={schoolCrestUrl}
                alt=""
                crossOrigin="anonymous"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  filter: `drop-shadow(0 0 18px ${withAlpha(houseColor, "aa")})`,
                }}
              />
            </div>
          )}

          {/* Title */}
          <h1
            style={{
              fontFamily: "'Cinzel', 'Georgia', serif",
              fontWeight: 700,
              fontSize: 30,
              letterSpacing: 4,
              textAlign: "center",
              margin: "18px 0 4px",
              color: gold,
              textShadow: `0 0 16px ${withAlpha(gold, "66")}`,
            }}
          >
            CERTYFIKAT POSIADANIA RÓŻDŻKI
          </h1>
          <p
            style={{
              textAlign: "center",
              fontStyle: "italic",
              fontSize: 14,
              color: inkSoft,
              margin: 0,
            }}
          >
            Wystawiony przez pracownię Cztery Słoje — Kwartał Ziemi
          </p>

          {/* Divider */}
          <div
            style={{
              margin: "18px auto 18px",
              width: "70%",
              height: 1,
              background: `linear-gradient(90deg, transparent, ${houseColor}, transparent)`,
            }}
          />

          {/* Preambuła */}
          <p
            style={{
              textAlign: "center",
              fontSize: 14,
              lineHeight: 1.55,
              margin: "0 12px 24px",
              color: ink,
            }}
          >
            Niniejszym potwierdza się, iż różdżka opisana w niniejszym dokumencie
            została trwale przypisana do jej prawowitego właściciela. Zgodnie
            z&nbsp;tradycją magiczną, to&nbsp;różdżka wybiera czarodzieja,
            a&nbsp;niniejszy certyfikat stanowi świadectwo ich wzajemnego dopasowania.
          </p>

          {/* Sections */}
          <SectionTitle color={houseColor}>DANE WŁAŚCICIELA</SectionTitle>
          <Rows
            color={houseColor}
            rows={[
              ["Imię i nazwisko", `${imie} ${nazwisko}`],
              ["Rasa", rasa],
              ["Przynależność do Domu", dom],
            ]}
          />

          <SectionTitle color={houseColor} style={{ marginTop: 22 }}>
            SPECYFIKACJA RÓŻDŻKI
          </SectionTitle>
          <Rows
            color={houseColor}
            rows={[
              ["Drewno", drewno],
              ["Rdzeń", rdzen],
              ["Długość", `${dlugosc.toFixed(2)} cala`],
              ["Elastyczność", elastycznosc],
              ["Specjalna właściwość", wlasciwoscSpecjalna],
            ]}
          />

          <SectionTitle color={houseColor} style={{ marginTop: 22 }}>
            OŚWIADCZENIE
          </SectionTitle>
          <p
            style={{
              textAlign: "center",
              fontStyle: "italic",
              fontSize: 12.5,
              lineHeight: 1.55,
              margin: "6px 12px 0",
              color: inkSoft,
            }}
          >
            Właściciel zobowiązany jest do dbania o powierzoną mu różdżkę oraz
            korzystania z niej zgodnie z prawem magicznym. Wszelkie próby
            modyfikacji rdzenia lub uszkodzenia struktury drewna przez osoby
            niepowołane skutkują utratą magicznej stabilności przedmiotu.
          </p>

          <div style={{ flex: 1 }} />

          {/* Date */}
          <p
            style={{
              textAlign: "center",
              fontSize: 12,
              color: inkSoft,
              margin: "0 0 14px",
            }}
          >
            Data wystawienia: {dateStr} r.
          </p>

          {/* Signature row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              padding: "0 12px",
            }}
          >
            {/* Signature 1 (Ecamhi) */}
            <div style={{ textAlign: "center", width: 180 }}>
              <img
                src={ecamhiSignatureImg}
                alt="Ecamhi Signature"
                crossOrigin="anonymous"
                style={{
                  height: 50,
                  objectFit: "contain",
                  margin: "0 auto 4px",
                }}
              />
              <div
                style={{
                  height: 1,
                  background: houseColor,
                  margin: "0 auto",
                  width: 140,
                }}
              />
              <p style={{ fontSize: 10, color: inkSoft, margin: "6px 0 0" }}>
                Nauczyciel Zaklęć
              </p>
            </div>

            {/* Seal */}
            <div style={{ textAlign: "center", width: 180 }}>
              <div
                style={{
                  width: 62,
                  height: 62,
                  borderRadius: "50%",
                  background: `radial-gradient(circle at 35% 30%, ${houseColor}, ${withAlpha(houseColor, "88")} 60%, ${withAlpha(houseColor, "55")})`,
                  boxShadow: `0 0 18px ${withAlpha(houseColor, "aa")}, inset 0 0 8px rgba(0,0,0,0.4)`,
                  margin: "0 auto 6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {houseCrestUrl && (
                  <img
                    src={houseCrestUrl}
                    alt=""
                    crossOrigin="anonymous"
                    style={{
                      maxWidth: 44,
                      maxHeight: 44,
                      filter: "brightness(1.4) drop-shadow(0 0 4px rgba(0,0,0,0.533))",
                    }}
                  />
                )}
              </div>
              <div
                style={{
                  height: 1,
                  background: houseColor,
                  margin: "0 auto",
                  width: 140,
                }}
              />
              <p style={{ fontSize: 10, color: inkSoft, margin: "6px 0 0" }}>
                (Pieczęć Ailana Tahiego)
              </p>
            </div>

            {/* Signature */}
            <div style={{ textAlign: "center", width: 180 }}>
              <img
                src={ailanSignatureImg}
                alt="Ailan Tahi Signature"
                crossOrigin="anonymous"
                style={{
                  height: 50,
                  objectFit: "contain",
                  margin: "0 auto 4px",
                }}
              />
              <div
                style={{
                  height: 1,
                  background: houseColor,
                  margin: "0 auto",
                  width: 140,
                }}
              />
              <p style={{ fontSize: 10, color: inkSoft, margin: "6px 0 0" }}>
                Podpis Mistrza Różdżkarstwa
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

function SectionTitle({
  children,
  color,
  style,
}: {
  children: React.ReactNode;
  color: string;
  style?: React.CSSProperties;
}) {
  return (
    <h2
      style={{
        fontFamily: "'Cinzel', 'Georgia', serif",
        fontWeight: 600,
        fontSize: 15,
        letterSpacing: 3,
        textAlign: "center",
        color,
        margin: "0 0 8px",
        textShadow: `0 0 10px ${withAlpha(color, "55")}`,
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

function Rows({ rows, color }: { rows: Array<[string, string]>; color: string }) {
  return (
    <div style={{ padding: "0 40px" }}>
      {rows.map(([k, v], i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            padding: "6px 0",
            borderBottom: i < rows.length - 1 ? `1px dotted ${withAlpha(color, "44")}` : "none",
            fontSize: 14,
          }}
        >
          <span style={{ color: "#b9a672", letterSpacing: 1, fontSize: 12 }}>
            {k}
          </span>
          <span
            style={{
              color: "#f6ecd0",
              fontWeight: 600,
              fontFamily: "'Cinzel', 'Georgia', serif",
              letterSpacing: 0.5,
              textAlign: "right",
              maxWidth: "60%",
            }}
          >
            {v}
          </span>
        </div>
      ))}
    </div>
  );
}
