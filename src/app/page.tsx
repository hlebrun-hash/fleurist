'use client';

import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { EmpathySection } from '@/components/sections/EmpathySection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { FeaturedProductsSection } from '@/components/sections/FeaturedProductsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Scroll Expansion */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/Prompts_For_AI_Flower_Arrangement.mp4"
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

      {/* Empathy Section - Connect emotionally */}
      <EmpathySection />

      {/* Services Section */}
      <ServicesSection />

      {/* Featured Products */}
      <FeaturedProductsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* About Section */}
      <AboutSection />

      {/* Call to Action */}
      <CTASection />
    </>
  );
}
