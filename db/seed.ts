import { Clients, db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Clients).values([
    { id: 1, name: "Carlos Felipe", age: 37, isActive: true },
    { id: 2, name: "Maria Isabelle", age: 33, isActive: true },
    { id: 3, name: "Luís Felipe", age: 6, isActive: false },
  ]);

  console.log("Seeded database");
}
