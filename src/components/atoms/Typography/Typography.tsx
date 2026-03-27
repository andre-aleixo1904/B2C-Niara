import { type HTMLAttributes, type ElementType, type ReactNode } from "react";
import styles from "./Typography.module.css";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "bodySmall" | "caption";
  children: ReactNode;
}

const defaultTags: Record<string, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  body: "p",
  bodySmall: "p",
  caption: "span",
};

export function Typography({
  as,
  variant = "body",
  children,
  className,
  ...props
}: TypographyProps) {
  const Component = as ?? defaultTags[variant] ?? "p";

  return (
    <Component
      className={`${styles[variant]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </Component>
  );
}
