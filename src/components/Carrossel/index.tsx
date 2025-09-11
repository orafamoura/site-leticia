import CarrosselItem from "./items";
import 'swiper/swiper-bundle.css';
import 'swiper/modules'

export default function Carrossel() {

    const itemsDoCarrossel = [
        {
        "id": 1,
        "carrosselTexto": "Mantenha seu cérebro ativo e sua autonomia preservada com atividades" + 
        "e exercícios personalizados que estimulam a mente, previnem perdas cognitivas e " +
        "promovem bem-estar e qualidade de vida ao longo do envelhecimento.",
        "carrosselTitulo":"Manter o Cérebro Ativo",
        "carrosselImg":"carrosselImagens/exemplo.png"
        },
        {
        "id": 2, 
        "carrosselTexto": "Mantenha seu cérebro ativo e sua autonomia preservada com atividades" + 
        "e exercícios personalizados que estimulam a mente, previnem perdas cognitivas e " +
        "promovem bem-estar e qualidade de vida ao longo do envelhecimento.",
        "carrosselTitulo":"Manter o Cérebro ",
        "carrosselImg":"carrosselImagens/exemplo.png"
        },
        {
        "id": 3,    
        "carrosselTexto": "Mantenha seu cérebro ativo e sua autonomia preservada com atividades" + 
        "e exercícios personalizados que estimulam a mente, previnem perdas cognitivas e " +
        "promovem bem-estar e qualidade de vida ao longo do envelhecimento.",
        "carrosselTitulo":"Manter o  Ativo",
        "carrosselImg":"carrosselImagens/exemplo.png"
        }
    ]

    return (
       <section>
            <div>
                <div className='w-full flex gap-2'>
                    {itemsDoCarrossel.map(function(item) {
                        return (
                            <div key={item.id} className=''>
                                <CarrosselItem  carrosselImg={item.carrosselImg} carrosselTexto={item.carrosselTexto} carrosselTitulo={item.carrosselTitulo}></CarrosselItem>
                            </div>
                        )
                    })}
                </div>
            </div>
       </section>
    )
}