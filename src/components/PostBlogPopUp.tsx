import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Input } from "./ui/input";
import { createBlog } from "@/api/blogs";
import type { Blog } from "@/types/Blog";

interface PostBlogPopUpProps {
  onClose: () => void;
}

export default function PostBlogPopUp({ onClose }: PostBlogPopUpProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const queryClient = useQueryClient();

  // Mutation using your API function
  const mutation = useMutation({
    mutationFn: (blog: Blog) => createBlog(blog),
    onSuccess: () => {
      // Refetch the blogs so new one appears
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !category) return;

    // Build the blog object
    const newBlog: Blog = {
      id: Date.now().toString(), // temporary id, your backend may assign actual id
      title,
      description,
      category: category.split(",").map((c) => c.trim()),
      coverImage: coverImage || "",
      date: new Date().toISOString(),
      content: description, // or separate content input if you want
    };

    // ✅ Call the API function through mutation
    mutation.mutate(newBlog);

    // Reset inputs
    setTitle("");
    setDescription("");
    setCategory("");
    setCoverImage("");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-card p-6 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-xl font-semibold">Add New Blog</h2>

        <Input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Blog Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Category (comma separated)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Cover Image URL"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border px-4 py-2 hover:bg-muted transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90 transition"
          >
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
}
