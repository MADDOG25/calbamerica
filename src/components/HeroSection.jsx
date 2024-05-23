import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "../variables.css";

const navigation = [
  { name: "Inicio", href: "#" },
  { name: "Acerca de", href: "#" },
  { name: "Contacto", href: "#" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[--whiteGray]">
      <header className="absolute inset-x-0 top-0 z-50">
        {/* Navbar */}
        <nav
          className="flex items-center justify-between p-4 lg:px-8 bg-[--mediumGreen] rounded-3xl m-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Calbamerica</span>
              <img
                className="h-10 w-auto"
                src="./logo.svg"
                alt="Calbamerica logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[--whiteGray]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-md font-semibold leading-6 text-[--whiteGray]"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        {/* Menu hamburguesa abierto */}
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[--whiteGray] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-[--darkGreen]">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Calbamerica</span>
                <img
                  className="h-8 w-auto"
                  src="./logo.svg"
                  alt="Calbamerica logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-[--mediumGreen]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-[--mediumGreen]">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-gray-900 hover:bg-[--softGray]"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      {/* Hero Section */}
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-44 sm:py-44 lg:py-48">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Cámara Latinoamericana del Litio (Calbamerica)
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Buscamos Proyectar una transparente definición del precio del
              litio totalmente limpio, con la facultad de formador el precios,
              Índice de Litio y modelos de contratos presentes y futuros.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[--darkGreen] px-3.5 py-2.5 text-sm font-semibold text-[--whiteGray] shadow-sm hover:bg-[--mediumGreen] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--mediumGreen]"
              >
                Leer más <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
