import React from 'react';

import {Container} from './styles';

import {useThemeContext} from '../../contexts/theme.context';
import {useLanguageContext} from '../../contexts/language.context';

const transalations: Array<{f: string, l: string}> = [
  {f: '用', l: '经过'},
  {f: 'Hecho con', l: 'por'},
  {f: 'Fabriqué avec', l: 'par'},
  {f: 'கொண்டு செய்யப்பட்டது', l: 'மூலம்'},
  {f: 'Сделано с', l: 'по'},
  {f: '로 만든', l: '~에 의해'},
  {f: 'مصنوع من', l: 'بواسطة'},
  {f: 'Made with', l: 'by'},
];

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const {dark} = useThemeContext();
  const {language} = useLanguageContext();

  return (
    <Container dark={dark}>
      {`${transalations[language].f} `}
      <span>❤</span> {`${transalations[language].l} `}
      <a href="https://github.com/its-me-sv" target="_blank" rel="noreferrer">
        Suraj Vijay
      </a>
    </Container>
  );
};

export default Footer;
