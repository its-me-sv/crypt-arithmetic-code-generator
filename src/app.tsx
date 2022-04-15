import React from "react";

import {AppContainer, InputBox, Symbol, TextInput, Button} from './styles';

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
      <div>
        <InputBox>
          <TextInput dark={dark} placeholder="Addend" />
          <Symbol dark={dark}>+</Symbol>
          <TextInput dark={dark} placeholder="Augend" />
          <Symbol dark={dark}>=</Symbol>
          <TextInput dark={dark} placeholder="Sum" />
        </InputBox>
        <Button dark={dark}>Generate code</Button>
      </div>
    </AppContainer>
  );
};

export default App;
