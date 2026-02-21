"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  ClipboardCheck,
  Award,
  Settings,
} from "lucide-react";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: BookOpen, label: "Courses/Materials", href: "/courses" },
  { icon: Users, label: "Classes", href: "/classes" },
  { icon: ClipboardCheck, label: "Assessments", href: "/assessments" },
  { icon: Award, label: "My Certification", href: "/certification" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/courses") {
      return pathname === "/" || pathname.startsWith("/courses");
    }
    return pathname.startsWith(href);
  };

  return (
    <aside
      className={twMerge(
        "w-[220px] min-h-screen bg-white border-r border-gray-100 flex flex-col py-6 fixed left-0 top-0 z-30",
        className,
      )}
    >
      {/* Logo */}
      <div className="px-5 mb-8 flex items-center gap-2">
        <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-red-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">S</span>
        </div>
        <span className="text-lg font-bold text-gray-900">
          Solu<span className="text-blue-600">desks</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={twMerge(
                    "flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-blue-50 text-blue-600 border-l-3 border-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  )}
                >
                  <item.icon className="w-5 h-5 shrink-0" />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
