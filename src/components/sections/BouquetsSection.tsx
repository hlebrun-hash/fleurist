"use client";

import { motion } from "framer-motion";
import { BouquetCard } from "@/components/ui/bouquet-card";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import Link from "next/link";
import { OrganicButton } from "@/components/ui/organic-button";

const bouquets = [
    {
        name: "La Douceur",
        price: "29,90 €",
        description: "Un bouquet délicat aux teintes pastel, parfait pour illuminer le quotidien.",
        image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80",
    },
    {
        name: "L'Éclat",
        price: "49,90 €",
        description: "Une composition vibrante qui capture l'essence du printemps toute l'année.",
        image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80",
    },
    {
        name: "Le Prestige",
        price: "79,90 €",
        description: "Notre création signature. Un arrangement luxueux pour les moments exceptionnels.",
        image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80",
    },
];

export function BouquetsSection() {
    return (
        <section className="py-20 md:py-28" id="bouquets">
            <div className="container mx-auto px-6">
                {/* Section Title with HandWritten effect */}
                <HandWrittenTitle
                    title="Nos Créations"
                    subtitle="Des bouquets composés avec amour, à des prix transparents"
                />

                {/* Bouquet Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
                    {bouquets.map((bouquet) => (
                        <BouquetCard
                            key={bouquet.name}
                            name={bouquet.name}
                            price={bouquet.price}
                            image={bouquet.image}
                            description={bouquet.description}
                            ctaText="Choisir ce bouquet"
                        />
                    ))}
                </div>

                {/* See All CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Link href="/produits">
                        <OrganicButton variant="outline" size="lg">
                            Découvrir toutes nos créations
                        </OrganicButton>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
