import React from "react";
import Services from "./services/Services";
import Awards from "./awards/Awards";
import Projects from "./work/Projects";
import Footer from "../../layout/footer/Footer";
import Header from "./header/Header";
import Agency from "./agency/Agency";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <main className="mt-14 center w-full flex-col">
      <Helmet>
        <title>BRID | Home</title>
      </Helmet>
      <Header />
      <Agency />
      <Services />
      <Projects />
      <Awards />
      <Footer />
    </main>
  );
}

export default Home;
