import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../images/banner.jpg';
import banner2 from '../images/banner-2.png';
import flecha from '../images/flecha.svg';
import separador from '../images/separador.png';

import 'swiper/css';
import 'swiper/css/navigation';

export function Mybanner() {
    return (
        <section id="toBanner" className="banner relative">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide><img src={banner1} alt="Banner 1" /></SwiperSlide>
          <SwiperSlide><img src={banner2} alt="Banner 2" /></SwiperSlide>
          <SwiperSlide><img src={banner1} alt="Banner 3" /></SwiperSlide>
        </Swiper>
        <div className="scrollDown" id="toDown">
          <p>Descubre más</p>
          <img src={flecha} alt="Flecha" />
        </div>
          <img src={separador} alt="separador" className="separador" />
      </section>
    );
  }