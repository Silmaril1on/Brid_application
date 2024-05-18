import React from "react";
import AwardsList from "./AwardsList";
import { motion } from "framer-motion";

function Awards() {
  return (
    <section
      id="awards"
      className="w-full h-auto md:h-screen pt-16 flex center flex-col *:w-full overflow-hidden"
    >
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-5xl ml-5">
          awards \ awards \ awards \ awards \ awards
        </h1>
      </motion.div>
      <AwardsList />
      <motion.div
        initial={{ x: "100%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-end text-5xl mr-5">
          awards \ awards \ awards \ awards \ awards
        </h1>
      </motion.div>
    </section>
  );
}

export default Awards;
