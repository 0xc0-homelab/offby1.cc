import { createElement } from "react";
import { cx } from "@/lib/cx";
import { ICONS, type IconName } from "./icons";
import styles from "./Icon.module.css";

export type { IconName };

export interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  /** Accessible name; without it the icon is decorative. */
  label?: string;
  className?: string;
}

/** 24px Lucide line icon, stroke 1.5, inherits `color`. */
export function Icon({ name, size = 20, strokeWidth = 1.5, label, className }: IconProps) {
  const nodes = ICONS[name];
  const a11y = label ? { role: "img", "aria-label": label } : { "aria-hidden": true, focusable: false };
  return (
    <svg
      className={cx(styles.icon, className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...a11y}
    >
      {nodes.map(([tag, attrs], i) => createElement(tag, { key: i, ...attrs }))}
    </svg>
  );
}
