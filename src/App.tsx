import { useUsers } from "./hooks/useUsers";
import Header from "./components/Header";
import InputWrapper from "./components/InputWrapper";
import ErrorMessage from "./components/ErrorMessage";
import EmptyState from "./components/EmptyState";
import CardContainer from "./components/CardContainer";
import { useDebounce } from "./hooks/useDebounce";
import { useMemo, useState } from "react";
import { Loader } from "lucide-react";

function App() {
  const { users, isLoading, error } = useUsers();
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const debouncedSearch = useDebounce(search);

  const filteredUsers = useMemo(() => {
    return [...users]
      .filter((user) =>
        user.username.toLowerCase().includes(debouncedSearch.toLowerCase()),
      )
      .sort((a, b) => {
        if (select === "az") {
          return a.name.localeCompare(b.name);
        }

        return b.name.localeCompare(a.name);
      });
  }, [users, select, debouncedSearch]);

  function resetSearch() {
    setSearch("");
    setSelect("");
  }

  if (isLoading) {
    return <Loader className="animate-spin" />;
  }

  return (
    <main className="mx-auto md:max-w-215">
      <Header />
      {error ? (
        <ErrorMessage />
      ) : (
        <div className="space-y-10">
          <InputWrapper
            onSearch={setSearch}
            searchValue={search}
            onSelect={setSelect}
            selectValue={select}
          />
          {filteredUsers.length === 0 ? (
            <EmptyState onClick={resetSearch} />
          ) : (
            <CardContainer userList={filteredUsers} />
          )}
        </div>
      )}
    </main>
  );
}

export default App;
