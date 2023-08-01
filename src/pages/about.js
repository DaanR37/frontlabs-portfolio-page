import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";

/* Import components */
// import Skills from "@/components/Skills";
// import Experience from "@/components/Experience";
// import Education from "@/components/Education";
// import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

/* Import Icons & Images */
// import { LearnIcon, FrontEndIcon } from "@/components/Icons";
import profilePic1 from "../../public/images/profilepic/profilepic-1.jpg";
import profilePic2 from "../../public/images/profilepic/profilepic-2.jpg";
import profilePic3 from "../../public/images/profilepic/profilepic-3.jpg";

// import journalist from "../../public/images/parallaxpics/journalist.png";
// import salesguy from "../../public/images/parallaxpics/salesguy.png";


// ANIMATION OF NUMBER RIGHT OF BIO TEXT
const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 7500 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            };
        })
    }, [springValue, value]);

    return <span ref={ref}></span>
};
const IconsRight1 = ({ name, x, image }) => {
    return (
        <motion.div
            initial={{ x: "50vw" }}
            animate={{ x: x }}
            transition={{ duration: 1.5 }}
        >
            {image}
            <h2 className="text-[13px] font-semibold capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                {name}
            </h2>
        </motion.div>
    );
};
const IconsRight2 = ({ name, x, image }) => {
    return (
        <motion.div
            initial={{ x: "50vw" }}
            animate={{ x: x }}
            transition={{ duration: 1.5, delay: 0.4 }}
        >
            {image}
            <h2 className="text-[13px] font-semibold capitalize text-dark/75 dark:text-light/75 
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                {name}
            </h2>
        </motion.div>
    );
};

export default function About() {
    return (
        <>
            <Head>
                <title>FrontLabs | About Page</title>
                <meta name="description" content="lorem ipsum" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <TransitionEffect />
            {/*  w-full flex-col items-center justify-center */}
            <section id="fixed-target">
                <div id="about" className="about relative flex w-[80vw] min-h-[100vh] m-auto dark:text-light">
                    <h1 data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"
                        className="absolute text-8xl font-light top-[5rem] left-[10%] z-[5]">
                        About me
                    </h1>
                    <div
                        data-scroll data-scroll-sticky data-scroll-target="#fixed-target"
                        className="relative w-[50%] text-lg font-medium mt-[20%] z-[5]">
                        Self taught web developer, working in React and Nextjs. Lorem ipsum dolor sit,
                        laudantium beatae quia necessitatibus
                        <br />
                        <br />
                        amet consectetur adipisicing elit. Vitae minus, laudantium beatae quia necessitatibus
                        Debitis minus quisquam suscipit maxime
                        <br />
                        <br />
                        maiores rem officiis? Debitis minus quisquam suscipit maxime, earum totam asperiores,
                        fugit optio obcaecati commodi vel?
                        Vitae minus, laudantium beatae quia necessitatibus
                    </div>
                    <div className="relative w-[50%]">
                        <Image
                            src={profilePic1}
                            alt="picture of author"
                            // width={350}
                            // height={350}
                            // data-scroll data-scroll-speed="5"
                            className="w-[100%] h-auto"
                            rel="preload" as="image"
                        />
                        <Image
                            src={profilePic3}
                            alt="picture of author"
                            // width={350}
                            // height={350}
                            data-scroll data-scroll-speed="5"
                            className="absolute w-[40%] h-auto right-[95%] bottom-[10%]"
                            rel="preload" as="image"
                        />
                        <Image
                            src={profilePic2}
                            alt="picture of author"
                            // width={350}
                            // height={350}
                            data-scroll data-scroll-speed="-2"
                            className="absolute w-[40%] h-auto left-[80%] bottom-[30%]"
                            rel="preload" as="image"
                        />
                    </div>


                    {/* <Layout className="pt-16 !px-0">
                    <AnimatedText text="React developer by heart" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid 
                                border-dark bg-customTwo p-8 dark:bg-dark dark:border-customTwo
                                xl:col-span-4 md:col-span-8 md:order-1">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] 
                                rounded-[2rem] bg-dark dark:bg-customTwo"
                            />
                            <Image
                                // src={profilePic}
                                src="/images/profilepic/profilepic-2.jpg"
                                alt="profile image form author"
                                className="w-full h-auto rounded-2xl"
                                priority={true}
                                sizes="(max-width: 768px) 100vw,
                                (max-width: 1200px) 50vw,
                                33vw"
                                width={100}
                                height={100}
                            />
                        </div>

                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 md:order-2">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                Biography
                            </h2>
                            <p className="font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci incidunt
                                officiis quis cupiditate! Vero repudiandae ad odit at tempore
                                sunt ex veritatis maiores perferendis eos minima quod incidunt,
                                suscipit facilis.
                            </p>
                            <p className="my-4 font-medium">
                                similique eius harum ex asperiores error voluptate voluptates magni. Deleniti.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi consectetur nulla
                                tenetur culpa at quis? Cupiditate doloremque enim,
                                fugiat voluptatibus iusto quos dolorem dolor omnis natus, nostrum totam qui quisquam!
                            </p>
                        </div>

                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                                    <IconsRight1 name="self-taught" x="0"
                                        image={<LearnIcon className="dark:fill-light mb-[6px]" />} />
                                </span>
                            </div>

                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                                    <IconsRight2 name="front-end" x="0"
                                        image={<FrontEndIcon className="dark:fill-light mb-[6px]" />} />
                                </span>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-5xl font-medium md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={3} />+
                                </span>
                                <h2 className="text-[13px] font-semibold capitalize text-dark/75 dark:text-light/75 
                                xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    years of experience
                                </h2>
                            </div>
                        </div>
                    </div>
                </Layout> */}

                    {/* <Skills />
                <Experience />
                <Education /> */}
                </div>
            </section>
        </>
    )
};
