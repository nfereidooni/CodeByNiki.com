import "./globals.css";
import LeftSidebar from "@/components/LeftSidebar";

export const metadata = {
  title: "Niki Fereidooni Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="lg:flex lg:justify-between lg:gap-4">
        {/* Sidebar */}
        <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/4 lg:flex-col lg:justify-between lg:py-24">
          <LeftSidebar />
        </aside>

        {/* Main Content */}
        <main className="lg:w-3/4">{children}</main>
      </body>
    </html>
  );
}

