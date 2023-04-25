export default function ShopTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 m-2 bg-teal-700 border-2 border-stone-50 border-dotted">
      <h1>This is Shop Template.</h1>
      <p>
        Templates are similar to layouts in that they wrap each child layout or
        page. Unlike layouts that persist across routes and maintain state,
        template create a new instance for each of their children on navigation.
        This means that when a user navigates between routes that share a
        template, a new instatnce of component is mounted, DOM elements are
        recreated, state is not preserved, and effects are re-synchronized.
      </p>
      {children}
    </div>
  );
}
