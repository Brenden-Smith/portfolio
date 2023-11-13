import Divider from "../components/Divider";
import FrostedWindow from "../components/FrostedWindow";
import "./globals.css";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { memo } from "react";
import Tooltip from "components/Tooltip";
import Providers from "./providers";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.className}>
      <body
        className="h-screen w-screen"
        style={{
          backgroundImage: "url(/img/background.png)",
          backdropFilter: "blur(10px) brightness(0.5)",
        }}
      >
        <main className="flex relative justify-center items-center w-full h-full pb-32">
          <Providers>{children}</Providers>
        </main>
        <footer className="flex fixed items-end justify-center top-auto bottom-0 w-screen h-screen z-0">
          <FrostedWindow
            className="m-5 py-5 justify-end items-end h-32"
            style={{
              maxWidth: "90vw",
              width: "fit-content",
              marginLeft: "15px",
              flexDirection: "row",
            }}
          >
            <div
              className="top-0 flex flex-row space-x-5 overflow-x-auto items-end -translate-y-1/3 pb-2"
              style={{
                height: "150px",
              }}
            >
              <Item
                src="https://avatars.githubusercontent.com/u/61305154?v=4"
                alt="About"
                route="/"
              />
              <Divider />
              <Item
                src="/img/goldman.png"
                alt="Goldman Sachs"
                route="/experience/goldman-sachs"
              />
              <Item
                src="/img/handle.jpg"
                alt="Handle Delivery"
                route="/experience/handle-delivery"
              />
              <Divider />
              <Item src="/img/shift.png" alt="Shift" route="/projects/shift" />
              <Item
                src="/img/foodood.png"
                alt="FooDood"
                route="/projects/foodood"
              />
              <Item
                src="/img/dataniz.png"
                alt="Dataniz"
                route="/projects/dataniz"
              />
              <Item
                src="/img/thumbo.png"
                alt="Thumbo"
                className="bg-black"
                route="/projects/thumbo"
              />
              <Item
                src="/img/video.png"
                alt="Video Sync"
                route="/projects/video-sync"
              />
              <Item src="/img/down.jpg" alt="Down" route="/projects/down" />
            </div>
          </FrostedWindow>
        </footer>
      </body>
    </html>
  );
}

const Item = memo(function Item({
  route,
  ...props
}: { route: string } & ImageProps) {
  return (
    <Tooltip title={props.alt}>
      <Link href={route}>
        <div className="relative rounded-3xl cursor-pointer h-24 w-24">
          <Image
            {...props}
            alt={props.alt}
            width={100}
            height={100}
            className={`rounded-3xl ${props.className}`}
          />
        </div>
      </Link>
    </Tooltip>
  );
});
