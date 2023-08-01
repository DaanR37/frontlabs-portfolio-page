import { createClient } from 'contentful';
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

/* Import components */
import AnimatedText from './AnimatedText';
import { RoughNotationGroup } from "react-rough-notation";
import RainbowHighlight from './RainbowHighlight';
import HireMe from './HireMe';
import Logo from "../../public/images/frontlabslogo-alternative-logos/svg/logo-no-background-four.svg";
import TransitionEffect from './TransitionEffect';


// export async function getStaticProps() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//   })

//   const res = await client.getEntries({ content_type: "video" })

//   return {
//     props: {
//       videos: res.items
//     }
//   }
// }

const CoverVideo = ({ videos }) => {
    const videoUrl = process.env.NEXT_PUBLIC_VIDEO_URL;
    const colors = ["#7894ff", "#ff502c", "#ff9372", "#ff91ff"];

    return (
        <>
            <Head>
                <title>FrontLabs | Home Page</title>
                <meta name="description" content="FrontLabs Portfolio Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <TransitionEffect />
            <section className="relative w-full min-h-[100vh]">
                {videoUrl && (
                    <video autoPlay muted loop
                        className="w-full h-[100vh] max-h-[100vh] object-cover"
                    >
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                )}

                <div className="absolute inset-[40px] ring-1 ring-blue-500/50 bg-black opacity-70 top-0 left-0 
            rounded-br-[250px]" />

                <div className="flex items-center justify-between w-full lg:flex-col">
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        transition={{
                            duration: 3.5,
                            ease: 'easeInOut'
                        }}
                        className="frontlabslogo absolute w-1/2 md:w-full 2xl:w-[30%] 
                    2xl:left-[75%] 2xl:top-[35%] -translate-x-[75%] -translate-y-[35%] mt-12">
                        <Image
                            src={Logo}
                            alt="logo"
                            priority
                            sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        50vw"
                            width={100}
                            height={100}
                            data-scroll data-scroll-speed="5"
                            className="imagehomepage flash
                        !relative !w-[85%] h-auto object-cover
                        lg:hidden md:inline-block md:w-full invert dark:invert"
                            rel="preload" as="image"
                        />
                    </motion.div>

                    <div className="absolute w-1/2 flex flex-col items-start self-center 2xl:w-[45%] lg:w-full lg:text-center 
                    2xl:left-[20%] 2xl:top-[35%] -translate-x-[20%] -translate-y-[35%] mt-12">

                        <AnimatedText text="Unleashing web wonders, where front-end flourishes" className="!text-4xl !text-left
                        xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl pb-8"
                        />

                        <RoughNotationGroup show={true}>
                            <RainbowHighlight color={colors[0]} order="1">
                                <h1 className="my-2 text-base font-medium 2xl:text-3xl md:text-sm sm:text-xs">
                                    Developer
                                </h1>
                            </RainbowHighlight>

                            <RainbowHighlight color={colors[1]} order="2">
                                <h1 className="my-2 text-base font-medium 2xl:text-3xl md:text-sm sm:text-xs">
                                    Web Design
                                </h1>
                            </RainbowHighlight>

                            <RainbowHighlight color={colors[2]} order="3">
                                <h1 className="my-2 text-base font-medium 2xl:text-3xl md:text-sm sm:text-xs">
                                    Programmer
                                </h1>
                            </RainbowHighlight>

                            <RainbowHighlight color={colors[3]} order="4">
                                <h1 className="my-2 text-base font-medium 2xl:text-3xl md:text-sm sm:text-xs">
                                    Front-End
                                </h1>
                            </RainbowHighlight>
                        </RoughNotationGroup>

                        <div className="flex items-center self-start mt-2 lg:self-center">
                            <Link rel="preload" as="style" href="/" target="_blank"
                                className="flex items-center bg-dark text-light 
                            p-2.5 px-6 rounded-lg text-lg font-semibold
                             hover:bg-customTwo hover:text-dark 
                            border-2 border-solid border-transparent hover:border-dark
                            transition duration-300 ease-in-out dark:bg-customTwo dark:text-dark 
                             hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                            md:p-2 md:px-4 md:text-base"
                                download={true}
                            >
                                CV
                            </Link>

                            <Link rel="preload" as="style" href="mailto:frontlabsamsterdam@gmail.com" target="_blank"
                                className="ml-4 text-lg font-medium capitalize text-dark 
                                underline dark:text-light md:text-base"
                            >
                                Email Me
                            </Link>
                        </div>
                    </div>
                </div>
                <HireMe />
            </section>
        </>
    );
};

export default CoverVideo;
