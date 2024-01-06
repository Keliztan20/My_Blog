import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyADGvw8OCY1yndzqORmi8V7pnugaCP-Zgg",
  authDomain: "my-react-blog-523fd.firebaseapp.com",
  projectId: "my-react-blog-523fd",
  storageBucket: "my-react-blog-523fd.appspot.com",
  messagingSenderId: "137618498036",
  appId: "1:137618498036:web:4a283e61ed2000846b99a1"
};

const app = initializeApp(firebaseConfig);

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
