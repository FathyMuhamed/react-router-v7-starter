import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { Suspense, useEffect } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";

import type { Route } from "./+types/root";
import "./app.css";
import i18n from "./i18n";

const languageFallback =
  (Array.isArray(i18n.options.fallbackLng)
    ? i18n.options.fallbackLng[0]
    : i18n.options.fallbackLng) ?? "en";

function AppShell() {
  const { i18n } = useTranslation();
  const currentLanguage =
    i18n.resolvedLanguage ?? i18n.language ?? languageFallback;
  const direction = i18n.dir(currentLanguage);

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = direction;
  }, [currentLanguage, direction]);

  return <Outlet />;
}

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const currentLanguage =
    i18n.resolvedLanguage ?? i18n.language ?? languageFallback;
  const direction = i18n.dir(currentLanguage);

  return (
    <html lang={currentLanguage} dir={direction}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense
        fallback={
          <div className="p-4 text-center text-gray-700 dark:text-gray-200">
            {i18n.t("common:loadingFallback")}
          </div>
        }
      >
        <AppShell />
      </Suspense>
    </I18nextProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = i18n.t("common:errorDefaultTitle");
  let details = i18n.t("common:errorDefaultDescription");
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message =
      error.status === 404
        ? i18n.t("common:error404Title")
        : i18n.t("common:errorDefaultTitle");
    details =
      error.status === 404
        ? i18n.t("common:error404Description")
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre
          className="w-full p-4 overflow-x-auto"
          aria-label={i18n.t("common:errorStackLabel")}
        >
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
