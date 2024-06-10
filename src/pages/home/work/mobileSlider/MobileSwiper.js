import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import projectsData from "../../../../database/projectsData";
import ProjectsSlider from "./ProjectsSwiperList";

const DRAG_BUFFER = 20;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

function MobileSwiper() {
  const [project, setProject] = useState(0);
  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && project < projectsData.length - 1) {
      setProject((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && project > 0) {
      setProject((pv) => pv - 1);
    }
  };

  return (
    <div className="w-auto center ">
      <section className="block md:hidden w-[370px] overflow-hidden relative ">
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${project * 370}px`,
          }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className="flex cursor-grab items-center active:cursor-grabbing h-[500px] w-max "
        >
          <ProjectsSlider project={project} animation={SPRING_OPTIONS} />
        </motion.div>
      </section>
    </div>
  );
}

export default MobileSwiper;
