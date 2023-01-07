import { Tooltip, Typography } from "@mui/material";
import Image, { ImageProps } from "next/image";

export function Icon({
  src,
  size,
  noStyle,
  ...props
}: {
  src: string;
  size?: "small" | "medium" | "large";
  noStyle?: boolean;
} & ImageProps) {
  const className = `${!noStyle && "mr-3 mb-3"} ${props.className}}`;
  return (
    <Tooltip title={<Typography>{props.alt}</Typography>} placement="top" arrow>
      <Image
        src={src}
        height={size === "small" ? 32 : size === "medium" ? 48 : 64}
        width={size === "small" ? 32 : size === "medium" ? 48 : 64}
        className={className}
        alt={props.alt}
      />
    </Tooltip>
  );
}
