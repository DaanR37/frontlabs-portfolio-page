import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);

    return (
        <motion.li ref={ref} className="relative flex flex-col mt-0 mb-[5.5rem] 
        first:mt-0 last:mb-0 w-60% mx-auto items-center justify-center"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <div ref={ref}>
                <LiIcon reference={ref} />
                <div className="rounded-2xl border-2 border-solid border-dark 
                    bg-customTwo p-6 dark:bg-dark dark:border-customTwo justify-center">
                    <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103.5%] rounded-[2rem] bg-dark dark:bg-customTwo" />
                    <h3 className="font-bold text-2xl sm:text-xl xs:text-lg capitalize">
                        {type}
                    </h3>
                    <span className="font-medium text-dark/75 
                        dark:text-light/75 xs:text-sm capitalize">
                        {time} | {place}
                    </span>
                    <p className="font-medium w-full md:text-sm">
                        {info}
                    </p>
                </div>
            </div>
        </motion.li>
    );
};

const Education = () => {
    return (
        <div className="w-full h-full inline-block my-32 px-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 z-0">
            <h2 className="w-full font-bold text-8xl mb-[6.5rem] mt-24 text-center md:text-6xl xs:text-4xl md:mb-16">
                Education
            </h2>
            <div className="relative max-w-sm w-[75%] mx-auto lg:w-[90%] md:w-full">
                <ul className="w-full flex flex-col ml-0 xs:ml-2">
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
    );
};

export default Education;