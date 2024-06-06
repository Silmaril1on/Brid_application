import React from "react";
import TextAnimation from "../../../../components/TextAnimation";
import { HashLink } from "react-router-hash-link";

function FormLink() {
  return (
    <div className="mb-5 pl-4 mt-10 z-5 w-full">
      <HashLink smooth to="#footer">
        <TextAnimation
          className="w-full md:w-[370px] text-green underline underline-offset-2 text-md hover:text-whiteText duration-300"
          text="lets start create your brand id"
        />
      </HashLink>
    </div>
  );
}

export default FormLink;
