import "./globals.css";

export const metadata = {
  title: "Reducate.ai",
  description: "Modern Education Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}