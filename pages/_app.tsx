import { CssBaseline, useMediaQuery } from "@mui/material";
import ThemeProvider from "@mui/system/ThemeProvider";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppBar } from "../lib/components/AppBar";
import { ParticlesBackground } from "../lib/components";
import { AnimatePresence, motion } from "framer-motion";
import { theme } from "../lib/theme";
import Head from "next/head";

export default function App({ Component, pageProps, router }: AppProps) {
  const breakpoint = useMediaQuery("(max-width: 600px)");
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Brenden Smith | Software Engineer" />
        <meta name="og:title" content="Brenden Smith | Software Engineer" />
        <meta name="og:description" content="The portfolio of Brenden Smith" />
        <meta
          name="og:image"
          content="https://avatars.githubusercontent.com/u/61305154?v=4"
        />
        <meta name="og:url" content="https://brenden-smith.com" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ParticlesBackground />
        <AnimatePresence>
          <motion.main
            className={`w-screen ${
              !breakpoint ? "h-screen flex items-center" : "top-0"
            }`}
            style={
              breakpoint
                ? {
                    height: "100%",
                    maxHeight: "100%",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }
                : {
                    paddingBottom: "180px",
                  }
            }
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={{
              pageInitial: {
                opacity: 0,
                scale: 0.5,
              },
              pageAnimate: {
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.4,
                  duration: 0.3,
                },
              },
              pageExit: {
                opacity: 0,
                transition: {
                  duration: 0.4,
                },
                scale: 1,
              },
            }}
          >
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>
        <AppBar />
      </ThemeProvider>
    </>
  );
}
