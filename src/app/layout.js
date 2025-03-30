import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

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
  twitter: {
    card: "summary_large_image",
    title: "Awais Ahmad Mirza - Portfolio",
    description:
      "Professional portfolio of Awais Ahmad Mirza, showcasing web development and digital marketing projects.",
    images: ["/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://portfolio-awais-peach.vercel.app" />
      </head>
      <body className="bg-bg text-text">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>

        {/* Service Worker Registration */}
        <Script
          id="register-sw"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful');
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />

        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Awais Ahmad Mirza",
              url: "https://portfolio-awais-peach.vercel.app",
              image: "https://portfolio-awais-peach.vercel.app/avatar.jpg",
              sameAs: [
                "https://www.linkedin.com/in/awais-ahmad-mirza/",
                "https://www.instagram.com/mirza.awais.official/",
                "https://www.facebook.com/MirzaAwais420",
              ],
              jobTitle: "Web Developer & Digital Marketing Specialist",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              description:
                "Professional web developer and digital marketing specialist with expertise in creating innovative digital solutions.",
            }),
          }}
        />
      </body>
    </html>
  );
}
