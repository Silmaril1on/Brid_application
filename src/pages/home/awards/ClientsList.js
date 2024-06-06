import React from "react";
import { motion } from "framer-motion";
import {
  slideFromLeft,
  slideFromRight,
} from "../../../framerMotion/motionValues";

const client1 = [
  "Propertofy",
  "Azry",
  "Georgian library",
  "Chateau Askana",
  "Benjy's",
  "Re Bank",
];
const client2 = [
  "Thermorum",
  "Red Bull",
  "Agrohub",
  "Tegeta Motors",
  "TKT.ge",
  "Ekimo",
  "Touch",
];

function ClientsList() {
  return (
    <div className="center w-full flex-col *:text-xl *:w-full relative py-3">
      <h1 className="absolute top-0 left-5 text-whiteText">clients</h1>
      <motion.article
        variants={slideFromRight}
        initial="hidden"
        whileInView="visible"
        className="flex justify-end space-x-10 pr-6"
      >
        {client1.map((item, index) => (
          <h1 key={index}>{item} \ </h1>
        ))}
      </motion.article>
      <motion.article
        variants={slideFromLeft}
        initial="hidden"
        whileInView="visible"
        className="flex justify-start space-x-10 pl-4"
      >
        {client2.map((item, index) => (
          <h1 key={index}>{item} \ </h1>
        ))}
      </motion.article>
    </div>
  );
}

export default ClientsList;
