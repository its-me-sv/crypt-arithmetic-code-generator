import React from 'react';

import {AppContainer} from './styles';

import {useThemeContext} from './contexts/theme.context';

import Title from './components/title';
import ThemeButton from './components/theme-button';
import Controls from './components/controls';
import Country from './components/country';
import Footer from './components/footer';
import Star from './components/star';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const {dark} = useThemeContext();
  return (
    <AppContainer dark={dark}>
      <Title />
      <ThemeButton />
      <Country />
      <Controls />
      <Footer />
      <Star />
    </AppContainer>
  );
};

export default App;
