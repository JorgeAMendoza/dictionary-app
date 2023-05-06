import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext<Theme>('light');
export const ThemeActionContext = createContext<React.Dispatch<
  React.SetStateAction<Theme>
> | null>(null);

export type Theme = 'light' | 'dark';

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const { matches: prefersDark } = window.matchMedia(
      '(prefers-color-scheme: dark'
    );
    if (prefersDark) setTheme('dark');
  }, []);

  return (
    <ThemeActionContext.Provider value={setTheme}>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </ThemeActionContext.Provider>
  );
};

export default ThemeContextProvider;
