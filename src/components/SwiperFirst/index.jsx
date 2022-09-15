import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import PlaceIcon from '../PlaceIcon';

//ICONES
import { AiOutlineMedicineBox } from 'react-icons/ai'

const SwiperFirst = () => {

    return(
        <Swiper>
        <SwiperSlide>
          <PlaceIcon img = <AiOutlineMedicineBox size={50}/> text = 'Farmácias'/>
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
    )
}

export default SwiperFirst;

