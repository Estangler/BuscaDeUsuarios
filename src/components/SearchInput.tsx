import { Search } from "lucide-react";
type SearchInputProps = React.ComponentProps<"input">;

export default function SearchInput({ ...props }: SearchInputProps) {
  return (
    <label htmlFor="search-user" className="relative w-full">
      <span className="absolute top-4.5 left-2">
        <Search size={12} className="text-muted" />
      </span>
      <input
        type="text"
        id="search-user"
        placeholder="Search for username"
        autoFocus
        className="py-3 px-10 border border-border rounded-lg w-full bg-surface placeholder:text-muted outline-0 focus:border-accent focus:ring-2 focus:ring-muted not-placeholder-shown:border-accent inset-shadow-sm inset-shadow-black hover:border-accentDim transition duration-300 ease-linear"
        {...props}
      />
    </label>
  );
}
