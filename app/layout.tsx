import "./globals.css";

import { Analytics } from "@/components/analytics";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ayyyub",
  description: "A Moroccan Software Developer",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased mx-4 md:mx-0 min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header className="mb-12">
              <div className="flex items-center justify-between h-7">
                <nav className="mr-auto text-sm font-medium space-x-6">
                  <Link href="/">Home</Link>
                  <Link href="/overview">Overview</Link>
                </nav>
                <ModeToggle />
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
