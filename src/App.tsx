import { useUsers } from "./hooks/useUsers";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import ErrorMessage from "./components/ErrorMessage";
import EmptyState from "./components/EmptyState";
import UserCard from "./components/UserCard";
import CardContainer from "./components/CardContainer";

function App() {
  const { users, isLoading } = useUsers();

  console.log(users, isLoading);
  return (
    <main className="mx-auto md:max-w-215">
      <Header />
      <div className="space-y-10">
        <SearchInput />
        <CardContainer />
      </div>
    </main>
  );
}

export default App;
