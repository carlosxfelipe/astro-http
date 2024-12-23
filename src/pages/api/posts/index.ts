import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

// http://localhost:4321/api/posts

export const GET: APIRoute = async ({ params, request }) => {
  const posts = await getCollection("blog");

  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
