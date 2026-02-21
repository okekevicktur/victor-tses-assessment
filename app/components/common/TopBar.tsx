"use client";

import React from "react";
import { MessageSquare, Bell, ChevronDown } from "lucide-react";
import { SearchInput } from "../ui/SearchInput";
import { Avatar } from "../ui/Avatar";

interface TopBarProps {
  className?: string;
}

export const TopBar: React.FC<TopBarProps> = ({ className }) => {
  return (
    <header
      className={`flex items-center justify-between py-3.5 px-6 bg-white border-b border-gray-100 sticky top-0 z-20 ${className || ""}`}
    >
      {/* Search */}
      <SearchInput placeholder="Search soludesk" className="w-[373px]" />

      {/* Right section */}
      <div className="flex items-center gap-5">
        {/* Chat icon */}
        <button className="relative text-gray-500 hover:text-gray-700 transition-colors">
          <MessageSquare className="w-5 h-5" />
        </button>

        {/* Notification bell */}
        <button className="relative text-gray-500 hover:text-gray-700 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* User profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200 cursor-pointer">
          <Avatar
            src="https://picsum.photos/seed/avatar/100/100"
            alt="Madison Greg"
            size="md"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-900 leading-tight">
              Madison Greg
            </p>
            <p className="text-xs text-gray-500 leading-tight">
              Madison.reertr...
            </p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </header>
  );
};
