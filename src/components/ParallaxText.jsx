import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";

/**
 * ParallaxText component
 * @param {string} children - text to repeat horizontally
 * @param {number} baseVelocity - base scroll speed (positive → right, negative → left)
 */
export default function ParallaxText({ children, baseVelocity = 100, className=" " }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  // Make the motion value wrap between -20% and -45% to loop text seamlessly
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  // Direction reverses when scroll direction changes
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`w-full py-8 bg-transparent overflow-hidden whitespace-nowrap ${className}`}>
    <motion.div
      className="inline-flex whitespace-nowrap font-glora text-bold text-green-50 opacity-25"
      style={{ x }}
    >
      <span className="mx-4">{children}</span>
      <span className="mx-4">{children}</span>
      <span className="mx-4">{children}</span>
      <span className="mx-4">{children}</span>
    </motion.div>
  </div>

  );
}
