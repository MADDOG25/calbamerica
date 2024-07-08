import React from "react";
import { Element } from "react-scroll";

const people = [
  {
    name: "Lic Carlos Attias",
    role: "Vicepresidente",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dr Ricardo de Seta",
    role: "Secretario",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lic Claudio Barucca",
    role: "Tesorero",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Ing Walter Muñoz",
    role: "Director de Minas",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dr Gustavo Esteban",
    role: "Director de Capital Humano",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dr Gabriel Guevara",
    role: "Director Institucional",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Pablo Roma",
    role: "Prensa",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function TeamSection() {
  return (
    <Element name="team-section">
      <div className="bg-[--bgSecondary] py-24 sm:py-32">
        <div className="mx-auto grid-cols-1 max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          {/* Cont Text */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl text-center font-bold tracking-tight text-[--textPrimary] sm:text-4xl">
              Nuestro Equipo
            </h2>
            <p className="mt-6 text-center text-lg leading-8 text-[--textSecondary]">
              Somos un grupo dinámico de personas apasionadas por lo que hacemos
              y dedicadas a ofrecer los mejores resultados a nuestros clientes.
            </p>
          </div>
          {/* Cont Lead */}
          <div className="flex mt-6 flex-col gap-y-4 items-center justify-center gap-x-6">
            <img
              className="h-60 w-60 rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
              src="/img/pablo.jpeg"
              alt="Franco Rutigliano"
            />
            <div className="text-center">
              <h3 className="text-base font-semibold leading-7 tracking-tight text-[--textPrimary]">
                Lic Pablo Rutigliano
              </h3>
              <p className="text-sm font-semibold leading-6 text-[--textSecondary]">
                Presidente & Fundador
              </p>
            </div>
          </div>
          {/* Cont List */}
          <ul
            role="list"
            className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-14 gap-y-14 sm:max-w-xl sm:grid-cols-2 md:grid-rows-2 sm:gap-x-44 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center justify-center flex-col md:gap-y-4 gap-x-6">
                  <img
                    className="h-28 w-28 rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                    src={person.imageUrl}
                    alt="equipo de calbamerica"
                  />
                  <div>
                    <h3 className="text-center text-base font-semibold leading-7 tracking-tight text-[--textPrimary]">
                      {person.name}
                    </h3>
                    <p className="text-center text-sm font-semibold leading-6 text-[--textSecondary]">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Element>
  );
}
