import ScrollExpandHero from "@/components/ui/scroll-expansion-hero";
import { EmpathySection } from "@/components/sections/EmpathySection";
import { BouquetsSection } from "@/components/sections/BouquetsSection";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { OrganicButton } from "@/components/ui/organic-button";
import Link from "next/link";

const testimonials = [
  {
    author: {
      name: "Marie L.",
      handle: "Anniversaire de mariage",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Un vrai coup de cœur ! Les bouquets sont magnifiques et durent vraiment longtemps. Le fleuriste prend le temps de conseiller et ça fait toute la différence.",
  },
  {
    author: {
      name: "Thomas D.",
      handle: "Saint-Valentin",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "J'ai commandé Le Prestige pour ma femme. Elle était émue aux larmes. La qualité est exceptionnelle et le prix reste raisonnable.",
  },
  {
    author: {
      name: "Sophie M.",
      handle: "Décoration maison",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Enfin un fleuriste qui affiche ses prix clairement ! Plus de mauvaises surprises. Et les fleurs sont toujours fraîches, c'est un vrai plaisir.",
  },
  {
    author: {
      name: "Pierre B.",
      handle: "Fête des mères",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Ma mère a adoré son bouquet. L'attention aux détails est remarquable. Je recommande vivement cette boutique !",
  },
  {
    author: {
      name: "Camille R.",
      handle: "Mariage",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "Ils ont réalisé toutes les compositions florales de notre mariage. Un travail d'artiste, tout le monde en parlait encore des semaines après.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Scroll Expansion */}
      <ScrollExpandHero
        mediaType="image"
        mediaSrc="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1280&q=80"
        bgImageSrc="https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=1920&q=80"
        title="L'art floral, simplement."
        subtitle="Bouquets artisanaux à Paris 11e"
        scrollHint="Défiler pour découvrir"
      >
        {/* Hero CTA that appears after scroll */}
        <div className="text-center py-12">
          <h2
            className="text-2xl md:text-3xl text-foreground mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Fleuriste Artisan à Paris : Transformez chaque moment en souvenir fleuri
          </h2>
          <p
            className="text-muted-foreground max-w-2xl mx-auto mb-8"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Découvrez nos créations uniques, composées à la main avec des fleurs
            fraîches et de saison. Des prix transparents, un savoir-faire authentique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/produits">
              <OrganicButton variant="primary" size="lg">
                Découvrir nos bouquets
              </OrganicButton>
            </Link>
            <Link href="/contact">
              <OrganicButton variant="outline" size="lg">
                Réserver en boutique
              </OrganicButton>
            </Link>
          </div>
        </div>
      </ScrollExpandHero>

      {/* Empathy Section */}
      <EmpathySection />

      {/* Bouquets Showcase */}
      <BouquetsSection />

      {/* Social Proof with Marquee */}
      <TestimonialsSection
        title="Ce que disent nos clients"
        description="La confiance se construit jour après jour. Merci à tous ceux qui nous font confiance."
        testimonials={testimonials}
      />

      {/* Expertise & Story */}
      <ExpertiseSection />

      {/* Location & Contact */}
      <LocationSection />
    </>
  );
}

