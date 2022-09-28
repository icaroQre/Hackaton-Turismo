import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from './styles';
import BackButton from "../../components/BackButton";

import { Description, Icons} from './styles';

//icones
import { MdEmail } from 'react-icons/md'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'

const Bares = () => {

  const { id } = useParams();

  const [place, setPlace] = useState({});
  useEffect(() => {
      fetch(`https://uenp.fun/turismo/api/bares/${id}`)
      .then(response => response.json())
      .then (data => {
        console.log(data.bares[0])
        setPlace(data.bares[0])
      })

  }, []);

    return(
      <>
      <BackButton />
       <Container>
        <Description>
          <div><img src={place.logo} alt={place.nome} /></div>
          <p className="name">{place.nome}</p>
          <p className="description">{place.descricao}</p>
          <p className="price">Faixa de preço: {place.preco}</p>
          <p className="price">Telefone: {place.telefone}</p>
        </Description>
      </Container>
      <Icons>
        <MdEmail size={80}/>
        <BsFacebook size={80}/>
        <AiFillInstagram size={80}/>
        <RiWhatsappFill size={80}/>
      </Icons>
    </>
    )
}

export default Bares;