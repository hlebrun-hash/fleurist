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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-foreground">
            Bienvenue dans notre <span className="text-primary">univers floral</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Depuis 2016, nous créons des compositions florales uniques qui capturent l'essence
            de vos émotions. Chaque bouquet est une œuvre d'art, pensée et réalisée avec passion
            par nos artisans fleuristes au cœur du 11ème arrondissement de Paris.
          </p>
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
