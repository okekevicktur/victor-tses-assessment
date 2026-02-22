"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Loader2, CheckCircle2 } from "lucide-react";
import type { LessonSection } from "@/app/types";

interface LessonSidebarProps {
  className?: string;
  sections: LessonSection[];
  completedCount: number;
  totalCount: number;
  activeLessonId?: string;
  onLessonClick?: (lessonId: string) => void;
}

export const LessonSidebar: React.FC<LessonSidebarProps> = ({
  className,
  sections,
  completedCount,
  totalCount,
  activeLessonId,
  onLessonClick,
}) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    sections[0]?.id || "",
  ]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId],
    );
  };

  return (
    <aside
      className={`w-[300px] shrink-0 bg-white border-[1.5px] border-[#D9D9D9] pb-[160px]  rounded-xl overflow-hidden ${className || ""}`}
    >
      {/* Header */}
      <div className="px-5 py-4 font-medium border-b-[1.5px] border-[#D9D9D9]">
        <p className="text-sm text-[#636363]">
          Lessons{" "}
          <span className="font-medium text-[#636363]">
            ({completedCount}/{totalCount})
          </span>
        </p>
      </div>

      {/* Sections */}
      <div className="max-h-[727px] overflow-y-auto">
        {sections.map((section) => {
          const isExpanded = expandedSections.includes(section.id);
          const allCompleted =
            section.lessons.length > 0 &&
            section.lessons.every((l) => l.completed);

          return (
            <div key={section.id} className="">
              {/* Section header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between border-b border-gray-50 px-5 py-3.5 hover:bg-gray-50 transition-colors"
              >
                <span className="text-base font-semibold text-[#202020]">
                  {section.title}
                </span>
                <div className="flex items-center gap-2">
                  {!isExpanded && allCompleted && (
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  )}
                  {isExpanded ? (
                    <ChevronUp className="w-6 h-6 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Lessons */}
              {isExpanded && (
                <ul className="py-2 flex flex-col gap-4">
                  {section.lessons.map((lesson) => {
                    const isActive = lesson.id === activeLessonId;
                    const isCompleted = lesson.completed;

                    return (
                      <li key={lesson.id} className="px-3 ">
                        <button
                          onClick={() => onLessonClick?.(lesson.id)}
                          className={`w-full cursor-pointer flex rounded-xl items-center justify-between px-3 py-2 text-left text-sm transition-colors ${
                            isActive
                              ? "text-[#0A60E1] font-medium bg-[#EAF3FF]/60"
                              : isCompleted
                                ? "text-[#0A60E1] font-medium bg-[#EAF3FF] hover:bg-[#EAF3FF]/50"
                                : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          <span className="">{lesson.title}</span>
                          {isCompleted ? (
                            <CheckCircle2 className="w-6 h-6 text-blue-500" />
                          ) : isActive ? (
                            <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
                          ) : null}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};
