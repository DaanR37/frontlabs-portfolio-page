import Layout from "@/components/Layout";
import Head from "next/head";

/* Import components */
import CoverVideo from "@/components/CoverVideo";
import TransitionEffect from "@/components/TransitionEffect";
import About from "./about";
// import NavBar from "@/components/NavBar";

export default function Home({ videos }) {

  return (
    <>
      <Head>
        <title>FrontLabs | Home Page</title>
        <meta name="description" content="FrontLabs Portfolio Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <TransitionEffect />
      <section id="home" className="relative w-full min-h-[100vh] overflow-hidden 
      flex flex-col items-center text-dark dark:text-light">
        {/* <NavBar /> */}
        <Layout className="pt-0 !px-0 md:pt-16 sm:pt-8">
          <CoverVideo />
          <About />
        </Layout>
      </section>
    </>
  )
};
