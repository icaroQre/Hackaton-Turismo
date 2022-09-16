import React from "react";
import Navbar from '../../components/Navbar';
import PrincipalSection from '../../components/PrincipalSection';
import SwiperFirst from "../../components/SwiperFirst";
import GlobalStyles from '../../styles/GlobalStyles';
import Reset from '../../styles/Reset';


function Home() {
  return (
    <>
      <Navbar />
      <PrincipalSection />
      <SwiperFirst />
      <GlobalStyles />
      <Reset />
    </>
  );
}

export default Home;
