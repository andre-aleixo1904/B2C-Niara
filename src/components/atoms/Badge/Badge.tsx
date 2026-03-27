import type { ReactNode } from "react";
import styles from "./Badge.module.css";

export interface BadgeProps {
  variant?: "default" | "success" | "error" | "info";
  children: ReactNode;
}

export function Badge({ variant = "default", children }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>{children}</span>
  );
}
