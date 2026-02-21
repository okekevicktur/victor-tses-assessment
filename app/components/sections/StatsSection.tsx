import React from "react";
import { BookOpen, Users, BarChart3 } from "lucide-react";
import { StatCard } from "../ui/StatCard";

export const StatsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <StatCard
        icon={BookOpen}
        iconColor="text-blue-600"
        iconBg="bg-blue-50"
        label="Total courses"
        value={123}
      />
      <StatCard
        icon={Users}
        iconColor="text-orange-500"
        iconBg="bg-orange-50"
        label="Total Enrollments"
        value={11}
      />
      <StatCard
        icon={BarChart3}
        iconColor="text-purple-600"
        iconBg="bg-purple-50"
        label="Avg Completion"
        value="99%"
        trend="12% up from last month"
      />
    </div>
  );
};
