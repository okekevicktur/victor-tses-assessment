"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  useGetCourseByIdQuery,
  useGetCourseLearnersQuery,
} from "@/app/store/api/apiSlice";
import { Users, GraduationCap } from "lucide-react";
import { PageShell } from "@/app/components/common/PageShell";
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
      <PageShell>
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-200 rounded w-1/3" />
          <div className="h-[200px] bg-gray-200 rounded-xl" />
          <div className="grid grid-cols-2 gap-4">
            <div className="h-24 bg-gray-200 rounded-xl" />
            <div className="h-24 bg-gray-200 rounded-xl" />
          </div>
        </div>
      </PageShell>
    );
  }

  if (!course) {
    return (
      <PageShell>
        <p className="text-gray-500">Course not found.</p>
      </PageShell>
    );
  }

  return (
    <PageShell>
      {/* Header with back button, title, badge, CTA, and banner */}
      <CourseDetailHeader course={course} onBack={() => router.push("/")} />

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        <StatCard
          icon={Users}
          iconColor="text-[#5F9009]"
          iconBg="bg-[linear-gradient(to_bottom,#BEFDD9,#D4FEB4,#CBFAC2)]"
          label="Total Applicants"
          value={1223}
        />
        <StatCard
          icon={GraduationCap}
          iconColor="text-[#2CCDF1]"
          iconBg="bg-[linear-gradient(to_bottom,#CFF4FC,#CFF5FC,#BBF0FA,#D2F6FE)]"
          label="Active Learners"
          value={13}
        />
      </div>

      <div className="bg-[#FDFDFD] rounded-xl ">
        {/* Learner table */}
        <LearnerTable learners={learners || []} isLoading={learnersLoading} />
        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={24}
          pageSize={pageSize}
          onPageChange={setCurrentPage}
          onPageSizeChange={setPageSize}
        />{" "}
      </div>
    </PageShell>
  );
}
