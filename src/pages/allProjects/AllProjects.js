import React from "react";
import HomeBar from "../../components/HomeBar";
import AllProjectsList from "./AllProjectsList";
import { Helmet } from "react-helmet";

function AllProjects() {
  return (
    <section className="w-full relative z-5 lg:z-10 -mt-14">
      <Helmet>
        <title>BRID | Projects</title>
      </Helmet>
      <HomeBar />
      <AllProjectsList />
    </section>
  );
}

export default AllProjects;
