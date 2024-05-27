import React from "react";
import { Link } from "react-scroll";

export default function FooterSection() {
  return (
    <div className="flex mx-4 mb-8 flex-col justify-center items-center">
      <Link
        to="hero-section"
        smooth={true}
        duration={2000}
        className="cursor-pointer text-center leading-8 rounded-2xl p-[0.5rem] bg-[--bgnavbar]"
      >
        <img src="/arrowup.svg" width={25} height={25}></img>
      </Link>
    </div>
  );
}
