import React from "react";
import { Element } from "react-scroll";

export default function FormSection() {
  return (
    <Element name="form-section">
      <div className="bg-[--bgSecondary] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl py-44 sm:py-44 lg:py-48">
          <div className="text-center grid grid-cols-1 gap-6 max-w-4xl">
            <div className="m-10 flex flex-col items-center justify-center gap-x-6">
              <h1 className="text-2xl font-bold tracking-tight text-[--textPrimary] sm:text-6xl">
                Formulario de Adhesion
              </h1>
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSd7sYZJneuBlJgBUQEPWsaWoegHaHf6TBDAuBKme5ZD3C2CJw/viewform"
                className="mt-6 rounded-md flex gap-x-2 px-3.5 py-2.5 text-sm font-semibold text-[--textButton] shadow-sm bg-[--accent] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent]"
              >
                Formulario aquí
                <span aria-hidden="true">
                  <img src="/linkform.svg" width={20} height={20}></img>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
