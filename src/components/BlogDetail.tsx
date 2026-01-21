import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/api/blogs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import type { Blog } from "@/types/Blog";
import { Button } from "./ui/button";
import { Share2 } from "lucide-react"; // Share icon

interface BlogDetailProps {
  selectedBlogId: string | null;
}

const BlogDetail = ({ selectedBlogId }: BlogDetailProps) => {
  const { data: blog, isLoading, isError, error } = useQuery<Blog, Error>({
    queryKey: ["blog", selectedBlogId],
    queryFn: () => getBlogById(Number(selectedBlogId!)),
    enabled: !!selectedBlogId,
  });

  if (!selectedBlogId)
    return (
      <p className="text-muted-foreground text-center mt-10">
        Select a blog to view details
      </p>
    );

  if (isError)
    return (
      <p className="text-destructive">
        {error instanceof Error ? error.message : "Something went wrong"}
      </p>
    );

  if (isLoading || !blog) {
    return (
      <Card className="space-y-4 animate-pulse">
        <div className="w-full h-64 rounded-xl bg-accent" />
        <CardHeader className="flex flex-wrap gap-2">
          <Skeleton className="h-4 w-24 rounded-full" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-8 w-3/4 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="space-y-4">
      {/* Cover Image */}
      <div className="w-full h-64 rounded-xl overflow-hidden">
        <img
          src={blog?.coverImage}
          alt={blog?.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Categories and Date */}
      <CardHeader className="flex justify-between items-center gap-2">
        <div className="flex flex-wrap gap-2">
          {blog.category.map((cat) => (
            <span
              key={cat}
              className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary"
            >
              {cat}
            </span>
          ))}
        </div>
        <span className="text-xs text-muted-foreground">
          {new Date(blog.date).toLocaleDateString()}
        </span>
      </CardHeader>

      {/* Title and Content */}
      <CardContent>
        <CardTitle className="text-3xl">{blog?.title}</CardTitle>
        <CardDescription className="mt-4 whitespace-pre-line">
          {blog.content}
        </CardDescription>

        {/* Share Button */}
        <div className="mt-6 flex justify-end">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2">
            <Share2 className="w-4 h-4" /> Share Article
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogDetail;
