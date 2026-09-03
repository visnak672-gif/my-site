import "./globals.css";

export const metadata = {
  title: "Nova — Build faster",
  description: "A minimal dark landing page built with Next.js 14.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
