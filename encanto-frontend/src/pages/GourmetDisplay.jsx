import { Swiper, SwiperSlide } from 'swiper/react';
import './pages_css/GourmetDisplay.css'

function GourmetDisplay() {
  return (
    <main className='goumetDisplay' id='gourmet'>
      <h1>Conheça a Nova Linha Gourmet</h1>
      <Swiper
        className='swiper'
        slidesPerView={1}
        pagination={{ clickable:true }}
        navigation
      >
        <SwiperSlide className='swiper-slide'><div className='slide-item'>Creme de Amendoim com Cacau</div></SwiperSlide>
        <SwiperSlide className='swiper-slide'><div className='slide-item'>Creme de Amendoim</div></SwiperSlide>
      </Swiper>
    </main>
  );
}

export default GourmetDisplay;
