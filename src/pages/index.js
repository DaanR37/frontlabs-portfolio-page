import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import HireMe from "@/components/HireMe";
import Logo from "../../public/images/frontlabslogo-alternative-logos/svg/logo-no-background.svg";
import TransitionEffect from "@/components/TransitionEffect";

import { RoughNotationGroup } from "react-rough-notation";
import RainbowHighlight from "@/components/RainbowHighlight";


export default function Home() {

  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];

  return (
    <>
      <Head>
        <title>FrontLabs | Home Page</title>
        <meta name="description" content="FrontLabs Portfolio Page" />
      </Head>
      <TransitionEffect />
      <main className="relative flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8 ">
          <div className="flex w-full items-center justify-between lg:flex-col">

            <div className={`${styles.frontlabslogo} absolute w-1/2 md:w-full 2xl:w-[30%] 
            2xl:left-[75%] 2xl:top-[35%] -translate-x-[75%] -translate-y-[35%]`}>
              <Image
                src={Logo}
                alt="logo"
                priority={true}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
                className={`${styles.imagehomepage} ${styles.flash} 
                !relative !w-full h-auto object-contain
                lg:hidden md:inline-block md:w-full invert dark:invert-0`}
              />
            </div>

            <div className="absolute w-1/2 flex flex-col items-start self-center 2xl:w-[45%] lg:w-full lg:text-center 
            2xl:left-[20%] 2xl:top-[35%] -translate-x-[20%] -translate-y-[35%]">

              <AnimatedText text="Hi, I am Daan!" className="!text-6xl !text-left
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
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
                <Link href="/" target="_blank"
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

                <Link href="mailto:frontlabsamsterdam@gmail.com" target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark 
                  underline dark:text-light md:text-base"
                >
                  Email Me
                </Link>
              </div>

            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  )
}
