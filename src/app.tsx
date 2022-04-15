import React from "react";

import {AppContainer, TitleText} from './styles';

import {useThemeContext} from './contexts/theme.context';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const {dark, toggleDark} = useThemeContext();
  return (
    <AppContainer dark={dark}>
      <TitleText dark={dark}>Crypt Arithmetic Code Generator</TitleText>
      <span onClick={toggleDark}>{!dark ? "🌑" : "☀️"}</span>
    </AppContainer>
  );
};

export default App;
