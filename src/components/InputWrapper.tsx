import SearchInput from "./SearchInput";
import SelectInput from "./SelectInput";
type InputWrapperProps = {
  onSelect: (ordenation: string) => void;
  onSearch: (username: string) => void;
  selectValue: string;
  searchValue: string;
};

export default function InputWrapper({
  onSearch,
  onSelect,
  selectValue,
  searchValue,
}: InputWrapperProps) {
  return (
    <div className="flex gap-2 mx-auto mt-15">
      <SearchInput
        onChange={(e) => onSearch(e.target.value)}
        value={searchValue}
      />
      <SelectInput
        onChange={(e) => onSelect(e.target.value)}
        value={selectValue}
      />
    </div>
  );
}
