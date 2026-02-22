import React from "react";
import { twMerge } from "tailwind-merge";
import { CourseCard } from "./CourseCard";
import type { Course } from "@/app/types";

interface CourseGridProps {
  courses: Course[];
  isLoading?: boolean;
  className?: string;
}

export const CourseGrid: React.FC<CourseGridProps> = ({
  courses,
  isLoading,
  className,
}) => {
  if (isLoading) {
    return (
      <div
        className={twMerge(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
          className,
        )}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-100 overflow-hidden animate-pulse"
          >
            <div className="h-[180px] bg-gray-200" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-3 bg-gray-200 rounded w-full" />
              <div className="h-3 bg-gray-200 rounded w-2/3" />
              <div className="h-6 bg-gray-200 rounded-full w-20" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={twMerge(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        className,
      )}
    >
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};
