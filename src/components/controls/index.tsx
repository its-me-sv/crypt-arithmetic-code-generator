import React, {useRef, MutableRefObject} from 'react';

import {
  Container, InputBox, 
  TextInput, Symbol, 
  Actions, Message, 
  Button
} from './styles';

import {useThemeContext} from '../../contexts/theme.context' ;
import {useCodeContext} from '../../contexts/code.context';

interface ControlsInterface {}

const Controls: React.FC<ControlsInterface> = () => {
  const {dark} = useThemeContext();
  const {message, error} = useCodeContext();
  
  const addendRef = useRef() as MutableRefObject<HTMLInputElement>;
  const augendRef = useRef() as MutableRefObject<HTMLInputElement>;
  const resultRef = useRef() as MutableRefObject<HTMLInputElement>;

  const handleClick = () => {
    const addend = addendRef.current.value;
    const augend = augendRef.current.value;
    const result = resultRef.current.value;
    window.alert(JSON.stringify({addend, augend, result}));
  };
  
  return (
    <Container dark={dark}>
      <InputBox>
        <TextInput dark={dark} placeholder="Addend" ref={addendRef} />
        <Symbol dark={dark}>+</Symbol>
        <TextInput dark={dark} placeholder="Augend" ref={augendRef} />
        <Symbol dark={dark}>=</Symbol>
        <TextInput dark={dark} placeholder="Sum" ref={resultRef} />
      </InputBox>
      <Actions>
        <Message error={error}>{message}</Message>
        <Button dark={dark} onClick={handleClick}>Generate code</Button>
      </Actions>
    </Container>
  );
};

export default Controls;
