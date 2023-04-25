export default function ShopPage({ params }: { params: { slug: string[] } }) {
  return (
    <div className="p-4 m-2 bg-fuchsia-200 border-2 border-stone-50 border-dotted">
      <h1>This is Shop page.</h1>
      {params.slug.map((slug, index) => (
        <span key={index} className="text-purple-700">
          /{slug}
        </span>
      ))}
    </div>
  );
}
