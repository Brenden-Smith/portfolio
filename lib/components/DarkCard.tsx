import { Card, CardHeader, CardProps, useMediaQuery } from "@mui/material";
import { ReactNode } from "react";

export function DarkCard({
  children,
  title,
  ...props
}: {
  title: string;
  children: ReactNode | ReactNode[];
} & CardProps) {
  const breakpoint = useMediaQuery("(max-width: 600px)");
  return (
    <Card
      sx={{
        backgroundColor: "rgb(156, 163, 175, 0.2);",
        backdropFilter: "blur(16px)",
        borderRadius: "1.5rem",
        color: "white",
      }}
      {...props}
    >
      <CardHeader title={title} className={`${breakpoint && "text-center"}`} />
      {children}
    </Card>
  );
}
