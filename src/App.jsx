import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register'
import Hoteis from "./Pages/Hoteis";
import Atracoes from "./Pages/Atracoes";
import Bares from "./Pages/Bares";
import Restaurantes from "./Pages/Restaurantes";
import Sobre from "./Pages/Sobre"





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element = {<Home/>} />
        <Route exact path="/login" element = {<Login/>} />
        <Route exact path="/register" element = {<Register/>} />
        <Route exact path="/hoteis/:id" element = {<Hoteis/>} />
        <Route exact path="/atracoes/:id" element = {<Atracoes/>} />
        <Route exact path="/bares/:id" element = {<Bares/>} />
        <Route exact path="/restaurantes/:id" element = {<Restaurantes/>} />
        <Route exact path="/sobre" element = {<Sobre/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
