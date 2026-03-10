import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,

} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <section className="w-full py-1 bg-dourado-base flex flex-nowrap overflow-hidden">
                <div className="w-full flex sm:justify-center items-center whitespace-nowrap [&_p]:max-w-none animate-[marquee_20s_linear_infinite] sm:[animation-play-state:paused] sm:relative">
                    <ul className="items-center sm:absolute sm:justify-center">
                        <li className="flex items-center">
                            <p className="text-sm font-medium tracking-wide gap-1 flex items-center px-8"><img className="w-4" src="/imgs/icons/relogio.svg"/>Atendemos de Segunda à Sexta de 08h às 19h.</p>
                            <p className="text-sm font-medium tracking-wide gap-1 flex items-center px-8"><img className="w-3" src="/imgs/icons/vector.svg"/>Liberty Mall - Shopping - Asa Norte, Brasília - DF</p>
                        </li>
                    </ul>
                    <ul className="sm:opacity-0">
                        <li className="flex items-center">
                            <p className="text-sm font-medium tracking-wide gap-1 flex items-center px-8"><img className="w-4" src="/imgs/icons/relogio.svg"/>Atendemos de Segunda à Sexta de 08h às 19h.</p>
                            <p className="text-sm font-medium tracking-wide gap-1 flex items-center px-8"><img className="w-3" src="/imgs/icons/vector.svg"/>Liberty Mall - Shopping - Asa Norte, Brasília - DF</p>
                        </li>
                    </ul>
                </div>
            </section>      
            <header className="bg-white font-montserrat">
            <nav aria-label="Global" className="relative mx-auto flex max-w-7xl h-[65px] items-center justify-between py-2 px-4 lg:px-8">
            <div className="absolute lg:static left-1/2 -translate-x-1/2">
                <a href="/" className="block">
                <img
                    src="/imgs/marca/horiz-color-sem-fundo.webp"
                    alt="Instituto Inclusio"
                    className="h-13 w-auto"
                />
                </a>
            </div>
            <div className="flex lg:flex-1"></div>
            <div className="flex lg:hidden">
                <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 text-gray-400"
                >
                <Bars3Icon aria-hidden="true" className="size-6" />
                </button>
            </div>
            <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                <a href="#quemSomos" className="text-md/6 font-extrabold text-degrade-cinza ">QUEM SOMOS</a>
                <a href="#nossosPacientes" className="text-md/6 font-extrabold text-degrade-cinza ">NOSSOS PACIENTES</a>
                <a href="#comoFunciona" className="text-md/6 font-extrabold text-degrade-cinza ">COMO FUNCIONA</a>
                <a href="#nossosServicos" className="text-md/6 font-extrabold text-degrade-cinza ">NOSSOS SERVIÇOS</a>
                <a href="#localizacao" className="text-md/6 font-extrabold text-degrade-cinza ">LOCALIZAÇÃO</a>
            </PopoverGroup>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden font-montserrat">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-linear-to-b from-white from-[50%] to-bg-transparent to-[70%] p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-600/10">
                <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Instituto Inclusio</span>
                    <img
                        alt=""
                        src="/imgs/marca/horiz-color-sem-fundo.webp"
                        className="h-10 w-auto dark:hidden"
                    />
                    <img
                        alt=""
                        src="/imgs/marca/horiz-color-sem-fundo.webp"
                        className="h-10 w-auto not-dark:hidden"
                    />
                    </a>
                    <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y place-items-center divide-gray-500/10">
                    <div className="w-full space-y-2 py-6">
                        <a
                        href="#quemSomos"
                        onClick={() => setMobileMenuOpen(false)}
                        className="mx-7 block rounded-full bg-degrade-cinza px-3 py-1 text-normal font-bold text-white hover:bg-gray-50"
                        >
                        QUEM SOMOS
                        </a>
                        <a
                        href="#nossosPacientes"
                        onClick={() => setMobileMenuOpen(false)}
                        className="mx-7 block rounded-full bg-degrade-cinza px-3 py-1 text-normal font-bold text-white hover:bg-gray-50"
                        >
                        NOSSOS PACIENTES
                        </a>
                        <a
                        href="#comoFunciona"
                        onClick={() => setMobileMenuOpen(false)}
                        className="mx-7 block rounded-full bg-degrade-cinza px-3 py-1 text-normal font-bold text-white hover:bg-gray-50"
                        >
                        COMO FUNCIONA
                        </a>
                        <a
                        href="#nossosServicos"
                        onClick={() => setMobileMenuOpen(false)}
                        className="mx-7 block rounded-full bg-degrade-cinza px-3 py-1 text-normal font-bold text-white hover:bg-gray-50"
                        >
                        NOSSOS SERVIÇOS
                        </a>
                        <a
                        href="#localizacao"
                        onClick={() => setMobileMenuOpen(false)}
                        className="mx-7 block rounded-full bg-degrade-cinza px-3 py-1 text-normal font-bold text-white hover:bg-gray-50"
                        >
                        LOCALIZAÇÃO
                        </a>
                    </div>
                    </div>
                </div>
                </DialogPanel>
            </Dialog>
            </header>
        </>
    )
}