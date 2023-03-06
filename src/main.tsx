import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import FontProvider from './context/font-context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FontProvider>
      <App />
    </FontProvider>
  </React.StrictMode>
);
