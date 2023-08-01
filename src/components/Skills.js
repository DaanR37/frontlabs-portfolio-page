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

function ParallaxText({ children, baseVelocity = 100 }) {
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

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

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
        <div className="parallax flex flex-nowrap overflow-hidden tracking-tighter leading-10 whitespace-nowrap m-0">
            <motion.div className="scroller flex flex-nowrap text-6xl font-normal uppercase whitespace-nowrap" style={{ x }}>
                <span className="block">{children}</span>
                <span className="block">{children}</span>
                <span className="block">{children}</span>
                <span className="block">{children}</span>
            </motion.div>
        </div>
    );
}

export default function Skills() {
    return (
        <>
            {/* <h2 className="font-bold text-8xl mt-64 mb-16 text-center md:text-6xl md:mt-32">Skills</h2> */}
            <div className="relative w-full mt-60 bg-dark text-light">
                <h2 className="font-bold text-8xl mt-32 mb-24 text-center md:text-6xl md:mt-32">
                    Skills
                </h2>
                <ParallaxText baseVelocity={-1}>css &nbsp; html5 &nbsp; reacjs &nbsp; nextjs &nbsp; web design &nbsp;</ParallaxText>
                <ParallaxText baseVelocity={2}>figma &nbsp; javascript &nbsp; styled components &nbsp; tailwindcss &nbsp; css modules &nbsp;</ParallaxText>
            </div>
        </>
    );
};

