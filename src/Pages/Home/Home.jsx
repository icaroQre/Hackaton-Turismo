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
      <PlacesSection text = "Próximos a você" />
      <PlacesSection text = "Farmácias" />
      <PlacesSection text = "Restauranstes" />
      <PlacesSection text = "Pontos turísticos" />
      <PlacesSection text = "Igrejas" />
      <PlacesSection text = "Mercados" />
      <PlacesSection text = "Bares" />
    </>
  );
}

export default Home;
