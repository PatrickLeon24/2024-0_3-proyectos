import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoginPage from './presentation/login/LoginPage';
import MainPage from './presentation/main/MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);
