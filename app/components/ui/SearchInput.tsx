import React from "react";
import { Search } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search",
  value,
  onChange,
  className,
}) => {
  return (
    <div className={twMerge("relative", className)}>
      <input
        type="text"
        placeholder={placeholder}
        aria-label={placeholder}
        value={value}
        onChange={onChange}
        maxLength={50}
        className="w-full pl-5 pr-12 py-2.5 text-sm lg:text-base text-gray-700 bg-white border border-gray-200 rounded-4xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-[#636363]"
      />
      <Search
        className="absolute right-8 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
        aria-hidden="true"
      />
    </div>
  );
};
