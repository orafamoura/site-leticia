export default function Footer(){

    const infoItems = [
        {
            id: 1,
            img: "/public/icons/map.svg",
            alt: "Icone de mapa",
            text: "Liberty Mall - Shopping - Asa Norte, Brasília - DF, 70712-903"
        },
        {
            id: 2,
            img: "/public/icons/relogioBranco.svg",
            alt: "Icone de um relogio",
            text: "Atendemos de Segunda à Sexta de 08h às 19h."
        },
        {
            id: 3,
            img: "/public/icons/instagram.svg",
            alt: "Icone do Instagram",
            text: "Nos siga no instagram"
        },

    ]

    return (
        <>
            <div className="w-full h-[200px] md:h-[200px] flex items-center bg-azul-base">
                <div className="h-full aspect-square bg-white rounded-r-full overflow-hidden flex items-center content-center pl-3 md:pl-4 mr-4 hidden lg:block">
                    <img className="h-[70%] w-auto" src="/images/LogoVerticalColorida.svg" alt=" Logo Vertical da empresa"/>
                </div>
                <div className="flex-1 hidden lg:block">
                    <ul className="flex flex-col gap-2">
                        {infoItems.map((item, key) => {
                            return (
                                <li className="flex items-center gap-2">
                                    <img className="w-[25px]" key={key} src={item.img} alt={item.alt} />
                                    <p className="text-white text-sm">{item.text}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <iframe
                    className="w-screen lg:w-[600px]"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30716.328354514375!2d-47.901651613586424!3d-15.775400288959387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b8e1a6451a5%3A0x19d062e91797d53a!2sInstituto%20Inclusio!5e0!3m2!1spt-BR!2sbr!4v1761693608220!5m2!1spt-BR!2sbr" 
                    width="600" height="200" 
                    style={{border:0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    )
}