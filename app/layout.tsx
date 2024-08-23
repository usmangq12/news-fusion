import { GeistSans } from "geist/font/sans";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout";
import { PreferencesProvider } from "./context/NewsPreferencesContext";
import { ArticleProvider } from "./context/ArticleProvider";
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";
export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "News Fusion",
  description:
    "A news aggregator website that pulls articles from various sources and displays them in a clean, easy-to-read format.",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-gray-50 text-gray-900">
        <PreferencesProvider>
          <ArticleProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1 container py-6">{children}</main>
              <footer className="bg-gray-200 text-center py-4">
                <p className="text-sm text-gray-600">
                  © 2024 News Fusion. All rights reserved.
                </p>
              </footer>
            </div>
          </ArticleProvider>
        </PreferencesProvider>
      </body>
    </html>
  );
}