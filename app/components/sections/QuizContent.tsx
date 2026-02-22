"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";
import { AwardIcon } from "lucide-react";

interface QuizContentProps {
  className?: string;
}

interface QuizAnswer {
  [questionId: number]: string;
}

export const QuizContent: React.FC<QuizContentProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<"content" | "reviews">("content");
  const [answers, setAnswers] = useState<QuizAnswer>({});

  const handleSelect = (questionId: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const handleTextChange = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const questions = [
    {
      id: 1,
      type: "multiple" as const,
      text: "What is the purpose of React Hooks?",
      points: 4,
      options: [
        "A. To use state and other React features in functional components",
        "B. To create class components",
        "C. To style React components",
        "D. To handle routing in React applications",
      ],
    },
    {
      id: 2,
      type: "multiple" as const,
      text: "Which hook is used for side effects in React?",
      points: 4,
      options: [
        "A. To use state and other React features in functional components",
        "B. To create class components",
        "C. To style React components",
        "D. To handle routing in React applications",
      ],
    },
    {
      id: 3,
      type: "short" as const,
      text: "Explain the Virtual DOM and its benefits",
      points: 10,
    },
    {
      id: 4,
      type: "multiple" as const,
      text: "What is the purpose of React Hooks?",
      points: 4,
      options: [
        "A. To use state and other React features in functional components",
        "B. To create class components",
        "C. To style React components",
        "D. To handle routing in React applications",
      ],
    },
    {
      id: 5,
      type: "multiple" as const,
      text: "Which hook is used for side effects in React?",
      points: 4,
      options: [
        "A. To use state and other React features in functional components",
        "B. To create class components",
        "C. To style React components",
        "D. To handle routing in React applications",
      ],
    },
    {
      id: 6,
      type: "short" as const,
      text: "Explain the Virtual DOM and its benefits",
      points: 10,
    },
  ];

  return (
    <div className={className}>
      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab("content")}
          className={`pb-3 text-sm font-medium transition-colors relative ${
            activeTab === "content"
              ? "text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Course Content
          {activeTab === "content" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-3 text-sm font-medium transition-colors relative ${
            activeTab === "reviews"
              ? "text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Review/Feedbacks
          {activeTab === "reviews" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
          )}
        </button>
      </div>

      {/* Quiz content */}
      {activeTab === "content" ? (
        <div className="bg-white rounded-xl  prose prose-sm max-w-none border-[1.5px] border-[#D9D9D9]  ">
          <div className="bg-white  rounded-tl-xl rounded-tr-xl ">
            <h3 className="text-lg font-bold text-[#202020]  border-b-[1.5px] border-[#D9D9D9] pb-4 p-6">
              Quiz
            </h3>
          </div>

          <div className="space-y-8 p-6">
            {questions.map((q) => (
              <div
                key={q.id}
                className="flex gap-4 p-4 rounded-[14px] border-[1.5px] border-[#D9D9D9]"
              >
                {/* Number circle */}
                <div className="w-8 h-8 rounded-[10px] bg-[#0A60E1] text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                  {q.id}
                </div>

                <div className="flex-1">
                  {/* Question text */}
                  <h4 className="text-sm font-semibold  text-gray-900 mb-3">
                    {q.text}
                  </h4>
                  <p className="text-xs flex items-center gap-2 text-[#636363]  mb-4">
                    <span className="border border-black/10 px-2 py-1 rounded-lg text-[#202020]">
                      {q.type === "multiple"
                        ? "Multiple Choice"
                        : "Short answer"}
                    </span>{" "}
                    <span className="flex items-center gap-1">
                      <AwardIcon className="w-4 h-4" />
                      {q.points} points
                    </span>
                  </p>

                  {q.type === "multiple" && q.options ? (
                    <div className="space-y-2.5">
                      {q.options.map((option, idx) => (
                        <label
                          key={idx}
                          className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors ${
                            answers[q.id] === option
                              ? "border-blue-300 bg-blue-50"
                              : "border-gray-200 hover:bg-gray-50"
                          }`}
                        >
                          <input
                            type="radio"
                            name={`question-${q.id}`}
                            value={option}
                            checked={answers[q.id] === option}
                            onChange={() => handleSelect(q.id, option)}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-600">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  ) : (
                    <textarea
                      placeholder="Enter answer here"
                      value={answers[q.id] || ""}
                      onChange={(e) => handleTextChange(q.id, e.target.value)}
                      className="w-full p-4 text-sm text-gray-700 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
                      rows={3}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Submit button */}
          <div className="flex justify-end mr-6 my-10">
            <Button className="border-blue-600 border-[1.5px] hover:bg-blue-700 w-[228px] h-[48px] cursor-pointer hover:text-white text-blue-600 px-10 py-3 rounded-lg text-base font-semibold">
              Submit
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <p className="text-sm text-gray-500 text-center py-8">
            No reviews for the quiz assessment yet.
          </p>
        </div>
      )}
    </div>
  );
};
