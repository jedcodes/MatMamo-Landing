import type { Metadata } from "next";
import { openSans } from "@/assets/fonts/fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MatMamo",
  description: "En mobilapp mot matsvinn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={openSans.className}>
        <Navbar />
        <main className="relativ overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
