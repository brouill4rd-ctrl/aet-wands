## Cel
1. Naprawić polskie znaki na certyfikacie PDF (obecnie jsPDF używa `times` — nie zawiera glifów `ą ę ś ż ł ó ń ć ź`, wychodzą kwadraciki/braki).
2. Certyfikat wizualnie dopasowany do koloru wybranego Domu (nie tylko akcenty, ale cała paleta ramki, tła, pieczęci, nagłówków).
3. Wymienić proceduralny model 3D na kilka gotowych modeli GLB, przełączanych zależnie od wyboru gracza.

---

## 1. Polskie znaki w PDF

**Podejście: renderowanie przez `html2canvas` → obraz PDF.** Najbezpieczniejsze dla pełnego Unicode (ą, ę, ź, ż, ó, ś, ł, ć, ń) bez dołączania ~300 kB fontu TTF. Kompromis: tekst nie będzie zaznaczalny, ale certyfikat i tak jest pamiątkowy/dekoracyjny.

**Alternatywa (jeśli wolisz tekst zaznaczalny):** osadzić font TTF z polskimi znakami (np. `EB Garamond` lub `Cormorant Garamond` przez `doc.addFileToVFS` + `doc.addFont`). Dodaje ~200–300 kB do bundla dla samego certyfikatu.

**Rekomendacja:** wariant `html2canvas` — jakość wizualna dużo lepsza (możemy użyć prawdziwego `Cinzel`/`Great Vibes` z Google Fonts, cieni, gradientów, dokładnie takich samych jak reszta strony), a certyfikat jest jednorazowym artefaktem.

Kroki:
- `bun add html2canvas`
- Nowy komponent `CertificateTemplate.tsx` — renderowany off-screen (`position: fixed; left: -10000px`), stylowany Tailwindem + inline zmiennymi CSS wg koloru Domu.
- `lib/certificate.ts` przepisane: `html2canvas(el, { scale: 2, backgroundColor: null, useCORS: true })` → `doc.addImage(png, ..., A4)` → `doc.save(...)`.
- Wcześniejsze pola (imię, nazwisko, drewno, rdzeń, długość, elastyczność, właściwość specjalna, data) wstrzykiwane jako propsy.

## 2. Certyfikat w kolorach Domu

