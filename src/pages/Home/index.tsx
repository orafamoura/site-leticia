import Carrossel from "../../components/Carrossel";
import Header from "../../components/Header";

export default function Home(){
    return (
        <div>
            <Header></Header>
            <section className="w-full">
                <div className="w-auto relative">
                    <img className="block w-full h-[350px] sm:h-auto object-cover object-center " src="/images/fotoPrincipal.webp" alt="foto" />
                    <div className="absolute  inset-0 bg-gradient-to-t from-degrade-cinza via-degrade-cinza via-35% to-transparent to-70%"></div>
                    <div className="w-full h-auto mb-30 absolute inset-x-0 bottom-0 flex justify-center items-center gap-5">
                        <img className="w-30 sm:w-50 md:w-70 lg:w-90 h-auto" src="/images/logoVertical.webp" alt="" />
                        <a className="border-2 h-70 border-white"></a>
                        <h1>TERAPIA OCUPACIONAL E REABILITAÇÃO NEUROCOGNITIVA</h1>
                    </div>
                    <div className="w-full h-20 bg-degrade-cinza"></div>
                </div>
                <div className="w-full h-20 bg-degrade-cinza [clip-path:polygon(0_0,100%_0,60%_80%,50%_100%,0_0%)]"></div>
            </section>
            <Carrossel></Carrossel>
        </div>
    )
}