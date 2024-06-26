"use client";

import React from "react";
import { cn } from "../../lib/utils";
import { AnimatedList } from "../../components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  href: string;
}

let notifications = [
  {
    name: "infobae.com",
    description: "Paraguay y la Cámara Latinoamericana del Litio firmaron acuerdo para fomentar la industria minera.",
    icon: "💸",
    color: "#00C9A7",
    href: "https://www.infobae.com/movant/2024/06/19/paraguay-y-la-camara-latinoamericana-del-litio-firmaron-acuerdo-para-fomentar-la-industria-minera/"
  },
  {
    name: "miningreporters.com",
    description: "Argentina: These are the names of the candidates for the Secretary of Mining of the Nation.",
    icon: "💸",
    color: "#00C9A7",
    href: "https://www.miningreporters.com/noticia/news/2024/02/argentina-these-are-the-names-of-the-candidates-for-the-secretary-of-mining-of-the-nation"
  },
  {
    name: "diariobitcoin.com",
    description: "La Cámara Argentina del Litio anunció recientemente un proyecto para emitir la primera criptomoneda del país respaldada por reservas de litio.",
    icon: "💸",
    color: "#00C9A7",
    href: "https://www.diariobitcoin.com/paises/sur-america/argentina/atomico3-criptomoneda-de-litio-en-argentina/"
  },
  {
    name: "mexicobusiness.news",
    description: "Lithium Classification Key for Latam's Sovereignty: CALBAMERICA.",
    icon: "💸",
    color: "#00C9A7",
    href: "https://mexicobusiness.news/mining/news/lithium-classification-key-latams-sovereignty-calbamerica"
  },
  {
    name: "gapp-oil.com.ar",
    description: "The cryptocurrency of Argentine lithium «Atómico3» obtained its international financial guarantee.",
    icon: "💸",
    color: "#00C9A7",
    href: "https://gapp-oil.com.ar/2021/11/01/the-cryptocurrency-of-argentine-lithium-atomico3-obtained-its-international-financial-guarantee/"
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, href }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_#163020] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-6 w-6 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-[--textSecondary]">
            <a href={href} target="_blank" className="text-sm font-bold sm:text-lg text-[--textSecondary]">{name}</a>
          </figcaption>
          <a href={href} target="_blank"  className="text-xs font-normal dark:text-[--textSecondary]">
            {description}
          </a>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo() {
  return (
    <div className="relative flex max-h-[200px] min-h-[200px] w-full max-w-[32rem] flex-col overflow-hidden rounded-2xl border-2 border-[--accent] bg-[--bgSecondary] p-6">
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
