import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons';
import { easeInOut, motion } from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { useState } from 'react';

const CustomLink = ({ href, title, className = "" }) => {

    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`
            absolute h-[1px] inline-block bg-dark left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300 dark:bg-light
            ${router.asPath === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    )
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleclick = () => {
        toggle();
        router.push(href)
    };

    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleclick}>
            {title}
            <span className={`
            absolute h-[0.5px] inline-block bg-customTwo left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300 dark:bg-dark
            ${router.asPath === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </button>
    )
};

export default function NavBar() {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleclick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className='relative w-full flex items-center justify-between 
        px-32 py-8 font-semibold uppercase tracking-wide text-dark dark:text-light lg:px-16 md:px-12 sm:px-8 z-10'>

            <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleclick}>
                <span className={`block bg-dark dark:bg-customTwo transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`block bg-dark dark:bg-customTwo transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block bg-dark dark:bg-customTwo transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className='flex w-full justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href="/" title="Home" className='mr-4 font-atrament text-2xl' />
                    <CustomLink href="/about" title="About" className='mx-4 font-atrament text-2xl' />
                    <CustomLink href="/projects" title="Projects" className='mx-4 font-atrament text-2xl' />
                    <CustomLink href="/contact" title="Contact" className='ml-4 font-atrament text-2xl' />
                </nav>
                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a href="https://www.linkedin.com/in/daan-roelofs-b7021220/" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-8 mr-3'
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href="https://github.com/DaanR37" target={"_blank"}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className='w-8'
                    >
                        <GithubIcon />
                    </motion.a>
                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1
                    ${mode === "light" ? "bg-dark text-light" : "bg-customTwo text-dark"}
                    `}
                    >
                        {
                            mode === "dark" ? <SunIcon className="fill-dark" />
                                : <MoonIcon className={"fill-dark"} />
                        }
                    </button>
                </nav>
            </div>

            {
                isOpen ?
                    <motion.div
                        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}

                        className='flex flex-col min-w-[70vw] justify-between items-center fixed 
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-customTwo/75 
            rounded-lg backdrop-blur-md py-32'>
                        <nav className='flex flex-col items-center justify-center'>
                            <CustomMobileLink href="/" title="Home" className='' toggle={handleclick} />
                            <CustomMobileLink href="/about" title="About" className='' toggle={handleclick} />
                            <CustomMobileLink href="/projects" title="Projects" className='' toggle={handleclick} />
                            <CustomMobileLink href="/contact" title="Contact" className='' toggle={handleclick} />
                        </nav>

                        <nav className='flex items-center justify-center flex-wrap mt-2'>
                            <motion.a href="https://www.linkedin.com/in/daan-roelofs-b7021220/" target={"_blank"}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className='w-8 mr-3 sm:mx-1 text-light dark:text-dark'
                            >
                                <LinkedInIcon />
                            </motion.a>
                            <motion.a href="https://github.com/DaanR37" target={"_blank"}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className='w-8 ml-3 sm:mx-1 text-light dark:text-dark'
                            >
                                <GithubIcon />
                            </motion.a>
                            <button
                                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                                className={`ml-3 sm:mx-1 flex items-center justify-center rounded-full p-1
                    ${mode === "light" ? "bg-dark text-light" : "bg-customTwo text-dark"}
                    `}
                            >
                                {
                                    mode === "dark" ? <SunIcon className={"fill-dark"} />
                                        : <MoonIcon className={"fill-dark"} />
                                }
                            </button>
                        </nav>
                    </motion.div>
                    : null
            }

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
};
