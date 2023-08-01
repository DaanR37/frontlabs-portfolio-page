import '@/styles/globals.scss';
import Head from 'next/head';
import { useRef } from "react";
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { Montserrat } from "next/font/google";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Cursor from '@/components/Cursor';
// import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const containerRef = useRef(null);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}>
        <Cursor />
        <AnimatePresence mode="wait">
          <LocomotiveScrollProvider
            options={
              {
                smooth: true,
                // ... all available Locomotive Scroll instance options 
              }
            }
            watch={
              [
                //..all the dependencies you want to watch to update the scroll.
                //  Basicaly, you would want to watch page/location changes
                //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
              ]
            }
            containerRef={containerRef}
          >
            <main data-scroll-container ref={containerRef}>
              <Component key={router.asPath} {...pageProps} />
            </main>
          </LocomotiveScrollProvider>
        </AnimatePresence>
        {/* <Footer /> */}
      </main>
    </>
  );
};
