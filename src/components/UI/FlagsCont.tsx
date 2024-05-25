import React from "react";
import FlagsCol from "./Flags/FlagsCol";
import FlagsAr from "./Flags/FlagsAr";
import FlagsCr from "./Flags/FlagsCr";

function FlagsCont() {
  return (
    <>
      <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <FlagsCol />
        <FlagsAr />
        <FlagsCr />
      </div>
    </>
  );
}

export default FlagsCont;
