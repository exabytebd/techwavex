import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/site/providers";
import { SiteShell } from "@/components/site/site-shell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://techwavex.com"),
  title: {
    default: "TechWave-X | Technology Services, eCommerce Growth & Practical Training",
    template: "%s | TechWave-X",
  },
  description:
    "TechWave-X helps founders, teams, and learners build digital businesses and careers through technology services, ecommerce support, software solutions, digital growth, and industry-focused training.",
  openGraph: {
    title: "TechWave-X",
    description: "Premium technology services and practical training for digital growth.",
    url: "https://techwavex.com",
    siteName: "TechWave-X",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full">
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  );
}
