import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register'





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element = {<Home/>} />
        <Route exact path="/login" element = {<Login/>} />
        <Route exact path="/register" element = {<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
