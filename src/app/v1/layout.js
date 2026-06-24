import "./globals.css";
import LeftSidebar from "@/components/v1/LeftSidebar";

export default function V1Layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:gap-4" style={{ backgroundColor: '#0a0a0a', color: '#ffffff' }}>
      {/* Sidebar */}
      <aside className="md:sticky top-0 w-full lg:w-1/4 lg:flex lg:flex-col lg:justify-between lg:py-24">
        <LeftSidebar />
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-3/4">{children}</main>
    </div>
  );
}
