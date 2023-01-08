import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppBar } from "../lib/components/AppBar";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ParticlesBackground } from "../lib/components";
import { AnimatePresence, motion } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  function Content() {
    return (
      <AnimatePresence>
        <motion.main
          className={`w-screen ${!breakpoint && "h-screen flex items-center"}`}
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
    );
  }

  const breakpoint = useMediaQuery("(max-width: 600px)");
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          mode: "dark",
        },
      })}
    >
      <CssBaseline />
      <ParticlesBackground />
      {!breakpoint && <Content />}
      {breakpoint && (
        <div className="top-0">
          <Content />
        </div>
      )}

      <footer className="flex flex-col justify-center items-center fixed top-auto bottom-0 w-screen">
        <AppBar />
      </footer>
    </ThemeProvider>
  );
}
