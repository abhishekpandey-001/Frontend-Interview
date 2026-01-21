import { useQuery } from "@tanstack/react-query";
import type { Blog } from "@/types/Blog";
import { getBlogs } from "@/api/blogs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";

interface BlogListProps {
  onSelectBlog: (id: string) => void;
  selectedBlogId?: string | null;
}

const BlogList = ({ onSelectBlog, selectedBlogId }: BlogListProps) => {
  const { data, isError, isLoading, error } = useQuery<Blog[], Error>({
    queryKey: ["posts"],
    queryFn: getBlogs,
  });

  if (isError) return <p className="text-destructive">{error.message}</p>;

  return (
    <div className="space-y-4">
      {isLoading
        ? Array.from({ length: 5 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader className="flex flex-wrap gap-2">
                <Skeleton className="h-4 w-16 rounded-full" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
              </CardContent>
            </Card>
          ))
        : data?.map((blog) => (
            <Card
              key={blog.id}
              className={`cursor-pointer transition ${
                selectedBlogId === blog.id
                  ? "border-primary bg-primary/10"
                  : "hover:border-primary/30 hover:bg-muted/20"
              }`}
              onClick={() => blog.id && onSelectBlog(blog.id)}
            >
              <CardHeader className="flex flex-wrap justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  {blog.category.map((cat) => (
                    <span
                      key={cat}
                      className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  {new Date(blog.date).toLocaleDateString()}
                </span>
              </CardHeader>
              <CardContent>
                <CardTitle>{blog.title}</CardTitle>
                <CardDescription>{blog.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
    </div>
  );
};

export default BlogList;
