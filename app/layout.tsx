import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accredian | Enterprise Learning Solutions",
  description: "Strategic learning solutions for future-ready teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
