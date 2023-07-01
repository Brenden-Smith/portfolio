import Image, { ImageProps } from "next/image";
import Tooltip from "./Tooltip";

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
    <div className={`flex items-center ${className}`}>
      <Tooltip title={props.alt}>
        <Image
          src={src}
          height={size === "small" ? 32 : size === "medium" ? 48 : 64}
          width={size === "small" ? 32 : size === "medium" ? 48 : 64}
          alt={props.alt}
        />
      </Tooltip>
    </div>
  );
}
