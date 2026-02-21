"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";

interface LessonContentProps {
  className?: string;
}

export const LessonContent: React.FC<LessonContentProps> = ({ className }) => {
  const [activeTab, setActiveTab] = useState<"content" | "reviews">("content");

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

      {/* Content */}
      {activeTab === "content" ? (
        <div className="prose prose-sm max-w-none">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Lesson 1 - Welcome Message
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Welcome to &apos;Communicate with Confidence&apos;! In an era
              where the pace of work is ever-increasing and the demands on our
              time are relentless, the ability to communicate effectively has
              never been more crucial. This comprehensive course is meticulously
              crafted to equip you with the essential skills that will not only
              enhance your communication abilities but also empower you to
              thrive in any professional environment you find yourself in.
            </p>

            <h4 className="text-base font-bold text-gray-900 mb-2">
              Why Communication Matters
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Effective communication is the cornerstone of success in the
              workplace. It is the bridge that connects individuals, teams, and
              organizations, facilitating collaboration and understanding. In
              today&apos;s diverse and dynamic work settings, the ability to
              convey your thoughts clearly and listen actively is paramount.
              This course aims to illuminate the significance of communication
              and provide you with the tools necessary to master it.
            </p>

            <h4 className="text-base font-bold text-gray-900 mb-2">
              What You&apos;ll Learn
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Throughout this course, you will delve into various aspects of
              communication, each designed to build upon the last, creating a
              robust foundation for your skills:
            </p>

            <div className="space-y-3 mb-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>1. Clear Articulation:</strong> You will learn
                techniques to express your ideas with clarity and precision,
                ensuring that your message is understood as intended. This
                includes understanding your audience and tailoring your message
                accordingly.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>2. Active Listening:</strong> Developing the ability to
                listen actively is crucial. You will practice techniques that
                enhance your listening skills, enabling you to fully engage with
                others and respond thoughtfully.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>3. Confident Conversations:</strong> Navigating
                challenging discussions can be daunting. This course will
                provide you with strategies to approach these conversations with
                poise and assurance, transforming potential conflicts into
                constructive dialogues.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>4. Non-Verbal Communication:</strong> Communication is
                not just about words. You will explore the nuances of non-verbal
                cues, such as body language and facial expressions, and learn
                how to utilize them to reinforce your message.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>5. Persuasive Language:</strong> Crafting compelling
                arguments is an art. You will learn how to influence others
                positively through the use of persuasive language, enabling you
                to advocate for your ideas effectively.
              </p>
            </div>

            <h4 className="text-base font-bold text-gray-900 mb-2">
              Building a Collaborative Environment
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Mastering these skills will not only enhance your personal
              communication but will also contribute to building stronger
              interpersonal relationships within your team. A collaborative work
              environment is vital for team success, and effective communication
              is the key to fostering this atmosphere. You will learn how to
              create an inclusive environment where ideas can flourish, and
              everyone feels valued.
            </p>

            <h4 className="text-base font-bold text-gray-900 mb-2">
              Course Outcomes
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              By the end of this transformative course, you will be equipped to:
            </p>

            <ul className="space-y-2 mb-4 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                <span>
                  Communicate effectively in any situation, whether in meetings,
                  presentations, or casual conversations.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                <span>
                  Navigate complex challenges with confidence, turning potential
                  obstacles into opportunities for growth.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                <span>
                  Contribute significantly to your organization&apos;s success
                  through improved communication practices, fostering a culture
                  of openness and collaboration.
                </span>
              </li>
            </ul>

            <p className="text-sm text-gray-600 leading-relaxed">
              Join us on this journey to transform your communication skills and
              unlock new heights in your career! Together, we will explore the
              depths of effective communication, ensuring that you emerge not
              just as a better communicator, but as a leader in your field.
            </p>
          </div>

          {/* Mark as complete button */}
          <div className="flex justify-center mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-sm font-semibold">
              Mark as complete
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <p className="text-sm text-gray-500 text-center py-8">
            No reviews or feedback yet. Be the first to leave a review!
          </p>
        </div>
      )}
    </div>
  );
};
