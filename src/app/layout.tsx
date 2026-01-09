import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jardin Digital | Fleuriste Artisan à Paris 11e",
    template: "%s | Jardin Digital",
  },
  description:
    "Découvrez l'art floral au cœur de Paris. Bouquets artisanaux, créations sur-mesure et fleurs de saison. Jardin Digital, votre fleuriste du 11e arrondissement.",
  keywords: [
    "fleuriste Paris",
    "fleuriste 75011",
    "bouquet artisanal",
    "fleurs de saison",
    "livraison fleurs Paris",
    "composition florale",
  ],
  authors: [{ name: "Jardin Digital" }],
  creator: "Jardin Digital",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://jardindigital.fr",
    siteName: "Jardin Digital",
    title: "Jardin Digital | Fleuriste Artisan à Paris",
    description:
      "L'art floral, simplement. Des créations uniques composées avec passion.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jardin Digital - Fleuriste Artisan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jardin Digital | Fleuriste Artisan",
    description: "L'art floral au cœur de Paris",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://jardindigital.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${outfit.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
