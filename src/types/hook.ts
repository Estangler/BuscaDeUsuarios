import { type User } from "./user";

export type UseUsersReturn = {
  users: User[];
  isLoading: boolean;
  error: string | null;
};
