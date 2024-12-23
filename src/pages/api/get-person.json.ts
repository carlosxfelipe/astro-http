import type { APIRoute } from "astro";

// http://localhost:4321/api/get-person.json

export const GET: APIRoute = async ({ params, request }) => {
  const person = {
    name: "Carlos Felipe ",
    age: 37,
  };

  return new Response(JSON.stringify(person), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
