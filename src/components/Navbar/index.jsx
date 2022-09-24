import React from "react";
import { useState } from "react";
import {Header, Logo, NavList, Name, Cadastrar } from './styles';
import MobileMenu from "../MobileMenu";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <Header>
            <Link to="/">
                <Logo />
            </Link>
            <Name><Link className="link" to="/"> LocalizaBand </Link></Name>
            <MobileMenu 
            menuVisible = {menuVisible}
            setMenuVisible = {setMenuVisible} />
            <NavList>
                <li><Link className="a" to="/">Cidades</Link></li>
                <li><Link className="a" to="/">Sobre nós</Link></li>
                <li><Link className="a" to="/login">Entrar</Link></li>
                <Cadastrar><Link to="/register">Cadastrar</Link></Cadastrar>
            </NavList>
        </Header>
    )
}

export default Navbar;