import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Course {
  id: string;
  title: string;
  description: string;
}

// Mock data - replace with your actual data fetching
const mockCourses: Course[] = [
  { id: "1", title: "Mathematics 101", description: "Introduction to Mathematics" },
  { id: "2", title: "Physics 101", description: "Basic Physics" },
];

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Courses</h1>
        <Button>Add New Course</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockCourses.map((course) => (
          <Link 
            href={`/courses/${course.id}`} 
            key={course.id}
            className="block"
          >
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="text-gray-600">{course.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 