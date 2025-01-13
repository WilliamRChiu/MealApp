import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthenticationContextProvider } from './context/AuthenticationContext';
import { MealContextProvider } from './context/MealContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MealContextProvider>
    <AuthenticationContextProvider>
    <App />
    </AuthenticationContextProvider>
    </MealContextProvider>
  </React.StrictMode>
);
//Authentication context provider wraps the app object to pass down the status of if a user is logged in