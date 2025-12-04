import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SectorProvider } from "@/contexts/SectorContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ura-Tech Global Services Ltd - Vehicle Rentals & Logistics | Abuja, Nigeria",
  description: "Your trusted partner in vehicle rentals & logistics. Short-term and long-term vehicle rentals, airport pickups, corporate fleet hires, and secure logistics solutions in Abuja, Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <SectorProvider>
          {children}
        </SectorProvider>
      </body>
    </html>
  );
}
