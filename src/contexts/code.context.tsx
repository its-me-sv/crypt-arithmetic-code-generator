import React, {createContext, ReactNode, useContext, useState} from 'react';
import {celeberate} from '../utils/confetti.util';

interface CodeContextInterface {
  status: number;
  code: string;
  loading: boolean;
  time: number;
  lang: number;
  fetchCode?: (addend: string, augend: string, sum: string, plg: number) => void;
  resetCode?: () => void;
}

const defaultState: CodeContextInterface = {
  status: 0,
  code: '',
  loading: false,
  time: 0,
  lang: 0
};

export const CodeContext = createContext<CodeContextInterface>(defaultState);

export const useCodeContext = () => useContext(CodeContext);

const API_URL = process.env.NODE_ENV === "development" 
? "http://192.168.29.97:5000"
: "https://cacg-47uib3ae8-its-me-sv.vercel.app";

export const CodeContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [status, setStatus] = useState<number>(defaultState.status);
  const [code, setCode] = useState<string>(defaultState.code);
  const [loading, setLoading] = useState<boolean>(defaultState.loading);
  const [time, setTime] = useState<number>(defaultState.time);
  const [lang, setLang] = useState<number>(defaultState.lang);

  const fetchCode = (addend: string, augend: string, sum: string, plg: number) => {
    setLoading(true);
    fetch(`${API_URL}/api/generate?lang=${plg}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ addend, augend, sum }),
    })
      .then((res) => res.json())
      .then(({ status: rs, code: rc, time: rt, lang: lg }) => {
        setStatus(rs);
        setLang(lg);
        if (rs === 1) {
          setCode(rc);
          setTime(rt);
          celeberate();
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const resetCode = () => {
    setStatus(defaultState.status);
    setCode(defaultState.code);
    setLoading(defaultState.loading);
    setTime(defaultState.time);
    setLang(defaultState.lang);
  };

  return (
    <CodeContext.Provider value={{
      status, code, loading, time, lang,
      fetchCode, resetCode
    }}>
      {children}
    </CodeContext.Provider>
  );
};
