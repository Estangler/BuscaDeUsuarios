import { Target } from "lucide-react";

type EmptyStateProps = React.ComponentProps<"button">;

export default function EmptyState({ ...props }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center py-10  rounded-lg space-y-5 border-b-2 border-accent/30 pb-50">
      <Target className="text-white" size={40} />
      <h1 className="font-display text-white text-3xl">No result</h1>
      <button
        className="text-sm text-muted cursor-pointer hover:text-muted/70"
        {...props}
      >
        Try another name
      </button>
    </div>
  );
}
