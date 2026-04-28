import { type User } from "../types/user";

export async function fetcher(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Fail to fetch Users.");
  }

  const data: User[] = await response.json();

  return data;
}
