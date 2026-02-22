import React from "react";
import { twMerge } from "tailwind-merge";
import { StarRating } from "./StarRating";

interface ReviewCardProps {
  initials: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  avatarColorClass?: string;
  className?: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  initials,
  name,
  date,
  rating,
  text,
  avatarColorClass = "bg-blue-100 text-blue-600",
  className,
}) => {
  return (
    <article
      aria-label={`Review by ${name}`}
      className={twMerge("flex gap-4", className)}
    >
      <div
        aria-hidden="true"
        className={twMerge(
          "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
          avatarColorClass,
        )}
      >
        <span className="text-sm font-semibold">{initials}</span>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-semibold text-gray-900">{name}</span>
          <time className="text-xs text-gray-400">{date}</time>
        </div>
        <StarRating rating={rating} size="sm" className="mb-2" />
        <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
      </div>
    </article>
  );
};
