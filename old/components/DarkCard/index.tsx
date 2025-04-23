import { ReactNode } from "react";

export function DarkCard({
  children,
  title,
  ...props
}: {
  title: string;
  children: ReactNode | ReactNode[];
}) {
  return (
    <div
      className="p-5 space-y-5 bg-gray-400 bg-opacity-30 backdrop-blur-lg rounded-3xl drop-shadow-lg"
      {...props}
    >
      <h3 className="text-center">{title}</h3>
      {children}
    </div>
  );
}
