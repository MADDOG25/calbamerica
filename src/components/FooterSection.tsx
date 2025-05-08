import React from "react";
import { Link } from "react-scroll";

export default function FooterSection() {
  return (
    <div className="flex flex-col items-center justify-center mx-4 mb-8">
      <Link
        to="hero-section"
        smooth={true}
        duration={2000}
        className="cursor-pointer p-2 rounded-2xl bg-[--bgnavbar]"
      >
        <img src="/arrowup.svg" width={25} height={25} alt="Ir arriba" />
      </Link>
    </div>
  );
}
