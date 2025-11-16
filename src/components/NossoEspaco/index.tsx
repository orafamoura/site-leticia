import 'swiper/swiper-bundle.css';
import 'swiper/modules'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

export default function NossoEspaco(){

const fotosNossoEspaco = [
    {
        srcFoto:["/nossoEspacoFotos/fotoG1.webp"],
        altFoto:["foto 1"],
    },
    {
        srcFoto:["/nossoEspacoFotos/fotoP1.webp", "/nossoEspacoFotos/fotoP2.webp"],
        altFoto:["foto 1", "foto 2"],
    },
    {
        srcFoto:["/nossoEspacoFotos/fotoG2.webp"],
        altFoto:["foto 1"],
    },
    {
        srcFoto:["/nossoEspacoFotos/fotoP3.webp", "/nossoEspacoFotos/fotoP4.webp"],
        altFoto:["foto 1", "foto 2"],
    },
]

    return(
        <div className='relative flex justify-center py-15 mx-30'>
            <div className='w-full h-auto relative m-5'>
                <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards]}
                        spaceBetween={10}
                        initialSlide={1}
                        centeredSlides={false}
                        slidesPerView={1}
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
                                        <SwiperSlide key={index} className=" h-full !flex block flex-col gap-3 justify-center items-center">
                                            {item.srcFoto.map((foto, subIndex) => (
                                            <img
                                                key={subIndex}
                                                className="w-full h-[300px] aspect-square rounded-lg"
                                                src={foto}
                                                alt={item.altFoto[subIndex]}
                                            />
                                            ))}
                                        </SwiperSlide>
                                    )
                                } else {
                                    return item.srcFoto.map((foto, subIndex) => (
                                        <SwiperSlide key={`${index}-${subIndex}`} className="h-full block !flex items-center justify-center">
                                            <img
                                            className="w-full h-[610px] block object-cover rounded-lg"
                                            src={foto}
                                            alt={item.altFoto[subIndex]}
                                            />
                                        </SwiperSlide>
                                    ))
                                }
                            })}
                </Swiper>
            </div>
            <div className='absolute inset-0 z-5 bg-gradient-to-t from-white from-0% via-white via-0% to-transparent to-40% pointer-events-none'></div>
            <p className="absolute text-azul-base font-extrabold text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl w-full bottom-15 left-10 z-6 pointer-events-none">NOSSO ESPAÇO</p>
        </div>
    )
}