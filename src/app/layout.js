import "./globals.css";
import TopNav from "@/components/TopNav";
import { ThemeProvider } from "@/context/ThemeContext";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Niki Fereidooni",
  description: "Senior Developer. Community Builder. Systems Thinker. Ships things.",
  icons: {
    icon: "/favicon.ico"
  }
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text transition-colors" suppressHydrationWarning>
        <ThemeProvider>
          <TopNav />
          <div className="w-full">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
