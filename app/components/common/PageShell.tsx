import React from "react";
import { twMerge } from "tailwind-merge";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
  mainClassName?: string;
}

export const PageShell: React.FC<PageShellProps> = ({
  children,
  className,
  mainClassName,
}) => {
  return (
    <div
      className={twMerge(
        "flex h-screen w-full overflow-hidden bg-[#F6F7F6]",
        className,
      )}
    >
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col h-full">
        <TopBar />
        <main
          className={twMerge(
            "flex-1 overflow-y-auto px-4 sm:px-8 py-4 sm:py-6",
            mainClassName,
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
};
