import React, {useRef, MutableRefObject} from 'react';

import {
  Container, InputBox, 
  TextInput, Symbol, 
  Actions, Message, 
  Button, CodeContainer
} from './styles';
import {translations, statusText} from './data';

import {useThemeContext} from '../../contexts/theme.context' ;
import {useCodeContext} from '../../contexts/code.context';
import {useLanguageContext} from '../../contexts/language.context';

interface ControlsInterface {}

const Controls: React.FC<ControlsInterface> = () => {
  const {dark} = useThemeContext();
  const {language} = useLanguageContext();
  const {status, code, time, loading,fetchCode} = useCodeContext();
  
  const addendRef = useRef() as MutableRefObject<HTMLInputElement>;
  const augendRef = useRef() as MutableRefObject<HTMLInputElement>;
  const resultRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleClick = () => {
    if (loading) return;
    const addend = addendRef.current.value;
    const augend = augendRef.current.value;
    const result = resultRef.current.value;
    fetchCode!(addend, augend, result);
  };
  
  return (
    <Container dark={dark}>
      <InputBox>
        <TextInput dark={dark} placeholder={translations[language].p1} ref={addendRef} />
        <Symbol dark={dark}>+</Symbol>
        <TextInput dark={dark} placeholder={translations[language].p2} ref={augendRef} />
        <Symbol dark={dark}>=</Symbol>
        <TextInput dark={dark} placeholder={translations[language].p3} ref={resultRef} />
      </InputBox>
      <Actions>
        <Message error={status < 0}>
          {statusText[language][status + '']}
          {status === 1 ? `${time} ms` : ''}
        </Message>
        <Button dark={dark} onClick={handleClick} disabled={loading}>
          {translations[language].btn}
        </Button>
      </Actions>
      {code.length > 0 && <CodeContainer value={code} dark={dark} />}
    </Container>
  );
};

export default Controls;
