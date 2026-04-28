import { useUsers } from "./hooks/useUsers";

function App() {
  const { users, isLoading } = useUsers();

  console.log(users, isLoading);
  return <h1>Hello World!</h1>;
}

export default App;
