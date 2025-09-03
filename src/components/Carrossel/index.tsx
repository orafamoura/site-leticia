import CarrosselItem from "./items";

export default function Carrossel() {


    return (
        <div className="w-full flex gap-4 justify-center">
            <CarrosselItem carrosselTexto="Mantenha seu cérebro ativo e sua autonomia preservada com atividades e exercícios personalizados que estimulam a mente, previnem perdas cognitivas e promovem bem-estar e qualidade de vida ao longo do envelhecimento." carrosselTitulo="Manter o Cérebro Ativo" carrosselImg="../../../public/carrosselImagens/exemplo.png"></CarrosselItem>
            <CarrosselItem carrosselTexto="Mantenha seu cérebro ativo e sua autonomia preservada com atividades e exercícios personalizados que estimulam a mente, previnem perdas cognitivas e promovem bem-estar e qualidade de vida ao longo do envelhecimento." carrosselTitulo="Manter o Cérebro Ativo" carrosselImg="../../../public/carrosselImagens/exemplo.png"></CarrosselItem>
            <CarrosselItem carrosselTexto="Mantenha seu cérebro ativo e sua autonomia preservada com atividades e exercícios personalizados que estimulam a mente, previnem perdas cognitivas e promovem bem-estar e qualidade de vida ao longo do envelhecimento." carrosselTitulo="Manter o Cérebro Ativo" carrosselImg="../../../public/carrosselImagens/exemplo.png"></CarrosselItem>
        </div>
    )
}