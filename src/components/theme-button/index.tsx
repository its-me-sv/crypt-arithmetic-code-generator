import React from 'react';

import {ThemeButtonContainer} from './styles';

import {useThemeContext} from '../../contexts/theme.context';

interface ThemeButtonProps {}

const ThemeButton: React.FC<ThemeButtonProps> = () => {
  const {dark, toggleDark} = useThemeContext();
  return (
    <ThemeButtonContainer onClick={toggleDark!} dark={dark}>
      {dark ? "🌜" : "🌞"}
    </ThemeButtonContainer>
  );
};

export default ThemeButton;
