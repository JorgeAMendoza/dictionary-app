import { createContext, useState } from 'react';

export const FontContext = createContext<Fonts>('sans-serif');
export const FontActionContext = createContext<React.Dispatch<
  React.SetStateAction<Fonts>
> | null>(null);

export type Fonts = 'serif' | 'sans-serif' | 'mono';

interface FontProviderProps {
  children: React.ReactNode;
}

const FontProvider = ({ children }: FontProviderProps) => {
  const [font, setFont] = useState<Fonts>('sans-serif');
  return (
    <FontActionContext.Provider value={setFont}>
      <FontContext.Provider value={font}>{children}</FontContext.Provider>
    </FontActionContext.Provider>
  );
};

export default FontProvider;
