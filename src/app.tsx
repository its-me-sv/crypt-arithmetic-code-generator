import React from "react";

import {AppContainer, TitleText, ThemeButtonContainer} from './styles';

import {useThemeContext} from './contexts/theme.context';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const {dark, toggleDark} = useThemeContext();
  return (
    <AppContainer dark={dark}>
      <TitleText dark={dark}>Crypt Arithmetic Code Generator</TitleText>
      <ThemeButtonContainer onClick={toggleDark} dark={dark}>
        {dark ? "🌕" : "☀️"}
      </ThemeButtonContainer>
    </AppContainer>
  );
};

export default App;
