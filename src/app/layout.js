import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Awais Ahmad Mirza - Portfolio",
  description:
    "Professional portfolio of Awais Ahmad Mirza, showcasing web development and digital marketing projects.",
  keywords:
    "web development, digital marketing, graphic design, portfolio, Awais Ahmad Mirza",
  authors: [{ name: "Awais Ahmad Mirza" }],
  openGraph: {
    title: "Awais Ahmad Mirza - Portfolio",
    description:
      "Professional portfolio of Awais Ahmad Mirza, showcasing web development and digital marketing projects.",
    url: "https://portfolio-awais-peach.vercel.app",
    siteName: "Awais Ahmad Mirza Portfolio",
    images: [
      {
        url: "/avatar.jpg",
        width: 800,
        height: 600,
        alt: "Awais Ahmad Mirza",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="preload"
          href="/fonts/Galdien.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-bg text-text">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
