import UserCard from "./UserCard";
import { type User } from "../types/user";

export type CardContainerProps = {
  userList: User[];
};

export default function CardContainer({ userList }: CardContainerProps) {
  return (
    <section className="grid grid-cols-cards gap-4 mb-10">
      {userList.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </section>
  );
}
