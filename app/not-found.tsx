"use client";

import Link from "next/link";
import { Sidebar } from "@/app/components/common/Sidebar";
import { TopBar } from "@/app/components/common/TopBar";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        <TopBar />
        <main className="px-8 py-6 flex items-center justify-center min-h-[calc(100vh-80px)]">
          <div className="text-center">
            <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <FileQuestion className="w-10 h-10 text-red-400" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-2">404</h1>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Page Not Found
            </h2>
            <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Back to Courses
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
