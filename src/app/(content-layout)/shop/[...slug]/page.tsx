export default function Page({ params }: { params: { slug: string[] } }) {
  return (
    <div>
      <h1>This is Shop page.</h1>
      {params.slug.map((slug, index) => (
        <span key={index} className="text-purple-700">
          /{slug}
        </span>
      ))}
    </div>
  );
}
