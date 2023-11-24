"use client";
import { ReactNode, memo } from "react";
import Image from "next/image";
import FrostedWindow from "../FrostedWindow";

const FrostedWindowLayout = memo(function FrostedWindowLayout({
  title,
  items,
  image,
  imageColor,
  children,
  tags,
  className,
  ...props
}: {
  title: string;
  items: {
    position: string;
    startDate?: string;
    endDate?: string;
  }[];
  image: string;
  imageColor?: string;
  tags: ReactNode[];
  className?: string;
  children: ReactNode | ReactNode[];
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex flex-col justify-center items-center z-10 h-fit w-fit animate-fade-in">
      <FrostedWindow
        className="flex flex-col lg:flex-row relative"
        style={{
          maxWidth: "1150px",
          width: "90vw",
          overflowY: "auto",
          maxHeight: "75vh",
        }}
      >
        <div className="flex flex-col items-center space-y-5 p-5 text-center">
          <div
            className="rounded-3xl"
            style={{
              backgroundColor: imageColor || "transparent",
            }}
          >
            <div className="relative" style={{ height: 250, width: 250 }}>
              <Image
                src={image}
                alt={title}
                fill
                className="rounded-3xl object-contain"
                priority
              />
            </div>
          </div>

          <h2>{title}</h2>
          {items.map(({ position, startDate, endDate }) => (
            <div key={position} className="space-y-5">
              <h4>{position}</h4>
              {startDate && endDate && (
                <p>
                  {startDate} - {endDate}
                </p>
              )}
            </div>
          ))}
          <div className="flex flex-row space-x-5">{tags}</div>
        </div>
        <div
          className={`flex flex-col space-y-5 p-5 h-auto ${className || ""}`}
          {...props}
        >
          {children}
        </div>
      </FrostedWindow>
    </div>
  );
});

export { FrostedWindowLayout };
