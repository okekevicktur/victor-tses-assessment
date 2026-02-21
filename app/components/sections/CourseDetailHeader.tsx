import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "../ui/Badge";
import type { Course } from "@/app/types";

interface CourseDetailHeaderProps {
  course: Course;
  onBack: () => void;
}

export const CourseDetailHeader: React.FC<CourseDetailHeaderProps> = ({
  course,
  onBack,
}) => {
  return (
    <div>
      {/* Title row */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center  gap-3">
          <button
            onClick={onBack}
            className="p-1 text-gray-600 cursor-pointer hover:text-gray-900 bg-[#F0F0F0] rounded-full h-[44px] w-[44px] flex items-center justify-center transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-medium text-[#202020]">{course.title}</h1>
          <Badge className="bg-[#E1F5FE] text-[#035177] font-medium h-[36px] w-[100px] flex items-center justify-center">
            {course.category}
          </Badge>
        </div>
        <Link
          href={`/courses/${course.id}/learn`}
          className="bg-[#0063EF] hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm lg:text-base font-medium transition-colors w-[228px] h-[48px] flex items-center justify-center"
        >
          Start Learning
        </Link>
      </div>

      {/* Banner image */}
      <div className="rounded-xl overflow-hidden mb-8 h-[278px]">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
