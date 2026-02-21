"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { ChevronDown } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) => {
  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      for (let i = 1; i <= Math.min(maxVisible, totalPages); i++) {
        pages.push(i);
      }
      if (totalPages > maxVisible + 1) pages.push("...");
      if (totalPages > maxVisible) pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-between mt-8">
      {/* Page size selector */}
      <div className="relative">
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange?.(Number(e.target.value))}
          className="appearance-none pl-4 pr-8 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
          <option value={10}>Show 10/page</option>
          <option value={20}>Show 20/page</option>
          <option value={50}>Show 50/page</option>
        </select>
        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>

      {/* Page numbers */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded-lg disabled:text-gray-300 disabled:hover:bg-transparent transition-colors"
        >
          Prev
        </button>

        {getVisiblePages().map((page, idx) =>
          page === "..." ? (
            <span
              key={`ellipsis-${idx}`}
              className="px-2 text-sm text-gray-400"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page as number)}
              className={twMerge(
                "w-8 h-8 text-sm rounded-full transition-colors",
                currentPage === page
                  ? "bg-blue-600 text-white font-semibold"
                  : "text-blue-600 hover:bg-blue-50",
              )}
            >
              {String(page).padStart(2, "0")}
            </button>
          ),
        )}

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 rounded-lg disabled:text-gray-300 disabled:hover:bg-transparent transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};
