export default function Divider({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`bg-gray-400 w-0.5 ${className ?? "h-24"}`} style={style} />
  );
}
