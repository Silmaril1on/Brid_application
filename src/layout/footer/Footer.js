import React from "react";
import TextAnimation from "../../components/TextAnimation";
import Info from "./Info";

function Footer() {
  return (
    <section
      id="footer"
      className="w-full h-screen pt-5 flex flex-col justify-between"
    >
      <div className="hd:mt-[10%]">
        <div className="flex xl:flex-row flex-col-reverse md:flex-row justify-between items-start lg:items-end relative border-bottom">
          <div className="flex flex-col pl-4 xl:pl-5 w-full md:w-2/4 hd:-space-y-2 *:text-xs">
            <TextAnimation text="Are you interested in working together and" />
            <TextAnimation text="elevate your brand to the next level?" />
          </div>
          <div className="overflow-hidden">
            <TextAnimation
              text="hello"
              className="text-7xl xl:text-[150px] xl:h-44 pl-3 pr-4 pt-8 mb-5"
            />
          </div>
        </div>
        <article className="pl-4 text-xs xl:text-2xl my-2 xl:my-5">
          <h1>let's get to work!</h1>
        </article>
      </div>
      <Info />
    </section>
  );
}

export default Footer;
