import React from "react";
import Navbar from '../../components/Navbar';
import PrincipalSection from '../../components/PrincipalSection';
import SwiperFirst from "../../components/SwiperFirst";
import GlobalStyles from '../../styles/GlobalStyles';
import Reset from '../../styles/Reset';
import PlacesSection from "../../components/PlacesSection";

function Home() {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <Navbar />
      <PrincipalSection />
      <SwiperFirst style={{paddingBottom: "80px",
      borderBottom: "solid #E0E0E0 4px"}}/>
      <PlacesSection/>
    </>
  );
}

export default Home;
