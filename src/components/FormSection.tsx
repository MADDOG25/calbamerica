import React from "react";

const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export default function FormSection() {
  return (
    <div className="bg-[--bgSecondary] relative isolate px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-44 sm:py-44 lg:py-48">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[--textPrimary] sm:text-6xl">
            Formulario de Adhesion
          </h1>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSd7sYZJneuBlJgBUQEPWsaWoegHaHf6TBDAuBKme5ZD3C2CJw/viewform"
              className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-[--textButton] shadow-sm bg-[--accent] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--accent]"
            >
              Formulario aqui <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
