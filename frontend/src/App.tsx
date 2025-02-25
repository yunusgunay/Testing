import React from "react";
import './App.css'

import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import About from './components/About';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>

        <Route path = "" element={<Login/>}/>

        <Route path = "/about" element={<About/>}/>

      </Routes>    
    </div>
  );
};

export default App;
