import React from "react";
import { Element } from "react-scroll";

const people = [
  {
    name: "Lic Carlos Attias",
    role: "Vicepresidente",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dr Ricardo de Seta",
    role: "Secretario",
    imageUrl: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Lic Claudio Barucca",
    role: "Tesorero",
    imageUrl: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    name: "Ing Walter Muñoz",
    role: "Director de Minas",
    imageUrl: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    name: "Dr Gustavo Esteban",
    role: "Director de Capital Humano",
    imageUrl: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    name: "Dr Gabriel Guevara",
    role: "Director Institucional",
    imageUrl: "https://randomuser.me/api/portraits/men/38.jpg",
  },
  {
    name: "Pablo Roma",
    role: "Prensa",
    imageUrl: "https://randomuser.me/api/portraits/men/40.jpg",
  },
];

export default function TeamSection() {
  return (
    <Element name="team-section">
      <div className="bg-[--bgSecondary] py-24 sm:py-32 px-6 lg:px-8">
        {/* Título y descripción */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[--textPrimary] sm:text-4xl">
            Nuestro Equipo
          </h2>
          <p className="mt-6 text-lg leading-8 text-[--textSecondary]">
            Somos un grupo dinámico de personas apasionadas por lo que hacemos y
            dedicadas a ofrecer los mejores resultados a nuestros clientes.
          </p>
        </div>

        {/* Presidente */}
        <div className="flex mt-16 flex-col gap-y-4 items-center justify-center">
          <img
            className="h-60 w-60 rounded-2xl object-cover shadow-md transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
            src="/img/pablo.jpeg"
            alt="Franco Rutigliano"
          />
          <div className="text-center">
            <h3 className="text-base font-semibold text-[--textPrimary]">
              Lic Pablo Rutigliano
            </h3>
            <p className="text-sm font-semibold text-[--textSecondary]">
              Presidente & Fundador
            </p>
          </div>
        </div>

        {/* Resto del equipo */}
        <ul className="mx-auto mt-20 grid max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {people.map((person) => (
            <li
              key={person.name}
              className="flex flex-col items-center text-center"
            >
              <img
                className="h-28 w-28 rounded-2xl object-cover shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
                src={person.imageUrl}
                alt={`Foto de ${person.name}`}
              />
              <h3 className="mt-4 text-base font-semibold text-[--textPrimary]">
                {person.name}
              </h3>
              <p className="text-sm font-semibold text-[--textSecondary]">
                {person.role}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Element>
  );
}
