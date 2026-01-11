import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Jardin Digital | Fleuriste Artisan Paris 11ème - Bouquets Sur Mesure",
    template: "%s | Jardin Digital - Fleuriste Paris",
  },
  description:
    "Jardin Digital, votre fleuriste artisan au cœur de Paris 11ème. Bouquets sur mesure, compositions florales uniques, mariages et événements. Livraison Paris et Île-de-France.",
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Jardin Digital",
    title: "Jardin Digital | Fleuriste Artisan Paris - Bouquets Sur Mesure",
    description:
      "Fleuriste artisan au cœur de Paris. Bouquets uniques, mariages, événements. L'art floral au service de vos émotions.",
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

import { CustomCursor } from "@/components/ui/custom-cursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&family=Mulish:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans text-foreground bg-background">
        <CustomCursor />
        <div className="noise-overlay" />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
