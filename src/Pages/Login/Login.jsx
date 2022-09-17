import React from "react";
import GlobalStyles from '../../styles/GlobalStyles';
import Conteiner from "./Conteiner";
import LoginButtons from "./LoginButtons";
import logo from "../../components/images/logo.png"


const Login = () => {
  return (
    <div style={{display: 'flex', flexDirection: "column", alignItems: "center"}}>
      <div style={{marginTop: "8vh"}}> <img src={logo} alt="Logo Hackaton-Turismo" style={{height: "15vh", width: "15vh"}}/> </div>
      <Conteiner/>
      <LoginButtons/>
      <GlobalStyles/>
    </div>
  );
}
export default Login;