import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
