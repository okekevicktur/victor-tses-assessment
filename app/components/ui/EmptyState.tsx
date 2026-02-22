import React from "react";
import { twMerge } from "tailwind-merge";
import type { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  iconColorClass?: string;
  iconBgClass?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon,
  iconColorClass = "text-blue-500",
  iconBgClass = "bg-blue-50",
  title,
  description,
  action,
  className,
}) => {
  return (
    <div
      role="status"
      className={twMerge(
        "flex items-center justify-center min-h-[calc(100vh-80px)]",
        className,
      )}
    >
      <div className="text-center">
        <div
          aria-hidden="true"
          className={twMerge(
            "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4",
            iconBgClass,
          )}
        >
          <Icon className={twMerge("w-8 h-8", iconColorClass)} />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
        {description && (
          <p className="text-gray-500 text-sm max-w-sm mx-auto">
            {description}
          </p>
        )}
        {action && <div className="mt-6">{action}</div>}
      </div>
    </div>
  );
};
