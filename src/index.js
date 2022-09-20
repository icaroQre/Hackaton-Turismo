import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import Reset from './styles/Reset';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyles />
    <App />
  </React.StrictMode>
);