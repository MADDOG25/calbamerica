import React from "react";

const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function TeamSection() {
  return (
    <div className="bg-[--bgSecondary] py-24 sm:py-32">
      <div className="mx-auto grid-cols-1 max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        {/* Cont Text */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold tracking-tight text-[--textPrimary] sm:text-4xl">
            Nuestro Equipo
          </h2>
          <p className="mt-6 text-center text-lg leading-8 text-[--textSecondary]">
            Somos un grupo dinámico de personas apasionadas por lo que hacemos y
            dedicadas a ofrecer los mejores resultados a nuestros clientes.
          </p>
        </div>
        {/* Cont Lead */}
        <div className="flex mt-6 flex-col gap-y-4 items-center justify-center gap-x-6">
          <img
            className="h-22 w-22 rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Franco Rutigliano"
          />
          <div className="text-center">
            <h3 className="text-base font-semibold leading-7 tracking-tight text-[--textPrimary]">
              Franco Rutigliano
            </h3>
            <p className="text-sm font-semibold leading-6 text-[--textSecondary]">
              Fundador
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
                  className="h-20 w-20 rounded-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-[--textPrimary]">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-[--textSecondary]">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
