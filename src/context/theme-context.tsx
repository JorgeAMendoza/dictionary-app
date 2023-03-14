import { createContext, useState } from 'react';

export const ThemeContext = createContext<Theme>('light');
export const ThemeActionContext = createContext<React.Dispatch<
  React.SetStateAction<Theme>
> | null>(null);

type Theme = 'light' | 'dark';

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeActionContext.Provider value={setTheme}>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </ThemeActionContext.Provider>
  );
};

export default ThemeContextProvider;
