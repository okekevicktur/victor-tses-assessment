import React from "react";
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card = ({ children, className, padding = "md" }: CardProps) => {
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={twMerge(
        "bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300",
        paddings[padding],
        className,
      )}
    >
      {children}
    </div>
  );
};
