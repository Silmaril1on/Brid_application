import React from "react";
import BridLogo from "./BridLogo";
import { NavLink, useNavigate } from "react-router-dom";

function HomeBar() {
  const navigate = useNavigate();

  const agency = () => {
    navigate("/");
    setTimeout(() => {
      const agency = document.getElementById("agency");
      if (agency) {
        agency.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const services = () => {
    navigate("/");
    setTimeout(() => {
      const services = document.getElementById("services");
      if (services) {
        services.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const awards = () => {
    navigate("/");
    setTimeout(() => {
      const awards = document.getElementById("awards");

      if (awards) {
        awards.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const contact = () => {
    navigate("/");
    setTimeout(() => {
      const contact = document.getElementById("footer");
      if (contact) {
        contact.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className="flex flex-row justify-between items-center px-5 border-b border-lineColor py-3 fixed top-0 w-full bg-black z-10 max-w-[1920px]">
      <BridLogo />
      <div className="space-x-4 hover:*:text-whiteText flex flex-row *:duration-300 *:uppercase">
        <button onClick={agency}>agency \</button>
        <NavLink to="/allprojects">work \</NavLink>
        <button onClick={services}>services \</button>
        <button onClick={awards}>awards \</button>
        <button onClick={contact}>contact \</button>
        <div className="w-20">
          <NavLink to="/factory" className="text-green hover:font-bold ">
            factory
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default HomeBar;
