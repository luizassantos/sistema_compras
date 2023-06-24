import React, {useState, useContext, useEffect} from 'react'

import './App.css';
import Login from './acesso/Login';
import Cadastro from './acesso/Cadastro';

import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Outlet/>
    </div>
  )
}

export default App;
