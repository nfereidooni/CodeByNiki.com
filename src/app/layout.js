import "./globals.css";
import LeftSidebar from "@/components/LeftSidebar";

export const metadata = {
  title: "Niki Fereidooni Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grid grid-cols-4 h-screen">
        {/* Sidebar */}
        <aside className="col-span-1 bg-gray-900 text-white">
          <LeftSidebar />
        </aside>

        {/* Main Content */}
        <main className="col-span-3 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}

