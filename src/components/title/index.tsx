import React from 'react';

import {TitleText} from './styles';

import {useThemeContext} from '../../contexts/theme.context';
import {useLanguageContext} from '../../contexts/language.context';

interface TitleProps {}

const translations: Array<string> = [
  "地穴算术代码生成器",
  "Generador de código aritmético de cripta",
  "Générateur de code arithmétique crypté",
  "கிரிப்ட் எண்கணித குறியீடு ஜெனரேட்டர்",
  "Генератор арифметического кода склепа",
  "암호화 산술 코드 생성기",
  "مولد كود حسابي",
  "Crypt Arithmetic Code Generator",
];

const Title: React.FC<TitleProps> = () => {
  const {dark} = useThemeContext();
  const {language} = useLanguageContext();
  return <TitleText dark={dark}>{translations[language]}</TitleText>;
};

export default Title;
