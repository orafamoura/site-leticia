import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import CarrosselItem from "./items";
import 'swiper/swiper-bundle.css';
import 'swiper/modules'

export default function Carrossel() {

    const itemsDoCarrossel = [
        {"carrosselTexto": "Mantenha seu cérebro ativo e sua autonomia preservada com atividades" + 
        "e exercícios personalizados que estimulam a mente, previnem perdas cognitivas e " +
        "promovem bem-estar e qualidade de vida ao longo do envelhecimento.",
        "carrosselTitulo":"Manter o Cérebro Ativo",
        "carrosselImg":"carrosselImagens/exemplo.png"
        },
        {"carrosselTexto": "Mantenha seu cérebro ativo e sua autonomia preservada com atividades" + 
        "e exercícios personalizados que estimulam a mente, previnem perdas cognitivas e " +
        "promovem bem-estar e qualidade de vida ao longo do envelhecimento.",
        "carrosselTitulo":"Manter o Cérebro ",
        "carrosselImg":"carrosselImagens/exemplo.png"
        },
        {"carrosselTexto": "Mantenha seu cérebro ativo e sua autonomia preservada com atividades" + 
        "e exercícios personalizados que estimulam a mente, previnem perdas cognitivas e " +
        "promovem bem-estar e qualidade de vida ao longo do envelhecimento.",
        "carrosselTitulo":"Manter o  Ativo",
        "carrosselImg":"carrosselImagens/exemplo.png"
        },
        {"carrosselTexto": "Mantenha seu cérebro ativo e sua autonomia preservada com atividades" + 
        "e exercícios personalizados que estimulam a mente, previnem perdas cognitivas e " +
        "promovem bem-estar e qualidade de vida ao longo do envelhecimento.",
        "carrosselTitulo":"Manter o  Ativo",
        "carrosselImg":"carrosselImagens/exemplo.png"
        }
    ]

    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards]}
        spaceBetween={15}
        initialSlide={1}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{delay: 3000}}
        breakpoints={{
            425:  { spaceBetween: 15, slidesPerView: 1.4, autoplay:{delay: 3000 }},
            640:  { spaceBetween: 20, slidesPerView: 2, autoplay:{delay: 3000 }},
            1024: { spaceBetween: 0, slidesPerView: 2.4, autoplay:{delay: 3000 }},
            1280: { spaceBetween: 0, initialSlide: 1, slidesPerView: 3, autoplay: false, enabled: false},
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full">
            {itemsDoCarrossel.map(function (item) {
                return (
                    <SwiperSlide className='justify-items-center flex'>
                        <CarrosselItem carrosselImg={item.carrosselImg} carrosselTexto={item.carrosselTexto} carrosselTitulo={item.carrosselTitulo}></CarrosselItem>
                    </SwiperSlide>
                )
            })}
            
        </Swiper>
    )
}