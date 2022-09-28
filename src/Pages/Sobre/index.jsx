import React from 'react'
import * as C from './styles'
import Navbar from '../../components/Navbar';


const Sobre = () => {
    return (
        <C.tela>
            <Navbar/>
            <C.Conteiner />
            <C.texto>
                <C.t1>Nosso objetivo é conectar o turista com a cidade!</C.t1>
                <C.t2>Visando resolver o problema de falta de divulgação das diversas atrações da cidade de Bandeirantes, nós do Localize temos o objetivo de dar destaque a todas as atrações da região de bandeirantes.</C.t2>
                <C.t2>Em nosso site, os turistam encontram tudo o que precisam para planejarem uma viajem completa pela regiao de Bandeirantes.</C.t2>
                <C.t2>Nosso maior comprometimento é criar um ambiente seguro e de simples utilização, onde encontrar um lugar perfeito é simples e rapido.</C.t2>
                <C.t2></C.t2>
            </C.texto>
            
        </C.tela>

    )
}

export default Sobre