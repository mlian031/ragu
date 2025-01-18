import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function CoursePage({
  params,
}: {
  params: { id: string };
}) {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Course Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Uploaded Files</h2>
          <div className="space-y-2">
            {/* Replace with actual file list */}
            <p className="text-gray-600">No files uploaded yet</p>
          </div>
        </div>
        
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Generated Materials</h2>
          <div className="space-y-2">
            {/* Replace with actual generated materials */}
            <p className="text-gray-600">No materials generated yet</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Link href={`/courses/${params.id}/upload`}>
          <Button>Upload Files</Button>
        </Link>
        <Link href={`/courses/${params.id}/form`}>
          <Button variant="secondary">Generate Materials</Button>
        </Link>
      </div>
    </div>
  );
} 