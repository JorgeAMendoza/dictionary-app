import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FontProvider from './context/font-context';
import ThemeContextProvider from './context/theme-context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <FontProvider>
        <App />
      </FontProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
