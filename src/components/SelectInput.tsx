type SelectInputProps = React.ComponentProps<"select">;

export default function SelectInput({ ...props }: SelectInputProps) {
  return (
    <select
      className="border border-border rounded-lg py-3 px-4 bg-surface focus:border-accent cursor-pointer inset-shadow-sm inset-shadow-black hover:border-accentDim outline-none transition duration-300 ease-linear focus:ring-2 focus:ring-muted"
      {...props}
    >
      <option value="" disabled>
        select
      </option>
      <option value="az">A {String.fromCodePoint(0x2192)} Z</option>
      <option value="za">Z {String.fromCodePoint(0x2192)} A</option>
    </select>
  );
}
