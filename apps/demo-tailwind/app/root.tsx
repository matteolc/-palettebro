import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';
import type { Route } from './+types/root';
import './app.css';
import { ThemeToggle } from './components/theme-toggle';
import { useTheme } from './hooks/use-theme';
import {
  CorePalette,
  BasePaletteColors,
  ChartPalette,
  ShadePalette,
  PaletteSectionTitle,
} from './components/palette';
import { ShadcnUtilities } from './components/utilities/shadcn';
import {
  MUI_COLOR_GROUPS,
  TW_COLOR_GROUPS,
  BOOTSTRAP_COLOR_GROUPS,
} from './const';
import { useEffect } from 'react';
import { useState } from 'react';
import type { ColorGroup } from './const';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export function meta() {
  return [
    {
      name: 'title',
      title: 'Palettebro',
    },
    {
      name: 'description',
      content: 'Create beautiful color palettes with Palettebro',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'og:title',
      property: 'og:title',
      content: 'Palettebro',
    },
    {
      name: 'og:description',
      property: 'og:description',
      content: 'Create beautiful color palettes with Palettebro',
    },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  useTheme();

  const [shades, setShades] = useState<ColorGroup[]>(TW_COLOR_GROUPS);
  const [utils, setUtils] = useState<Record<string, boolean>>({ shadcn: true });

  useEffect(() => {
    const root = document.documentElement;
    const styles = getComputedStyle(root);

    if (styles.getPropertyValue('--color-primary-950')) {
      return;
    }

    if (styles.getPropertyValue('--color-primary-10')) {
      setShades(MUI_COLOR_GROUPS);
      return;
    }

    setShades(BOOTSTRAP_COLOR_GROUPS);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: No loops
  useEffect(() => {
    const root = document.documentElement;
    const styles = getComputedStyle(root);
    if (styles.getPropertyValue('--color-sidebar')) {
      return;
    }
    setUtils({ ...utils, shadcn: false });
  }, []);

  return (
    <html lang="en" title="Palettebro">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main className="flex flex-col items-start justify-start space-y-8 pt-16 pb-12 max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
            <header className="flex flex-col items-center gap-9">
              <h1
                className={
                  'scroll-m-20 font-medium tracking-tighter text-balance text-7xl text-muted-foreground'
                }
              >
                Create beautiful color palettes with{' '}
                <span className="title-gradient text-transparent bg-clip-text font-bold pr-2">
                  <Link to="/">Palettebro</Link>
                </span>
              </h1>
            </header>
          </div>
          <BasePaletteColors />
          <PaletteSectionTitle>Core Palette</PaletteSectionTitle>
          <CorePalette />
          <PaletteSectionTitle>Utilities</PaletteSectionTitle>
          {utils.shadcn && <ShadcnUtilities />}
          <PaletteSectionTitle>Shades</PaletteSectionTitle>
          <ShadePalette shades={shades} />
          <PaletteSectionTitle>Chart</PaletteSectionTitle>
          <ChartPalette />
          <div className="fixed bottom-2 left-1/2 -translate-x-1/2 rounded-lg bg-background p-0.5 border border-border">
            <ThemeToggle />
          </div>
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
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
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
