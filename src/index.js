import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import './presale.css';
import App from './App';
import Presale from './Presale';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes here
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

      <App></App>
      <Routes>
        <Route path="/presale" element={<Presale />} />

        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
