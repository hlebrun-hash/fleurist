"use client";

import { motion } from "framer-motion";
import { BouquetCard } from "@/components/ui/bouquet-card";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import { Metadata } from "next";

const allBouquets = [
    // Bouquets principaux
    {
        name: "La Douceur",
        price: "29,90 €",
        category: "Petit",
        description: "Un bouquet délicat aux teintes pastel, parfait pour illuminer le quotidien.",
        image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80",
    },
    {
        name: "L'Éclat",
        price: "49,90 €",
        category: "Moyen",
        description: "Une composition vibrante qui capture l'essence du printemps toute l'année.",
        image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80",
    },
    {
        name: "Le Prestige",
        price: "79,90 €",
        category: "Grand",
        description: "Notre création signature. Un arrangement luxueux pour les moments exceptionnels.",
        image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80",
    },
    // Bouquets supplémentaires
    {
        name: "L'Aurore",
        price: "34,90 €",
        category: "Petit",
        description: "Des tons chauds de rose et d'orangé pour commencer la journée avec éclat.",
        image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800&q=80",
    },
    {
        name: "Le Romantique",
        price: "54,90 €",
        category: "Moyen",
        description: "Roses et pivoines pour déclarer votre amour avec élégance.",
        image: "https://images.unsplash.com/photo-1518882605630-8f90a5227c90?w=800&q=80",
    },
    {
        name: "Le Champêtre",
        price: "39,90 €",
        category: "Moyen",
        description: "Un air de campagne française avec ses fleurs sauvages et ses herbes folles.",
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
    },
    {
        name: "L'Exotique",
        price: "64,90 €",
        category: "Grand",
        description: "Orchidées et fleurs tropicales pour un voyage sensoriel.",
        image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=800&q=80",
    },
    {
        name: "Le Minimaliste",
        price: "24,90 €",
        category: "Petit",
        description: "L'élégance dans la simplicité. Parfait pour les intérieurs modernes.",
        image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&q=80",
    },
    {
        name: "L'Éternel",
        price: "89,90 €",
        category: "Grand",
        description: "Notre bouquet le plus généreux, pour marquer les grandes occasions.",
        image: "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=800&q=80",
    },
];

const categories = ["Tous", "Petit", "Moyen", "Grand"];

export default function ProduitsPage() {
    return (
        <div className="pt-24 pb-20">
            {/* Hero */}
            <section className="container mx-auto px-6 pb-16">
                <HandWrittenTitle
                    title="Nos Créations"
                    subtitle="Des bouquets composés avec passion, à des prix transparents"
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-muted-foreground max-w-2xl mx-auto"
                    style={{ fontFamily: "var(--font-outfit)" }}
                >
                    Chaque création est unique, composée à la main avec des fleurs fraîches
                    sélectionnées le matin même. Commandez en boutique ou réservez par téléphone.
                </motion.p>
            </section>

            {/* Products Grid */}
            <section className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {allBouquets.map((bouquet, index) => (
                        <motion.div
                            key={bouquet.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <BouquetCard
                                name={bouquet.name}
                                price={bouquet.price}
                                image={bouquet.image}
                                description={bouquet.description}
                                ctaText="Réserver ce bouquet"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ Section for SEO */}
            <section className="container mx-auto px-6 py-20 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2
                        className="text-3xl text-foreground text-center mb-12"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                        Questions Fréquentes
                    </h2>

                    <div className="space-y-6">
                        {[
                            {
                                q: "Combien de temps durent vos bouquets ?",
                                a: "Nos bouquets durent en moyenne 7 à 14 jours selon les fleurs choisies. Nous vous donnons toujours des conseils d'entretien pour maximiser leur durée de vie."
                            },
                            {
                                q: "Puis-je commander un bouquet personnalisé ?",
                                a: "Absolument ! Passez en boutique ou appelez-nous pour discuter de vos envies. Nous créons des compositions sur-mesure pour toutes les occasions."
                            },
                            {
                                q: "Livrez-vous à domicile ?",
                                a: "Nous proposons la livraison dans Paris et la proche banlieue. Contactez-nous pour connaître les tarifs et disponibilités."
                            },
                            {
                                q: "Les prix affichés sont-ils définitifs ?",
                                a: "Oui, tous nos prix sont transparents et définitifs. Pas de mauvaise surprise à la caisse."
                            },
                        ].map((faq, index) => (
                            <motion.details
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-card rounded-2xl p-6 shadow-sm"
                            >
                                <summary
                                    className="cursor-pointer list-none flex items-center justify-between text-foreground font-medium"
                                    style={{ fontFamily: "var(--font-cormorant)" }}
                                >
                                    <span className="text-lg">{faq.q}</span>
                                    <span className="ml-4 text-primary transition-transform group-open:rotate-45">+</span>
                                </summary>
                                <p
                                    className="mt-4 text-muted-foreground leading-relaxed"
                                    style={{ fontFamily: "var(--font-outfit)" }}
                                >
                                    {faq.a}
                                </p>
                            </motion.details>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Schema.org Product structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": allBouquets.map((bouquet, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": "Product",
                                "name": bouquet.name,
                                "description": bouquet.description,
                                "image": bouquet.image,
                                "brand": {
                                    "@type": "Brand",
                                    "name": "Jardin Digital"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "price": bouquet.price.replace(" €", "").replace(",", "."),
                                    "priceCurrency": "EUR",
                                    "availability": "https://schema.org/InStock"
                                }
                            }
                        }))
                    })
                }}
            />
        </div>
    );
}
