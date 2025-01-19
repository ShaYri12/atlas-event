import "./globals.css";

export const metadata = {
  title: "Atlas Event",
  description: "Atlas Event",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
