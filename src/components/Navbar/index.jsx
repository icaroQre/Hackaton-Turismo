import React from "react";
import { useState } from "react";
import {Header, Logo, NavList, Name, Cadastrar } from './styles';
import MobileMenu from "../MobileMenu";
import {Link} from 'react-router-dom';

const Navbar = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <Header>
            <Logo />
            <Name> LocalizaBand </Name>
            <MobileMenu 
            menuVisible = {menuVisible}
            setMenuVisible = {setMenuVisible} />
            <NavList>
                <li><Link to="/">Cidades</Link></li>
                <li><Link to="/">Sobre nós</Link></li>
                <li><Link to="/login">Entrar</Link></li>
                <Cadastrar><Link to="/register">Cadastrar</Link></Cadastrar>
            </NavList>
        </Header>
    )
}

export default Navbar;