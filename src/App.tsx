import { useUsers } from "./hooks/useUsers";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import ErrorMessage from "./components/ErrorMessage";
import EmptyState from "./components/EmptyState";
import CardContainer from "./components/CardContainer";
import { useState, useEffect } from "react";
import { type User } from "./types/user";

function App() {
  const [filteredList, setFilteredList] = useState<User[]>([]);
  const { users, isLoading, error } = useUsers();

  useEffect(() => {
    function setLayout() {
      setFilteredList(users);
    }
    setLayout();
  }, [users]);

  function handleSearch(username: string) {
    const filteredUser = users.filter((user) =>
      user.username
        .toLowerCase()
        .trim()
        .includes(username.toLowerCase().trim()),
    );

    setFilteredList(filteredUser);
  }

  return (
    <main className="mx-auto md:max-w-215">
      <Header />
      <div className="space-y-10">
        <SearchInput setUsername={handleSearch} />
        {filteredList.length <= 0 ? (
          <EmptyState />
        ) : (
          <CardContainer userList={filteredList} />
        )}
      </div>
    </main>
  );
}

export default App;
