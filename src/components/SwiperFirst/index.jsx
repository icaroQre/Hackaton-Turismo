import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, FreeMode } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import { SwiperDiv, Fixed } from './styles';

import PlaceIcon from '../PlaceIcon';

//ICONES
import { AiFillMedicineBox } from 'react-icons/ai'
import { IoMdRestaurant, IoMdBeer } from 'react-icons/io'
import { FaChurch, FaMapMarkedAlt } from 'react-icons/fa'
import { BsFillBasket2Fill } from 'react-icons/bs'

const SwiperFirst = () => {

    return(
      <>
        <SwiperDiv>
          <Swiper 
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode][Controller]}
            slidesPerView={3.5}
            spaceBetween={15}
            >
            <SwiperSlide>
              <PlaceIcon img = <AiFillMedicineBox size={35}/> text = 'Farmácias'/>
            </SwiperSlide>

            <SwiperSlide>
              <PlaceIcon img = <IoMdRestaurant size={35}/> text = 'Restaurantes'/>
            </SwiperSlide>

            <SwiperSlide>
              <PlaceIcon img = <FaMapMarkedAlt size={35}/> text = 'Pontos turísticos'/>
            </SwiperSlide>

            <SwiperSlide>
              <PlaceIcon  img = <FaChurch size={35}/> text = 'Igrejas'/>
            </SwiperSlide>
            
            <SwiperSlide>
              <PlaceIcon img = <BsFillBasket2Fill size={35}/> text = 'Mercados'/>
            </SwiperSlide>

            <SwiperSlide>
              <PlaceIcon img = <IoMdBeer size={35}/> text = 'Bares'/>
            </SwiperSlide>
          </Swiper>
        </SwiperDiv>

        <Fixed>

          <PlaceIcon img = <AiFillMedicineBox size={35}/> text = 'Farmácias'/>
          <PlaceIcon img = <IoMdRestaurant size={35}/> text = 'Restaurantes'/>
          <PlaceIcon img = <FaMapMarkedAlt size={35}/> text = 'Pontos turísticos'/>
          <PlaceIcon  img = <FaChurch size={35}/> text = 'Igrejas'/>
          <PlaceIcon img = <BsFillBasket2Fill size={35}/> text = 'Mercados'/>
          <PlaceIcon img = <IoMdBeer size={35}/> text = 'Bares'/>

        </Fixed>
      </>
    )
}

export default SwiperFirst;

