import React from "react";
import TextAnimation from "../../../components/TextAnimation";

function TextContent() {
  return (
    <div className="flex justify-end h-[35%]">
      <div className="w-3/12 *:text-xl hd:*:text-3xl hd:mt-10 *:flex *:flex-row *:space-x-8">
        <div className=" relative ml-3">
          <TextAnimation text="13" className=" absolute -left-5" />
          <TextAnimation text="\ behance" />
        </div>
        <div>
          <TextAnimation text="5 " />
          <TextAnimation text="\ acag" />
        </div>
        <div>
          <TextAnimation text="1 " />
          <TextAnimation text="\ undp" />
        </div>
        <div>
          <TextAnimation text="1 " />
          <TextAnimation text="\ kiaf" />
        </div>
        <div>
          <TextAnimation text="2 " />
          <TextAnimation text="\ georgian a" />
        </div>
        <div>
          <TextAnimation text="1 " />
          <TextAnimation text="\ eyof" />
        </div>
      </div>
    </div>
  );
}

export default TextContent;
