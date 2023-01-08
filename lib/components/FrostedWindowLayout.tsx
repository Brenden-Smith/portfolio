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
  imageColor,
  children,
  tags,
  className,
  ...props
}: {
  title: string;
  position: string;
  startDate?: string;
  endDate?: string;
  image: string;
  imageColor?: string;
  tags: ReactNode[];
  className?: string;

  children: ReactNode | ReactNode[];
} & React.HTMLAttributes<HTMLDivElement>) {
  const breakpoint = useMediaQuery("(max-width: 600px)");

  return (
    <FrostedWindow
      className={"flex " + (breakpoint ? "flex-col" : "flex-row")}
      style={{
        maxWidth: "1150px",
        width: "90vw",
        overflowY: "auto",
        maxHeight: breakpoint ? "calc(-webkit-fill-available - 180px)" : "calc(100vh - 180px)",
      }}
    >
      <div
        className="flex flex-col items-center space-y-5 p-5"
        style={{
          width: breakpoint ? "100%" : "35%",
        }}
      >
        <div
          className="rounded-3xl"
          style={{
            backgroundColor: imageColor || "transparent",
          }}
        >
          <Image
            src={image}
            alt={title}
            height={250}
            width={250}
            className="rounded-3xl"
          />
        </div>
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
        <div className="flex flex-row space-x-5">{tags}</div>
      </div>
      {!breakpoint && (
        <Divider orientation="vertical" flexItem className="mr-5 ml-3" />
      )}
      <div
        className={`flex flex-col space-y-5 p-5 h-auto ${className || ""}`}
        style={{
          width: breakpoint ? "100%" : "65%",
        }}
        {...props}
      >
        {children}
      </div>
    </FrostedWindow>
  );
}
