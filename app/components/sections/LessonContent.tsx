"use client";

import React, { useState } from "react";
import { Tabs } from "../ui/Tabs";
import { StarRating } from "../ui/StarRating";
import { ReviewCard } from "../ui/ReviewCard";
import { Button } from "../ui/Button";

interface LessonContentProps {
  className?: string;
  onMarkComplete?: () => void;
  isCompleted?: boolean;
}

const TABS = [
  { label: "Course Content", value: "content" },
  { label: "Review/Feedbacks", value: "reviews" },
];

const REVIEWS = [
  {
    initials: "NM",
    name: "Nithya Menon",
    date: "2 days ago",
    rating: 5,
    text: "Excellent course! The communication techniques taught here are immediately applicable in the workplace. Highly recommend for anyone looking to improve their professional interactions.",
    avatarColorClass: "bg-blue-100 text-blue-600",
  },
  {
    initials: "MG",
    name: "Meera Gonzalez",
    date: "5 days ago",
    rating: 4,
    text: "Very well structured course. The lessons on active listening and non-verbal communication were particularly insightful. Would love to see more practical exercises.",
    avatarColorClass: "bg-green-100 text-green-600",
  },
  {
    initials: "DK",
    name: "Dinesh Kumar",
    date: "1 week ago",
    rating: 5,
    text: "This course transformed how I interact with my team. The modules on confident conversations helped me handle difficult situations at work with much more ease.",
    avatarColorClass: "bg-purple-100 text-purple-600",
  },
  {
    initials: "MP",
    name: "Monica Patel",
    date: "2 weeks ago",
    rating: 4,
    text: "Great content and well-paced delivery. The persuasive language section was my favorite. Looking forward to more advanced courses on this topic.",
    avatarColorClass: "bg-orange-100 text-orange-600",
  },
];

export const LessonContent: React.FC<LessonContentProps> = ({
  className,
  onMarkComplete,
  isCompleted,
}) => {
  const [activeTab, setActiveTab] = useState("content");

  return (
    <div className={className}>
      {/* Tabs */}
      <Tabs tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Content */}
      {activeTab === "content" ? (
        <div className="prose prose-sm max-w-none rounded-xl border-[1.5px] border-[#D9D9D9] ">
          <div className="bg-white  rounded-tl-xl rounded-tr-xl ">
            <h3 className="text-lg font-bold text-[#202020]  border-b border-[#D9D9D9] pb-4 p-6">
              Lesson 1 - Welcome Message
            </h3>
          </div>

          <div className="p-6 bg-white">
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
          <div className="flex justify-end my-8  mr-4">
            {isCompleted ? (
              <Button
                className="bg-green-600 text-white px-8 w-[228px] h-[48px] py-3 rounded-lg text-sm font-semibold cursor-default opacity-80"
                disabled
              >
                Completed ✓
              </Button>
            ) : (
              <Button
                onClick={onMarkComplete}
                className="border-2 border-blue-600 w-[228px] h-[48px] hover:bg-blue-700 hover:text-white cursor-pointer text-blue-600 px-8 py-3 rounded-lg text-sm font-semibold"
              >
                Mark as complete
              </Button>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Reviews list */}
          <div className="bg-white rounded-xl border-[1.5px] border-[#D9D9D9] p-6">
            <div className="flex items-center justify-between border-b border-[#D9D9D9] pb-4 mb-6">
              <h3 className="text-lg font-bold text-gray-900">
                Reviews & Feedback
              </h3>
              <span className="text-sm text-gray-500">
                {REVIEWS.length} reviews
              </span>
            </div>

            <div className="space-y-6">
              {REVIEWS.map((review, index) => (
                <ReviewCard
                  key={index}
                  initials={review.initials}
                  name={review.name}
                  date={review.date}
                  rating={review.rating}
                  text={review.text}
                  avatarColorClass={review.avatarColorClass}
                  className={
                    index < REVIEWS.length - 1
                      ? "pb-6 border-b border-gray-100"
                      : ""
                  }
                />
              ))}
            </div>
          </div>

          {/* Write a review */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h4 className="text-base font-bold text-gray-900 mb-4">
              Leave a Review
            </h4>
            <StarRating rating={0} size="md" interactive className="mb-4" />
            <label htmlFor="review-textarea" className="sr-only">
              Your review
            </label>
            <textarea
              id="review-textarea"
              placeholder="Share your experience with this course..."
              className="w-full p-4 text-sm text-gray-700 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-gray-400"
              rows={4}
            />
            <div className="flex justify-end mt-8">
              <Button className="border-blue-600 border-[1.5px] w-[228px] h-[48px] hover:bg-blue-700 hover:text-white cursor-pointer text-blue-600 e px-6 py-2.5 rounded-lg text-sm font-semibold">
                Submit Review
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
