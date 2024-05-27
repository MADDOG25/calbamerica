import React from "react";
import FlagsCont from "./UI/FlagsCont";
import { Element } from "react-scroll";

export default function PartnersSection() {
  return (
    <Element name='partners-section'>
      <div className="bg-[--bgSecondary] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold leading-8 text-[--textPrimary]">
            Asociados
          </h2>
          <p className="text-center mt-6 mb-10 text-lg leading-8 text-[--textSecondary]">
            Acercamos tu comuna a la economía del futuro! Conozca más sobre
            nuestros asociados.
          </p>
          {/* Contenedor de Imagenes */}
          <FlagsCont />
        </div>
      </div>
    </Element>
  );
}
