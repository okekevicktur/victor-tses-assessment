"use client";

import { useState } from "react";
import { useGetCoursesQuery } from "./store/api/apiSlice";
import { PageShell } from "./components/common/PageShell";
import { StatsSection } from "./components/sections/StatsSection";
import { CourseFilters } from "./components/sections/CourseFilters";
import { CourseGrid } from "./components/sections/CourseGrid";
import { Pagination } from "./components/ui/Pagination";
import { ListChecks, BookOpenText, GraduationCap } from "lucide-react";
import type { StatItem } from "./components/sections/StatsSection";

const HOME_STATS: StatItem[] = [
  {
    icon: BookOpenText,
    iconColor: "text-[#6F57DB]",
    iconBg: "bg-[linear-gradient(to_bottom,#F3F1FC,#FBEEFE,#ECE2FE,#DCD5FD)]",
    label: "Total courses",
    value: 123,
  },
  {
    icon: GraduationCap,
    iconColor: "text-[#2CCDF1]",
    iconBg: "bg-[linear-gradient(to_bottom,#CFF4FC,#CFF5FC,#BBF0FA,#D2F6FE)]",
    label: "Total Enrollments",
    value: 11,
  },
  {
    icon: ListChecks,
    iconColor: "text-[#EFAE76]",
    iconBg: "bg-[linear-gradient(to_bottom,#F3C9A5,#F8DFC9,#F9E1CD,#FBE4D0)]",
    label: "Avg Completion",
    value: "99%",
    trend: "12% up from last month",
  },
];

export default function Home() {
  const { data: courses, isLoading } = useGetCoursesQuery();
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Filter courses based on search
  const filteredCourses =
    courses?.filter((course) =>
      course.title.toLowerCase().includes(searchValue.toLowerCase()),
    ) || [];

  return (
    <PageShell>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-xl sm:text-2xl font-medium text-[#202020] mb-1">
          Course Management
        </h1>
        <p className="text-xs sm:text-sm text-[#636363]">
          Create, organize, and assign courses to teams and individuals
        </p>
      </div>

      {/* Stats */}
      <StatsSection stats={HOME_STATS} />

      <div className="bg-white rounded-xl p-5">
        {/* Filters */}
        <CourseFilters
          searchValue={searchValue}
          onSearchChange={setSearchValue}
        />

        {/* Course Grid */}
        <CourseGrid courses={filteredCourses} isLoading={isLoading} />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={24}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
          onPageSizeChange={setPageSize}
        />
      </div>
    </PageShell>
  );
}
