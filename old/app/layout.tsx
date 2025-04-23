import Divider from "../components/Divider";
import "./globals.css";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import Tooltip from "components/Tooltip/index";
import me from "public/img/me.jpg";
import icf from "public/img/icf.png";
import goldman from "public/img/goldman.png";
import handle from "public/img/handle.jpg";
import foodood from "public/img/foodood.png";
import dataniz from "public/img/dataniz.png";
import thumbo from "public/img/thumbo.png";
import video from "public/img/video.png";
import down from "public/img/down.jpg";

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
        className="flex flex-col h-dvh max-h-dvh p-5 gap-5 items-center"
        style={{
          backgroundImage: "url(/img/background.png)",
          backdropFilter: "blur(10px) brightness(0.5)",
        }}
      >
        <main className="flex overflow-y-auto frosted-window max-w-6xl my-auto w-full">
          {children}
        </main>
        <nav className="bg-gray-300 bg-opacity-20 backdrop-blur-lg rounded-3xl drop-shadow-lg p-5 h-fit min-h-fit w-fit max-w-full overflow-x-auto">
          <ul className="flex gap-4">
            <Item src={me} alt="About" route="/" />
            <Divider />
            <Item
              src={icf}
              alt="ICF"
              route="/experience/icf"
              className="bg-white"
            />
            <Item
              src={goldman}
              alt="Goldman Sachs"
              route="/experience/goldman-sachs"
            />
            <Item
              src={handle}
              alt="Handle Delivery"
              route="/experience/handle-delivery"
            />
            <Divider />
            <Item src={foodood} alt="FooDood" route="/projects/foodood" />
            <Item src={dataniz} alt="Dataniz" route="/projects/dataniz" />
            <Item
              src={thumbo}
              alt="Thumbo"
              className="bg-black"
              route="/projects/thumbo"
            />
            <Item src={video} alt="Video Sync" route="/projects/video-sync" />
            <Item src={down} alt="Down" route="/projects/down" />
          </ul>
        </nav>
      </body>
    </html>
  );
}

function Item({ route, src, alt, className }: { route: string } & ImageProps) {
  return (
    <li className="h-24 w-24">
      <Tooltip title={alt}>
        <Link href={route}>
          <Image
            src={src}
            alt={alt}
            className={`rounded-3xl cursor-pointer object-contain h-24 w-24 ${className}`}
          />
        </Link>
      </Tooltip>
    </li>
  );
}
