import { Variants } from "framer-motion";


export const elementUp: Variants = {
  init: {
    opacity: 0,
    y: -50, 
    transition: {
      ease: [0.33, 1, 0.68, 1],
      duration: 0.3,
    },
  },
  anim: {
    opacity: 1, 
    y: 0, 
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 1.1,
    },
  },
};
export const elementFromRightToLeft: Variants = {
  init: {
    opacity: 0, // Start with opacity 0
    x: -20, // Start slightly to the left of the final position
    transition: {
      ease: [0.33, 1, 0.68, 1],
      duration: 0.3,
    },
  },
  anim: {
    scale: 1,
    opacity: 1, // Fade in to opacity 1
    x: 0, 
    transition: {
      type: "spring",
      delay:1,
      bounce: 0.1,
      duration: 0.5,
    },
  },
};

export const cursorVariants:Variants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};



export const leftIconContainerMovement: Variants = {
  init: {
    opacity: 0,
    y: 400,
    x: 400,
    transition: {
      ease: [0.33, 1, 0.68, 1],
      duration: 0.6,
    },
  },
  anim: {
    opacity: 1,
    y: [400, 0], 
    x: [400, 0], 
    transition: {
      duration: 1, 
      ease: "easeInOut",
      x: {
        duration: 0.6,
        delay: 1, 
        ease: "easeInOut",
      },
    },
  },
};

export const rightIconContainerMovement: Variants = {
  init: {
    opacity: 0,
    y: -400,
    x: -400,
    transition: {
      ease: [0.33, 1, 0.68, 1],
      duration: 0.6,
    },
  },
  anim: {
    opacity: 1,
    y: [-400, 0], 
    x: [-400, 0], 
    transition: {
      duration: 1, 
      ease: "easeInOut",
      x: {
        duration: 0.6,
        delay: 1, 
        ease: "easeInOut",
      },
    },
  },
};
export const hiddenIcon: Variants = {
  hidden: {
    opacity: 0,
    y: 0,
    x: 0,
    transition: {
      duration: 0, 
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 3,   
    },
  },
};