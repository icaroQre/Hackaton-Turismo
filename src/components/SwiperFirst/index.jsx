import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, FreeMode } from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode'

import { SwiperDiv, Fixed } from './styles';

import PlaceIcon from '../PlaceIcon';

//ICONES
import { AiOutlineMedicineBox } from 'react-icons/ai'

const SwiperFirst = () => {

    return(
      <>
        <SwiperDiv>
          <Swiper 
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode][Controller]}
            slidesPerView={3.5}
            spaceBetween={20}
            >
            <SwiperSlide>
              <PlaceIcon img = <AiOutlineMedicineBox size={40}/> text = 'Farmácias'/>
            </SwiperSlide>

            <SwiperSlide>
              <PlaceIcon text = 'Bares'/>
            </SwiperSlide>

            <SwiperSlide>
              <PlaceIcon  text = 'Restaurantes'/>
            </SwiperSlide>

            <SwiperSlide>
              <PlaceIcon text = 'Mercados'/>
            </SwiperSlide>
            
            <SwiperSlide>
              <PlaceIcon />
            </SwiperSlide>

            <SwiperSlide>
              <PlaceIcon />
            </SwiperSlide>
          </Swiper>
        </SwiperDiv>

        <Fixed>

          <PlaceIcon img = <AiOutlineMedicineBox size={40}/> text = 'Farmácias'/>
          <PlaceIcon text = 'Bares'/>
          <PlaceIcon  text = 'Restaurantes'/>
          <PlaceIcon text = 'Mercados'/>
          <PlaceIcon />
          <PlaceIcon />

        </Fixed>
      </>
    )
}

export default SwiperFirst;

