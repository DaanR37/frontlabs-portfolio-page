// import { useRef } from "react";
// import {
//     motion,
//     useScroll,
//     useSpring,
//     useTransform,
//     useMotionValue,
//     useVelocity,
//     useAnimationFrame
// } from "framer-motion";
// import { wrap } from "@motionone/utils";

// function ParallaxText({ children, baseVelocity = 100 }) {
//     const baseX = useMotionValue(0);
//     const { scrollY } = useScroll();
//     const scrollVelocity = useVelocity(scrollY);
//     const smoothVelocity = useSpring(scrollVelocity, {
//         damping: 50,
//         stiffness: 400
//     });
//     const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
//         clamp: false
//     });

//     const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

//     const directionFactor = useRef(1);
//     useAnimationFrame((t, delta) => {
//         let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

//         if (velocityFactor.get() < 0) {
//             directionFactor.current = -1;
//         } else if (velocityFactor.get() > 0) {
//             directionFactor.current = 1;
//         }

//         moveBy += directionFactor.current * moveBy * velocityFactor.get();

//         baseX.set(baseX.get() + moveBy);
//     });

//     return (
//         <div className="parallax flex flex-nowrap overflow-hidden tracking-tighter leading-10 whitespace-nowrap m-0">
//             <motion.div className="scroller flex flex-nowrap text-6xl font-normal uppercase whitespace-nowrap" style={{ x }}>
//                 <span className="block">{children}</span>
//                 <span className="block">{children}</span>
//                 <span className="block">{children}</span>
//                 <span className="block">{children}</span>
//             </motion.div>
//         </div>
//     );
// }

// export default function Skills() {
//     return (
//         <>
//             <h2 className="font-bold text-8xl mt-64 mb-16 text-center md:text-6xl md:mt-32">Skills</h2>
//             <div className="relative w-full">
//                 <ParallaxText baseVelocity={-1}>css &nbsp; html5 &nbsp; reacjs &nbsp; nextjs &nbsp; web design &nbsp;</ParallaxText>
//                 <ParallaxText baseVelocity={2}>figma &nbsp; javascript &nbsp; styled components &nbsp; tailwindcss &nbsp; css modules &nbsp;</ParallaxText>
//             </div>
//         </>
//     );
// };





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

// Import your image assets
import css from "../../public/images/svgs/css.svg";
import cssmodules from "../../public/images/svgs/cssmodules.svg";
import tailwindcss from "../../public/images/svgs/tailwindcss.svg";
import figma1 from "../../public/images/svgs/figma1.svg";
import figma2 from "../../public/images/svgs/figma2.svg";
import html5 from "../../public/images/svgs/html5.svg";
import javascript1 from "../../public/images/svgs/javascript1.svg";
import javascript2 from "../../public/images/svgs/javascript2.svg";
import javascript3 from "../../public/images/svgs/javascript3.svg";
import nextjs1 from "../../public/images/svgs/nextjs1.svg";
import nextjs2 from "../../public/images/svgs/nextjs2.svg";
import nextjs3 from "../../public/images/svgs/nextjs3.svg";
import react from "../../public/images/svgs/react.svg";
import webdesign from "../../public/images/svgs/webdesign.svg";
import Image from "next/image";

function ParallaxImage({ children, baseVelocity = 100, images }) {
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

    const x = useTransform(baseX, (v) => `${v}%`);
    // const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

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
        // <div className="parallax flex flex-nowrap justify-center overflow-hidden tracking-tighter leading-10 m-0">
        <div className="parallax flex flex-nowrap overflow-hidden tracking-tighter leading-10 whitespace-nowrap m-0">
            {/* <motion.div className="scroller flex" style={{ x }}> */}
            <motion.div className="scroller flex flex-nowrap items-center text-6xl font-normal uppercase whitespace-nowrap" style={{ x }}>
                {children.map((child, index) => (
                    <span key={index} className="block">
                        <Image src={images[index]} alt={child} width={100} />
                    </span>
                ))}
            </motion.div>
        </div>
    );
}

export default function Skills() {
    // Define the images for each set of skills
    const skillSet1Images = [css, cssmodules, tailwindcss, figma1, figma2];
    const skillSet2Images = [html5, javascript1, javascript2, javascript3, react];

    return (
        <>
            <h2 className="font-bold text-8xl mt-64 mb-16 text-center md:text-6xl md:mt-32">Skills</h2>
            
            <div className="relative w-full">
                    <ParallaxImage baseVelocity={-5} images={skillSet1Images}>
                        <span>css</span>
                        <span>html5</span>
                        <span>reactjs</span>
                        <span>nextjs</span>
                        <span>web design</span>
                    </ParallaxImage>

                    <ParallaxImage baseVelocity={5} images={skillSet2Images}>
                        <span>figma</span>
                        <span>javascript</span>
                        <span>styled components</span>
                        <span>tailwindcss</span>
                        <span>css modules</span>
                    </ParallaxImage>
            </div>
        </>
    );
}
