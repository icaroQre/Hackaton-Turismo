import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, FreeMode } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import { SwiperDiv, Fixed } from './styles';

import { Link } from 'react-scroll'; 

//ICONES
import SfIcons from './SfIcons';
import { AiFillMedicineBox } from 'react-icons/ai'
import { IoMdRestaurant, IoMdBeer } from 'react-icons/io'
import { FaChurch, FaMapMarkedAlt } from 'react-icons/fa'
import { BsFillBasket2Fill } from 'react-icons/bs'
import { MdHotel } from 'react-icons/md'
import { GiPartyPopper } from 'react-icons/gi'


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
            <Link to="hoteis" smooth={ true }offset={ -50 } duration={ 800 } >
              <SfIcons img = <MdHotel size={35}/> text = 'Hoteis'/>
            </Link>
            </SwiperSlide>

            <SwiperSlide>
            <Link to="farmacias" smooth={ true }offset={ -50 } duration={ 800 } >
              <SfIcons img = <AiFillMedicineBox size={35}/> text = 'Farmácias'/>
            </Link>
            </SwiperSlide>

            <SwiperSlide>
            <Link to="restaurantes" smooth={ true }offset={ -50 } duration={ 800 } >
              <SfIcons img = <IoMdRestaurant size={35}/> text = 'Restaurantes'/>
            </Link>
            </SwiperSlide>

            <SwiperSlide>
            <Link to="atracoes" smooth={ true }offset={ -50 } duration={ 800 } >
              <SfIcons img = <FaMapMarkedAlt size={35}/> text = 'Atrações'/>
            </Link>
            </SwiperSlide>

            <SwiperSlide>
            <Link to="igrejas" smooth={ true }offset={ -50 } duration={ 800 } >
              <SfIcons  img = <FaChurch size={35}/> text = 'Igrejas'/>
            </Link>
            </SwiperSlide>
            
            <SwiperSlide>
            <Link to="mercados" smooth={ true }offset={ -50 } duration={ 800 } >
              <SfIcons img = <BsFillBasket2Fill size={35}/> text = 'Mercados'/>
            </Link>
            </SwiperSlide>

            <SwiperSlide>
            <Link to="bares" smooth={ true }offset={ -50 } duration={ 800 } >
              <SfIcons img = <IoMdBeer size={35}/> text = 'Bares'/>
            </Link>
            </SwiperSlide>

            <SwiperSlide>
            <Link to="eventos" spy={ true } smooth={ true }offset={ -50 } duration={ 800 } >
              <SfIcons img = <GiPartyPopper size={35}/> text = 'Eventos'/>
            </Link>
            </SwiperSlide>
          </Swiper>
        </SwiperDiv>

        <Fixed>

          <Link to="fixed-hoteis" spy={ true }smooth={ true }offset={ -50 } duration={ 800 } >
            <SfIcons img = <MdHotel size={35}/> text = 'Hoteis'/>
          </Link>
          
          <Link to="fixed-farmacias" smooth={ true }offset={ -50 } duration={ 800 } >
            <SfIcons img = <AiFillMedicineBox size={35}/> text = 'Farmácias'/>
          </Link>

          <Link to="fixed-restaurantes" smooth={ true }offset={ -50 } duration={ 800 } >
            <SfIcons img = <IoMdRestaurant size={35}/> text = 'Restaurantes'/>
          </Link>

          <Link to="fixed-atracoes" smooth={ true }offset={ -50 } duration={ 800 } >
            <SfIcons img = <FaMapMarkedAlt size={35}/> text = 'Atrações'/>
          </Link>

          <Link to="fixed-igrejas" smooth={ true }offset={ -50 } duration={ 800 } >
            <SfIcons img = <FaChurch size={35}/> text = 'Igrejas'/>
          </Link>

          <Link to="fixed-mercados" smooth={ true }offset={ -50 } duration={ 800 } >
            <SfIcons img = <BsFillBasket2Fill size={35}/> text = 'Mercados'/>
          </Link>

          <Link to="fixed-bares" smooth={ true }offset={ -50 } duration={ 800 } >
            <SfIcons img = <IoMdBeer size={35}/> text = 'Bares'/>
          </Link>

          <Link to="fixed-eventos" spy={ true } smooth={ true }offset={ -50 } duration={ 800 } >
            <SfIcons img = <GiPartyPopper size={35}/> text = 'Eventos'/>
          </Link>

        </Fixed>
      </>
    )
}

export default SwiperFirst;

