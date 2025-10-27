import 'swiper/swiper-bundle.css';
import 'swiper/modules'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

export default function NossoEspaco(){

const fotosNossoEspaco = [
    {
        srcFoto:["/nossoEspacoFotos/fotoG1.png"],
        altFoto:["foto 1"],
    },
    {
        srcFoto:["/nossoEspacoFotos/fotoP1.png", "/nossoEspacoFotos/fotoP2.png"],
        altFoto:["foto 1", "foto 2"],
    },
    {
        srcFoto:["/nossoEspacoFotos/fotoG2.png"],
        altFoto:["foto 1"],
    },
    {
        srcFoto:["/nossoEspacoFotos/fotoP3.png", "/nossoEspacoFotos/fotoP4.png"],
        altFoto:["foto 1", "foto 2"],
    },
]


    return(
        <div className='w-auto relative'>
            <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards]}
                    spaceBetween={1}
                    initialSlide={1}
                    centeredSlides={false}
                    slidesPerView="auto"
                    autoplay={{delay: 3000}}
                    breakpoints={{
                        425:  { spaceBetween: 10, slidesPerView: 2, autoplay: false},
                        640:  { spaceBetween: 10, slidesPerView: 3, autoplay:false},
                        1024: { spaceBetween: 10, slidesPerView: 4, autoplay:false}
                                }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="w-full h-full max-h-[700px] min-h-[500px]">
                        {fotosNossoEspaco.map((item, index) => {
                            if (index % 2 === 1) {
                                return (
                                    <SwiperSlide key={index} className="w-[245px] !flex flex-col gap-3 justify-center items-center">
                                        {item.srcFoto.map((foto, subIndex) => (
                                        <img
                                            key={subIndex}
                                            className="w-[245px] h-[245px] rounded-lg"
                                            src={foto}
                                            alt={item.altFoto[subIndex]}
                                        />
                                        ))}
                                    </SwiperSlide>
                                )
                            } else {
                                return item.srcFoto.map((foto, subIndex) => (
                                    <SwiperSlide key={`${index}-${subIndex}`} className="!flex items-center justify-center">
                                        <img
                                        className="w-[300px] h-[500px] block rounded-lg"
                                        src={foto}
                                        alt={item.altFoto[subIndex]}
                                        />
                                    </SwiperSlide>
                                ))
                            }
                        })}
            </Swiper>
            <div className='absolute inset-0 z-5 bg-gradient-to-t from-white from-0% via-white via-0% to-transparent to-35% pointer-events-none'></div>
            <p className="absolute text-azul-base font-extrabold text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl w-[150px] bottom-5 left-4 z-6 pointer-events-none">NOSSO ESPAÇO</p>
        </div>
    )
}