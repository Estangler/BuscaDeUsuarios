import { useState, useEffect } from "react";
import { fetcher } from "../services/fetchUsers";
import { type User } from "../types/user";
import { type UseUsersReturn } from "../types/hook";

export function useUsers(): UseUsersReturn {
  const [users, setUser] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await fetcher();
        setUser(userData);
      } catch (erro) {
        console.error(erro);
        setError("Fail trying to find user.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return {
    users,
    isLoading,
    error,
  };
}
