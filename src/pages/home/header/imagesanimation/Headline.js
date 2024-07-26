import React from "react";
import { HashLink } from "react-router-hash-link";

function Headline() {
  return (
    <div className="absolute text-white bottom-0 z-3 px-2 md:px-4 text-[11px] md:text-lg xl:text-2xl pb-5 bg-gradient-to-t from-black/70">
      we are team of young professionals who create Brand identity that leaves
      fingerprints on the market & the minds of your customers, so their numbers
      grow by leaps & bounds. Our goal is to pay special attention to each
      client, providing them with a high-quality final product. To achieve these
      results.
      <HashLink
        smooth
        to="#footer"
        className="text-green ml-2 underline hover:text-white duration-300"
      >
        lets start create your brand id
      </HashLink>
    </div>
  );
}

export default Headline;
