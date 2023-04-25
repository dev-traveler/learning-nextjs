export default function Page({
  params,
}: {
  params: { categoryId: string; slug: string };
}) {
  return (
    <h1 className="text-purple-700">
      blog/{params.categoryId}/{params.slug}
    </h1>
  );
}
