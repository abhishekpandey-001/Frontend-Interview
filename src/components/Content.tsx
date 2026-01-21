import { useState } from "react";
import BlogList from "./BlogList";
import BlogDetail from "./BlogDetail";

export default function Content() {
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);

  return (
    <main className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left panel */}
        <section className="md:col-span-5 border-b md:border-b-0 md:border-r pr-0 md:pr-4">
          <BlogList
            onSelectBlog={(id) => setSelectedBlogId(id)}
            selectedBlogId={selectedBlogId}
          />
        </section>

        {/* Right panel */}
        <section className="md:col-span-7 pl-0 md:pl-4">
          <BlogDetail selectedBlogId={selectedBlogId} />
        </section>
      </div>
    </main>
  );
}
