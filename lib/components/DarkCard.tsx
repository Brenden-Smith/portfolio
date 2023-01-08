import { Card, CardProps } from "@mui/material";
import { ReactNode } from "react";

export function DarkCard({
  children,
  ...props
}: {
  children: ReactNode | ReactNode[];
} & CardProps) {
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
      {children}
    </Card>
  );
}