Szablon HTML czyta `--house-color` i `--house-color-soft` z inline `style`. Wszystkie akcenty pochodzą z tych zmiennych:
- ramka zewnętrzna i wewnętrzna gradient (`from-[var(--house-color)]/60 via-[var(--house-color)] to-[var(--house-color)]/60`)
- nagłówki sekcji („DANE WŁAŚCICIELA", „SPECYFIKACJA RÓŻDŻKI", „OŚWIADCZENIE")
- pieczęć woskowa (koło) — z herbem Domu w środku zamiast „Æ"
- narożniki i separatory
- podpis „Ollivander" — złoto pozostaje neutralne, tylko obwódka w kolorze Domu
- watermark: herb szkoły u góry środek (jak dziś), herb Domu jako duży, blady watermark w centrum (opacity ~0.08)

Tło pozostaje pergaminowe (ciepły ciemny brąz #1c1610), żeby czytelność złota i koloru Domu była stabilna niezależnie od hue Domu.

## 3. Modele 3D — kilka GLB

Ważne ustalenie: **realistycznie nie utrzymamy 40+ modeli** (każde drewno × każdy rdzeń). Proponuję **6 stylów uchwytu** wybieranych na podstawie tagów drewna/rdzenia + `houseColor` jako podświetlenie:

| Model | Charakter | Kryterium wyboru |
|---|---|---|
| `elegant.glb` | smukły, gładki, subtelny grawer | drewno „dostojne" (heban, cis, orzech) |
| `gnarled.glb` | sękaty, organiczny, korzeniowy | „dzikie" (głóg, jarząb, wiąz) |
| `ornate.glb` | rzeźbione runy, wzory na trzonku | rdzenie „ceremonialne" (feniks, gryf, wila) |
| `crystalline.glb` | kryształowa końcówka, ostre fasety | rdzenie „mroźne/eteryczne" (pył gwiezdny, syrena, testral) |
| `feral.glb` | pazury/kolce przy rękojeści | rdzenie „bestialskie" (smok, bazyliszek, manticore) |
| `classic.glb` | prosty klasyczny (Ollivander default) | fallback |

Drewno steruje kolorem/roughness materiału shaftu (jak dziś w `visuals.ts`), rdzeń steruje kolorem emisji końcówki i core-glowem (podmiana materiału na nazwanych meshach `Shaft`, `Core`, `Tip`).

### Skąd modele
- **Opcja A (rekomendowana):** wygenerować 6 proceduralnie w Blenderze offline i wgrać jako assety (`lovable-assets`). Możesz je dostarczyć, albo wygenerujemy prosty zestaw w tej iteracji jako `.glb` z prymitywów (lathed shapes) zapisanych w projekcie (przez `three` w skrypcie build-time). Realnie — **potrzebuję żebyś podrzucił 6 plików `.glb`** albo zaakceptował, że w tej iteracji użyjemy proceduralnych meshy stylizowanych na 6 wariantów w `WandCanvas.tsx` (bez faktycznych GLB, ale z widoczną różnicą kształtu).
- **Opcja B:** darmowe modele CC0 z np. Poly Pizza / Sketchfab CC0 — dobiorę i podepnę linki, ale styl będzie mieszany.

**Domyślnie idę opcją A z placeholderowymi proceduralnymi 6 wariantami** i zostawiam gniazdo (`/public/wands/*.glb` lub `src/assets/wands/*.glb.asset.json`) na docelowe pliki — kod będzie już czytał GLB przez `useGLTF`.

### Implementacja
- `bun add` — nic nowego (drei `useGLTF` jest w zainstalowanym `@react-three/drei`).
- `src/data/wandModels.ts` — mapowanie `(woodId, coreId) → modelId` + lista modeli z ich `url`.
- `WandCanvas.tsx` — zamiast proceduralnego `TubeGeometry` używa `useGLTF(model.url)`, klonuje scenę, ustawia materiały na meshach `Shaft`/`Core`/`Tip`, dodaje pierścień w kolorze Domu na `Grip`.
- `useGLTF.preload(...)` dla wszystkich 6 w `WandCanvasClient` — płynne przełączanie w kreatorze.
- Zachowujemy `OrbitControls`, `Sparkles`, autoobrót.

---

## Pliki

**Nowe:**
- `src/components/CertificateTemplate.tsx`
- `src/data/wandModels.ts`
- (jeśli akceptujesz opcję A z proceduralnymi „stand-in" modelami) `src/components/wands/ProceduralWand.tsx` — 6 wariantów kształtu; `WandCanvas` przełącza między nimi na podstawie `wandModels.ts`

**Zmienione:**
- `src/lib/certificate.ts` — przepisane pod html2canvas
- `src/components/CertificateButton.tsx` — bez zmian w API, tylko przekazuje więcej pól
- `src/components/WandCanvas.tsx` — ładowanie GLB przez `useGLTF` (lub przełącznik na proceduralne warianty)
- `package.json` / `bun.lock` — `html2canvas`

---

## Pytania do Ciebie zanim ruszę
1. **Font w PDF:** OK dla podejścia `html2canvas` (idealne polskie znaki, tekst niezaznaczalny), czy wolisz osadzony TTF (~250 kB, tekst zaznaczalny)?
2. **Modele GLB:** wgrasz sam 6 plików `.glb` (dam listę nazw i wymagane meshe: `Shaft`, `Core`, `Tip`, `Grip`), czy w tej iteracji mam zrobić 6 proceduralnych „stand-inów" różniących się kształtem, gotowych do późniejszej podmiany na Twoje GLB?
