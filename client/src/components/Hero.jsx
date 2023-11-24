import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {motion} from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles/hero.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper/modules";
import 'swiper/css/autoplay';

//get ticket function//


export function Hero() {
  
  return (
    <motion.div
    initial={{ opacity: 0, }}
    whileInView={{ opacity: 1,  }}
    transition={{ duration: 2 }}
    
    className="hero">
      <Swiper
        effect={"cards"}
        /*autoplay={{delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true}}*/     
        speed={1300}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        className="mySwiper">
            
        <SwiperSlide>
            <div className="slide">
               <div className="text-wrapper">
             <div className="title">
               Oppenheimer
             </div>
             <div className="duration-year">
             3hr | 2023
             </div>
             <div className="description">
             The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.
             </div>
             <div className="director">
               <span>Director :&nbsp;</span>Christopher Nolan
             </div>
             <button className="get-ticket">
               Get Ticket
             </button>
             </div>
             </div>
             
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide">
               <div className="text-wrapper">
             <div className="title">
               Oppenheimer
             </div>
             <div className="duration-year">
             3hr | 2023
             </div>
             <div className="description">
             The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.
             </div>
             <div className="director">
               <span>Director :&nbsp;</span>Christopher Nolan
             </div>
             <button className="get-ticket">
               Get Ticket
             </button>
             </div>
             </div>
             
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide">
               <div className="text-wrapper">
             <div className="title">
               Oppenheimer
             </div>
             <div className="duration-year">
             3hr | 2023
             </div>
             <div className="description">
             The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.
             </div>
             <div className="director">
               <span>Director :&nbsp;</span>Christopher Nolan
             </div>
             <button className="get-ticket">
               Get Ticket
             </button>
             </div>
             </div>
             
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide">
               <div className="text-wrapper">
             <div className="title">
               Oppenheimer
             </div>
             <div className="duration-year">
             3hr | 2023
             </div>
             <div className="description">
             The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.
             </div>
             <div className="director">
               <span>Director :&nbsp;</span>Christopher Nolan
             </div>
             <button className="get-ticket">
               Get Ticket
             </button>
             </div>
             </div>
             
        </SwiperSlide>
        
      </Swiper>
    </motion.div>
  );
}
