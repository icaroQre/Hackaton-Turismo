import React from "react";
import GlobalStyles from '../../styles/GlobalStyles';
import Conteiner from "./Conteiner";
import LoginButtons from "./LoginButtons";


const Login = () => {
  return (
    <div style={{display: 'flex', flexDirection: "column", alignItems: "center"}}>
      <h1 style={{textAlign: 'center', fontSize: '60px', marginTop: '10vh', marginBottom:'auto', fontFamily: 'Maven Pro',}}>LOGO</h1>
      <Conteiner/>
      <LoginButtons/>
      <GlobalStyles/>
    </div>
  );
}
export default Login;