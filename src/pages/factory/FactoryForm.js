import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoIosArrowDown } from "react-icons/io";
import ArrowSvg from "../../components/ArrowSvg";
import GreenArrow from "../../components/GreenArrow";

function FactoryForm() {
  const [active, setActive] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_5vt7uf4", "template_cr1yhjk", form.current, {
        publicKey: "yQmXdXcvudISkKYU1",
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
    <section className="bg-primaryBg flex justify-end pb-[4%] flex-col w-full md:w-2/4 p-2">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="my-5 w-full center flex-col space-y-4"
      >
        <div
          id="1"
          onClick={() => setActive(1)}
          className="form-child-container"
        >
          <div className="h-9 center flex-row relative border-bottom">
            {active === 1 ? <GreenArrow /> : <ArrowSvg />}
          </div>
          <input
            type="name"
            placeholder="name surename"
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
          className="form-child-container"
        >
          <div className="h-9 center flex-row relative border-bottom">
            {active === 2 ? <GreenArrow /> : <ArrowSvg />}
          </div>
          <input
            type="company_name"
            placeholder="company name"
            className={
              active === 2
                ? "footer-input-style placeholder:text-green"
                : "footer-input-style"
            }
            name="company_name"
          />
        </div>
        <div
          id="3"
          onClick={() => setActive(3)}
          className="form-child-container"
        >
          <div className="h-9 center flex-row relative border-bottom">
            {active === 3 ? <GreenArrow /> : <ArrowSvg />}
          </div>
          <input
            type="email"
            placeholder="email"
            className={
              active === 3
                ? "footer-input-style placeholder:text-green"
                : "footer-input-style"
            }
            name="email"
          />
        </div>
        <div
          id="4"
          onClick={() => setActive(4)}
          className="form-child-container"
        >
          <div className="h-9 center flex-row relative border-bottom">
            {active === 4 ? <GreenArrow /> : <ArrowSvg />}
          </div>
          <input
            type="phone number"
            placeholder="phone number"
            className={
              active === 4
                ? "footer-input-style placeholder:text-green"
                : "footer-input-style"
            }
            name="phone_number"
          />
        </div>

        <div
          id="5"
          onClick={() => setActive(5)}
          className="form-child-container"
        >
          <div className="h-9 center flex-row relative border-bottom">
            {active === 5 ? <GreenArrow /> : <ArrowSvg />}
          </div>
          <div className="absolute right-5 h-full center -z-1">
            <IoIosArrowDown className="text-grayText text-xl" />
          </div>
          <select
            type="name"
            placeholder="offer of packages"
            className={
              active === 5
                ? "footer-input-style placeholder:text-green appearance-none"
                : "footer-input-style appearance-none"
            }
            name="package_offer"
          >
            <option value="free">free package</option>
            <option value="standart">hourly package</option>
            <option value="standart">standart package</option>
            <option value="premium">premium package</option>
            <option value="ultimate">ultimate package</option>
            <option value="ultimate">custom</option>
          </select>
        </div>

        <div
          id="6"
          onClick={() => setActive(6)}
          className="form-child-container"
        >
          <div className="h-9 center flex-row relative border-bottom">
            {active === 6 ? <GreenArrow /> : <ArrowSvg />}
          </div>
          <div className="absolute right-5 h-full center -z-1">
            <IoIosArrowDown className="text-grayText text-xl" />
          </div>
          <select
            type="duration"
            placeholder="duration of cooperation"
            className={
              active === 5
                ? "footer-input-style placeholder:text-green appearance-none"
                : "footer-input-style appearance-none"
            }
            name="colab_duration"
          >
            <option value="1 month">1 month</option>
            <option value="3 month">3 month</option>
            <option value="6 month">6 month</option>
            <option value="1 year">1 year</option>
          </select>
        </div>

        <div
          id="7"
          onClick={() => setActive(7)}
          className="form-child-container"
        >
          <div className="h-8 w-10">
            {active === 7 ? <GreenArrow /> : <ArrowSvg />}
          </div>
          <textarea
            name="message"
            placeholder="project description"
            className="footer-input-style rounded-3xl h-36 ml-3 focus:placeholder:text-green placeholder:pt-1"
          ></textarea>
        </div>
      </form>
      <section className="flex flex-row justify-between w-full px-2 md:px-16">
        <div className="flex flex-col my-3">
          <h1 className="text-xs">
            Our meeting will be scheduled by our manager
          </h1>
          <h6 className="text-green text-[9px]">approximate time 2 days</h6>
        </div>
        <input
          type="submit"
          value="Send"
          className="uppercase cursor-pointer underline text-base hover:text-green duration-300 relative z-2"
        />
      </section>
    </section>
  );
}

export default FactoryForm;
