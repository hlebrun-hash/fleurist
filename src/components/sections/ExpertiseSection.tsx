"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { OrganicButton } from "@/components/ui/organic-button";

export function ExpertiseSection() {
    return (
        <section className="py-20 md:py-28 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div
                            className="relative aspect-[4/5] overflow-hidden shadow-2xl"
                            style={{ borderRadius: "40px 16px 40px 16px" }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                                alt="Notre fleuriste en train de composer un bouquet artisanal"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        {/* Decorative element */}
                        <div
                            className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 -z-10"
                            style={{ borderRadius: "50% 20% 50% 20%" }}
                        />
                        <div
                            className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/30 -z-10"
                            style={{ borderRadius: "20% 50% 20% 50%" }}
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl text-foreground"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                            L&apos;art floral, transmis de génération en génération
                        </h2>

                        <div className="space-y-4" style={{ fontFamily: "var(--font-outfit)" }}>
                            <p className="text-muted-foreground leading-relaxed">
                                Depuis notre coin de rue au cœur du 11e arrondissement, nous perpétuons
                                un savoir-faire artisanal. Chaque bouquet est une création unique,
                                pensée pour raconter votre histoire.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Nous sélectionnons nos fleurs avec soin, privilégiant les producteurs
                                locaux et les variétés de saison. C&apos;est notre façon de vous garantir
                                fraîcheur et qualité, tout en respectant la nature.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 py-6 border-y border-border/50">
                            {[
                                { number: "15", label: "Ans d'expérience" },
                                { number: "5000+", label: "Bouquets créés" },
                                { number: "100%", label: "Fleurs fraîches" },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <p
                                        className="text-2xl md:text-3xl font-bold text-primary"
                                        style={{ fontFamily: "var(--font-cormorant)" }}
                                    >
                                        {stat.number}
                                    </p>
                                    <p
                                        className="text-xs text-muted-foreground mt-1"
                                        style={{ fontFamily: "var(--font-outfit)" }}
                                    >
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <Link href="/a-propos">
                            <OrganicButton variant="primary" size="lg">
                                Découvrir notre histoire
                            </OrganicButton>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
