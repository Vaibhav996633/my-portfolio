export const FADE_IN_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const FADE_IN = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const SLIDE_IN_LEFT = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const SLIDE_IN_RIGHT = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const SCALE_IN = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const STAGGER_ITEM = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const HOVER_SCALE = {
  whileHover: { scale: 1.05 },
  transition: { type: 'spring', stiffness: 300, damping: 10 },
};

export const HOVER_GLOW = {
  whileHover: {
    boxShadow: '0 0 30px rgba(0, 255, 255, 0.6)',
  },
  transition: { duration: 0.3 },
};

export const FLOAT_ANIMATION = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const ROTATE_ANIMATION = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const PULSE_ANIMATION = {
  animate: {
    opacity: [1, 0.5, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const TYPING_ANIMATION = {
  animate: {
    width: ['0%', '100%'],
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

export const PAGE_TRANSITION = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
};

export const BUTTON_HOVER = {
  whileHover: {
    scale: 1.02,
    boxShadow: '0 0 25px rgba(0, 255, 255, 0.5)',
  },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 400, damping: 10 },
};

export const CARD_HOVER = {
  whileHover: {
    scale: 1.02,
    rotateX: 5,
    boxShadow: '0 20px 40px rgba(0, 255, 255, 0.2)',
  },
  transition: { type: 'spring', stiffness: 300, damping: 10 },
};

export const SCROLL_ANIMATION = {
  whileInView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 50 },
  transition: { duration: 0.6 },
  viewport: { once: true, amount: 0.3 },
};
