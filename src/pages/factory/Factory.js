import React from "react";
import HomeBar from "../../components/HomeBar";
import FactoryHeader from "./FactoryHeader";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import { Helmet } from "react-helmet";
import SectionSix from "./SectionSix";

//section four & section five is commented //

function Factory() {
  return (
    <section className="project-container relative z-10">
      <Helmet>
        <title>BRID | Factory</title>
      </Helmet>
      <HomeBar />
      <FactoryHeader />
      <SectionTwo />
      <SectionThree />
      <SectionSix />
    </section>
  );
}

export default Factory;
