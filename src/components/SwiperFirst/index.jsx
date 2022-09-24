import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, FreeMode } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import { SwiperDiv, Fixed } from './styles';

import SfIcons from './SfIcons';

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
              <SfIcons img = <AiFillMedicineBox size={35}/> text = 'Farmácias'/>
            </SwiperSlide>

            <SwiperSlide>
              <SfIcons img = <IoMdRestaurant size={35}/> text = 'Restaurantes'/>
            </SwiperSlide>

            <SwiperSlide>
              <SfIcons img = <FaMapMarkedAlt size={35}/> text = 'Pontos turísticos'/>
            </SwiperSlide>

            <SwiperSlide>
              <SfIcons  img = <FaChurch size={35}/> text = 'Igrejas'/>
            </SwiperSlide>
            
            <SwiperSlide>
              <SfIcons img = <BsFillBasket2Fill size={35}/> text = 'Mercados'/>
            </SwiperSlide>

            <SwiperSlide>
              <SfIcons img = <IoMdBeer size={35}/> text = 'Bares'/>
            </SwiperSlide>
          </Swiper>
        </SwiperDiv>

        <Fixed>

          <SfIcons img = <AiFillMedicineBox size={35}/> text = 'Farmácias'/>
          <SfIcons img = <IoMdRestaurant size={35}/> text = 'Restaurantes'/>
          <SfIcons img = <FaMapMarkedAlt size={35}/> text = 'Pontos turísticos'/>
          <SfIcons img = <FaChurch size={35}/> text = 'Igrejas'/>
          <SfIcons img = <BsFillBasket2Fill size={35}/> text = 'Mercados'/>
          <SfIcons img = <IoMdBeer size={35}/> text = 'Bares'/>

        </Fixed>
      </>
    )
}

export default SwiperFirst;

