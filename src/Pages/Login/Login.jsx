import React from "react";
import GlobalStyles from '../../styles/GlobalStyles';
import Conteiner from "./Conteiner";
import LoginButtons from "./LoginButtons";


const Login = () => {
  return (
    <div>
      <h1 style={{textAlign: 'center', fontSize: '60px', marginTop: '90px', marginBottom:'50px', fontFamily: 'Maven Pro',}}>LOGO</h1>
      <Conteiner/>
      <LoginButtons/>
      <GlobalStyles/>
    </div>
  );
}
export default Login;