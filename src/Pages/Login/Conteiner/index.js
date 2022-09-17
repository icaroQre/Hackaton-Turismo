import React from "react";
import * as C from "./styles";

const Conteiner = () => {
  return (
    <C.Container>
        <C.InputContent>
            <C.Label>EMAIL</C.Label>
            <C.Input/>
            <C.Label>SENHA</C.Label>
            <C.Input type="password"/>
            <C.button_holder href="#">
              <C.ButtonLogin>LOGIN</C.ButtonLogin>
              <C.ButtonSingin>CADASTRE-SE</C.ButtonSingin>
            </C.button_holder>
            <C.a href="#" ><C.Escrito>CONTINUAR COMO CONVIDADO</C.Escrito></C.a>
        </C.InputContent>
    </C.Container>
  )
}

export default Conteiner