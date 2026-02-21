"use client";

import { useAppSelector, useAppDispatch } from "./hooks/redux";
import { toggleAuth } from "./store/features/user/userSlice";
import { useGetCoursesQuery, useGetProfileQuery } from "./store/api/apiSlice";
import { Button } from "./components/ui/Button";
import { Container } from "./components/ui/Container";
import { Card } from "./components/ui/Card";

export default function Home() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  // Test RTK Query hooks
  const { data: courses, isLoading: coursesLoading } = useGetCoursesQuery();
  const { data: profile, isLoading: profileLoading } = useGetProfileQuery("1");

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <Container>
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="heading-1 mb-4">TSES Frontend Assessment</h1>
          <p className="body-text">
            Redux Toolkit & RTK Query Setup Verification
          </p>
        </div>

        {/* User State Section */}
        <section className="mb-12">
          <h2 className="heading-2 mb-6">User State (Redux Toolkit)</h2>
          <Card className="mb-4">
            <div className="space-y-2">
              <p>
                <strong>ID:</strong> {user.id}
              </p>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Authenticated:</strong>{" "}
                {user.isAuthenticated ? "✅ Yes" : "❌ No"}
              </p>
            </div>
          </Card>
          <Button onClick={() => dispatch(toggleAuth())}>
            Toggle Authentication
          </Button>
        </section>

        {/* RTK Query Section */}
        <section className="mb-12">
          <h2 className="heading-2 mb-6">RTK Query Demo</h2>

          <div className="grid gap-6">
            {/* Profile Data */}
            <Card>
              <h3 className="heading-3 mb-4">
                Profile Data (from JSONPlaceholder)
              </h3>
              {profileLoading ? (
                <p>Loading profile...</p>
              ) : profile ? (
                <div className="space-y-2">
                  <p>
                    <strong>Name:</strong> {profile.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {profile.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {profile.phone}
                  </p>
                  <p>
                    <strong>Website:</strong> {profile.website}
                  </p>
                </div>
              ) : null}
            </Card>

            {/* Courses Data */}
            <Card>
              <h3 className="heading-3 mb-4">Courses (Mock Data)</h3>
              {coursesLoading ? (
                <p>Loading courses...</p>
              ) : courses ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {courses.map((course) => (
                    <Card
                      key={course.id}
                      padding="sm"
                      className="border border-gray-200"
                    >
                      <h4 className="font-semibold text-lg mb-2">
                        {course.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {course.description}
                      </p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{course.duration}</span>
                        <span className="bg-accent/10 text-accent px-2 py-1 rounded">
                          {course.level}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : null}
            </Card>
          </div>
        </section>
      </Container>
    </main>
  );
}
