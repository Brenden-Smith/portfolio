import { memo } from "react";

export default memo(function Divider({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <li className={`bg-gray-400 w-0.5 ${className ?? "h-24"}`} style={style} />
  );
});
