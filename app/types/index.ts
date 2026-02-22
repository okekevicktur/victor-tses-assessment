// ============================================
// Domain / API types
// ============================================

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
  image?: string;
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

// ============================================
// Store types
// ============================================

export interface UserState {
  id: string;
  name: string;
  email: string;
  isAuthenticated: boolean;
}

// Note: RootState & AppDispatch remain in store.ts as they are
// derived from the store instance itself.
