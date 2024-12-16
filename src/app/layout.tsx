import { Metadata } from "next";
import "../styles/globals.css";
import { Corinthia } from "next/font/google";

const corinthia = Corinthia({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-corinthia",
});

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
    <html lang="en" className={corinthia.variable}>
      <body>{children}</body>
    </html>
  );
}
