import { lazy, Suspense, useEffect, useState } from "react";

const WandCanvasLazy = lazy(() =>
  import("./WandCanvas").then((m) => ({ default: m.WandCanvas })),
);

type Props = {
  woodId?: string;
  coreId?: string;
  flexId?: string;
  length: number;
  houseColor?: string;
  className?: string;
};

export function WandCanvasClient(props: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className={props.className ?? "w-full h-full"}>
        <div className="w-full h-full grid place-items-center text-xs text-muted-foreground">
          Przywoływanie różdżki…
        </div>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className={props.className ?? "w-full h-full"}>
          <div className="w-full h-full grid place-items-center text-xs text-muted-foreground">
            Ładowanie modelu 3D…
          </div>
        </div>
      }
    >
      <WandCanvasLazy {...props} />
    </Suspense>
  );
}
