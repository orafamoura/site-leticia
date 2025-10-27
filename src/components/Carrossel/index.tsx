import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import CarrosselItem from "./items";
import 'swiper/swiper-bundle.css';
import 'swiper/modules'

export default function Carrossel() {

    const itemsDoCarrossel = [
        {
        id: 1,
        carrosselTitulo:"Pessoas com dificuldades cognitivas",
        carrosselTexto: "Atendemos pessoas que apresentam dificuldades no desempenho "+
        " das atividades do cotidiano em decorrência de problemas na memória, atenção, "+
        "concentração, funções executivas e outras habilidades essenciais para a autonomia",
        carrosselImg:"carrosselImagens/exemplo.png",
        carrosselTags:["Doença de Parkinson"]
        },
        {
        id: 2,
        carrosselTitulo:"Pessoas com dificuldades neurológicas",
        carrosselTexto: "Pessoa que tiveram AVE (derrame), Doença de Parkinson ou alguma "+
        " lesão cerebral, que busquem apoio especializado em reabilitação neurológica para maior"+
        " independência e participação nas atividades significativas e da rotina.",
        carrosselImg:"carrosselImagens/exemplo.png",
        carrosselTags:["Doença de Parkinson"]
        },
        {
        id: 3,       
        carrosselTitulo:"Idosos querem manter o cérebro ativo",
        carrosselTexto: "Idosos que desejam manter o cérebro ativo preservando a independência"+
        " e autonomia, por meio de atividades, exercícios cognitivos e ocupacionais específicos.",
        carrosselImg:"carrosselImagens/exemplo.png",
        carrosselTags:["Doença de Parkinson"]
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
            425:  { spaceBetween: 15, slidesPerView: 1.5, autoplay:{delay: 3000 }},
            640:  { spaceBetween: 20, slidesPerView: 2, autoplay:{delay: 3000 }},
            1024: { spaceBetween: 0, slidesPerView: 3, autoplay:{delay: 3000 }},
            1240: { spaceBetween: 0, initialSlide: 1, slidesPerView: 3, autoplay: false, enabled: false},
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full">
            {itemsDoCarrossel.map(function (item) {
                return (
                    <SwiperSlide className='justify-items-center flex'>
                        <CarrosselItem carrosselImg={item.carrosselImg} carrosselTexto={item.carrosselTexto} carrosselTitulo={item.carrosselTitulo} carrosselTags={item.carrosselTags}></CarrosselItem>
                    </SwiperSlide>
                )
            })}
            
        </Swiper>
    )
}