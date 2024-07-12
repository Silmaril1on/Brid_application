import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ArrowSvg from "../../components/ArrowSvg";
import TextAnimation from "../../components/TextAnimation";
import GreenArrow from "../../components/GreenArrow";

function UserForm() {
  const [active, setActive] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_fe8p85h", "template_5b2cysk", form.current, {
        publicKey: "bu1XoaSFCfPo8U_Xu",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.currentTarget.reset();
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full md:w-2/4 h-96 pl-4 space-y-5 pt-10"
    >
      <div
        id="1"
        onClick={() => setActive(1)}
        className="w-full md:w-10/12 relative border-bottom flex flex-row mt-3 xl:mt-0"
      >
        <div className="h-9 center flex-row relative border-bottom">
          {active === 1 ? <GreenArrow /> : <ArrowSvg />}
        </div>
        <input
          type="text"
          placeholder="your name"
          className={
            active === 1
              ? "footer-input-style placeholder:text-green"
              : "footer-input-style"
          }
          name="to_name"
        />
      </div>
      <div
        id="2"
        onClick={() => setActive(2)}
        className="w-full md:w-10/12 relative border-bottom flex flex-row"
      >
        <div className="h-9 center flex-row relative border-bottom">
          {active === 2 ? <GreenArrow /> : <ArrowSvg />}
        </div>
        <input
          type="email"
          placeholder="your email"
          className={
            active === 2
              ? "footer-input-style placeholder:text-green"
              : "footer-input-style"
          }
          name="from_mail"
        />
      </div>
      <div
        id="3"
        onClick={() => setActive(3)}
        className="w-full md:w-10/12 relative border-bottom flex flex-row"
      >
        <div className="h-8 w-10">
          {active === 3 ? <GreenArrow /> : <ArrowSvg />}
        </div>
        <textarea
          name="message"
          placeholder="tell us about your project"
          className="footer-input-style h-36 placeholder:pt-1 focus:placeholder:text-green"
        />
      </div>
      <div className="flex justify-end w-full md:w-10/12">
        <section className="flex flex-col-reverse xl:flex-row items-end xl:items-center justify-between w-full">
          <div className="w-full md:w-[450px] ">
            <TextAnimation
              text="fill out the form and We will get back to you within 2 business
              days with a link to our calendar."
              className="text-sm pl-2 leading-4"
            ></TextAnimation>
          </div>
          <div className="mr-3 my-2 ">
            <input
              type="submit"
              value="Send"
              className="uppercase text-sm cursor-pointer underline hover:text-green duration-300"
            />
          </div>
        </section>
      </div>
    </form>
  );
}

export default UserForm;
