import { auth } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";

export default async function GenerationFormPage({
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
      <h1 className="text-2xl font-bold mb-6">Generate Practice Materials</h1>
      
      <form className="max-w-md space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Number of Questions
          </label>
          <input
            type="number"
            className="w-full p-2 border rounded-md"
            min="1"
            max="50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Material Type
          </label>
          <select className="w-full p-2 border rounded-md">
            <option value="midterm">Midterm</option>
            <option value="final">Final</option>
            <option value="problem-set">Problem Set</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Topics (comma-separated)
          </label>
          <textarea
            className="w-full p-2 border rounded-md"
            rows={3}
          />
        </div>

        <Button type="submit" className="w-full">
          Generate Materials
        </Button>
      </form>
    </div>
  );
} 