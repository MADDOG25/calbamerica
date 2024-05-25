import React from "react";
import NavBar from "./UI/NavBar";

export default function HeroSection() {
  return (
    <div className="">
      <NavBar />
      {/* Hero Section */}
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-44 sm:py-44 lg:py-48">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[--textPrimary] sm:text-6xl">
              Cámara Latinoamericana del Litio (Calbamerica)
            </h1>
            <p className="mt-6 text-lg leading-8 text-[--textSecondary]">
              Buscamos Proyectar una transparente definición del precio del
              litio totalmente limpio, con la facultad de formador el precios,
              Índice de Litio y modelos de contratos presentes y futuros.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-[--textButton] shadow-sm bg-[--accent] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent]"
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
