"use client";

import Link from "next/link";
import { PageShell } from "@/app/components/common/PageShell";
import { EmptyState } from "@/app/components/ui/EmptyState";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <PageShell className="bg-gray-50">
      <EmptyState
        icon={FileQuestion}
        iconColorClass="text-red-400"
        iconBgClass="bg-red-50"
        title="404"
        description="The page you're looking for doesn't exist or has been moved."
        action={
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
          >
            Back to Courses
          </Link>
        }
      />
    </PageShell>
  );
}
