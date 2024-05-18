import React from "react";
import Headline from "./Headline";
import GradientEffect from "./GradientEffect";

function Header() {
  return (
    <section id="top" className="w-full h-screen relative">
      <Headline />
      <GradientEffect />
    </section>
  );
}

export default Header;
