import { ReactNode } from "react";
import Image from "next/image";
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
  return (
    <FrostedWindow
      className="flex flex-col lg:flex-row relative"
      style={{
        maxWidth: "1150px",
        width: "90vw",
        overflowY: "auto",
        maxHeight: "70vh",
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
            <Image src={image} alt={title} fill className="rounded-3xl" />
          </div>
        </div>
        <h2>{title}</h2>
        <h4>{position}</h4>
        {startDate && endDate && (
          <p>
            {startDate} - {endDate}
          </p>
        )}
        <div className="flex flex-row space-x-5">{tags}</div>
      </div>
      <div
        className={`flex flex-col space-y-5 p-5 h-auto ${className || ""}`}
        {...props}
      >
        {children}
      </div>
    </FrostedWindow>
  );
}
