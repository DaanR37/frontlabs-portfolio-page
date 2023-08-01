import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../../src/styles/Logo.module.scss";
import Image from "next/image";

const MotionLink = motion(Link);

const Logo = () => {

    return (
        <div className="flex items-center justify-center mt-2.5">
            <div className='relative group'>
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/90 to-purple-600/50 
                    rounded-full blur-[2.75px] opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 
                    "
                />
                <MotionLink href="/"
                    className={`${styles.btn} relative flex items-center justify-center 
                    overflow-hidden w-16 h-16 xs:w-16 xs:h-16 sm:w-20 sm:h-20 2xl:w-20 2xl:h-20 
                    bg-dark text-light rounded-full text-[14px] font-bold z-10`}
                >
                    <span className='absolute text-light z-20'>
                        home
                    </span>
                </MotionLink>
            </div>
        </div>
    )
};

export default Logo;
