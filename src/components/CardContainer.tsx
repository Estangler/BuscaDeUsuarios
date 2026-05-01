import UserCard from "./UserCard";

export default function CardContainer() {
  return (
    <section className="grid grid-cols-cards gap-4 mb-10">
      <UserCard />
    </section>
  );
}
