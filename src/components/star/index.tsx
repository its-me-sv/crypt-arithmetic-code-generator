import React from "react";

import {StarContainer} from './styles';

import {useThemeContext} from '../../contexts/theme.context';

interface StarProps {}

const Star: React.FC<StarProps> = () => {
  const {dark} = useThemeContext();
  return (
    <StarContainer
      dark={dark}
      href="https://github.com/its-me-sv/crypt-arithmetic-code-generator"
      target="_blank"
      rel="noreferrer"
    >
      ⭐ on GitHub
    </StarContainer>
  );
};

export default Star;