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

export default function FlagsTaw() {
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
                fontSize: "1.2em",
              }}
            >
              Asociado Taiwan
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
                width: isCardExpanded ? "24rem" : "16rem",
                height: "auto",
              }}
              alt="Taiwan Flag"
              src="./taiwanFlag.svg"
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
                  className="max-h-80 w-full object-contain"
                  src="/partners/Taiwan/WhatsApp Image 2024-06-24 at 11.46.51 (1).jpeg"
                  alt="imagen1"
                  width={180}
                  height={80}
                />
                <img
                  className="max-h-80 w-full object-contain"
                  src="/partners/Taiwan/WhatsApp Image 2024-06-24 at 11.46.51 (2).jpeg"
                  alt="imagen2"
                  width={180}
                  height={80}
                />
                <img
                  className="max-h-80 w-full object-contain"
                  src="/partners/Taiwan/WhatsApp Image 2024-06-24 at 11.46.51 (3).jpeg"
                  alt="imagen3"
                  width={180}
                  height={80}
                />
                <img
                  className="max-h-80 w-full object-contain"
                  src="/partners/Taiwan/WhatsApp Image 2024-06-24 at 11.46.51 (4).jpeg"
                  alt="imagen4"
                  width={180}
                  height={80}
                />
                <img
                  className="max-h-80 w-full object-contain"
                  src="/partners/Taiwan/WhatsApp Image 2024-06-24 at 11.46.51 (5).jpeg"
                  alt="imagen5"
                  width={180}
                  height={80}
                />
                <img
                  className="max-h-80 w-full object-contain"
                  src="/partners/Taiwan/WhatsApp Image 2024-06-24 at 11.46.51 (6).jpeg"
                  alt="imagen6"
                  width={180}
                  height={80}
                />
                <img
                  className="max-h-80 w-full object-contain"
                  src="/partners/Taiwan/WhatsApp Image 2024-06-24 at 11.46.51 (7).jpeg"
                  alt="imagen7"
                  width={180}
                  height={80}
                />
                <img
                  className="max-h-80 w-full object-contain"
                  src="/partners/Taiwan/WhatsApp Image 2024-06-24 at 11.46.51 (8).jpeg"
                  alt="image8"
                  width={180}
                  height={80}
                />
                <img
                  className="max-h-80 w-full object-contain"
                  src="/partners/Taiwan/WhatsApp Image 2024-06-24 at 11.46.51 (9).jpeg"
                  alt="imagen9"
                  width={180}
                  height={80}
                />
                <img
                  className="max-h-80 w-full object-contain"
                  src="/partners/Taiwan/WhatsApp Image 2024-06-24 at 11.46.51 (10).jpeg"
                  alt="imagen10"
                  width={180}
                  height={80}
                />
                <img
                  className="max-h-80 w-full object-contain"
                  src="/partners/Taiwan/WhatsApp Image 2024-06-24 at 11.46.51 (11).jpeg"
                  alt="imagen11"
                  width={180}
                  height={80}
                />
                <img
                  className="max-h-80 w-full object-contain"
                  src="/partners/Taiwan/WhatsApp Image 2024-06-24 at 11.46.51 (12).jpeg"
                  alt="imagen12"
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
