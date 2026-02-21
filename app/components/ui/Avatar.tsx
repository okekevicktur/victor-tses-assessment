import React from "react";
import { twMerge } from "tailwind-merge";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "User",
  size = "md",
  className,
}) => {
  return (
    <div
      className={twMerge(
        "rounded-full overflow-hidden bg-gray-200 shrink-0",
        sizes[size],
        className,
      )}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-500 font-semibold text-sm">
          {alt.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
};
