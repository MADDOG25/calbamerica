import React from "react";
import FlagsCont from "./UI/FlagsCont";
import { Element } from "react-scroll";

export default function PartnersSection() {
  return (
    <Element name="partners-section">
      <section
        aria-labelledby="partners-title"
        className="bg-[--bgSecondary] py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          {/* Atención */}
          <h2
            id="partners-title"
            className="text-3xl font-bold tracking-tight text-[--textPrimary] sm:text-4xl"
          >
            Nuestros Países Asociados
          </h2>

          {/* Interés + Deseo */}
          <p className="mt-6 mb-10 text-lg leading-8 text-[--textSecondary] font-medium">
            Unidos por una visión compartida: impulsar la economía del litio
            limpio en Latinoamérica con transparencia, innovación y cooperación
            internacional.
          </p>

          {/* Acción visual implícita (ver banderas/aliados) */}
          <FlagsCont />

          {/* Meta invisible para SEO */}
          <p className="sr-only">
            Conozca a los países y organizaciones asociadas a Calbamerica,
            trabajando juntos para liderar el desarrollo sostenible del litio en
            la región.
          </p>
        </div>
      </section>
    </Element>
  );
}
