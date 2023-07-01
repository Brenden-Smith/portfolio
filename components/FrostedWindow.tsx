import { ReactNode } from "react";

export function FrostedWindow({
  children,
  className,
  ...props
}: {
  children?: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={
        "bg-gray-300 bg-opacity-20 backdrop-blur-lg rounded-3xl drop-shadow-lg p-5 " +
        className
      }
      {...props}
    >
      {children}
    </div>
  );
}

export default FrostedWindow;
