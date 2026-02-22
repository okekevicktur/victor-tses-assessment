import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Badge } from "../ui/Badge";
import type { Course } from "@/app/types";
import Image from "next/image";

interface CourseCardProps {
  course: Course;
  className?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  className,
}) => {
  return (
    <Link
      href={`/courses/${course.id}`}
      className={twMerge("block", className)}
    >
      <div className="bg-[#F8F8F8] rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
        {/* Image */}
        <div className="relative h-[128px] overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            priority
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
