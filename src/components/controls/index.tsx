import React, {useRef, MutableRefObject, useEffect} from 'react';

import {
  Container, InputBox, 
  TextInput, Symbol, 
  Actions, Message, 
  Button, CodeContainer,
  CodeAndCopy, CopyImage
} from './styles';
import {translations, statusText, defaultText} from './data';

import BlockLoader from '../loader';
import Progs from '../progs';

import {useThemeContext} from '../../contexts/theme.context' ;
import {useCodeContext} from '../../contexts/code.context';
import {useLanguageContext} from '../../contexts/language.context';
import {useProgContext} from '../../contexts/prog.context';

interface ControlsInterface {}

const Controls: React.FC<ControlsInterface> = () => {
  const {dark} = useThemeContext();
  const {language} = useLanguageContext();
  const {
    status, code, time, loading, 
    fetchCode, resetCode
  } = useCodeContext();
  const {prog} = useProgContext();
  
  const addendRef = useRef() as MutableRefObject<HTMLInputElement>;
  const augendRef = useRef() as MutableRefObject<HTMLInputElement>;
  const resultRef = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    resetCode!();
  }, [prog]);

  const handleClick = () => {
    if (loading) return;
    const addend = addendRef.current.value;
    const augend = augendRef.current.value;
    const result = resultRef.current.value;
    fetchCode!(
      addend.toUpperCase(),
      augend.toUpperCase(),
      result.toUpperCase(),
      prog
    );
  };

  const copyCode = () => navigator.clipboard.writeText(code);
  
  return (
    <>
      {loading && <BlockLoader />}
      <Container dark={dark}>
        <InputBox>
          <TextInput
            dark={dark}
            placeholder={translations[language].p1}
            ref={addendRef}
            readOnly={loading}
            disabled={loading}
          />
          <Symbol dark={dark}>+</Symbol>
          <TextInput
            dark={dark}
            placeholder={translations[language].p2}
            ref={augendRef}
            readOnly={loading}
            disabled={loading}
          />
          <Symbol dark={dark}>=</Symbol>
          <TextInput
            dark={dark}
            placeholder={translations[language].p3}
            ref={resultRef}
            readOnly={loading}
            disabled={loading}
          />
        </InputBox>
        <Actions>
          <Progs />
          <Button dark={dark} onClick={handleClick} disabled={loading}>
            {translations[language].btn}
          </Button>
        </Actions>
        <Message error={status < 0}>
          {statusText[language][status + ""]}
          {status === 1 && `${time} ms`}
          {status === 0 && "\u200C"}
        </Message>
        <CodeAndCopy>
          <CodeContainer
            value={code || defaultText[language]}
            dark={dark}
          />
          {code.length > 0 && <CopyImage dark={dark} onClick={copyCode} />}
        </CodeAndCopy>
      </Container>
    </>
  );
};

export default Controls;
