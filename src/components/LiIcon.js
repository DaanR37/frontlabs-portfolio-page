import { motion, useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {

    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["end end", "start start"]
        }
    );

    return (
        <figure className="progress sticky top-0 m-0 p-0">
            <svg id="progress" width="60" height="60" viewBox="0 0 100 100"
                className="absolute -translate-x-[100px] -rotate-90"
            >
                <circle cx="50" cy="50" r="30" pathLength="1"
                    className="bg stroke-[5%] stroke-[var(--accent)] fill-none opacity-[0.2]"
                />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className="indicator stroke-[5%] stroke-[var(--accent)] fill-none"
                    style={{ pathLength: scrollYProgress }}
                />
            </svg>
        </figure>
    )
}

export default LiIcon;



// import { motion, useScroll } from "framer-motion";

// const LiIcon = ({ reference }) => {
//     const { scrollYProgress } = useScroll(
//         {
//             target: reference,
//             offset: ["center end", "center center"]
//         }
//     );
    
//     return (
//         <figure className="absolute left-0 stroke-dark dark:stroke-customTwo">
//             <svg className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]" width="75" height="75" viewBox="0 0 100 100">
//                 <circle cx="75" cy="50" r="20" className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none" />
//                 <motion.circle cx="75" cy="50" r="20" className="stroke-[5px] fill-customTwo dark:fill-dark"
//                     style={{
//                         pathLength: scrollYProgress
//                     }}
//                 />
//                 <circle cx="75" cy="50" r="10" className="animate-pulse stroke-1 fill-primary dark:fill-primaryDark" />
//             </svg>
//         </figure>
//     )
// }

// export default LiIcon;