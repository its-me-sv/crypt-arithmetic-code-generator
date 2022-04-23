import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import {ThemeContextProvider} from './contexts/theme.context';
import {CodeContextProvider} from './contexts/code.context';
import {LanguageContextProvider} from './contexts/language.context';
import {ProgContextProvider} from './contexts/prog.context';
import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <CodeContextProvider>
        <LanguageContextProvider>
          <ProgContextProvider>
            <App />
          </ProgContextProvider>
        </LanguageContextProvider>
      </CodeContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
