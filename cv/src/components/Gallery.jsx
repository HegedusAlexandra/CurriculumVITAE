// Import Swiper React components

import { EffectCoverflow, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import raspberry from './desserts/raspberry.jpg'
import alles from './desserts/alles.jpg'
import apple from './desserts/apple.jpg'
import BB from './desserts/BB.jpg'
import fifty from './desserts/50.jpg'
import babka from './desserts/babka.jpg'
import bar from './desserts/bar.jpg'
import berries from './desserts/berries.jpg'
import birthday from './desserts/birthday.jpg'
import bon from './desserts/bon.jpg'
import bonbon from './desserts/bonbon.jpg'
import carrotcake from './desserts/carrotcake.jpg'
import choc from './desserts/choc.jpg'
import christmas from './desserts/christmas.jpg'
import coconut from './desserts/coconut.jpg'
import color from './desserts/color.jpg'
import cone from './desserts/cone.jpg'
import egg from './desserts/egg.jpg'
import fank from './desserts/fank.jpeg'
import flower from './desserts/flower.jpg'
import greenApple from './desserts/greenApple.jpg'
import heart from './desserts/heart.jpg'
import joyD from './desserts/joyD.jpg'
import lemongrass from './desserts/lemongrass.jpg'
import love from './desserts/love.jpg'
import mint from './desserts/mint.jpg'
import oreo from './desserts/oreo.jpg'
import phisalys from './desserts/phisalys.jpg'
import popsicle from './desserts/popsicle.jpg'
import rock from './desserts/rock.jpg'
import rose from './desserts/rose.jpg'
import sach from './desserts/sach.jpg'
import sacher from './desserts/sacher.jpg'
import snow from './desserts/snow.jpg'
import strawberry from './desserts/strawberry.jpg'
import swarzwalder from './desserts/swarzwalder.jpg'
import truffel from './desserts/truffel.jpg'
import truffelRow from './desserts/truffelRow.jpg'
import twig from './desserts/twig.jpg'
import twirl from './desserts/twirl.jpg'
import twoTone from './desserts/twoTone.jpg'

import './gallery.css';

function Gallery() {
  return (
    <div className="MySwiperBody">
    <Swiper
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={"auto"}
    coverflowEffect={{
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    }}
    pagination={true}
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper"
  >
      
      <SwiperSlide><img src={apple} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={alles} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={babka} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={bar} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={BB} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={berries} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={birthday} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={bon} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={bonbon} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={carrotcake} alt="none" /></SwiperSlide>
      <SwiperSlide ><img src={fifty} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={choc} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={christmas} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={coconut} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={color} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={cone} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={egg} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={fank} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={flower} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={greenApple} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={heart} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={joyD} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={lemongrass} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={love} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={mint} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={oreo} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={phisalys} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={popsicle} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={raspberry} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={sach} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={sacher} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={snow} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={rose} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={rock} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={strawberry} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={swarzwalder} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={truffel} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={truffelRow} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={twig} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={twirl} alt="none" /></SwiperSlide>
      <SwiperSlide><img src={twoTone} alt="none" /></SwiperSlide>

     
    </Swiper>
    </div>
  );
}

export default Gallery;