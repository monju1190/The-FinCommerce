import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/layout/MainHeader";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "The FinCommerce - Actionable Financial News",
  description: "The FinCommerce is your go-to destination for the latest and most comprehensive business, technology, and economic news.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-gray-900 min-h-screen flex flex-col">
        <MainHeader />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

