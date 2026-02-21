"use client";

import { useState, useMemo, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Play } from "lucide-react";
import {
  useGetCourseByIdQuery,
  useGetCourseLessonsQuery,
  type LessonSection,
} from "@/app/store/api/apiSlice";
import { Sidebar } from "@/app/components/common/Sidebar";
import { TopBar } from "@/app/components/common/TopBar";
import { LessonSidebar } from "@/app/components/sections/LessonSidebar";
import { LessonContent } from "@/app/components/sections/LessonContent";
import { QuizContent } from "@/app/components/sections/QuizContent";

export default function CourseLearnPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id as string;

  const { data: course, isLoading: courseLoading } =
    useGetCourseByIdQuery(courseId);
  const { data: sections, isLoading: lessonsLoading } =
    useGetCourseLessonsQuery(courseId);

  const [activeLessonId, setActiveLessonId] = useState("l1");
  const [completedLessonIds, setCompletedLessonIds] = useState<Set<string>>(
    new Set(),
  );

  // Mark the active lesson as complete
  const handleMarkComplete = useCallback(() => {
    setCompletedLessonIds((prev) => {
      const next = new Set(prev);
      next.add(activeLessonId);
      return next;
    });
  }, [activeLessonId]);

  // Merge local completion state into sections for the sidebar
  const mergedSections: LessonSection[] = useMemo(() => {
    if (!sections) return [];
    return sections.map((section) => ({
      ...section,
      lessons: section.lessons.map((lesson) => ({
        ...lesson,
        completed: lesson.completed || completedLessonIds.has(lesson.id),
      })),
    }));
  }, [sections, completedLessonIds]);

  // Count totals from merged state
  const totalLessons = mergedSections.reduce(
    (sum, s) => sum + s.lessons.length,
    0,
  );
  const completedLessons = mergedSections.reduce(
    (sum, s) => sum + s.lessons.filter((l) => l.completed).length,
    0,
  );

  // Determine if the active lesson is a quiz
  const isQuizActive = useMemo(() => {
    if (!sections) return false;
    for (const section of sections) {
      const lesson = section.lessons.find((l) => l.id === activeLessonId);
      if (lesson) return lesson.type === "quiz";
    }
    return false;
  }, [sections, activeLessonId]);

  // Check if active lesson is already completed
  const isActiveLessonCompleted = completedLessonIds.has(activeLessonId);

  if (courseLoading || lessonsLoading) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 ml-[220px]">
          <TopBar />
          <main className="px-8 py-6">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-gray-200 rounded w-1/3" />
              <div className="h-[300px] bg-gray-200 rounded-xl" />
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 ml-[220px]">
          <TopBar />
          <main className="px-8 py-6">
            <p className="text-gray-500">Course not found.</p>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-[220px]">
        <TopBar />
        <main className="px-8 py-6">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => router.push(`/courses/${courseId}`)}
              className="p-1 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold text-gray-900">{course.title}</h1>
          </div>

          {/* Video banner — shows for regular lessons, hides for quiz */}
          {!isQuizActive && (
            <div className="relative rounded-xl overflow-hidden mb-6 h-[450px] bg-gray-800">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105">
                  <Play className="w-6 h-6 text-gray-800 ml-1" />
                </button>
              </div>
            </div>
          )}

          {/* Content area */}
          <div className="flex gap-6">
            {/* Left: lesson or quiz content */}
            {isQuizActive ? (
              <QuizContent className="flex-1 min-w-0" />
            ) : (
              <LessonContent
                className="flex-1 min-w-0"
                onMarkComplete={handleMarkComplete}
                isCompleted={isActiveLessonCompleted}
              />
            )}

            {/* Right: lesson sidebar */}
            <LessonSidebar
              sections={mergedSections}
              completedCount={completedLessons}
              totalCount={totalLessons}
              activeLessonId={activeLessonId}
              onLessonClick={setActiveLessonId}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
