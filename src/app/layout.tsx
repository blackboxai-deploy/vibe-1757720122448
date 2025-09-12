import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RideShare - Your Reliable Transportation Solution",
  description: "Book a ride, become a driver, or order food delivery. RideShare connects you to reliable transportation and delivery services in your city.",
  keywords: "ride sharing, taxi, driver, food delivery, transportation, urban mobility",
  authors: [{ name: "RideShare Team" }],
  robots: "index, follow",
  openGraph: {
    title: "RideShare - Your Reliable Transportation Solution",
    description: "Book a ride, become a driver, or order food delivery. RideShare connects you to reliable transportation and delivery services in your city.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "RideShare - Your Reliable Transportation Solution",
    description: "Book a ride, become a driver, or order food delivery. RideShare connects you to reliable transportation and delivery services in your city.",
  },
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}