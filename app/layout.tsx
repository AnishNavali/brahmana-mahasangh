import type { Metadata } from "next";
import { Quicksand } from "next/font/google"; // Corrected import
import "./globals.css";
import { Toaster } from "../components/ui/sonner";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand"
});

export const metadata: Metadata = {
  title: "Akhila Bharatiya Brahmana Mahasangha – Official Website",
  description: "Official portal for Akhila Bharatiya Brahmana Mahasangha (ABBM). Promoting community service, Vedic values, and empowerment.",
  icons: {
    icon: "https://abbm.in/wp-content/uploads/2023/03/abbmpreloader.png",
    shortcut: "https://abbm.in/wp-content/uploads/2023/03/abbmpreloader.png",
    apple: "https://abbm.in/wp-content/uploads/2023/03/abbmpreloader.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${quicksand.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Navbar />

        {/* Main content area */}
        <main className="flex-1 overflow-hidden">{children}</main>

        {/* Footer at the bottom */}
        <Footer />

        {/* Toast notifications */}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}