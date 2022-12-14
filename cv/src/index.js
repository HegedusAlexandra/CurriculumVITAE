import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Gallery from './components/Gallery';
import Experience from './components/Experience';
import Message from './components/Message'
import Motivation from './components/Motivation'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="CurriculumVitae"  element={<App />}>
        <Route path="motivation" element={<Motivation />} />
        <Route path="experience" element={<Experience />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="message" element={<Message />} />
      </Route>      
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
