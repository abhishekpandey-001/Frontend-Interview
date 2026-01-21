import type { Blog } from "@/types/Blog";

const BASE_URL = "http://localhost:3001";

export const getBlogs = async (): Promise<Blog[]> => {
  const res = await fetch(`${BASE_URL}/blogs`);
  return res.json();
};

export const getBlogById = async (id: number): Promise<Blog> => {
  const res = await fetch(`${BASE_URL}/blogs/${id}`);
  return res.json();
};

export const createBlog = async (blog: Blog): Promise<Blog> => {
  const res = await fetch(`${BASE_URL}/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  });
  return res.json();
};
