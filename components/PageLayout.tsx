import { ReactNode } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function PageLayout({
  title,
  items,
  image,
  imageColor,
  children,
  tags,
}: {
  title: string;
  items: {
    position: string;
    startDate?: string;
    endDate?: string;
  }[];
  image: StaticImport;
  imageColor?: string;
  tags: ReactNode[];
  children: ReactNode | ReactNode[];
}) {
  return (
    <div className="flex flex-col lg:flex-row relative animate-fade-in p-8 gap-8">
      <div className="flex flex-col items-center gap-5 text-center min-w-64">
        <Image
          src={image}
          alt={title}
          className="rounded-3xl h-64 w-64 object-contain"
          priority
          style={{
            backgroundColor: imageColor || "transparent",
          }}
        />
        <h2>{title}</h2>
        {items.map(({ position, startDate, endDate }) => (
          <div key={position} className="gap-5">
            <h4>{position}</h4>
            {startDate && endDate && (
              <p>
                {startDate} - {endDate}
              </p>
            )}
          </div>
        ))}
        <div className="flex flex-row gap-5">{tags}</div>
      </div>
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  );
}
