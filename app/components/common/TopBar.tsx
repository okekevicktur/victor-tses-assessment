"use client";

import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/app/store/store";
import { clearUser, setUser } from "@/app/store/features/user/userSlice";
import {
  Bell,
  ChevronDown,
  MessageSquareDot,
  LogOut,
  LogIn,
  User,
} from "lucide-react";
import { SearchInput } from "../ui/SearchInput";
import { Avatar } from "../ui/Avatar";

interface TopBarProps {
  className?: string;
}

export const TopBar: React.FC<TopBarProps> = ({ className }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(clearUser());
    setMenuOpen(false);
  };

  const handleLogin = () => {
    dispatch(
      setUser({
        id: "1",
        name: "Victor Okeke",
        email: "victor.okeke@gmail.com",
      }),
    );
    setMenuOpen(false);
  };

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
        <button
          aria-label="Messages"
          className="relative text-[#0A60E1] hover:text-gray-700 transition-colors"
        >
          <MessageSquareDot className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Notification bell */}
        <button
          aria-label="Notifications, 4 unread"
          className="relative text-[#636363] hover:text-gray-700 transition-colors"
        >
          <Bell className="w-5 h-5" aria-hidden="true" />
          <span
            aria-hidden="true"
            className="absolute -top-1 -right-1 w-[15px] h-[15px] bg-red-500 text-white text-[10px] text-center font-bold rounded-full flex items-center justify-center"
          >
            4
          </span>
        </button>

        {/* User profile with dropdown */}
        <div ref={menuRef} className="relative">
          <button
            aria-label="User menu"
            aria-haspopup="true"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer bg-transparent border-none p-0"
          >
            {user.isAuthenticated ? (
              <Avatar
                src="https://picsum.photos/seed/avatar/100/100"
                alt={user.name}
                size="md"
                className="border-[1.5px] border-[#6F57DB]"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="w-5 h-5 text-gray-500" aria-hidden="true" />
              </div>
            )}
            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold text-gray-900 leading-tight">
                {user.isAuthenticated ? user.name : "Guest"}
              </p>
              <p className="text-xs text-gray-500 leading-tight">
                {user.isAuthenticated ? user.email : "Not signed in"}
              </p>
            </div>
            <ChevronDown
              className="w-6 h-6 text-gray-400 hidden sm:block"
              aria-hidden="true"
            />
          </button>

          {/* Dropdown menu */}
          {menuOpen && (
            <div
              role="menu"
              className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
            >
              {user.isAuthenticated ? (
                <>
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-900">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {user.email}
                    </p>
                  </div>
                  <button
                    role="menuitem"
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" aria-hidden="true" />
                    Log out
                  </button>
                </>
              ) : (
                <button
                  role="menuitem"
                  onClick={handleLogin}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  <LogIn className="w-4 h-4" aria-hidden="true" />
                  Log in
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
