import React from 'react';

import {AppContainer, Footer} from './styles';

import {useThemeContext} from './contexts/theme.context';

import Title from './components/title';
import ThemeButton from './components/theme-button';
import Controls from './components/controls';
import Country from './components/country';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const {dark} = useThemeContext();
  return (
    <AppContainer dark={dark}>
      <Title text="Crypt Arithmetic Code Generator" />
      <ThemeButton />
      <Country />
      <Controls />
      <Footer dark={dark}>
        Made with <span>❤</span> by <a href="https://github.com/its-me-sv" target="_blank" rel='noreferrer'>Suraj Vijay</a>
      </Footer>
    </AppContainer>
  );
};

export default App;
