import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "../ui/Badge";
import type { Course } from "@/app/types";

interface CourseDetailHeaderProps {
  course: Course;
  onBack: () => void;
  className?: string;
}

export const CourseDetailHeader: React.FC<CourseDetailHeaderProps> = ({
  course,
  onBack,
  className,
}) => {
  return (
    <div className={className}>
      {/* Title row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 sm:mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            aria-label="Back to courses"
            className="p-1 text-gray-600 cursor-pointer hover:text-gray-900 bg-[#F0F0F0] rounded-full h-[36px] w-[36px] sm:h-[44px] sm:w-[44px] flex items-center justify-center transition-colors shrink-0"
          >
            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
          </button>
          <h1 className="text-lg sm:text-2xl font-medium text-[#202020] truncate">
            {course.title}
          </h1>
          <Badge className="bg-[#E1F5FE] text-[#035177] font-medium h-[30px] sm:h-[36px] w-auto px-3 sm:w-[100px] flex items-center justify-center text-xs sm:text-sm shrink-0">
            {course.category}
          </Badge>
        </div>
        <Link
          href={`/courses/${course.id}/learn`}
          className="bg-[#0063EF] hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm lg:text-base font-medium transition-colors w-full sm:w-[228px] h-[44px] sm:h-[48px] flex items-center justify-center"
        >
          Start Learning
        </Link>
      </div>

      {/* Banner image */}
      <div className="rounded-xl overflow-hidden mb-6 sm:mb-8 h-[160px] sm:h-[220px] lg:h-[278px]">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
