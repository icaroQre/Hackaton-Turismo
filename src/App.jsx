import React from "react";
import Navbar from './components/Navbar';
import PrincipalSection from './components/PrincipalSection'
import SwiperFirst from "./components/SwiperFirst";

import 'swiper/css';

function App() {
  return (
    <>
      <Navbar />
      <PrincipalSection />
      <SwiperFirst />
    </>
  );
}

export default App;
