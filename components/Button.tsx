import { useMemo } from "react";
import styles from "./Button.module.css";

export default function Button({
  children,
  className,
  href,
  ...props
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement>) {
  const element = useMemo(
    () => (
      <button className={styles.button} {...props}>
        {children}
      </button>
    ),
    [children, props]
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {element}
    </a>
  ) : (
    element
  );
}
