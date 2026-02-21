"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Loader2, CheckCircle2 } from "lucide-react";
import type { LessonSection } from "@/app/store/api/apiSlice";

interface LessonSidebarProps {
  sections: LessonSection[];
  completedCount: number;
  totalCount: number;
  activeLessonId?: string;
  onLessonClick?: (lessonId: string) => void;
}

export const LessonSidebar: React.FC<LessonSidebarProps> = ({
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
    <aside className="w-[300px] shrink-0 bg-white border-l border-gray-100 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-100">
        <p className="text-sm text-gray-500">
          Lessons{" "}
          <span className="font-semibold text-gray-900">
            {completedCount}/{totalCount}
          </span>
        </p>
      </div>

      {/* Sections */}
      <div className="max-h-[600px] overflow-y-auto">
        {sections.map((section) => {
          const isExpanded = expandedSections.includes(section.id);
          const allCompleted =
            section.lessons.length > 0 &&
            section.lessons.every((l) => l.completed);

          return (
            <div key={section.id} className="border-b border-gray-50">
              {/* Section header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-semibold text-gray-900">
                  {section.title}
                </span>
                <div className="flex items-center gap-2">
                  {!isExpanded && allCompleted && (
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  )}
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Lessons */}
              {isExpanded && (
                <ul className="pb-2">
                  {section.lessons.map((lesson) => {
                    const isActive = lesson.id === activeLessonId;
                    const isCompleted = lesson.completed;

                    return (
                      <li key={lesson.id}>
                        <button
                          onClick={() => onLessonClick?.(lesson.id)}
                          className={`w-full flex items-center justify-between px-5 py-2 text-left text-sm transition-colors ${
                            isActive
                              ? "text-blue-600 font-medium bg-blue-50/50"
                              : isCompleted
                                ? "text-blue-600"
                                : "text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          <span className="pl-3">{lesson.title}</span>
                          {isCompleted ? (
                            <CheckCircle2 className="w-4 h-4 text-blue-500" />
                          ) : isActive ? (
                            <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />
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
