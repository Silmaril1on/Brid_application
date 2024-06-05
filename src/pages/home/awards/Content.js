import React from "react";
import ImageContent from "./ImageContent";
import TextContent from "./TextContent";

function Content() {
  return (
    <div className="relative w-full h-full before:w-full before:absolute before:bg-primaryBg before:h-[40%] before:z-0 before:bottom-[20%]">
      <section className=" w-full h-full *:w-full relative z-3 center flex-col">
        <TextContent />
        <ImageContent />
      </section>
    </div>
  );
}

export default Content;
