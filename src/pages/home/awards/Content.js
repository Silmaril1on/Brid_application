import React from "react";
import ImageContent from "./ImageContent";
import TextContent from "./TextContent";

function Content() {
  return (
    <section className="w-full *:w-full relative z-3 flex flex-col h-full ">
      <TextContent />
      <ImageContent />
    </section>
  );
}

export default Content;
