import "./globals.css";
import LeftSidebar from "@/components/LeftSidebar";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Niki Fereidooni Portfolio",
  description: "Frontend Developer Portfolio",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col md:flex-row md:justify-between md:gap-4">
        {/* Sidebar */}
        <aside className="md:sticky top-0 w-full lg:w-1/4 lg:flex lg:flex-col lg:justify-between lg:py-24">
          <LeftSidebar />
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4">{children}</main>
      </body>
    </html>
  );
}
