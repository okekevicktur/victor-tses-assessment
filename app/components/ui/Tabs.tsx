"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

interface Tab {
  label: string;
  value: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (value: string) => void;
  className?: string;
  ariaLabel?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className,
  ariaLabel = "Content tabs",
}) => {
  const tablistId = React.useId();

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={twMerge("flex gap-6 border-b border-gray-200 mb-6", className)}
    >
      {tabs.map((tab) => {
        const isSelected = activeTab === tab.value;
        return (
          <button
            key={tab.value}
            role="tab"
            id={`${tablistId}-tab-${tab.value}`}
            aria-selected={isSelected}
            aria-controls={`${tablistId}-panel-${tab.value}`}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => onTabChange(tab.value)}
            className={`pb-3 cursor-pointer px-5 text-sm font-medium transition-colors relative ${
              isSelected
                ? "text-blue-600 font-semibold text-base"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
            {isSelected && (
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                aria-hidden="true"
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
