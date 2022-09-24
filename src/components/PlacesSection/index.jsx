import React, {useState, useEffect}from "react";
import { Container, Container2 } from "./styles";
import api from "../../services/api"
import { Title } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, FreeMode } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { SwiperDiv, Fixed } from './styles';
import PlaceIcon from '../PlaceIcon';



const PlacesSection = ({ text }) => {

    const [locais, setLocais] = useState(false)
    const [restaurantes, setRestaurantes] = useState(false)
    const [atracoes, setAtracoes] = useState(false)
    const [hoteis, setHoteis] = useState(false)

    useEffect(() => {
    async function GET(endpoint){
      api.get("/hoteis").then((response) => {
        const result = response.data.hoteis;
        setLocais(result)
      })
      api.get("/restaurantes").then((response) => {
        const result = response.data.restaurantes;
        setRestaurantes(result)
      })
      api.get("/atracoes").then((response) => {
        const result = response.data.atracoes;
        setAtracoes(result)
      })
      api.get('/hoteis').then((response) => {
        const result = response.data.hoteis;
        setHoteis(result)
      })
    }
    GET();
    }, [locais===false])

    return (
        <>
            <Title>
              Próximos a você
            </Title>
            <SwiperDiv>
              <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode][Controller]}
                slidesPerView={3.5}
                spaceBetween={15}
              >
              {
                locais!== false && (
                    locais.map((data, key)=>{
                      return(
                        <div key={key}>
                          <SwiperSlide key={key}>
                            <PlaceIcon img = {data.logo} text = {data.nome}/>
                          </SwiperSlide>
                        </div>
                      );
                    })
                )
              }
              </Swiper>
            </SwiperDiv>

            <Title>
              Restaurantes
            </Title>
            <SwiperDiv>
            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode][Controller]}
                slidesPerView={3.5}
                spaceBetween={15}
              >
              {
                restaurantes!== false && (
                    restaurantes.map((data, key)=>{
                      return(
                        <div key={key}>
                          <SwiperSlide key={key}>
                            <PlaceIcon img = {data.logo} text = {data.nome}/>
                          </SwiperSlide>
                        </div>
                      );
                    })
                )
              }
              </Swiper>
            </SwiperDiv>

            <Title>
              Atrações
            </Title>
            <SwiperDiv>
            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode][Controller]}
                slidesPerView={3.5}
                spaceBetween={15}
              >
              {
                atracoes!== false && (
                    atracoes.map((data, key)=>{
                      return(
                        <div key={key}>
                          <SwiperSlide key={key}>
                            <PlaceIcon img = {data.logo} text = {data.nome}/>
                          </SwiperSlide>
                        </div>
                      );
                    })
                )
              }
              </Swiper>
            </SwiperDiv>

            <Title>
              Hoteis
            </Title>
            <SwiperDiv>
              <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode][Controller]}
                slidesPerView={3.5}
                spaceBetween={15}
              >
              {
                hoteis!== false && (
                    hoteis.map((data, key)=>{
                      return(
                        <div key={key}>
                          <SwiperSlide>
                            <PlaceIcon img = {data.logo} text = {data.nome}/>
                          </SwiperSlide>
                        </div>
                      );
                    })
                )
              }
              </Swiper>
            </SwiperDiv>

            <Fixed>
             <h1>
              Hoteis
             </h1>
              {
                hoteis!== false && (
                    hoteis.map((data, key)=>{
                      return(
                        <div key={key}>
                          
                          <PlaceIcon img = {data.logo} text = {data.nome}/>
                          
                        </div>
                      );
                    })
                )
              }
            </Fixed>
        </>        
    )
}

export default PlacesSection;