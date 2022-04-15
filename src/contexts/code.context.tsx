import React, {createContext, ReactNode, useContext, useState} from 'react';

interface CodeContextInterface {
  error: boolean;
  code: string;
  message: string;
}

const defaultState: CodeContextInterface = {
  error: false,
  code: '',
  message: ''
};

export const CodeContext = createContext<CodeContextInterface>(defaultState);

export const useCodeContext = () => useContext(CodeContext);

export const CodeContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [error, setError] = useState<boolean>(defaultState.error);
    const [code, setCode] = useState<string>(defaultState.code);
    const [message, setMessage] = useState<string>(defaultState.message);

    return (
      <CodeContext.Provider value={{error, code, message}}>
        {children}
      </CodeContext.Provider>
    );
};
