import './pages_css/IntegralDisplay.css'
import { SwiperSlide, Swiper } from 'swiper/react';

function IntegralDisplay() {
  return (
    <main className='integralDisplay' id='integral'>
      <h1>Pasta de Amendoim Integral</h1>
      <Swiper
        className='swiper'
        slidesPerView={1}
        pagination={{ clickable:true }}
        navigation
      >
        <SwiperSlide className='swiper-slide'><div className='slide-item'>Pasta de Amendoim Integral 250g</div></SwiperSlide>
        <SwiperSlide className='swiper-slide'><div className='slide-item'>Pasta de Amendoim Integral 250g</div></SwiperSlide>
      </Swiper>
    </main>
  );
}

export default IntegralDisplay;
