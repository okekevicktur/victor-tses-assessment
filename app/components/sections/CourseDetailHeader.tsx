import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "../ui/Badge";
import type { Course } from "@/app/store/api/apiSlice";

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
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-1 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">{course.title}</h1>
          <Badge className="bg-blue-50 text-blue-600 border-blue-200">
            {course.category}
          </Badge>
        </div>
        <Link
          href={`/courses/${course.id}/learn`}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
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
