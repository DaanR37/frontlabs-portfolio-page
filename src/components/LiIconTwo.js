import { motion, useScroll } from "framer-motion";


const LiIconTwo = ({ reference }) => {

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

export default LiIconTwo;