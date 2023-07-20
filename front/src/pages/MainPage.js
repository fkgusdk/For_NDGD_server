import React from "react";
import Header from "../components/Header";
import { MainStyled } from "../styles/MainStyled";
import { Link } from 'react-router-dom';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";

import MainData from "../data/MainData.json"

export default function MainPage() {

  SwiperCore.use([Navigation, Autoplay])	

  return (
    <MainStyled>
        <Header />
        <Swiper
          slidesPerView={1.44}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="main-banner"
        >      
        {MainData.swiper.map((swiper) => (
          <SwiperSlide key={swiper.id}>
            <Link to = {swiper.link}>
            <img src = {swiper.img} alt={swiper.alt}/>
            </Link>
          </SwiperSlide>       
        ))}
        </Swiper>
        <div className = "main-services">
          <div>NDGD가 제공하는 서비스</div>
          
          <div className = "main-service-btn">
          {MainData.mainBtn.map((btn) => (
            <Link to = {btn.link} key={btn.id}>
              <button className = "main-service-items">
                <img src = {btn.img} alt={btn.alt}/>
                <div>{btn.txt}</div>
              </button>
            </Link>
          ))}
          </div>
        </div>
    </MainStyled>
  );
}