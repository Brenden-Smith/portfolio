import { ButtonBase, Divider, Tooltip, Typography } from "@mui/material";
import Image, { ImageProps } from "next/image";
import { FrostedWindow } from "./FrostedWindow";
import Router, { useRouter } from "next/router";

export function AppBar() {
  return (
    <div className="flex justify-center fixed top-auto bottom-0 p-5 w-full">
      <FrostedWindow className="flex flex-row space-x-5 overflow-x-scroll">
        <Item
          src="https://avatars.githubusercontent.com/u/61305154?v=4"
          alt="About"
          route=""
        />
        <Divider orientation="vertical" flexItem />
        <Item
          src="/img/handle.jpg"
          alt="Handle Delivery"
          route="experience/handle-delivery"
        />
        <Item
          src="/img/goldman.png"
          alt="Goldman Sachs"
          route="experience/goldman-sachs"
        />
        <Item src="/img/down.jpg" alt="Down" route="experience/down" />
        <Divider orientation="vertical" flexItem />
        <Item
          src="/img/thumbo.png"
          alt="Thumbo"
          className="bg-black"
          route="projects/thumbo"
        />
        <Item
          src="/img/video.jpg"
          alt="Video Sync"
          route="projects/video-sync"
        />
      </FrostedWindow>
    </div>
  );
}

function Item({ route, ...props }: { route: string } & ImageProps) {
  const router = useRouter();
  return (
    <Tooltip title={<Typography>{props.alt}</Typography>} placement="top" arrow>
      <div
        className="rounded-3xl"
        style={{
          width: "100px",
          height: "100px",
        }}
      >
        <ButtonBase
          onClick={() => router.push(`/${route}`, undefined, { shallow: true })}
          style={{
            width: "100px",
            height: "100px",
          }}
          className="rounded-3xl"
        >
          <Image
            {...props}
            fill
            alt={props.alt}
            className={`rounded-3xl ${props.className}`}
          />
        </ButtonBase>
      </div>
    </Tooltip>
  );
}
