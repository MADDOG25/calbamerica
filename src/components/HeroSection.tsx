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
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-50"
          autoPlay
          muted
          loop
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* Hero Section */}
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-28 sm:py-32 lg:py-32">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-[--textPrimary] sm:text-6xl">
                Cámara Latinoamericana del Litio (Calbamerica)
              </h1>
              <p className="mt-6 text-lg font-semibold leading-8 text-[--textSecondary]">
                Buscamos Proyectar una transparente definición del precio del
                litio totalmente limpio, con la facultad de formador el precios,
                Índice de Litio y modelos de contratos presentes y futuros.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="partners-section"
                  smooth="true"
                  duration={500}
                  className="rounded-md px-2 py-2 shadow-sm bg-[--accent] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent] cursor-pointer"
                >
                  <img src="/arrowdown.svg" width={25} height={25}></img>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
