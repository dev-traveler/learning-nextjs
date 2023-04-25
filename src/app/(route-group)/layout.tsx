export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or siderbar */}
      <div>This is Route Group Layout.</div>

      {children}
    </section>
  );
}
