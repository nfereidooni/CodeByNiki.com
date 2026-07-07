import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

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

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-canvas text-ink transition-colors" suppressHydrationWarning>
        <ThemeProvider>
          <div className="w-full">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
