import React from "react";
import { twMerge } from "tailwind-merge";
import { LucideIcon, TrendingUp } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
  label: string;
  value: string | number;
  trend?: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  iconColor = "text-blue-600",
  iconBg = "bg-blue-50",
  label,
  value,
  trend,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "flex items-center gap-4 bg-[#F6F7F6] border-4 border-white rounded-lg px-5 py-4",
        className,
      )}
    > 
      <div className={twMerge("p-2.5 rounded-lg", iconBg)}>
        <Icon className={twMerge("w-5 h-5", iconColor)} />
      </div>
      <div className="flex-1">
        <p className="text-sm lg:text-base font-medium text-[#636363]">{label}</p>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-medium text-[#202020]">{value}</p>
          {trend && (
            <div className="flex items-center gap-1 text-xs text-[#00B000]">
              <TrendingUp className="w-3 h-3" />
              <span>{trend}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
