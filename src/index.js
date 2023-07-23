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
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/presale" element={<Presale />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);

reportWebVitals();
