import React from "react";
import { Element } from "react-scroll";

export default function ContactSection() {
  return (
    <Element name="contact-section">
      <div className="mx-auto py-28 grid max-w-4xl grid-cols-1 lg:grid-cols-2 gap-16 px-6">
        {/* Calbamerica contacto institucional */}
        <div className="flex flex-col justify-center items-center gap-y-4">
          <img />
          <h4 className="text-xl font-bold tracking-tight text-[--textPrimary] sm:text-4xl">
            Calbamerica
          </h4>
          <p className="text-base font-semibold text-[--textSecondary]">
            Institucional
          </p>
          <a
            href="mailto:info@calbamerica.org"
            target="_blank"
            className="flex items-center gap-x-2 text-md text-[--textSecondary] rounded-2xl px-4 bg-[--bgnavbar]"
          >
            <img src="/gmail.svg" width={20} height={20} alt="Gmail icon" />
            info@calbamerica.org
          </a>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://twitter.com/camaralitio"
              target="_blank"
              className="rounded-2xl p-2 bg-[--bgnavbar]"
            >
              <img src="/xtwitter.svg" width={25} height={25} alt="X icon" />
            </a>
            <a
              href="https://www.instagram.com/camaralatamlitio/"
              target="_blank"
              className="rounded-2xl p-2 bg-[--bgnavbar]"
            >
              <img
                src="/instagram.svg"
                width={25}
                height={25}
                alt="Instagram icon"
              />
            </a>
          </div>
        </div>

        {/* Presidente contacto personal */}
        <div className="flex flex-col justify-center items-center gap-y-4">
          <img />
          <h4 className="text-xl font-bold tracking-tight text-[--textPrimary] sm:text-4xl">
            Presidente & Fundador
          </h4>
          <p className="text-base font-semibold text-[--textSecondary]">
            Lic. Pablo Rutigliano
          </p>
          <a
            href="mailto:info@calbamerica.org"
            target="_blank"
            className="flex items-center gap-x-2 text-md text-[--textSecondary] rounded-2xl px-4 bg-[--bgnavbar]"
          >
            <img src="/gmail.svg" width={20} height={20} alt="Gmail icon" />
            info@calbamerica.org
          </a>
          <div className="grid grid-cols-1 gap-4">
            <a
              href="https://www.linkedin.com/in/pablo-rutigliano-b6404820/"
              target="_blank"
              className="rounded-2xl p-2 bg-[--bgnavbar]"
            >
              <img
                src="/linkedin.svg"
                width={25}
                height={25}
                alt="LinkedIn icon"
              />
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
}
