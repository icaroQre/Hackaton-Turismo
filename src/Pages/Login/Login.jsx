import React from "react";
import GlobalStyles from '../../styles/GlobalStyles';
import Conteiner from "./Conteiner";
import LoginButtons from "./LoginButtons";
import logo from "../../components/images/localize-escrito.png"
import BackButton from "../../components/BackButton";


const Login = () => {
  return (
    <>
      <BackButton />
      <div style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
        <div style={{ marginTop: "8vh" }}> <img src={logo} alt="Logo Hackaton-Turismo" style={{ height: "20vh", width: "20vh", }} /> </div>
        <Conteiner />
        <LoginButtons />
        <GlobalStyles />
      </div>
    </>
  );
}
export default Login;