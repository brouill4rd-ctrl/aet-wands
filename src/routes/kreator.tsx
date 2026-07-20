import { createFileRoute } from "@tanstack/react-router";
import { KreatorFlow } from "@/components/KreatorFlow";

export const Route = createFileRoute("/kreator")({
  head: () => ({
    meta: [
      { title: "Kreator Różdżek — Wszechnica Aeternum" },
      {
        name: "description",
        content:
          "Interaktywny kreator różdżek Wszechnicy Aeternum. Wybierz drewno, rdzeń, elastyczność i długość.",
      },
      { property: "og:title", content: "Kreator Różdżek — Aeternum" },
      {
        property: "og:description",
        content: "Utkuj różdżkę w czterech krokach.",
      },
    ],
  }),
  component: KreatorFlow,
});
