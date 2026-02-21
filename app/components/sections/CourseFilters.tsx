"use client";

import React from "react";
import { Calendar, ChevronDown } from "lucide-react";
import { SearchInput } from "../ui/SearchInput";

interface CourseFiltersProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

export const CourseFilters: React.FC<CourseFiltersProps> = ({
  searchValue,
  onSearchChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
      {/* Search */}
      <SearchInput
        placeholder="Search Course"
        value={searchValue}
        onChange={(e) => onSearchChange?.(e.target.value)}
        className="w-full sm:w-[400px]"
      />

      {/* Filters */}
      <div className="flex items-center gap-3">
        {/* Date filter */}
        <button className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <span>Date</span>
          <Calendar className="w-4 h-4" />
        </button>

        {/* Category filter */}
        <button className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <span>Category</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
