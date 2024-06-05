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
    <div className="center flex-col space-y-2 *:text-2xl *:w-full">
      <motion.article
        variants={slideFromRight}
        initial="hidden"
        animate="visible"
        className=" flex justify-end space-x-10"
      >
        {client1.map((item) => (
          <h1>{item} \ </h1>
        ))}
      </motion.article>
      <motion.article
        variants={slideFromLeft}
        initial="hidden"
        animate="visible"
        className="flex justify-start space-x-10"
      >
        {client2.map((item) => (
          <h1>{item} \ </h1>
        ))}
      </motion.article>
    </div>
  );
}

export default ClientsList;