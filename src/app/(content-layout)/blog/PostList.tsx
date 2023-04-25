import Link from "next/link";

interface PostLinkProps {
  posts: Post[];
}

interface Post {
  id: string;
  categoryId: string;
  slug: string;
  title: string;
}

export default function PostLink({ posts }: PostLinkProps) {
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
