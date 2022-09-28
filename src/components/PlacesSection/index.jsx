import React, { useState, useEffect } from "react";
import api from "../../services/api"
import { Title } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, FreeMode } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { SwiperDiv, Fixed, FixedContainer } from './styles';
import PlaceIcon from '../PlaceIcon';



const PlacesSection = ({ text }) => {

  const [locais, setLocais] = useState(false)
  const [restaurantes, setRestaurantes] = useState(false)
  const [atracoes, setAtracoes] = useState(false)
  const [hoteis, setHoteis] = useState(false)
  const [bares, setBares] = useState(false)

  useEffect(() => {
    async function GET(endpoint) {
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
      api.get('/bares').then((response) => {
        const result = response.data.bares;
        setBares(result)
      })
    }
    GET();
  }, [locais === false])

  return (
    <>
      <SwiperDiv id="locais">
        <Title>
          Próximos a você
        </Title>
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode][Controller]}
          slidesPerView={3.5}
          spaceBetween={15}
        >
          {
            locais !== false && (
              locais.map((data, key) => {
                return (
                  <div key={key}>
                    <SwiperSlide key={key}>
                      <PlaceIcon img={data.logo} text={data.nome} />
                    </SwiperSlide>
                  </div>
                );
              })
            )
          }
        </Swiper>
      </SwiperDiv>

      <SwiperDiv id="hoteis">
        <Title>
          Hoteis
        </Title>

        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode][Controller]}
          slidesPerView={3.5}
          spaceBetween={15}
        >
          {
            hoteis !== false && (
              hoteis.map((data, key) => {
                return (
                  <div key={key}>
                    <SwiperSlide>
                      <PlaceIcon img={data.logo} text={data.nome} />
                    </SwiperSlide>
                  </div>
                );
              })
            )
          }
        </Swiper>
      </SwiperDiv>

      <SwiperDiv id="atracoes">
        <Title>
          Atrações
        </Title>

        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode][Controller]}
          slidesPerView={3.5}
          spaceBetween={15}
        >
          {
            atracoes !== false && (
              atracoes.map((data, key) => {
                return (
                  <div key={key}>
                    <SwiperSlide key={key}>
                      <PlaceIcon img={data.logo} text={data.nome} />
                    </SwiperSlide>
                  </div>
                );
              })
            )
          }
        </Swiper>
      </SwiperDiv>

      <SwiperDiv id="restaurantes">
        <Title>
          Restaurantes
        </Title>

        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode][Controller]}
          slidesPerView={3.5}
          spaceBetween={15}
        >
          {
            restaurantes !== false && (
              restaurantes.map((data, key) => {
                return (
                  <div key={key}>
                    <SwiperSlide key={key}>
                      <PlaceIcon img={data.logo} text={data.nome} />
                    </SwiperSlide>
                  </div>
                );
              })
            )
          }
        </Swiper>
      </SwiperDiv>

      <SwiperDiv id="bares">
        <Title>
          Bares
        </Title>

        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode][Controller]}
          slidesPerView={3.5}
          spaceBetween={15}
        >
          {
            bares !== false && (
              bares.map((data, key) => {
                return (
                  <div key={key}>
                    <SwiperSlide key={key}>
                      <PlaceIcon img={data.logo} text={data.nome} />
                    </SwiperSlide>
                  </div>
                );
              })
            )
          }
        </Swiper>
      </SwiperDiv>









      <FixedContainer id="fixed-locais">
        <Title>
          Conheça Bandeirantes
        </Title>

        <Fixed>
          {
            locais !== false && (
              locais.map((data, key) => {
                return (
                  <div key={key}>

                    <PlaceIcon img={data.logo} text={data.nome} />

                  </div>
                );
              })
            )
          }
        </Fixed>
      </FixedContainer>

      <FixedContainer id="fixed-hoteis">
        <Title>
          Hoteis
        </Title>
        <Fixed>
          {
            hoteis !== false && (
              hoteis.map((data, key) => {
                return (
                  <div key={key}>
                    <PlaceIcon img={data.logo} text={data.nome} />
                  </div>
                );
              })
            )
          }
        </Fixed>
      </FixedContainer>

      <FixedContainer id="fixed-atracoes">
        <Title>
          Atrações
        </Title>

        <Fixed>
          {
            atracoes !== false && (
              atracoes.map((data, key) => {
                return (
                  <div key={key}>
                    <PlaceIcon img={data.logo} text={data.nome} />
                  </div>
                );
              })
            )
          }
        </Fixed>
      </FixedContainer>

      <FixedContainer id="fixed-restaurantes">
        <Title>
          Restaurantes
        </Title>

        <Fixed>
          {
            restaurantes !== false && (
              restaurantes.map((data, key) => {
                return (
                  <div key={key}>

                    <PlaceIcon img={data.logo} text={data.nome} />

                  </div>
                );
              })
            )
          }
        </Fixed>
      </FixedContainer>

      <FixedContainer id="fixed-bares">
        <Title>
          Bares
        </Title>

        <Fixed>
          {
            bares !== false && (
              bares.map((data, key) => {
                return (
                  <div key={key}>

                    <PlaceIcon img={data.logo} text={data.nome} />

                  </div>
                );
              })
            )
          }
        </Fixed>
      </FixedContainer>
    </>
  )
}

export default PlacesSection;