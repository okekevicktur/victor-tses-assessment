"use client";

import React, { useState, useEffect } from "react";
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
  Menu,
  X,
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
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close sidebar on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/courses") {
      return pathname === "/" || pathname.startsWith("/courses");
    }
    return pathname.startsWith(href);
  };

  const sidebarContent = (
    <>
      {/* Logo */}
      <div className="px-5 flex items-center border-b border-b-[#F0F0F0] h-[73px] gap-2">
        <div className="w-[136px] h-[36px] relative">
          <Image src="/images/logo.png" alt="Logo" fill priority />
        </div>
        {/* Close button — only on mobile */}
        <button
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
          className="ml-auto lg:hidden p-1 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {/* Navigation */}
      <nav
        aria-label="Main navigation"
        className="flex-1 px-3 pt-6 border-r border-[#F0F0F0]"
      >
        <ul className="space-y-5">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={twMerge(
                    "flex items-center gap-3 px-3 py-1.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-[#EAF3FF] text-[#0A60E1] border-l-3 font-semibold border-[#0A60E1]"
                      : "text-[#636363] hover:bg-gray-50 hover:text-gray-900",
                  )}
                >
                  <item.icon className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );

  return (
    <>
      {/* Mobile hamburger button — shown in the top-left on small screens */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5 text-gray-700" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar — slides in from left */}
      <aside
        className={twMerge(
          "lg:hidden fixed left-0 top-0 z-50 w-[260px] h-full bg-white flex flex-col pb-6 transition-transform duration-300 ease-in-out",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {sidebarContent}
      </aside>

      {/* Desktop sidebar — sticky, always visible */}
      <aside
        className={twMerge(
          "hidden lg:flex w-[220px] min-h-screen bg-white flex-col pb-6 sticky left-0 top-0 z-30 h-screen",
          className,
        )}
      >
        {sidebarContent}
      </aside>
    </>
  );
};
