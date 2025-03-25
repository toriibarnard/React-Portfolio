import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>  {/* wrap the app with ThemeProvider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
