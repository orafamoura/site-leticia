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
        srcFoto: [
                "/nossoEspacoFotos/fotoP1.webp",
                "/nossoEspacoFotos/fotoP2.webp"
        ],
        altFoto: [
                "foto 2",
                "foto 3"
        ]
    },
        {
        srcFoto:["/nossoEspacoFotos/fotoG1.webp"],
        altFoto:["foto 1"],
    },
    {
        srcFoto: [
                "/nossoEspacoFotos/fotoP1.webp",
                "/nossoEspacoFotos/fotoP2.webp"
        ],
        altFoto: [
                "foto 2",
                "foto 3"
        ]
    },
]

    return(
        <div className='w-auto relative'>
            <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards]}
                    spaceBetween={10}
                    initialSlide={1}
                    centeredSlides={true}
                    slidesPerView={4}
                    autoplay={{delay: 3000}}
                    breakpoints={{
                        425:  { spaceBetween: 5, slidesPerView: 4, autoplay: false},
                        640:  { spaceBetween: 5, slidesPerView: 4, autoplay:false},
                        1024: { spaceBetween: 5, slidesPerView: 4, autoplay:false}
                                }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="">
                        {fotosNossoEspaco.map((item, index) => {
                            if (index % 2 === 1) {
                                return (
                                    <SwiperSlide key={index} className="!flex flex-col gap-3 ">
                                        {item.srcFoto.map((foto, subIndex) => (
                                        <img
                                            key={subIndex}
                                            className="!min-w-[180px] w-full object-contain block"
                                            src={foto}
                                            alt={item.altFoto[subIndex]}
                                        />
                                        ))}
                                    </SwiperSlide>
                                )
                            } else {
                                return item.srcFoto.map((foto, subIndex) => (
                                    <SwiperSlide key={`${index}-${subIndex}`} className="">
                                        <img
                                        className="!min-w-[250px] w-full object-contain block"
                                        src={foto}
                                        alt={item.altFoto[subIndex]}
                                        />
                                    </SwiperSlide>
                                ))
                            }
                        })}
            </Swiper>
            <div className='absolute inset-0 z-5 bg-gradient-to-t from-white from-0% via-white via-0% to-transparent to-35% pointer-events-none'></div>
            <p className="absolute text-azul-base font-extrabold text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl w-[150px] bottom-5 left-10 z-6 pointer-events-none">NOSSO ESPAÇO</p>
        </div>
    )
}