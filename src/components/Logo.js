import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className="flex items-center justify-center mt-2.5">
            <div className='relative group'>
                <div className="absolute -inset-3.5 bg-gradient-to-r from-pink-600/50 to-purple-600/50 
                    rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 
                    "
                >
                </div>
                <MotionLink href="/"
                    className="relative w-16 h-16 xs:w-16 xs:h-16 sm:w-20 sm:h-20 2xl:w-20 2xl:h-20 bg-dark text-light flex items-center 
                justify-center rounded-full text-2xl font-bold
                animate-pulse
                "
                >
                    <span className='text-gray-100 absolute'>DR</span>
                    <span className='text-indigo-400 group-hover:text-gray-100 transition duration-400'></span>
                </MotionLink>
            </div>
        </div>
    )
}

export default Logo;
