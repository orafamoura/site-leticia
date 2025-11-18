import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import CarrosselItem from "./items";
import 'swiper/swiper-bundle.css';
import 'swiper/modules'

export default function Carrossel() {

    const itemsDoCarrossel = [
        {
        id: 1,
        carrosselTitulo:["Pessoas com","dificuldades cognitivas"],
        carrosselTexto: "Atendemos pessoas que apresentam dificuldades no desempenho "+
        " das atividades do cotidiano em decorrência de problemas na memória, atenção, "+
        "concentração, funções executivas e outras habilidades essenciais para a autonomia",
        carrosselImg:"carrosselImagens/exemplo.png",
        carrosselTags:["Demência", "Alzheimer", "Corpos de lewy"]
        },
        {
        id: 2,
        carrosselTitulo:["Pessoas com","dificuldades neurológicas"],
        carrosselTexto: "Pessoa que tiveram AVE (derrame), Doença de Parkinson ou alguma "+
        " lesão cerebral, que busquem apoio especializado em reabilitação neurológica para maior"+
        " independência e participação nas atividades significativas e da rotina.",
        carrosselImg:"carrosselImagens/exemplo.png",
        carrosselTags:["Doença de Parkinson", "AVE (Derrame)", "Parkinsonismo"]
        },
        {
        id: 3,       
        carrosselTitulo:["Idosos que querem","manter o cérebro ativo"],
        carrosselTexto: "Idosos que desejam manter o cérebro ativo preservando a independência"+
        " e autonomia, por meio de atividades, exercícios cognitivos e ocupacionais específicos.",
        carrosselImg:"carrosselImagens/exemplo.png",
        carrosselTags:["Transtorno Cognitivo Leve"]
        }
    ]

    return (
        <div className='w-full'>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={15}
            initialSlide={1}
            centeredSlides={true}
            slidesPerView={1.1}
            autoplay={{delay: 3000}}
            breakpoints={{
                375:  { spaceBetween: 240, slidesPerView: 2, autoplay:{delay: 3000 }},
                425:  { spaceBetween: 200, slidesPerView: 2, autoplay:{delay: 3000 }},
                640:  { spaceBetween: 20, slidesPerView: 2, autoplay:{delay: 3000 }},
                1024: { spaceBetween: 20, slidesPerView: 3, autoplay:{delay: 3000 }},
                1240: { spaceBetween: 10, initialSlide: 1, slidesPerView: 3, autoplay: false, enabled: false},
            }}
            className="w-auto md:w-7xl m-8 mySwiper">
                {itemsDoCarrossel.map(function (item, key) {
                    return (
                        <SwiperSlide className='!h-auto justify-items-center flex items-stretch'>
                            <CarrosselItem key={key} carrosselImg={item.carrosselImg} carrosselTexto={item.carrosselTexto} carrosselTitulo={item.carrosselTitulo} carrosselTags={item.carrosselTags}></CarrosselItem>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>

    )
}