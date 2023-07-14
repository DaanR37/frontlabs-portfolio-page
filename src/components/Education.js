import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);

    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col 
        items-center justify-between md:w-[80%]">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {type}
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {place}
                </span>
                <p className="font-medium w-full md:text-sm">
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

const Education = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );

    return (
        <div className="w-full h-full inline-block my-64 px-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 z-0">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Education
            </h2>
            <div ref={ref} className="relative max-w-md w-[75%] mx-auto lg:w-[90%] md:w-full">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-2 w-[4px] h-full 
                    bg-dark origin-top dark:bg-customTwo md:w-[2px] md:left-[30] xs:left-[20px]"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-0 xs:ml-2">
                    <Details
                        type="type: Lorem" company="Company: Ipsum"
                        time="www.google.com"
                        place="place: Delorum"
                        info="info: Lorem Ipsum Delorum Borealis"
                    />
                    <Details
                        type="type: Lorem" company="Company: Ipsum"
                        time="www.google.com"
                        place="place: Delorum"
                        info="info: Lorem Ipsum Delorum Borealis"
                    />
                    <Details
                        type="type: Lorem" company="Company: Ipsum"
                        time="www.google.com"
                        place="place: Delorum"
                        info="info: Lorem Ipsum Delorum Borealis"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education;