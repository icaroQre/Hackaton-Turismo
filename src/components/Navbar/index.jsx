import React from "react";
import { useState } from "react";
import {Header, Logo, NavList, Cadastrar, Logo2 } from './styles';
import MobileMenu from "../MobileMenu";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <Header>
            <Link to="/details">
                <Logo />
            </Link>
            <Link className="link" to="/">
                <Logo2/>
            </Link>
            <MobileMenu
            menuVisible = {menuVisible}
            setMenuVisible = {setMenuVisible} />
            <NavList>
                <li><Link className="a" to="/">Cidades</Link></li>
                <li><Link className="a" to="/sobre">Sobre nós</Link></li>
                <li><Link className="a" to="/login">Entrar</Link></li>
                <Cadastrar><Link to="/register">Cadastrar</Link></Cadastrar>
            </NavList>
        </Header>
    )
}

export default Navbar;