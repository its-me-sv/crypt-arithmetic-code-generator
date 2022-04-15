import React from "react";

import {
  AppContainer,
  InputBox,
  Symbol,
  TextInput,
  Button,
  Message,
  Actions,
  Controls,
} from "./styles";

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
      <Controls dark={dark}>
        <InputBox>
          <TextInput dark={dark} placeholder="Addend" />
          <Symbol dark={dark}>+</Symbol>
          <TextInput dark={dark} placeholder="Augend" />
          <Symbol dark={dark}>=</Symbol>
          <TextInput dark={dark} placeholder="Sum" />
        </InputBox>
        <Actions>
          <Message error={dark}>Code generated Successfully</Message>
          <Button dark={dark}>Generate code</Button>
        </Actions>
      </Controls>
    </AppContainer>
  );
};

export default App;
