import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define types
export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  instructor: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  image: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
}

// Mock data for courses (since we don't have a real API)
const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Web Development Fundamentals',
    description: 'Learn HTML, CSS, and JavaScript from scratch',
    duration: '12 weeks',
    instructor: 'Dr. Sarah Johnson',
    level: 'Beginner',
    image: '/images/course1.jpg',
  },
  {
    id: '2',
    title: 'Advanced React Patterns',
    description: 'Master React hooks, context, and advanced patterns',
    duration: '8 weeks',
    instructor: 'Prof. Michael Chen',
    level: 'Advanced',
    image: '/images/course2.jpg',
  },
  {
    id: '3',
    title: 'TypeScript Masterclass',
    description: 'Learn TypeScript from basics to advanced',
    duration: '10 weeks',
    instructor: 'Engr. David Okafor',
    level: 'Intermediate',
    image: '/images/course3.jpg',
  },
];

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://jsonplaceholder.typicode.com',
    // Add a prepareHeaders function to simulate auth if needed
    prepareHeaders: (headers) => {
      // You can add headers here if needed
      return headers;
    },
  }),
  tagTypes: ['Courses', 'Profile'],
  endpoints: (builder) => ({
    // Mock endpoint - returns local mock data
    getCourses: builder.query<Course[], void>({
      queryFn: () => ({ data: mockCourses }),
      providesTags: ['Courses'],
    }),
    
    // Real API endpoint example (from JSONPlaceholder)
    getProfile: builder.query<User, string>({
      query: (id) => `/users/${id}`,
      providesTags: ['Profile'],
    }),
    
    // Another example endpoint
    getUsers: builder.query<User[], void>({
      query: () => '/users',
    }),
    
    // Mutation example (not required but shows completeness)
    updateProfile: builder.mutation<User, Partial<User> & { id: string }>({
      query: ({ id, ...patch }) => ({
        url: `/users/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: ['Profile'],
    }),
  }),
});

// Export hooks for usage in components
export const { 
  useGetCoursesQuery, 
  useGetProfileQuery, 
  useGetUsersQuery,
  useUpdateProfileMutation 
} = apiSlice;