"use client";

import React from "react";
import {
  MessageSquare,
  Bell,
  ChevronDown,
  MessageSquareDot,
} from "lucide-react";
import { SearchInput } from "../ui/SearchInput";
import { Avatar } from "../ui/Avatar";

interface TopBarProps {
  className?: string;
}

export const TopBar: React.FC<TopBarProps> = ({ className }) => {
  return (
    <header
      className={`flex items-center justify-between py-3.5 px-4 sm:px-6 bg-white border-b border-gray-100 sticky top-0 z-20 ${className || ""}`}
    >
      {/* Spacer for mobile hamburger */}
      <div className="w-10 lg:hidden" />

      {/* Search — hidden on small screens, visible on sm+ */}
      <SearchInput
        placeholder="Search soludesk"
        className="hidden sm:flex w-[373px]"
      />

      {/* Right section */}
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Chat icon */}
        <button className="relative text-[#0A60E1] hover:text-gray-700 transition-colors">
          <MessageSquareDot className="w-5 h-5" />
        </button>

        {/* Notification bell */}
        <button className="relative text-[#636363] hover:text-gray-700 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-[15px] h-[15px] bg-red-500 text-white text-[10px] text-center font-bold rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* User profile */}
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">
          <Avatar
            src="https://picsum.photos/seed/avatar/100/100"
            alt="Madison Greg"
            size="md"
            className="border-[1.5px] border-[#6F57DB]"
          />
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-gray-900 leading-tight">
              Madison Greg
            </p>
            <p className="text-xs text-gray-500 leading-tight">
              Madison.reertr...
            </p>
          </div>
          <ChevronDown className="w-6 h-6 text-gray-400 hidden sm:block" />
        </div>
      </div>
    </header>
  );
};
