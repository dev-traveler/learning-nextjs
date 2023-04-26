import Link from "next/link";

interface PostListProps {
  posts: Post[];
}

interface Post {
  id: string;
  categoryId: string;
  slug: string;
  title: string;
}

export default function PostList({ posts }: PostListProps) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.categoryId}/${post.slug}`}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
