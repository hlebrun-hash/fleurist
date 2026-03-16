'use client';

import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';

import dynamic from 'next/dynamic';

const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection').then(mod => mod.ServicesSection));
const TrendingCategoriesSection = dynamic(() => import('@/components/sections/TrendingCategoriesSection').then(mod => mod.TrendingCategoriesSection));
const FeaturedProductsSection = dynamic(() => import('@/components/sections/FeaturedProductsSection').then(mod => mod.FeaturedProductsSection));
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection').then(mod => mod.TestimonialsSection));
const AboutSection = dynamic(() => import('@/components/sections/AboutSection').then(mod => mod.AboutSection));
const CTASection = dynamic(() => import('@/components/sections/CTASection').then(mod => mod.CTASection));

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Scroll Expansion */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/Prompts_For_AI_Flower_Arrangement.mp4"
        posterSrc="/images/hero-video-poster.png"
        bgImageSrc="/hero-bg.png"
        title="Jardin Digital Artisan Fleuriste Paris"
        subtitle="L'art floral au service de vos émotions"
        scrollToExpand="Découvrez nos créations"
        ctaText="Voir nos bouquets"
        ctaHref="/produits"
        textBlend
      >
        {/* Content after scroll expansion */}
        <div className="max-w-4xl mx-auto text-center py-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10 text-foreground leading-tight">
            Qu'est-ce qui définit l'art floral de <span className="text-primary italic">Jardin Digital</span> ?
          </h2>
          <div className="space-y-6 text-xl text-muted-foreground leading-relaxed text-left md:text-center px-4">
            <p>
              <strong>Jardin Digital</strong> est un atelier de fleuriste artisan situé au cœur du 11ème arrondissement de Paris, spécialisé dans la création de compositions florales éco-responsables et personnalisées. Notre philosophie repose sur l'utilisation de fleurs de saison, sourcées principalement en circuit court, pour garantir une fraîcheur exceptionnelle et une tenue prolongée de nos bouquets. Que vous recherchiez une composition pour un mariage élégant, un événement professionnel sur mesure ou simplement un bouquet unique pour exprimer vos émotions, nos artisans mettent leur expertise au service de votre vision créative.
            </p>
            <p>
              Depuis notre ouverture en 2016, nous nous distinguons par un style qui mêle naturalité sauvage et élégance parisienne. Chaque création est pensée comme une œuvre d'art éphémère, respectant le cycle de la nature. Nous proposons également un service de livraison express dans tout Paris et l'Île-de-France, assurant que vos fleurs arrivent dans des conditions optimales. En choisissant Jardin Digital, vous soutenez un artisanat local passionné qui transforme chaque pétale en un message inoubliable.
            </p>
          </div>
        </div>
      </ScrollExpandMedia>



      {/* Trending Categories */}
      <TrendingCategoriesSection />

      {/* Featured Products */}
      <FeaturedProductsSection />

      {/* Services */}
      <ServicesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* About Section */}
      <AboutSection />

      {/* Call to Action */}
      <CTASection />
    </>
  );
}
