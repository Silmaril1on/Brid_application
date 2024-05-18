import React from "react";
import FactoryForm from "./FactoryForm";
import TextAnimation from "../../components/TextAnimation";

function SectionSix() {
  return (
    <section
      id="bottom"
      className="flex flex-col h-auto md:h-screen pt-10 md:flex-row w-full bg-black"
    >
      <div className="w-full md:w-2/4 flex flex-col pl-4 justify-between py-10">
        <div className="text-2xl md:text-6xl w-full">
          <TextAnimation text="fill to be part of" />
          <TextAnimation text="our team" />
        </div>
        <div className="flex flex-row mb-10 pl-2 cursor-pointer *:hover:text-whiteText duration-300 space-x-1">
          <TextAnimation text="download" />
          <TextAnimation text="presentation" className="text-green" />
        </div>
      </div>
      <FactoryForm />
    </section>
  );
}

export default SectionSix;
