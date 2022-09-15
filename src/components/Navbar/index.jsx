import React from "react";
import { useState } from "react";
import {Header, Logo, NavList, Name, Cadastrar } from './styles';
import MobileMenu from "../MobileMenu";

const Navbar = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <Header>
            <Logo />
            <Name> BandTour </Name>
            <MobileMenu 
            menuVisible = {menuVisible}
            setMenuVisible = {setMenuVisible} />
            <NavList>
                <li><a href="/">Cidades</a></li>
                <li><a href="/">Sobre nós</a></li>
                <li><a href="/">Entrar</a></li>
                <Cadastrar><a href="/">Cadastrar</a></Cadastrar>
            </NavList>
        </Header>
    )
}

export default Navbar;