import { Search } from "lucide-react";
import { useState } from "react";

type SearchInputProps = React.ComponentProps<"input"> & {
  setUsername: (username: string) => void;
};

export default function SearchInput({
  setUsername,
  ...rest
}: SearchInputProps) {
  const [search, setSearch] = useState("");

  function handleInput(
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) {
    const inputValue = e.target.value;
    setSearch(inputValue);
    setUsername(inputValue);
  }

  return (
    <div className="flex gap-2 mx-auto mt-15">
      <label htmlFor="search-user" className="relative w-full">
        <span className="absolute top-4.5 left-2">
          <Search size={12} className="text-muted" />
        </span>
        <input
          value={search}
          onChange={handleInput}
          type="text"
          id="search-user"
          placeholder="Search for username"
          autoFocus
          className="py-3 px-10 border border-border rounded-lg w-full bg-surface placeholder:text-muted outline-0 focus:border-accent focus:ring-2 focus:ring-muted not-placeholder-shown:border-accent inset-shadow-sm inset-shadow-black hover:border-accentDim transition duration-300 ease-linear"
          {...rest}
        />
      </label>
      <select className="border border-border rounded-lg py-3 px-4 bg-surface focus:border-accent cursor-pointer inset-shadow-sm inset-shadow-black hover:border-accentDim outline-none transition duration-300 ease-linear focus:ring-2 focus:ring-muted">
        <option value="az">A {String.fromCodePoint(0x2192)} Z</option>
        <option value="za">Z {String.fromCodePoint(0x2192)} A</option>
      </select>
    </div>
  );
}
