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

export default function FlagsPar() {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  return (
    <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 items-center justify-center">
      <MagicCard
        isCardExpanded={isCardExpanded}
        onBackgroundFadeClick={() => setIsCardExpanded(false)}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Contenedor */}
        <div
          className={`flex flex-col gap-8 p-7 ${isCardExpanded ? 'text-white' : ''} ${isCardExpanded ? 'w-40rem' : 'w-16rem'} sm:w-20rem`}
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
                margin: "0 auto",
                paddingRight: "2rem",
                fontWeight: 600,
                fontSize: "1.2em",
              }}
            >
              Asociado Paraguay
            </h3>

            {/* Icono svg */}
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
          {/* Contenedor flags expandido */}
          <div style={{ overflowY: "auto" }}>
            <img
              style={{
                margin: "0 auto",
                width: isCardExpanded ? "24rem" : "16rem",
                height: "auto",
              }}
              alt="Paraguay Flag"
              src="./paraguayFlag.svg"
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
                {/* Imagenes flags */}
                <img
                  className="max-h-96 w-full object-contain "
                  src="/partners/Paraguay/WhatsApp Image 2024-06-24 at 11.46.51 (12).jpeg"
                  alt="imagen1"
                  width={180}
                  height={80}
                />
                <img
                  className="max-h-96 w-full object-contain"
                  src="/partners/Paraguay/WhatsApp Image 2024-06-24 at 11.46.51 (13).jpeg"
                  alt="imagen2"
                  width={180}
                  height={80}
                />
                <img
                  className="max-h-96 w-full object-contain"
                  src="/partners/Paraguay/WhatsApp Image 2024-06-24 at 11.46.51 (15).jpeg"
                  alt="imagen3"
                  width={180}
                  height={80}
                />
              </section>
            )}
          </div>
        </div>
      </MagicCard>
    </div>
  );
}
