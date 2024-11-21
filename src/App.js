import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
//import MonPremierComponent from './components/MonPremierComponent';
import Accueil from './components/Accueil';
import APropos from './components/APropos';
import Contact from './components/Contact';



function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/APropos">A Propos</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Accueil/>}/>
        <Route path="/APropos" element={<APropos/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </Router>
    );
}

export default App;
