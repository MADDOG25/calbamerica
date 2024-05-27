import React from "react";
import { Element } from "react-scroll";

export default function ServiceSection() {
  return (
    <Element name="service-section">
      <div className="bg-[--bgPrimary] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold leading-8 text-[--textPrimary]">
            Programa Red de Ciudades Verdes
          </h2>
          <h3 className="mt-4 text-center text-lg font-normal leading-8 text-[--textSecondary]">
            Acercamos tu comuna a la economía del futuro! Conozca más sobre
            nuestros servicios.
          </h3>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-12 gap-y-14 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <img
                className=" col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Sinergias estratégicas"
                width={158}
                height={48}
              />
              <p className="mt-4">Sinergias estratégicas</p>
            </div>
            <div className="flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Potenciá tu Comuna"
                width={158}
                height={48}
              />
              <p className="mt-4">Potenciá tu Comuna</p>
            </div>
            <div className="flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Ambiente y Energía"
                width={158}
                height={48}
              />
              <p className="mt-4">Ambiente y Energía</p>
            </div>
            <div className="flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Tecnología e Innovación"
                width={158}
                height={48}
              />
              <p className="mt-4">Tecnología e Innovación</p>
            </div>
            <div className="flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Servicios Jurídicos"
                width={158}
                height={48}
              />
              <p className="mt-4">Servicios Jurídicos</p>
            </div>
            <div className="flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Gestión Pública"
                width={158}
                height={48}
              />
              <p className="mt-4">Gestión Pública</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
