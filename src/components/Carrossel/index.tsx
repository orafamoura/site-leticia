import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import CarrosselItem from "./items";
import 'swiper/swiper-bundle.css';


export default function Carrossel() {
    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={24}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={1.15}
        breakpoints={{
            640:  { slidesPerView: 1.25 },
            1024: { slidesPerView: 1.5  },
            1280: { slidesPerView: 1.6  },
        }}
        centeredSlides={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
            className="w-full max-w-2xl mx-auto">
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