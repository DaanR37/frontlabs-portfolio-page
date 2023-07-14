import Link from "next/link";
import { CircText2 } from "./Icons";

const HireMe = () => {
    return (
        <div className="fixed right-6 bottom-4 flex items-center 
        justify-center overflow-hidden md:right-8 md:left-auto 
        md:top-0 md:bottom-auto md:absolute sm:right-0">

            <div className="relative w-48 h-auto flex items-center justify-center md:w-24">

                <CircText2 className="fill-dark animate-spin-slow dark:fill-light" />
                <Link href="mailto:frontlabsamsterdam@gmail.com" target="_blank" className="absolute flex items-center justify-center 
                left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark
                w-20 h-20 rounded-full font-semibold hover:bg-customTwo hover:text-dark transition duration-300 ease-in-out
                dark:bg-customTwo dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                md:w-12 md:h-12 md:text-[10px]
                ">
                    Email
                </Link>
            </div>
        </div>
    )
}

export default HireMe;