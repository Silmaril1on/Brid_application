import React from "react";
import FactoryForm from "./FactoryForm";
import TextAnimation from "../../../components/TextAnimation";
import DownloadFile from "../DownloadFile";

function SectionSix() {
  return (
    <section
      id="bottom"
      className="flex flex-col h-screen md:flex-row w-full bg-black"
    >
      <div className="w-full md:w-2/4 flex flex-col pl-4 justify-between md:py-10">
        <div className="text-3xl md:text-6xl w-full md:mt-[85px] py-7 md:py-0">
          <TextAnimation text="FILL AND " />
          <TextAnimation text="TEAM UP WITH US" />
        </div>
        <div className="md:mb-[55px] pl-2 md:flex items-start hidden">
          <DownloadFile />
        </div>
      </div>
      <FactoryForm />

      <div className="pl-2 bg-black flex items-start md:hidden py-5">
        <DownloadFile />
      </div>
    </section>
  );
}

export default SectionSix;
