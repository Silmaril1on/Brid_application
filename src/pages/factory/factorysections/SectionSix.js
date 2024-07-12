import React from "react";
import FactoryForm from "./FactoryForm";
import TextAnimation from "../../../components/TextAnimation";
import DownloadFile from "../DownloadFile";

function SectionSix() {
  return (
    <section
      id="bottom"
      className="flex flex-col h-auto md:h-screen md:flex-row w-full bg-black"
    >
      <div className="w-full md:w-2/4 flex flex-col pl-4 justify-between py-10">
        <div className="text-2xl md:text-6xl w-full mt-[85px] ">
          <TextAnimation text="FILL AND " />
          <TextAnimation text="TEAM UP WITH US" />
        </div>
        <div className="mb-[55px] pl-2 flex items-start">
          <DownloadFile />
        </div>
      </div>
      <FactoryForm />
    </section>
  );
}

export default SectionSix;
