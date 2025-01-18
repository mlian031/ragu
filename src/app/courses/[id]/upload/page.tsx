import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import { FileUploader } from "@/components/upload"

export default async function UploadPage({
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
      <h1 className="text-2xl font-bold mb-6">Upload Files</h1>
      
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
        <div className="space-y-4">
          <div className="text-gray-600">
            Drag and drop your files here, or click to select files
          </div>
          {/* <Button>Select Files</Button> */}
          <FileUploader/>
        </div>
      </div>
    </div>
  );
} 