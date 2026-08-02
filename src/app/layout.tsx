import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/layout/MainHeader";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "NewsPrk - Actionable News for Visionaries",
  description: "Professional monthly magazine website",
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

