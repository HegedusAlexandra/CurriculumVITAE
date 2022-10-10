// Import Swiper React components
import React, { useState, useEffect } from 'react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import raspberry from "./desserts/raspberry.jpg";
import alles from "./desserts/alles.jpg";
import apple from "./desserts/apple.jpg";
import BB from "./desserts/BB.jpg";
import fifty from "./desserts/50.jpg";
import babka from "./desserts/babka.jpg";
import bar from "./desserts/bar.jpg";
import berries from "./desserts/berries.jpg";
import birthday from "./desserts/birthday.jpg";
import bon from "./desserts/bon.jpg";
import bonbon from "./desserts/bonbon.jpg";
import carrotcake from "./desserts/carrotcake.jpg";
import choc from "./desserts/choc.jpg";
import christmas from "./desserts/christmas.jpg";
import coconut from "./desserts/coconut.jpg";
import color from "./desserts/color.jpg";
import cone from "./desserts/cone.jpg";
import egg from "./desserts/egg.jpg";
import fank from "./desserts/fank.jpeg";
import flower from "./desserts/flower.jpg";
import greenApple from "./desserts/greenApple.jpg";
import heart from "./desserts/heart.jpg";
import joyD from "./desserts/joyD.jpg";
import lemongrass from "./desserts/lemongrass.jpg";
import love from "./desserts/love.jpg";
import mint from "./desserts/mint.jpg";

import phisalys from "./desserts/phisalys.jpg";
import popsicle from "./desserts/popsicle.jpg";
import rock from "./desserts/rock.jpg";
import rose from "./desserts/rose.jpg";
import sach from "./desserts/sach.jpg";
import sacher from "./desserts/sacher.jpg";
import snow from "./desserts/snow.jpg";
import strawberry from "./desserts/strawberry.jpg";
import swarzwalder from "./desserts/swarzwalder.jpg";

import truffelRow from "./desserts/truffelRow.jpg";

import twirl from "./desserts/twirl.jpg";
import twoTone from "./desserts/twoTone.jpg";

import "./gallery.css";

function Gallery() {

  const [isMobile, setIsMobile] = useState(false)
 
  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 720) {
      console.log("resized") 
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  
  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize())
  },[])

  return (
    <div className="MySwiperBody">

      {!isMobile && <h1 style={{fontSize:"22px"}}>Here are just some of the creation I am proud to have produced</h1>}
      {!isMobile && <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[Autoplay, Navigation, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={apple} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={alles} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={babka} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bar} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BB} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={berries} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={birthday} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bon} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bonbon} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carrotcake} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fifty} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={choc} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={christmas} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={coconut} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={color} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cone} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={egg} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fank} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={flower} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={greenApple} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={heart} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={joyD} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={lemongrass} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={love} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={mint} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={phisalys} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={popsicle} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={raspberry} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sach} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sacher} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={snow} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rose} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rock} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={strawberry} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swarzwalder} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={truffelRow} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={twirl} alt="none" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={twoTone} alt="none" />
        </SwiperSlide>
      </Swiper>}
      {isMobile && <>
        <button id="scrollNow"
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          textDecoration: "none",
          width:"90%",
          height: "50px",        
          background: "rgba(221, 150, 97)",
          marginTop: "10px",
          padding: "0px",
          paddingLeft: "60px",
          paddingRight: "60px",
          textShadow: "2px 2px 2px rgba(0, 0, 0, 1)",
          fontFamily: "'Mohave', serif",
          fontSize: "xx-large",
          fontWeight: "800",
          color: "#be3939",
          textTransform: "uppercase",        
          cursor: "pointer",        
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          position: 'fixed',
          bottom:'40px',
          textAlign: 'center',
          zIndex: '4',
          borderRadius:"10px"
        }}
      >
        Scroll to top
      </button>
          <img src={apple} alt="none" />
        
          <img src={alles} alt="none" />
        
          <img src={babka} alt="none" />
       
          <img src={bar} alt="none" />
        
          <img src={BB} alt="none" />
        
          <img src={berries} alt="none" />
        
          <img src={birthday} alt="none" />
       
          <img src={bon} alt="none" />
      
          <img src={bonbon} alt="none" />
       
          <img src={carrotcake} alt="none" />
        
          <img src={fifty} alt="none" />
     
          <img src={choc} alt="none" />
       
          <img src={christmas} alt="none" />
        
          <img src={coconut} alt="none" />
    
          <img src={color} alt="none" />
       
          <img src={cone} alt="none" />
       
          <img src={egg} alt="none" />
      
          <img src={fank} alt="none" />
       
          <img src={flower} alt="none" />
   
          <img src={greenApple} alt="none" />
   
          <img src={heart} alt="none" />
       
          <img src={joyD} alt="none" />
    
          <img src={lemongrass} alt="none" />
  
          <img src={love} alt="none" />
       
          <img src={mint} alt="none" />
      
          <img src={phisalys} alt="none" />

          <img src={popsicle} alt="none" />
 
          <img src={raspberry} alt="none" />
      
          <img src={sach} alt="none" />

          <img src={sacher} alt="none" />

          <img src={snow} alt="none" />
 
          <img src={rose} alt="none" />

          <img src={rock} alt="none" />

          <img src={strawberry} alt="none" />

          <img src={swarzwalder} alt="none" />

          <img src={truffelRow} alt="none" />

          <img src={twirl} alt="none" />

          <img src={twoTone} alt="none" /></>}
    </div>
  );
}

export default Gallery;
