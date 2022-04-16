import React, {createContext, ReactNode, useContext, useState} from 'react';
import PythonCode from '../temp';

interface CodeContextInterface {
  status: number;
  code: string;
  fetchCode?: (addend: string, augend: string, sum: string) => void;
}

const defaultState: CodeContextInterface = {
  status: 0,
  code: PythonCode,
};

export const CodeContext = createContext<CodeContextInterface>(defaultState);

export const useCodeContext = () => useContext(CodeContext);

export const CodeContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [status, setStatus] = useState<number>(defaultState.status);
  const [code, setCode] = useState<string>(defaultState.code);

  const fetchCode = (addend: string, augend: string, sum: string) => {
    if (!addend.length || !augend.length || !sum.length) {
      setStatus(-1);
      return;
    }
    setStatus(1);
  };

  return (
    <CodeContext.Provider value={{status, code, fetchCode}}>
      {children}
    </CodeContext.Provider>
  );
};
