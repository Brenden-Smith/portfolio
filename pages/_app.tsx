import { CssBaseline } from "@mui/material";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppBar } from "../lib/components/AppBar";
import dynamic from "next/dynamic";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ParticlesBackground } from "../lib/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <div
        className="w-screen h-screen"
        style={{
          background: "linear-gradient(45deg, #d45b79 30%, #e67a4e 90%)",
          paddingBottom: "192px",
        }}
      >
        <ParticlesBackground />
        <main className="w-full h-full" style={{
          paddingTop: "90px",
          paddingBottom: "64px",
        }}>
          <Component {...pageProps} />
        </main>
      </div>
      <AppBar />
    </>
  );
}
