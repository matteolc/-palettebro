import { Moon, Sun, Monitor } from 'lucide-react';

export function ThemeToggle() {
  const handleThemeChange = (theme: 'light' | 'dark' | 'system') => {
    if (theme === 'system') {
      localStorage.removeItem('theme');
      document.documentElement.setAttribute(
        'data-theme',
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light',
      );
    } else {
      localStorage.theme = theme;
      document.documentElement.setAttribute(
        'data-theme',
        theme === 'dark' ? 'dark' : 'light',
      );
    }
  };

  const ThemeToggleButton = ({ theme, label, icon }: { theme: 'light' | 'dark' | 'system', label: string, icon: React.ReactNode }) => {
    return (
      <button
        type="button"
        onClick={() => handleThemeChange(theme)}
        className="inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground hover:bg-muted"
        aria-label={label}
      >
        {icon}
      </button>
    );
  };
  

  return (
    <div className="flex items-center gap-0">
      <ThemeToggleButton
        theme="system"
        label="Use system theme"
        icon={<Monitor className="h-5 w-5" />}
      />
      <ThemeToggleButton
        theme="light"
        label="Use light theme"
        icon={<Sun className="h-5 w-5" />}
      />
      <ThemeToggleButton
        theme="dark"
        label="Use dark theme"
        icon={<Moon className="h-5 w-5" />}
      />
    </div>
  );
}
