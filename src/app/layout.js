import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import { NavigationProvider } from "@/context/NavigationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "A modern portfolio website with dark mode support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationProvider>
          <div className="min-h-screen">
            <Navigation />
            <main className="pt-20">{children}</main>
          </div>
        </NavigationProvider>
      </body>
    </html>
  );
}
