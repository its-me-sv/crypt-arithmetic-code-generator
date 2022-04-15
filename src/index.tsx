import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import {ThemeContextProvider} from './contexts/theme.context';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
