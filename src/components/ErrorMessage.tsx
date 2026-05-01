import { TriangleAlert } from "lucide-react";

export default function ErrorMessage() {
  return (
    <div className="flex flex-col items-center py-10 border rounded-lg bg-error/10 border-error/30 space-y-5">
      <TriangleAlert size={40} />
      <h1 className="font-display text-error text-3xl">Error loading data</h1>
      <button className="text-sm text-muted hover:text-muted/70">
        Failed to fetch
      </button>
    </div>
  );
}
