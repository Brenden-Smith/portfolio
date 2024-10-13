import Divider from "../components/Divider";
import "./globals.css";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import Tooltip from "components/Tooltip/index";
import me from "public/img/me.jpg";

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
        className="flex flex-col h-screen max-h-screen p-5 gap-5 items-center"
        style={{
          backgroundImage: "url(/img/background.png)",
          backdropFilter: "blur(10px) brightness(0.5)",
        }}
      >
        <main className="flex overflow-y-auto frosted-window max-w-6xl my-auto w-full">
          {children}
        </main>
        <footer className="flex gap-4 bg-gray-300 bg-opacity-20 backdrop-blur-lg rounded-3xl drop-shadow-lg p-5 h-fit min-h-fit overflow-x-auto w-fit max-w-full">
          <Item
            src={me}
            alt="About"
            route="/"
          />
          <Divider />
          <Item
            src="/img/icf.png"
            alt="ICF"
            route="/experience/icf"
            className="bg-white"
          />
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
        </footer>
      </body>
    </html>
  );
}

function Item({ route, ...props }: { route: string } & ImageProps) {
  return (
    <Tooltip title={props.alt}>
      <Link href={route}>
        <div className="relative rounded-3xl cursor-pointer h-24 w-24">
          <Image
            {...props}
            alt={props.alt}
            className={`object-contain rounded-3xl ${props.className}`}
            fill
          />
        </div>
      </Link>
    </Tooltip>
  );
}
