import React from "react";
import { Element } from "react-scroll";

export default function ServiceSection() {
  return (
    <Element name="service-section">
      <section
        aria-labelledby="services-title"
        className="bg-[--bgPrimary] py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          {/* Atención */}
          <h2
            id="services-title"
            className="text-3xl font-bold tracking-tight text-[--textPrimary] sm:text-4xl"
          >
            Programa Red de Ciudades Verdes
          </h2>

          {/* Interés + Deseo */}
          <h3 className="mt-4 text-lg font-medium leading-8 text-[--textSecondary]">
            ¡Conectamos tu comuna con el desarrollo sostenible! Explorá nuestros servicios clave
            para impulsar el crecimiento económico verde.
          </h3>

          {/* Acción: servicios visibles */}
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: "Sinergias estratégicas",
                alt: "Grupos de personas colaborando en un proyecto verde",
                img: "https://images.pexels.com/photos/4990549/pexels-photo-4990549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              },
              {
                title: "Potenciá tu Comuna",
                alt: "Vista aérea de una ciudad sostenible con espacios verdes",
                img: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              },
              {
                title: "Ambiente y Energía",
                alt: "Paneles solares y turbinas eólicas",
                img: "https://images.pexels.com/photos/6572421/pexels-photo-6572421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              },
              {
                title: "Tecnología e Innovación",
                alt: "Manos interactuando con una interfaz digital futurista",
                img: "https://images.pexels.com/photos/10619968/pexels-photo-10619968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              },
              {
                title: "Servicios Jurídicos",
                alt: "Mesa de trabajo con documentos legales",
                img: "https://images.pexels.com/photos/6077296/pexels-photo-6077296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              },
              {
                title: "Gestión Pública",
                alt: "Personas reunidas en un salón de gobierno local",
                img: "https://images.pexels.com/photos/7103093/pexels-photo-7103093.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center transition-transform ease-in-out duration-300 hover:-translate-y-1 hover:scale-105"
              >
                <div className="overflow-hidden rounded-xl shadow-md w-full h-40">
                  <img
                    src={service.img}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="mt-4 text-[--textPrimary] font-medium">
                  {service.title}
                </p>
              </div>
            ))}
          </div>

          {/* Meta invisible para SEO */}
          <p className="sr-only">
            Servicios del programa Red de Ciudades Verdes ofrecidos por Calbamerica: sinergias estratégicas,
            energía limpia, tecnología, innovación, asesoría jurídica y gestión pública para comunas de Latinoamérica.
          </p>
        </div>
      </section>
    </Element>
  );
}
