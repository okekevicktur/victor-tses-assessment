import React from "react";
import { twMerge } from "tailwind-merge";
import { StatCard } from "../ui/StatCard";
import type { LucideIcon } from "lucide-react";

export interface StatItem {
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
  label: string;
  value: string | number;
  trend?: string;
}

interface StatsSectionProps {
  stats: StatItem[];
  className?: string;
}

export const StatsSection: React.FC<StatsSectionProps> = ({
  stats,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8",
        className,
      )}
    >
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          icon={stat.icon}
          iconColor={stat.iconColor}
          iconBg={stat.iconBg}
          label={stat.label}
          value={stat.value}
          trend={stat.trend}
        />
      ))}
    </div>
  );
};
