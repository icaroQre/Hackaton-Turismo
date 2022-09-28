import React from "react";
import { Menu, MenuList } from "./styles"
import { Link } from 'react-router-dom'

const MobileMenu = ({ menuVisible, setMenuVisible }) => {

    function viewMenu(){
        if(menuVisible === true){
            setMenuVisible(false);
        }else{ setMenuVisible(true)}
    }
    return(
        <>
            <Menu onClick={viewMenu}>
                <div></div>
                <div></div>
                <div></div>
            </Menu>
            <MenuList visible = {menuVisible}>
                <Link className="menuMobileHover" to="/"><div>Cidades</div></Link>
                <Link className="menuMobileHover" to="/sobre"><div>Sobre nós</div></Link>
                <Link className="menuMobileHover" to="/register"><div>Entrar</div></Link>
                <Link className="menuMobileHover" to="/login"><div className="cadastrar">Cadastrar</div></Link>
            </MenuList>
        </>
    )
}

export default MobileMenu;