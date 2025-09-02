export default function Header() {
    return ( 
        <header>
            <section className="w-full py-2 bg-[#CEA35B] flex flex-nowrap overflow-hidden">
                <div className="sm:w-full flex sm:justify-center items-center whitespace-nowrap [&_p]:max-w-none animate-[marquee_20s_linear_infinite] sm:[animation-play-state:paused] sm:relative">
                    <ul className="items-center sm:absolute sm:justify-center">
                        <li className="flex items-center ">
                            <p className="text-xs gap-1 flex items-center px-8"><img className="w-5" src="../../../public/icons/relogio.svg"/>Atendemos de Segunda à Sexta de 08h às 19h.</p>
                            <p className="text-xs px-8">Liberty Mall - Shopping - Asa Norte, Brasília - DF</p>
                        </li>
                    </ul>
                    <ul className="sm:opacity-0">
                        <li className="flex items-center">
                            <p className="text-xs gap-1 flex items-center px-8"><img className="w-5" src="../../../public/icons/relogio.svg"/>Atendemos de Segunda à Sexta de 08h às 19h.</p>
                            <p className="text-xs px-8">Liberty Mall - Shopping - Asa Norte, Brasília - DF</p>
                        </li>
                    </ul>
                </div>
            </section>
            <nav className="bg-white px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="#" className="flex items-center">
                        <img src="../../../public/images/HorizontalColoridaSFundo.webp" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    </a>
                    <div className="flex items-center lg:order-2">
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-black dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-black dark:hover:text-white lg:dark:hover:bg-transparent dark:border-black">Quem somos</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-black dark:hover:text-white lg:dark:hover:bg-transparent dark:border-black">Publico Alvo</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-black dark:hover:text-white lg:dark:hover:bg-transparent dark:border-black">Serviços</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-black dark:hover:text-white lg:dark:hover:bg-transparent dark:border-black">Como funciona</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-black dark:hover:text-white lg:dark:hover:bg-transparent dark:border-black">Dúvidas</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-black border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-white dark:hover:bg-black dark:hover:text-white lg:dark:hover:bg-transparent dark:border-black">Localização</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}