import React from "react";
import Navbar from '../../components/Navbar';
import SwiperFirst from "../../components/SwiperFirst";
import GlobalStyles from '../../styles/GlobalStyles';
import Reset from '../../styles/Reset';
import PlacesSection from "../../components/PlacesSection";
import Explore from "../../components/Explore"

function Home() {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <Navbar />
      <Explore/>
      <SwiperFirst style={{paddingBottom: "80px",
      borderBottom: "solid #E0E0E0 4px"}}/>
      <PlacesSection/>
    </>
  );
}

export default Home;
