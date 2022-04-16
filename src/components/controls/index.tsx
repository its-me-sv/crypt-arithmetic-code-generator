import React, {useRef, MutableRefObject} from 'react';

import {
  Container, InputBox, 
  TextInput, Symbol, 
  Actions, Message, 
  Button, CodeContainer
} from './styles';

import {useThemeContext} from '../../contexts/theme.context' ;
import {useCodeContext} from '../../contexts/code.context';
import {useLanguageContext} from '../../contexts/language.context';

const translations: Array<{p1: string; p2: string; p3: string; btn: string}> = [
  {p1: '加数', p2: '奥让德', p3: '和', btn: '生成代码'},
  {p1: 'Suplemento', p2: 'aumento', p3: 'Suma', btn: 'Generar codigo'},
  {p1: 'Ajouter', p2: 'Augend', p3: 'Somme', btn: 'Générer du code'},
  {p1: 'சேர்க்கை', p2: 'ஆஜெண்ட்', p3: 'தொகை', btn: 'குறியீட்டை உருவாக்கவும்'},
  {p1: 'Добавить', p2: 'Ожан', p3: 'Сумма', btn: 'Сгенерировать код'},
  {p1: '가수', p2: '어젠드', p3: '합집합', btn: '코드 생성'},
  {p1: 'الإضافة', p2: 'يبشر', p3: 'مجموع', btn: 'إنشاء التعليمات البرمجية'},
  {p1: 'Addend', p2: 'Augend', p3: 'Sum', btn: 'Generate code'},
];

interface ControlsInterface {}

const Controls: React.FC<ControlsInterface> = () => {
  const {dark} = useThemeContext();
  const {language} = useLanguageContext();
  const {message, error, code} = useCodeContext();
  
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
        <TextInput dark={dark} placeholder={translations[language].p1} ref={addendRef} />
        <Symbol dark={dark}>+</Symbol>
        <TextInput dark={dark} placeholder={translations[language].p2} ref={augendRef} />
        <Symbol dark={dark}>=</Symbol>
        <TextInput dark={dark} placeholder={translations[language].p3} ref={resultRef} />
      </InputBox>
      <Actions>
        <Message error={error}>{message}</Message>
        <Button dark={dark} onClick={handleClick}>
          {translations[language].btn}
        </Button>
      </Actions>
      <CodeContainer value={code} dark={dark} />
    </Container>
  );
};

export default Controls;
