import React from "react";
import { Element } from "react-scroll";

export default function ContactSection() {
  return (
    <Element name="contact-section">
      <div className="mx-auto py-28 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
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
            className="mt-2 text-md flex gap-x-2 leading-8 text-[--textSecondary] rounded-2xl px-4 bg-[--bgnavbar]"
          >
            <img src="/gmail.svg" width={20} height={20}></img>
            info@calbamerica.org
          </a>
          <div className="grid grid-cols-2 sm:grid-cols-2 mx-auto gap-x-4">
            <a
              target="_blank"
              href="https://twitter.com/camaralitio"
              className="text-center leading-8 rounded-2xl p-[0.5rem] bg-[--bgnavbar]"
            >
              <img src="/xtwitter.svg" width={25} height={25}></img>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/camaralatamlitio/"
              className="text-center leading-8 rounded-2xl p-[0.5rem] bg-[--bgnavbar]"
            >
              <img src="/instagram.svg" width={25} height={25}></img>
            </a>
          </div>
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
            className="mt-2 flex gap-x-2 text-md leading-8 text-[--textSecondary] rounded-2xl px-4 bg-[--bgnavbar]"
          >
            <img src="/gmail.svg" width={20} height={20}></img>
            prutigliano@calbamerica.org
          </a>
          <div className="grid grid-cols-1 mx-auto gap-x-4">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/pablo-rutigliano-b6404820/"
              className="text-center leading-8 rounded-2xl p-[0.5rem] bg-[--bgnavbar]"
            >
              <img src="/linkedin.svg" width={25} height={25}></img>
            </a>
          </div>
        </div>
      </div>
    </Element>
  );
}
