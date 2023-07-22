import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyActRkfJYdl11HO1PDiYf2n1DpOnVKsF7k",
  authDomain: "loginsignup-a6301.firebaseapp.com",
  projectId: "loginsignup-a6301",
  storageBucket: "loginsignup-a6301.appspot.com",
  messagingSenderId: "41294074773",
  appId: "1:41294074773:web:c57ce0f8ecd63b0d101c9c",
  measurementId: "G-RXFB7SKKGG"
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
