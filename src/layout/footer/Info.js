import React from "react";
import UserForm from "./UserForm";
import SocialMedia from "../../components/SocialMedia";

function Info() {
  return (
    <div className="bg-primaryBg h-[70%] flex items-end">
      <section className="flex flex-col md:flex-row items-end justify-between w-full">
        <UserForm />
        <div className="pr-3 flex flex-col">
          <SocialMedia />
          <div className="w-full flex flex-col items-end pr-5 *:text-sm mb-5">
            <h1>Al. kazbegi st. 12a</h1>
            <h3>+995 599 49 88 09</h3>
            <h4>id@brid.me</h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Info;
