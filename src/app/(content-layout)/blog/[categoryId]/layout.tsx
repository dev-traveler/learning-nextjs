export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>This is Blog Category Layout.</div>
      {children}
    </div>
  );
}
