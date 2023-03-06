import { createContext, useState } from 'react';

export const FontContext = createContext<Fonts>('serif');
export const FontActionContext = createContext({});

type Fonts = 'serif' | 'sans-serif' | 'mono';

interface FontProviderProps {
  children: React.ReactNode;
}

const FontProvider = ({ children }: FontProviderProps) => {
  const [font, setFont] = useState<Fonts>('serif');
  return (
    <FontActionContext.Provider value={setFont}>
      <FontContext.Provider value={font}>{children}</FontContext.Provider>
    </FontActionContext.Provider>
  );
};

export default FontProvider;
