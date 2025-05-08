import React from "react";
import NavBar from "./UI/NavBar";
import { Link, Element } from "react-scroll";

export default function HeroSection() {
  return (
    <Element name="hero-section">
      <div className="relative">
        <NavBar />

        {/* Video de fondo */}
        <video
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-75"
          autoPlay
          muted
          loop
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Hero Section */}
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-28 sm:py-32 lg:py-32 text-center">
            {/* Atención - H1 SEO optimizado */}
            <h1 className="text-4xl font-bold tracking-tight text-[--textPrimary] sm:text-6xl">
              Impulsamos el Futuro del Litio Sustentable en Latinoamérica
            </h1>

            {/* Interés + Deseo */}
            <p className="mt-6 text-lg leading-8 font-semibold text-[--textPrimary]">
              En la Cámara Latinoamericana del Litio (Calbamerica), promovemos
              la transparencia, sustentabilidad y liderazgo regional en la
              formación de precios, contratos e índices del litio limpio.
            </p>

            {/* Acción */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="partners-section"
                smooth={true}
                duration={500}
                className="rounded-md px-4 py-3 text-sm font-semibold bg-[--accent] text-white hover:bg-[--accentHover] shadow-lg transition cursor-pointer"
              >
                Conoce nuestros aliados
              </Link>
            </div>

            {/* Meta Etiquetas invisibles para SEO */}
            <p className="sr-only">
              Calbamerica es una organización dedicada al desarrollo de
              políticas transparentes para el mercado del litio en América
              Latina, enfocándose en sostenibilidad, innovación y cooperación
              internacional.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}
