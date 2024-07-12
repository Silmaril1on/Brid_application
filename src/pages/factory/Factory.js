import React from "react";
import { Helmet } from "react-helmet";
import HomeBar from "../../components/HomeBar";
import FactoryHeader from "././factorysections/FactoryHeader";
import SectionTwo from "././factorysections/SectionTwo";
import SectionThree from "././factorysections/SectionThree";
import SectionSix from "././factorysections/SectionSix";

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
