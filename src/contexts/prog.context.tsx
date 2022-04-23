import React, {createContext, ReactNode, useContext, useState} from "react";

interface ProgContextProps {
  prog: number;
  setProg?: (val: number) => void;
}

const defaultState: ProgContextProps = {
  prog: Math.floor(Math.random() * 5),
};

export const ProgContext = createContext<ProgContextProps>(defaultState);

export const useProgContext = () => useContext(ProgContext);

export const ProgContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [prog, setProg] = useState<number>(defaultState.prog);
  return (
    <ProgContext.Provider value={{prog, setProg}}>
      {children}
    </ProgContext.Provider>
  );
};
