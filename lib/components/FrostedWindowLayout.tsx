import { ReactNode } from "react";
import Image from "next/image";
import { Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import { FrostedWindow } from "./FrostedWindow";

export function FrostedWindowLayout({
  title,
  position,
  startDate,
  endDate,
  image,
  children,
  tags,
}: {
  title: string;
  position: string;
  startDate?: string;
  endDate?: string;
  image: string;
  tags: ReactNode[];
  children: ReactNode | ReactNode[];
}) {
  function Sidebar() {
    return (
      <div className="flex flex-col items-center space-y-5 p-5">
        <Image
          src={image}
          alt={title}
          height={250}
          width={250}
          className="rounded-3xl"
        />
        <Typography variant="h3" noWrap>
          {title}
        </Typography>
        <Typography variant="h5" noWrap>
          {position}
        </Typography>
        {startDate && endDate && (
          <Typography variant="h6" noWrap>
            {startDate} - {endDate}
          </Typography>
        )}
        <div className="flex flex-row space-x-1">{tags}</div>
      </div>
    );
  }

  function Content() {
    return <div className="flex flex-col space-y-5 p-5">{children}</div>;
  }

  const breakpoint = useMediaQuery("(max-width: 600px)");

  return (
    <FrostedWindow
      className={"flex " + (breakpoint ? "flex-col" : "flex-row")}
      style={{
        maxWidth: "1150px",
        width: "90vw",
        maxHeight: "calc(100vh - 198px)",
        overflowY: "auto",
      }}
    >
      <Sidebar />
      {!breakpoint && (
        <Divider orientation="vertical" flexItem className="mr-5 ml-3" />
      )}
      <Content />
    </FrostedWindow>
  );
}
