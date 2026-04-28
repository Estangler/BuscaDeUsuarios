import { useState, useEffect } from "react";
import { fetchUsers } from "../services/fetchUsers";
import { type User } from "../types/user";
import { type UseUsersReturn } from "../types/hook";

export function useUsers(): UseUsersReturn {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await fetchUsers();
        setUsers(userData);
      } catch (error: unknown) {
        console.error(error);
        if (error instanceof Error) {
          setError(error.message);
        }
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
