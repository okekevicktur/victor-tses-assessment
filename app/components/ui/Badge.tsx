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
        "inline-block px-4 py-1 text-sm font-medium text-[#636363] bg-[#E8E8E8] rounded-full border border-gray-200",
        className,
      )}
    >
      {children}
    </span>
  );
};
