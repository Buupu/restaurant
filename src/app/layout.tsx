import { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Fine Dining Restaurant",
  description: "Experience exquisite cuisine in an elegant atmosphere",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
