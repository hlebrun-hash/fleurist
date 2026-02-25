import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://fleuriste11.vercel.app'),
  title: {
    default: "Jardin Digital | Fleuriste Artisan Paris 11",
    template: "%s | Jardin Digital",
  },
  description:
    "Fleuriste artisan Paris 11ème — bouquets sur mesure, compositions florales, mariages. Livraison Paris et Île-de-France.",
  keywords: [
    "fleuriste paris",
    "bouquet sur mesure",
    "fleuriste paris 11",
    "bouquet de fleurs",
    "livraison fleurs paris",
    "composition florale",
    "mariage fleuriste",
    "abonnement floral",
  ],
  authors: [{ name: "Jardin Digital" }],
  creator: "Jardin Digital",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Jardin Digital",
    title: "Jardin Digital | Fleuriste Artisan Paris 11",
    description:
      "Fleuriste artisan Paris 11ème. Bouquets uniques, mariages, événements. L'art floral au service de vos émotions.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Jardin Digital - Bouquet de fleurs artisanal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jardin Digital | Fleuriste Artisan Paris",
    description: "Bouquets sur mesure et compositions florales uniques au cœur de Paris.",
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


import { Cormorant_Garamond, Mulish } from "next/font/google";
import { Providers } from "./providers"; // Import du provider client

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

import { CustomCursor } from "@/components/ui/custom-cursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${mulish.variable}`}>
      <body className="antialiased font-sans text-foreground bg-background">
        <Providers>
          <CustomCursor />
          <div className="noise-overlay" />

          <Header />
          <main className="overflow-x-hidden w-full">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
