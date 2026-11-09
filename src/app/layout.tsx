import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/layout/MainHeader";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/shared/ScrollToTop";
import CopyProtection from "@/components/shared/CopyProtection";

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
      <body className="text-gray-900 min-h-screen flex flex-col bg-[#F7F5F0] antialiased selection:bg-black selection:text-[#F7F5F0]">
        <div className="paper-grain-overlay" aria-hidden="true" />
        <MainHeader />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <ScrollToTop />
        <CopyProtection />
      </body>
    </html>
  );
}

