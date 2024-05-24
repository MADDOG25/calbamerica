import React, { useState } from "react";
import { MagicCard } from "react-magic-motion";
import "react-magic-motion/card.css";

function CloseFullscreenSvg() {
  return (
    <>
      <rect
        x="1"
        y="16"
        width="14"
        height="15"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M26 5L18 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 13H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 13V9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        stroke="currentColor"
        strokeWidth="2"
      />
    </>
  );
}

function OpenFullscreenSvg() {
  return (
    <>
      <rect
        x="1"
        y="8"
        width="21"
        height="23"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 24L15 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15 16H11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15 16V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        stroke="currentColor"
        strokeWidth="2"
      />
    </>
  );
}

export default function FlagsCol() {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <MagicCard
        isCardExpanded={isCardExpanded}
        onBackgroundFadeClick={() => setIsCardExpanded(false)}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Contenedor */}
        <div
          style={{
            width: isCardExpanded ? "20rem" : "16rem",
            gap: "2rem",
            display: "flex",
            flexDirection: "column",
            padding: "1.8rem 0.5rem",
            color: isCardExpanded ? "white" : "currentColor",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                fontWeight: 600,
                fontSize: "1.4em",
              }}
            >
              Asociado Colombia
            </h3>

            {/* Icono expandido */}
            <button
              style={{ position: "absolute", right: 0, zIndex: 9999 }}
              onClick={() => setIsCardExpanded(!isCardExpanded)}
            >
              <svg
                key="exclude"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isCardExpanded ? (
                  <CloseFullscreenSvg />
                ) : (
                  <OpenFullscreenSvg />
                )}
              </svg>
            </button>
          </div>
          {/* Contenedor flags */}
          <div style={{ overflowY: "auto" }}>
            <img
              style={{
                width: isCardExpanded ? "24rem" : "16rem",
                height: "auto",
              }}
              alt="Colombia Flag"
              src="./colombiaFlag.svg"
            />
            {isCardExpanded && (
              <section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  marginTop: "1.5rem",
                }}
              >
                {/* Imagenes de flags */}
                <img
                  className="max-h-12 w-full object-contain"
                  src="./chileFlag.svg"
                  alt="Chile Flag"
                  width={180}
                  height={60}
                />
                <img
                  className="max-h-12 w-full object-contain"
                  src="./argentinaFlag.svg"
                  alt="Argentina Flag"
                  width={180}
                  height={60}
                />
                <img
                  className="max-h-12 w-full object-contain"
                  src="./costaricaFlag.svg"
                  alt="Costa Rica Flag"
                  width={180}
                  height={60}
                />
                <img
                  className="max-h-12 w-full object-contain"
                  src="./brazilFlag.svg"
                  alt="Brazil Flag"
                  width={180}
                  height={60}
                />
              </section>
            )}
          </div>
        </div>
      </MagicCard>
    </div>
  );
}