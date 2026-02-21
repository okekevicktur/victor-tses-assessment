"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  useGetCourseByIdQuery,
  useGetCourseLearnersQuery,
} from "@/app/store/api/apiSlice";
import { Users, UserCheck } from "lucide-react";
import { Sidebar } from "@/app/components/common/Sidebar";
import { TopBar } from "@/app/components/common/TopBar";
import { StatCard } from "@/app/components/ui/StatCard";
import { Pagination } from "@/app/components/ui/Pagination";
import { CourseDetailHeader } from "@/app/components/sections/CourseDetailHeader";
import { LearnerTable } from "@/app/components/sections/LearnerTable";

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id as string;

  const { data: course, isLoading: courseLoading } =
    useGetCourseByIdQuery(courseId);
  const { data: learners, isLoading: learnersLoading } =
    useGetCourseLearnersQuery(courseId);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  if (courseLoading) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 ml-[220px]">
          <TopBar />
          <main className="px-8 py-6">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-gray-200 rounded w-1/3" />
              <div className="h-[200px] bg-gray-200 rounded-xl" />
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 bg-gray-200 rounded-xl" />
                <div className="h-24 bg-gray-200 rounded-xl" />
              </div>
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
          {/* Header with back button, title, badge, CTA, and banner */}
          <CourseDetailHeader course={course} onBack={() => router.push("/")} />

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <StatCard
              icon={Users}
              iconColor="text-blue-600"
              iconBg="bg-blue-50"
              label="Total Applicants"
              value={1223}
            />
            <StatCard
              icon={UserCheck}
              iconColor="text-green-600"
              iconBg="bg-green-50"
              label="Active Learners"
              value={13}
            />
          </div>

          {/* Learner table */}
          <LearnerTable learners={learners || []} isLoading={learnersLoading} />

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={24}
            pageSize={pageSize}
            onPageChange={setCurrentPage}
            onPageSizeChange={setPageSize}
          />
        </main>
      </div>
    </div>
  );
}
