import React from "react";

import {AppContainer, InputBox, Symbol, TextInput} from './styles';

import {useThemeContext} from './contexts/theme.context';

import Title from "./components/title";
import ThemeButton from './components/theme-button';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const {dark} = useThemeContext();
  return (
    <AppContainer dark={dark}>
      <Title text="Crypt Arithmetic Code Generator" />
      <ThemeButton />
      <InputBox>
        <TextInput placeholder="Addend" />
        <Symbol>+</Symbol>
        <TextInput placeholder="Augend" />
        <Symbol>=</Symbol>
        <TextInput placeholder="Sum" />
      </InputBox>
    </AppContainer>
  );
};

export default App;
