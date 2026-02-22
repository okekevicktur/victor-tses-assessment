"use client";

import { useState } from "react";
import { useGetCoursesQuery } from "./store/api/apiSlice";
import { Sidebar } from "./components/common/Sidebar";
import { TopBar } from "./components/common/TopBar";
import { StatsSection } from "./components/sections/StatsSection";
import { CourseFilters } from "./components/sections/CourseFilters";
import { CourseGrid } from "./components/sections/CourseGrid";
import { Pagination } from "./components/ui/Pagination";

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
    <div className="flex min-h-screen w-full overflow-hidden bg-[#F6F7F6]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 min-w-0">
        {/* Top Bar */}
        <TopBar />

        {/* Page Content */}
        <main className="px-4 sm:px-8 py-4 sm:py-6">
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
          <StatsSection />

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
        </main>
      </div>
    </div>
  );
}
