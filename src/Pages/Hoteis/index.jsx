import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from './styles';
import BackButton from "../../components/BackButton";

import { Description, Icons, Section, Bg} from './styles';

//icones
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { FaMapMarkerAlt } from 'react-icons/fa'

const Hoteis = () => {

  const { id } = useParams();

  const [place, setPlace] = useState({});
  useEffect(() => {
      fetch(`https://uenp.fun/turismo/api/hoteis/${id}`)
      .then(response => response.json())
      .then (data => {
        console.log(data.hoteis[0])
        setPlace(data.hoteis[0])
      })

  }, []);

  return(
    <Bg>
    <Section>
    <BackButton />
     <Container>
      <Description>
        <div><img src={place.logo} alt={place.nome} /></div>
        <p className="name">{place.nome}</p>
        <p className="description">{place.descricao}</p>
        <p className="price">Faixa de preço: {place.preco}</p>
        <p className="price">Telefone: {place.telefone}</p>
        <p className="price">E-mail: {place.email}</p>
        <p className="price">Endereço: {place.endereco}</p>
      </Description>
    </Container>
    <Icons>
        <a href={place.face}><BsFacebook color="black" size={60}/></a>
        <a href={place.insta}><AiFillInstagram color="black" size={65}/></a>
        <a href={place.whats}><RiWhatsappFill color="black" size={65}/></a>
        <a href={place.maps}><FaMapMarkerAlt color="black" size={65}/></a>
      </Icons>
  </Section>
  </Bg>
  )
}

export default Hoteis;