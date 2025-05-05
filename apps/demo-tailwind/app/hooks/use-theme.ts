import { useEffect } from 'react';

export const useTheme = () => {
  useEffect(() => {
    // Check localStorage and system preference
    const isDarkMode =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    document.documentElement.setAttribute(
      'data-theme',
      isDarkMode ? 'dark' : 'light',
    );

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!('theme' in localStorage)) {
        document.documentElement.setAttribute(
          'data-theme',
          e.matches ? 'dark' : 'light',
        );
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
};
