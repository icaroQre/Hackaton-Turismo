import React from "react";
import * as C from './styles'
import { Link } from 'react-router-dom';
const Footer = () => {

    return (
        <C.Container>
            <C.img />
            <C.span1>© Copyright 2022 Todos os direitos reservados Localize com Agência de Turismo Online</C.span1>
            
            <C.Footer_Info>
                <li><Link className="a" to="/">Termos de uso</Link></li>
                <li><Link className="a" to="/">Codigo de conduta</Link></li>
                <li><Link className="a" to="/">Dicas de Segurança</Link></li>
            </C.Footer_Info>
            
        </C.Container>
    )
}

export default Footer;