import React from "react";
import HeadlineInfoLeft from "./AnimatedInfoLeft";
import InfoRight from "./InfoRight";
import Headline from "./Headline";
import FormLink from "./FormLink";

function Index() {
  return (
    <div className=" w-full xl:w-5/12 bg-primaryBg center flex-col">
      <HeadlineInfoLeft />
      <InfoRight />
      <Headline />
      <FormLink />
    </div>
  );
}

export default Index;
