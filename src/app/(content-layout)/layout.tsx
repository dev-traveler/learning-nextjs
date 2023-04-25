import "../globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function ContentRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="p-4 bg-blue-600 border-2 border-stone-50 border-dotted">
        <div>This is Content Layout.</div>
        {children}
      </body>
    </html>
  );
}
