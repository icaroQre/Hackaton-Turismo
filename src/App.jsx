import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register'
import Details from "./Pages/Details/Details";
import Sobre from "./Pages/Sobre"





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element = {<Home/>} />
        <Route exact path="/login" element = {<Login/>} />
        <Route exact path="/register" element = {<Register/>} />
        <Route exact path="/details" element = {<Details/>} />
        <Route exact path="/sobre" element = {<Sobre/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
