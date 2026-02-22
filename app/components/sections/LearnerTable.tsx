import React from "react";
import { MessageCircle, MessageSquareText } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { Avatar } from "../ui/Avatar";
import type { Learner } from "@/app/types";

interface LearnerTableProps {
  learners: Learner[];
  isLoading?: boolean;
  className?: string;
}

export const LearnerTable: React.FC<LearnerTableProps> = ({
  learners,
  isLoading,
  className,
}) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 animate-pulse">
            <div className="w-10 h-10 rounded-full bg-gray-200" />
            <div className="flex-1 h-4 bg-gray-200 rounded" />
            <div className="w-24 h-4 bg-gray-200 rounded" />
            <div className="w-40 h-4 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={twMerge(
        "bg-[#FDFDFD] rounded-xl border border-gray-100 overflow-hidden",
        className,
      )}
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left text-sm font-semibold text-gray-700 px-6 py-4">
                Name
              </th>
              <th className="text-left text-sm font-semibold text-gray-700 px-6 py-4">
                City
              </th>
              <th className="text-left text-sm font-semibold text-gray-700 px-6 py-4">
                Email Address
              </th>
              <th className="text-right text-sm font-semibold text-gray-700 px-6 py-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {learners.map((learner) => (
              <tr
                key={learner.id}
                className="border-b last:border-b-0 border-gray-50 hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-3.5">
                  <div className="flex items-center gap-3">
                    <Avatar src={learner.avatar} alt={learner.name} size="sm" />
                    <span className="text-sm text-gray-900 font-medium">
                      {learner.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-3.5">
                  <span className="text-sm text-gray-600">{learner.city}</span>
                </td>
                <td className="px-6 py-3.5">
                  <span className="text-sm text-gray-600">{learner.email}</span>
                </td>
                <td className="pr-13 py-3.5 text-right">
                  <button className="text-gray-400 hover:text-blue-600 transition-colors">
                    <MessageSquareText className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
