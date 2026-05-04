import { useUsers } from "./hooks/useUsers";
import Header from "./components/Header";
import InputWrapper from "./components/InputWrapper";
import ErrorMessage from "./components/ErrorMessage";
import EmptyState from "./components/EmptyState";
import CardContainer from "./components/CardContainer";
import { useState } from "react";
import { Loader } from "lucide-react";

function App() {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  const { users, isLoading, error } = useUsers();

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
            onSearch={setSelect}
            searchValue={search}
            onSelect={setSearch}
            selectValue={select}
          />
          {users.length === 0 ? (
            <EmptyState />
          ) : (
            <CardContainer userList={users} />
          )}
        </div>
      )}
    </main>
  );
}

export default App;
