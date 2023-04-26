import PostList from "./PostList";

export default function BlogPage() {
  return (
    <div>
      <h1>Blog Page</h1>
      <PostList
        posts={[
          { id: "1", categoryId: "1", slug: "post-1", title: "Post 1" },
          { id: "2", categoryId: "1", slug: "post-2", title: "Post 2" },
          { id: "3", categoryId: "1", slug: "post-3", title: "Post 3" },
        ]}
      />
    </div>
  );
}
