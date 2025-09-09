import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import CarrosselItem from "./items";
import 'swiper/swiper-bundle.css';
import 'swiper/modules'


export default function Carrossel() {
    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards]}
        spaceBetween={25}
        initialSlide={1}
        slidesPerView='auto'
        autoplay={{delay: 3000}}
        breakpoints={{
            640:  { slidesPerView: 1.3, autoplay:{delay: 3000 }},
            1024: { slidesPerView: 1.5, autoplay:{delay: 3000 }},
            1280: { initialSlide: 1, slidesPerView: 3, autoplay: false, enabled: false},
        }}
        centeredSlides={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
            className="w-full sm:max-w-3xl md:max-w-lg lg:max-w-3xl xl:max-w-6xl px-4!">
            <SwiperSlide >
                <CarrosselItem carrosselTexto="Mantenha seu cérebro ativo e sua autonomia preservada com atividades e exercícios personalizados que estimulam a mente, previnem perdas cognitivas e promovem bem-estar e qualidade de vida ao longo do envelhecimento." carrosselTitulo="Manter o Cérebro Ativo" carrosselImg="../../../public/carrosselImagens/exemplo.png"></CarrosselItem>
            </SwiperSlide>
            <SwiperSlide >
                <CarrosselItem carrosselTexto="Mantenha seu cérebro ativo e sua autonomia preservada com atividades e exercícios personalizados que estimulam a mente, previnem perdas cognitivas e promovem bem-estar e qualidade de vida ao longo do envelhecimento." carrosselTitulo="Manter o Cérebro Ativo" carrosselImg="../../../public/carrosselImagens/exemplo.png"></CarrosselItem>
            </SwiperSlide>
            <SwiperSlide >
                <CarrosselItem carrosselTexto="Mantenha seu cérebro ativo e sua autonomia preservada com atividades e exercícios personalizados que estimulam a mente, previnem perdas cognitivas e promovem bem-estar e qualidade de vida ao longo do envelhecimento." carrosselTitulo="Manter o Cérebro Ativo" carrosselImg="../../../public/carrosselImagens/exemplo.png"></CarrosselItem>
            </SwiperSlide>
        </Swiper>
    )
}