export const animatePath = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export const primaryTextAnimation = {
  hidden: {
    y: "100px",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerOpacity200 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};
export const staggerOpacity600 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.6,
      delayChildren: 0.6,
    },
  },
};

export const slideFromTop = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerSlideUp = {
  hidden: {
    opacity: 0,
    y: "100px",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.4,
      delayChildren: 0.4,
    },
  },
};

export const slideUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.5,
      ease: "easeIn",
    },
  },
};

export const slideShow = {
  hidden: (direction) => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    };
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "ease",
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      transition: {
        type: "ease",
      },
    };
  },
};

export const animatedHeader = {
  hidden: {
    opacity: 0,
    y: -50,
    rotate: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
      type: "spring",
      dumping: 10,
      stiffness: 40,
    },
  },
};

export const zoomIn = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export const rotateX = {
  hidden: {
    rotateX: 90,
  },
  visible: {
    rotateX: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.4,
      delayChildren: 0.4,
    },
  },
};
