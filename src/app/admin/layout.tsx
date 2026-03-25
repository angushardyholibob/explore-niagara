export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Admin pages use their own dark theme layout, no site header/footer
  return <div className="admin-layout">{children}</div>;
}
