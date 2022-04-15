import React, {createContext, ReactNode, useContext, useState} from 'react';

interface ThemeContextProps {
  dark: boolean;
  toggleDark?: () => void;
}

const defaultState: ThemeContextProps = {
  dark: false,
};

export const ThemeContext = createContext<ThemeContextProps>(defaultState);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [dark, setDark] = useState<boolean>(defaultState.dark);
  const toggleDark = () => setDark(!dark);
  return (
    <ThemeContext.Provider value={{dark, toggleDark}}>{children}</ThemeContext.Provider>
  );
};
