import React from "react";
import Link from "next/link";
import { Badge } from "../ui/Badge";
import type { Course } from "@/app/types";

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Link href={`/courses/${course.id}`} className="block">
      <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
        {/* Image */}
        <div className="relative h-[180px] overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-base font-semibold text-gray-900 mb-1.5 leading-snug">
            {course.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">
            {course.description}
          </p>
          <Badge>{course.category}</Badge>
        </div>
      </div>
    </Link>
  );
};
