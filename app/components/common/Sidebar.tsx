"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import {
  LayoutDashboard,
  Warehouse,
  BookOpenText,
  Presentation,
  BookText,
  Award,
  Settings,
} from "lucide-react";
import Image from "next/image";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: Warehouse, label: "Dashboard", href: "/dashboard" },
  { icon: BookOpenText, label: "Courses/Materials", href: "/courses" },
  { icon: Presentation, label: "Classes", href: "/classes" },
  { icon: BookText, label: "Assessments", href: "/assessments" },
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
        "w-[220px] min-h-screen bg-white flex flex-col pb-6 fixed left-0 top-0 z-30",
        className,
      )}
    >
      {/* Logo */}
      <div className="px-5 flex items-center border-b border-b-[#F0F0F0] h-[73px]  gap-2">
        <div className="w-[136px] h-[36px] relative">
          <Image src="/images/logo.png" alt="Logo" fill priority />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 pt-6  border-r border-[#F0F0F0]">
        <ul className="space-y-5">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={twMerge(
                    "flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-[#EAF3FF] text-[#0A60E1] border-l-3 font-semibold border-[#0A60E1]"
                      : "text-[#636363] hover:bg-gray-50 hover:text-gray-900",
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
