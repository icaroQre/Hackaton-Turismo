import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, FreeMode } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Title, SwiperDiv, Fixed, FixedContainer } from './styles';


import PlaceIcon from '../PlaceIcon';
import { Link } from 'react-router-dom';

const PlaceSection = () => {

/** CHAMADAS DA API
 * .
 * .
 * .
 * .
*/

const [hoteis, setHoteis] = useState([]);
    useEffect(() => {
        fetch("https://uenp.fun/turismo/api/hoteis")
        .then(response => response.json())
        .then (data => setHoteis(data.hoteis))
    }, []);
const [atracoes, setAtracoes] = useState([]);
    useEffect(() => {
        fetch("https://uenp.fun/turismo/api/atracoes")
        .then(response => response.json())
        .then (data => setAtracoes(data.atracoes))
    }, []);
const [restaurantes, setRestaurantes] = useState([]);
    useEffect(() => {
        fetch("https://uenp.fun/turismo/api/restaurantes")
        .then(response => response.json())
        .then (data => setRestaurantes(data.restaurantes))
    }, []);
const [bares, setBares] = useState([]);
    useEffect(() => {
        fetch("https://uenp.fun/turismo/api/bares")
        .then(response => response.json())
        .then (data => setBares(data.bares))
    }, []);


/** SESSÕES SWIPER MOBILE
 * .
 * .
 * .
 * .
*/

    return (
        
        <>
        <SwiperDiv id="hoteis">
            <Title> Hoteis </Title>
            <Swiper freeMode={true} grabCursor={true} modules={[FreeMode][Controller]} slidesPerView={3.5} spaceBetween={15}>
            {
            hoteis.map(hotel => {
                return(
                    <>
                        <SwiperSlide key={hotel.id}>
                            <Link to={`/hoteis/${hotel.id}`} style={{textDecoration: "none"}}>
                                <PlaceIcon img={hotel.logo} text={hotel.nome} />
                            </Link>
                        </SwiperSlide>
                    </>
                )
            })
            }
            </Swiper>
        </SwiperDiv>

        <SwiperDiv id="atracoes">
            <Title> Atrações </Title>
            <Swiper freeMode={true} grabCursor={true} modules={[FreeMode][Controller]} slidesPerView={3.5} spaceBetween={15}>
            {
            atracoes.map(atracao => {
                return(
                    <>
                        <SwiperSlide key={atracao.id}>
                        {console.log(atracao.id)}
                            <Link to={`/atracoes/${atracao.id}`} style={{textDecoration: "none"}}>
                                <PlaceIcon img={atracao.logo} text={atracao.nome} />
                            </Link>
                        </SwiperSlide>
                    </>
                )
            })
            }
            </Swiper>
        </SwiperDiv>

        <SwiperDiv id="restaurantes">
            <Title> Restaurantes </Title>
            <Swiper freeMode={true} grabCursor={true} modules={[FreeMode][Controller]} slidesPerView={3.5} spaceBetween={15}>
            {
            restaurantes.map(restaurante => {
                return(
                    <>
                        <SwiperSlide key={restaurante.id}>
                        {console.log(restaurante.id)}
                            <Link to={`/restaurantes/${restaurante.id}`} style={{textDecoration: "none"}}>
                                <PlaceIcon img={restaurante.logo} text={restaurante.nome} />
                            </Link>
                        </SwiperSlide>
                    </>
                )
            })
            }
            </Swiper>
        </SwiperDiv>

        <SwiperDiv id="bares">
            <Title> Bares </Title>
            <Swiper freeMode={true} grabCursor={true} modules={[FreeMode][Controller]} slidesPerView={3.5} spaceBetween={15}>
            {
            bares.map(bar => {
                return(
                    <>
                        <SwiperSlide key={bar.id}>
                        {console.log(bar.id)}
                            <Link to={`/bares/${bar.id}`} style={{textDecoration: "none"}}>
                                <PlaceIcon img={bar.logo} text={bar.nome} />
                            </Link>
                        </SwiperSlide>
                    </>
                )
            })
            }
            </Swiper>
        </SwiperDiv>











        <FixedContainer id="fixed-hoteis">
            <Title>
            Hoteis
            </Title>

            <Fixed>
            {
                hoteis.map(hotel => {
                return (
                    <div key={hotel.id}>
                        <Link to={`/hoteis/${hotel.id}`} style={{textDecoration: "none"}}>
                            <PlaceIcon img={hotel.logo} text={hotel.nome} />
                        </Link>
                    </div>
                    );
                })  
            }
            </Fixed>
        </FixedContainer>

        <FixedContainer id="fixed-atracoes">
            <Title>
            Atrações
            </Title>

            <Fixed>
            {
                atracoes.map(atracao => {
                return (
                    <div key={atracao.id}>
                        <Link to={`/atracoes/${atracao.id}`} style={{textDecoration: "none"}}>
                            <PlaceIcon img={atracao.logo} text={atracao.nome} />
                        </Link>
                    </div>
                    );
                })  
            }
            </Fixed>
        </FixedContainer>

        <FixedContainer id="fixed-restaurantes">
            <Title>
            Restaurantes
            </Title>

            <Fixed>
            {
                restaurantes.map(restaurante => {
                return (
                    <div key={restaurante.id}>
                        <Link to={`/restaurantes/${restaurante.id}`} style={{textDecoration: "none"}}>
                            <PlaceIcon img={restaurante.logo} text={restaurante.nome} />
                        </Link>
                    </div>
                    );
                })  
            }
            </Fixed>
        </FixedContainer>

        <FixedContainer id="fixed-bares">
            <Title>
            Bares
            </Title>

            <Fixed>
            {
                bares.map(bar => {
                return (
                    <div key={bar.id}>
                        <Link to={`/bares/${bar.id}`} style={{textDecoration: "none"}}>
                            <PlaceIcon img={bar.logo} text={bar.nome} />
                        </Link>
                    </div>
                    );
                })  
            }
            </Fixed>
        </FixedContainer>
    </>
  )
}

export default PlaceSection