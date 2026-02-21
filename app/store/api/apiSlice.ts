import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Types co-located with data
export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  duration: string;
  instructor: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

export interface Learner {
  id: string;
  name: string;
  city: string;
  email: string;
  avatar: string;
}

export interface Lesson {
  id: string;
  title: string;
  completed: boolean;
  active?: boolean;
  type?: "lesson" | "quiz";
}

export interface LessonSection {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
}

// Mock data matching the Figma design
const mockCourses: Course[] = [
  {
    id: "1",
    title: "Effective Workplace Communication",
    description:
      "Upon completion of this module, participants will: Implement practical communication techniques, analyze workplace scenarios, and develop strategies for clear messaging.",
    category: "Soft Skill",
    image: "https://picsum.photos/seed/workplace/400/250",
    duration: "6 weeks",
    instructor: "Dr. Sarah Johnson",
    level: "Beginner",
  },
  {
    id: "2",
    title: "Mastering Interpersonal Skills",
    description:
      "Upon completion of this module, participants will: Implement practical communication techniques, analyze interpersonal dynamics, and build stronger professional relationships.",
    category: "Compliance & Policy",
    image: "https://picsum.photos/seed/interpersonal/400/250",
    duration: "8 weeks",
    instructor: "Prof. Michael Chen",
    level: "Intermediate",
  },
  {
    id: "3",
    title: "Strengthening Team Cohesion",
    description:
      "Upon completion of this module, participants will: Implement practical communication techniques, analyze team dynamics, and develop cohesion-building strategies.",
    category: "Soft Skill",
    image: "https://picsum.photos/seed/cohesion/400/250",
    duration: "4 weeks",
    instructor: "Engr. David Okafor",
    level: "Beginner",
  },
  {
    id: "4",
    title: "Enhancing Team Dialogue",
    description:
      "Upon completion of this module, participants will: Implement practical communication techniques, analyze dialogue patterns, and improve facilitation skills.",
    category: "Digital Skills",
    image: "https://picsum.photos/seed/dialogue/400/250",
    duration: "5 weeks",
    instructor: "Dr. Amina Bakare",
    level: "Intermediate",
  },
  {
    id: "5",
    title: "Optimizing Group Dynamics",
    description:
      "Upon completion of this module, participants will: Implement practical communication techniques, analyze group behavior, and optimize collaborative outcomes.",
    category: "Business & Strategy",
    image: "https://picsum.photos/seed/dynamics/400/250",
    duration: "7 weeks",
    instructor: "Prof. Jane Doe",
    level: "Advanced",
  },
  {
    id: "6",
    title: "Cultivating Open Communication",
    description:
      "Upon completion of this module, participants will: Implement practical communication techniques, analyze organizational culture, and promote transparency.",
    category: "Onboarding",
    image: "https://picsum.photos/seed/opencomm/400/250",
    duration: "3 weeks",
    instructor: "Dr. Richard Lee",
    level: "Beginner",
  },
];

const mockLearners: Learner[] = [
  {
    id: "1",
    name: "Nithya Menon",
    city: "New York",
    email: "nithya.menon@email.com",
    avatar: "https://picsum.photos/seed/nithya/40/40",
  },
  {
    id: "2",
    name: "Meera Gonzalez",
    city: "Toronto",
    email: "meera.gonzalez@email.com",
    avatar: "https://picsum.photos/seed/meera/40/40",
  },
  {
    id: "3",
    name: "Monica Patel",
    city: "Paris",
    email: "monica.patel@email.com",
    avatar: "https://picsum.photos/seed/monica/40/40",
  },
  {
    id: "4",
    name: "Dinesh Kumar",
    city: "Tokyo",
    email: "dinesh.kumar@email.com",
    avatar: "https://picsum.photos/seed/dinesh/40/40",
  },
  {
    id: "5",
    name: "Karthik Subramanian",
    city: "London",
    email: "karthik.subramanian@email.com",
    avatar: "https://picsum.photos/seed/karthik/40/40",
  },
  {
    id: "6",
    name: "Monica Patel",
    city: "Paris",
    email: "jagathesh.narayanan@email.com",
    avatar: "https://picsum.photos/seed/monica2/40/40",
  },
  {
    id: "7",
    name: "Jagathesh Narayanan",
    city: "Berlin",
    email: "jagathesh.narayanan@email.com",
    avatar: "https://picsum.photos/seed/jagathesh/40/40",
  },
  {
    id: "8",
    name: "Monica Patel",
    city: "Paris",
    email: "monica.patel@email.com",
    avatar: "https://picsum.photos/seed/monica3/40/40",
  },
  {
    id: "9",
    name: "Nithya Menon",
    city: "New York",
    email: "nithya.menon@email.com",
    avatar: "https://picsum.photos/seed/nithya2/40/40",
  },
  {
    id: "10",
    name: "Jagathesh Narayanan",
    city: "Tokyo",
    email: "dinesh.kumar@email.com",
    avatar: "https://picsum.photos/seed/jagathesh2/40/40",
  },
];

const mockLessonSections: LessonSection[] = [
  {
    id: "s1",
    title: "Introduction",
    lessons: [
      { id: "l1", title: "Welcome Message", completed: false, active: true },
      { id: "l2", title: "A Note on Style", completed: false },
      { id: "l3", title: "What You'll Learn", completed: false },
      { id: "l4", title: "Meet Your Instructor", completed: false },
    ],
  },
  {
    id: "s2",
    title: "Setting Up Your Workspace",
    lessons: [
      { id: "l5", title: "Tools You Need", completed: false },
      { id: "l6", title: "Environment Setup", completed: false },
    ],
  },
  {
    id: "s3",
    title: "Navigating the Course",
    lessons: [
      { id: "l7", title: "Course Structure", completed: false },
      { id: "l8", title: "How to Submit Assignments", completed: false },
    ],
  },
  {
    id: "s4",
    title: "Course Resources",
    lessons: [
      { id: "l9", title: "Supplementary Materials", completed: false },
      { id: "l10", title: "Recommended Reading", completed: false },
    ],
  },
  {
    id: "s5",
    title: "Assessment",
    lessons: [{ id: "l11", title: "Quiz", completed: false, type: "quiz" }],
  },
];

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  tagTypes: ["Courses", "Profile"],
  endpoints: (builder) => ({
    getCourses: builder.query<Course[], void>({
      queryFn: () => ({ data: mockCourses }),
      providesTags: ["Courses"],
    }),

    getCourseById: builder.query<Course, string>({
      queryFn: (id) => {
        const course = mockCourses.find((c) => c.id === id);
        if (course) return { data: course };
        return { error: { status: 404, data: "Course not found" } };
      },
      providesTags: ["Courses"],
    }),

    getCourseLearners: builder.query<Learner[], string>({
      queryFn: () => ({ data: mockLearners }),
    }),

    getCourseLessons: builder.query<LessonSection[], string>({
      queryFn: () => ({ data: mockLessonSections }),
    }),

    getProfile: builder.query<User, string>({
      query: (id) => `/users/${id}`,
      providesTags: ["Profile"],
    }),

    getUsers: builder.query<User[], void>({
      query: () => "/users",
    }),

    updateProfile: builder.mutation<User, Partial<User> & { id: string }>({
      query: ({ id, ...patch }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: patch,
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useGetCourseByIdQuery,
  useGetCourseLearnersQuery,
  useGetCourseLessonsQuery,
  useGetProfileQuery,
  useGetUsersQuery,
  useUpdateProfileMutation,
} = apiSlice;
