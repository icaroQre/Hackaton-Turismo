import React from "react";
import Navbar from '../../components/Navbar';
import SwiperFirst from "../../components/SwiperFirst";
import GlobalStyles from '../../styles/GlobalStyles';
import Reset from '../../styles/Reset';
import Explore from "../../components/Explore"
import PlaceSection from "../../components/PlaceSection";

function Home() {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <Navbar />
      <Explore/>
      <SwiperFirst style={{paddingBottom: "80px",
      borderBottom: "solid #E0E0E0 4px"}}/>
      <PlaceSection />
    </>
  );
}

export default Home;
