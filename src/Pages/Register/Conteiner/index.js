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
            <C.Label>CONFIRMAR SENHA</C.Label>
            <C.Input type="password"/>
            <C.button_holder href="/">
              <C.ButtonSingin>CADASTRE-SE</C.ButtonSingin>
            </C.button_holder>
        </C.InputContent>
    </C.Container>
  )
}

export default Conteiner