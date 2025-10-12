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
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="/public/images/HorizontalColoridaSFundo.webp"
              className="h-10 w-auto hidden"
            />
            <img
              alt=""
              src="/public/images/HorizontalColoridaSFundo.webp"
              className="h-10 w-auto not-hidden"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm/6 font-semibold text-black ">
            Quem somos
          </a>
          <a href="#" className="text-sm/6 font-semibold text-black ">
            Publico Alvo
          </a>
          <a href="#" className="text-sm/6 font-semibold text-black ">
            Servico
          </a>
          <a href="#" className="text-sm/6 font-semibold text-black ">
            Como funciona
          </a>
          <a href="#" className="text-sm/6 font-semibold text-black ">
            Duvidas
          </a>
          <a href="#" className="text-sm/6 font-semibold text-black ">
            Localizacao
          </a>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-600/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Instituto Inclusio</span>
              <img
                alt=""
                src="/public/images/HorizontalColoridaSFundo.webp"
                className="h-10 w-auto dark:hidden"
              />
              <img
                alt=""
                src="/public/images/HorizontalColoridaSFundo.webp"
                className="h-10 w-auto not-dark:hidden"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black hover:bg-gray-50 dark:hover:bg-white/5"
                >
                  Quem somos
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black hover:bg-gray-50 dark:hover:bg-white/5"
                >
                  Publico Alvo
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black hover:bg-gray-50 dark:hover:bg-white/5"
                >
                  Servico
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black hover:bg-gray-50 dark:hover:bg-white/5"
                >
                  Como funciona
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black hover:bg-gray-50 dark:hover:bg-white/5"
                >
                  Duvidas
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-black hover:bg-gray-50 dark:hover:bg-white/5"
                >
                  Localizacao
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}