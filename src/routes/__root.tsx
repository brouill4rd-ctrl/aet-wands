import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ParticleField } from "@/components/ParticleField";
import { AudioProvider } from "@/components/AudioProvider";
import { AdminProvider } from "@/components/AdminProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center glass-card rounded-2xl p-10">
        <h1 className="font-display text-7xl gold-gradient-text">404</h1>
        <h2 className="mt-4 font-display text-xl text-foreground">Strona zniknęła w mgle</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Zaklęcie zwiodło Cię na manowce. Powróć do Wszechnicy.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Wracaj do domu
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center glass-card rounded-2xl p-10">
        <h1 className="font-display text-xl text-foreground">Zaklęcie się nie powiodło</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Coś zakłóciło strumień magii. Spróbuj ponownie lub wróć do początku.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Spróbuj ponownie
          </button>
          <a
            href="/"
            className="rounded-md border border-primary/30 bg-background px-4 py-2 text-sm hover:bg-primary/10"
          >
            Do domu
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Wszechnica Magii Aeternum — Kreator Różdżek" },
      {
        name: "description",
        content:
          "Utkuj różdżkę godną adepta Wszechnicy Magii Aeternum. Interaktywny kreator różdżek i encyklopedia wandlore.",
      },
      { name: "author", content: "Aeternum" },
      { property: "og:title", content: "Wszechnica Magii Aeternum" },
      {
        property: "og:description",
        content:
          "Kreator różdżek i encyklopedia wandlore — drewno, rdzeń, elastyczność, długość.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Inter:wght@400;500;600&family=Dancing+Script:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <AdminProvider>
        <AudioProvider>
          <ParticleField />
          <div className="min-h-screen flex flex-col relative">
            <Navbar />
            <main className="flex-1">
              <Outlet />
            </main>
            <Footer />
          </div>
        </AudioProvider>
      </AdminProvider>
    </QueryClientProvider>
  );
}
