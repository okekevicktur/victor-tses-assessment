import React from "react";
import { twMerge } from "tailwind-merge";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  return (
    <span
      className={twMerge(
        "inline-block px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full border border-gray-200",
        className,
      )}
    >
      {children}
    </span>
  );
};
