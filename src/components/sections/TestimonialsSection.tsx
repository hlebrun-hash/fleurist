"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Marie L.",
        text: "Un vrai coup de cœur ! Les bouquets sont magnifiques et durent vraiment longtemps. Le fleuriste prend le temps de conseiller et ça fait toute la différence.",
        rating: 5,
        occasion: "Anniversaire",
    },
    {
        name: "Thomas D.",
        text: "J'ai commandé Le Prestige pour ma femme. Elle était émue aux larmes. La qualité est exceptionnelle et le prix reste raisonnable pour ce niveau de service.",
        rating: 5,
        occasion: "Saint-Valentin",
    },
    {
        name: "Sophie M.",
        text: "Enfin un fleuriste qui affiche ses prix clairement ! Plus de mauvaises surprises. Et les fleurs sont toujours fraîches, c'est un vrai plaisir de venir ici.",
        rating: 5,
        occasion: "Décoration maison",
    },
];

export function TestimonialsSection() {
    return (
        <section className="py-20 md:py-28 bg-muted/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2
                        className="text-3xl md:text-4xl text-foreground mb-4"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                        Ce que disent nos clients
                    </h2>
                    <p
                        className="text-muted-foreground"
                        style={{ fontFamily: "var(--font-outfit)" }}
                    >
                        La confiance se construit jour après jour. Merci à tous ceux qui nous font confiance.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.article
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="bg-card p-8 rounded-3xl shadow-sm relative"
                        >
                            {/* Quote icon */}
                            <Quote
                                size={40}
                                className="absolute top-6 right-6 text-primary/20"
                                strokeWidth={1}
                            />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        className="fill-primary text-primary"
                                    />
                                ))}
                            </div>

                            {/* Text */}
                            <blockquote
                                className="text-foreground/90 text-sm leading-relaxed mb-6"
                                style={{ fontFamily: "var(--font-outfit)" }}
                            >
                                &ldquo;{testimonial.text}&rdquo;
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <p
                                        className="font-semibold text-foreground"
                                        style={{ fontFamily: "var(--font-cormorant)" }}
                                    >
                                        {testimonial.name}
                                    </p>
                                    <p
                                        className="text-xs text-muted-foreground"
                                        style={{ fontFamily: "var(--font-outfit)" }}
                                    >
                                        {testimonial.occasion}
                                    </p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Google Reviews Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full shadow-sm">
                        <div className="flex gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    size={16}
                                    className="fill-primary text-primary"
                                />
                            ))}
                        </div>
                        <span
                            className="text-sm text-muted-foreground"
                            style={{ fontFamily: "var(--font-outfit)" }}
                        >
                            4.9/5 sur Google (127 avis)
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
