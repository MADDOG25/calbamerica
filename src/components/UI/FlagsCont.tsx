import React from "react";
import FlagsPar from "./Flags/FlagsPar";
import FlagsTaw from "./Flags/FlagsTaw";

function FlagsCont() {
  return (
    <>
      <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none md:grid-cols-2">
        <FlagsPar />
        <FlagsTaw />
      </div>
    </>
  );
}

export default FlagsCont;
