import React from "react";

import {StarContainer} from './styles';
import {translations} from './data';

import {useThemeContext} from '../../contexts/theme.context';
import {useLanguageContext} from '../../contexts/language.context';

interface StarProps {}

const Star: React.FC<StarProps> = () => {
  const {dark} = useThemeContext();
  const {language} = useLanguageContext();
  return (
    <StarContainer
      dark={dark}
      href="https://github.com/its-me-sv/crypt-arithmetic-code-generator"
      target="_blank"
      rel="noreferrer"
    >
      {translations[language]}
    </StarContainer>
  );
};

export default Star;