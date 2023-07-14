import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import profilePic from "../../public/images/profilepic/profilepic-2.jpg";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

import Skills from "@/components/Skills";
import ExperienceTwo from "@/components/ExperienceTwo";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
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

export default function about() {
    return (
        <>
            <Head>
                <title>FrontLabs | About Page</title>
                <meta name="description" content="lorem ipsum" />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="I am awaken" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">


                        

                        <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid 
                        border-dark bg-customTwo p-8 dark:bg-dark dark:border-customTwo
                        xl:col-span-4 md:col-span-8 md:order-1">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] 
                                rounded-[2rem] bg-dark dark:bg-customTwo"
                            />
                            <Image
                                src={profilePic}
                                alt="profile image form author"
                                className="w-full h-auto rounded-2xl"
                                priority={true}
                                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
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
                            <p className="font-medium">
                                Sequi consectetur nulla
                                tenetur culpa at quis? Cupiditate doloremque enim,
                                fugiat voluptatibus iusto quos dolorem dolor omnis natus, nostrum totam qui quisquam!
                            </p>
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                                xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    satisfied clients
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={40} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                                xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    projects completed
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={3} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                                xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    years of experience
                                </h2>
                            </div>
                        </div>
                    </div>
                </Layout>
                <Skills />
                <ExperienceTwo />
                <Education />
            </main>
        </>
    )
}
