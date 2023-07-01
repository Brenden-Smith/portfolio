import { LazyMotion, m, domAnimation } from "framer-motion";

export default function LoadingIcon() {
  const circleVariants = {
    start: {
      rotate: 0,
    },
    end: {
      rotate: 360,
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        <m.svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <m.circle
            cx="25"
            cy="25"
            r="20"
            stroke="#2196f3"
            strokeWidth="5"
            strokeLinecap="round"
            variants={circleVariants}
            initial="start"
            animate="end"
          />
        </m.svg>
      </m.div>
    </LazyMotion>
  );
}
