import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/layout/MainHeader";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "The Sustainability Voice - Environment & Climate Action",
  description: "The Sustainability Voice is a quarterly magazine dedicated to advancing informed dialogue on sustainability, environment, climate change, and responsible business.",
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

