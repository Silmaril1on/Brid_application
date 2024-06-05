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
    <div className="center flex-col *:text-2xl *:w-full">
      <motion.article
        variants={slideFromRight}
        initial="hidden"
        whileInView="visible"
        className="flex justify-end space-x-10 pr-6"
      >
        {client1.map((item) => (
          <h1>{item} \ </h1>
        ))}
      </motion.article>
      <motion.article
        variants={slideFromLeft}
        initial="hidden"
        whileInView="visible"
        className="flex justify-start space-x-10 pl-6"
      >
        {client2.map((item) => (
          <h1>{item} \ </h1>
        ))}
      </motion.article>
    </div>
  );
}

export default ClientsList;
