import React from "react";

export default function ContactSection() {
  return (
    <div className="mx-auto py-44 sm:py-44 lg:py-48 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
      <div className="flex mx-4 flex-col justify-center items-center gap-y-4">
        <img></img>
        <h4 className="mt-2 text-xl font-bold tracking-tight text-[--textPrimary] sm:text-4xl">
          Calbamerica
        </h4>
        <p className="text-base mt-2 font-semibold leading-7 text-[--textSecondary]">
          Institucional
        </p>
        <a
          target="_blank"
          href="mailto:info@calbamerica.org"
          className="mt-2 text-md leading-8 text-[--textSecondary] rounded-2xl px-4 bg-[--bgnavbar]"
        >
          info@calbamerica.org
        </a>
      </div>
      <div className="flex mx-4 flex-col justify-center items-center gap-y-4">
        <img></img>
        <h4 className="mt-2 text-xl font-bold tracking-tight text-[--textPrimary] sm:text-4xl">
          Presidente & Fundador
        </h4>
        <p className="text-base mt-2 font-semibold leading-7 text-[--textSecondary]">
          Lic. Pablo Rutigliano
        </p>
        <a
          target="_blank"
          href="mailto:prutigliano@calbamerica.org"
          className="mt-2 text-md leading-8 text-[--textSecondary] rounded-2xl px-4 bg-[--bgnavbar]"
        >
          prutigliano@calbamerica.org
        </a>
      </div>
    </div>
  );
}
