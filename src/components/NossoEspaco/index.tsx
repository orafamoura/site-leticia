import 'swiper/swiper-bundle.css';
import 'swiper/modules'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

export default function NossoEspaco(){
    return(
        <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards]}
                spaceBetween={0}
                initialSlide={1}
                centeredSlides={true}
                slidesPerView={4}
                autoplay={{delay: 3000}}
                breakpoints={{
                    425:  { spaceBetween: 15, slidesPerView: 1.5, autoplay:{delay: 3000 }},
                    640:  { spaceBetween: 20, slidesPerView: 2, autoplay:{delay: 3000 }},
                    1024: { spaceBetween: 0, slidesPerView: 4, autoplay:{delay: 3000 }}
                            }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="">
                <SwiperSlide className="container">
                    <img className="object-cover" src="/nossoEspacoFotos/fotoG1.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className="container sm:!flex flex-col items-center">
                    <img src="/nossoEspacoFotos/fotoP1.webp" alt="" />
                    <img src="/nossoEspacoFotos/fotoP2.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className=" container">
                    <img src="/nossoEspacoFotos/fotoG2.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide className=" container sm:!flex flex-col items-center">
                    <img src="/nossoEspacoFotos/fotoP3.webp" alt="" />
                    <img src="/nossoEspacoFotos/fotoP4.webp" alt="" />            
                </SwiperSlide>
        </Swiper>
    )
}