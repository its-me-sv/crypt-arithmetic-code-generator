import React, {createContext, ReactNode, useContext, useState} from 'react';

interface CodeContextInterface {
  status: number;
  code: string;
  loading: boolean;
  time: number;
  fetchCode?: (addend: string, augend: string, sum: string) => void;
}

const defaultState: CodeContextInterface = {
  status: 0,
  code: '',
  loading: false,
  time: 0
};

export const CodeContext = createContext<CodeContextInterface>(defaultState);

export const useCodeContext = () => useContext(CodeContext);

const API_URL = process.env.NODE_ENV === "development" 
? "http://192.168.29.97:5000"
: "https://cacg-g0twd6blo-its-me-sv.vercel.app";

export const CodeContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [status, setStatus] = useState<number>(defaultState.status);
  const [code, setCode] = useState<string>(defaultState.code);
  const [loading, setLoading] = useState<boolean>(defaultState.loading);
  const [time, setTime] = useState<number>(defaultState.time);

  const fetchCode = (addend: string, augend: string, sum: string) => {
    setLoading(true);
    fetch(`${API_URL}/api/generate`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ addend, augend, sum }),
    })
      .then((res) => res.json())
      .then(({ status: rs, code: rc, time: rt }) => {
        setStatus(rs);
        if (rs === 1) {
          setCode(rc);
          setTime(rt);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <CodeContext.Provider value={{
      status, code, loading, time, fetchCode
    }}>
      {children}
    </CodeContext.Provider>
  );
};
