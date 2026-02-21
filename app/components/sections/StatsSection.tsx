import React from "react";
import { ListChecks, BookOpenText, GraduationCap } from "lucide-react";
import { StatCard } from "../ui/StatCard";

export const StatsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <StatCard
        icon={BookOpenText}
        iconColor="text-[#6F57DB]"
        iconBg="bg-[linear-gradient(to_bottom,#F3F1FC,#FBEEFE,#ECE2FE,#DCD5FD)]"
        label="Total courses"
        value={123}
      />
      <StatCard
        icon={GraduationCap}
         iconColor="text-[#2CCDF1]"
        iconBg="bg-[linear-gradient(to_bottom,#CFF4FC,#CFF5FC,#BBF0FA,#D2F6FE)]"
        label="Total Enrollments"
        value={11}
      />
      <StatCard
        icon={ListChecks}
        iconColor="text-[#EFAE76]"
        iconBg="bg-[linear-gradient(to_bottom,#F3C9A5,#F8DFC9,#F9E1CD,#FBE4D0)]"
        label="Avg Completion"
        value="99%"
        trend="12% up from last month"
      />
 
    </div>
  );
};
