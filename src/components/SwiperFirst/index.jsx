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
              <PlaceIcon img = "https://static3.depositphotos.com/1000746/134/i/450/depositphotos_1348386-stock-photo-ok-hand-sign-silhouette.jpg" text = 'Farmácias'/>
            </SwiperSlide>

            <SwiperSlide>
              <PlaceIcon img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIuRkWY-iMfkQw0a_KkerL80e-NJQMh8VUaLBUjnkotquuhkJfyH1UH4q7VJ6qPjiiBE&usqp=CAU" text = 'Restaurantes'/>
            </SwiperSlide>

            <SwiperSlide>
              <PlaceIcon img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIuRkWY-iMfkQw0a_KkerL80e-NJQMh8VUaLBUjnkotquuhkJfyH1UH4q7VJ6qPjiiBE&usqp=CAU" text = 'Pontos turísticos'/>
            </SwiperSlide>

            <SwiperSlide>
              <PlaceIcon  img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIuRkWY-iMfkQw0a_KkerL80e-NJQMh8VUaLBUjnkotquuhkJfyH1UH4q7VJ6qPjiiBE&usqp=CAU" text = 'Igrejas'/>
            </SwiperSlide>
            
            <SwiperSlide>
              <PlaceIcon img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIuRkWY-iMfkQw0a_KkerL80e-NJQMh8VUaLBUjnkotquuhkJfyH1UH4q7VJ6qPjiiBE&usqp=CAU" text = 'Mercados'/>
            </SwiperSlide>

            <SwiperSlide>
              <PlaceIcon img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIuRkWY-iMfkQw0a_KkerL80e-NJQMh8VUaLBUjnkotquuhkJfyH1UH4q7VJ6qPjiiBE&usqp=CAU" text = 'Bares'/>
            </SwiperSlide>
          </Swiper>
        </SwiperDiv>

        <Fixed>

          <PlaceIcon img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIuRkWY-iMfkQw0a_KkerL80e-NJQMh8VUaLBUjnkotquuhkJfyH1UH4q7VJ6qPjiiBE&usqp=CAU" text = 'Farmácias'/>
          <PlaceIcon img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIuRkWY-iMfkQw0a_KkerL80e-NJQMh8VUaLBUjnkotquuhkJfyH1UH4q7VJ6qPjiiBE&usqp=CAU" text = 'Restaurantes'/>
          <PlaceIcon img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIuRkWY-iMfkQw0a_KkerL80e-NJQMh8VUaLBUjnkotquuhkJfyH1UH4q7VJ6qPjiiBE&usqp=CAU" text = 'Pontos turísticos'/>
          <PlaceIcon  img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIuRkWY-iMfkQw0a_KkerL80e-NJQMh8VUaLBUjnkotquuhkJfyH1UH4q7VJ6qPjiiBE&usqp=CAU" text = 'Igrejas'/>
          <PlaceIcon img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIuRkWY-iMfkQw0a_KkerL80e-NJQMh8VUaLBUjnkotquuhkJfyH1UH4q7VJ6qPjiiBE&usqp=CAU" text = 'Mercados'/>
          <PlaceIcon img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjIuRkWY-iMfkQw0a_KkerL80e-NJQMh8VUaLBUjnkotquuhkJfyH1UH4q7VJ6qPjiiBE&usqp=CAU" text = 'Bares'/>

        </Fixed>
      </>
    )
}

export default SwiperFirst;

