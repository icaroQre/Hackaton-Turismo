import React from "react";
import { Menu, MenuList } from "./styles"

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
                <li><a href="/">Cidades</a></li>
                <li><a href="/">Sobre nós</a></li>
                <li><a href="/">Entrar</a></li>
                <li><a href="/">Cadastrar</a></li>
            </MenuList>
        </>
    )
}

export default MobileMenu;