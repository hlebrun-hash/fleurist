"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import { OrganicButton } from "@/components/ui/organic-button";
import { Leaf, Heart, Sparkles, Users } from "lucide-react";

const values = [
    {
        icon: Leaf,
        title: "Local & Éco-responsable",
        description: "Nous privilégions les producteurs français et les fleurs de saison pour réduire notre empreinte carbone.",
    },
    {
        icon: Heart,
        title: "Passion & Savoir-faire",
        description: "Chaque bouquet est une œuvre unique, composée avec amour et expertise par nos artisans fleuristes.",
    },
    {
        icon: Sparkles,
        title: "Transparence & Qualité",
        description: "Des prix clairs, des fleurs fraîches. Pas de mauvaise surprise, juste de belles émotions.",
    },
];

const team = [
    {
        name: "Marie",
        role: "Fondatrice & Créatrice",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
        bio: "15 ans de passion florale. Marie a appris l'art des bouquets auprès de sa grand-mère dans le sud de la France.",
    },
    {
        name: "Lucas",
        role: "Fleuriste Artisan",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
        bio: "Spécialiste des compositions contemporaines. Lucas apporte une touche moderne à nos créations.",
    },
    {
        name: "Emma",
        role: "Responsable Boutique",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
        bio: "Toujours le sourire ! Emma vous accueille et vous conseille pour trouver le bouquet parfait.",
    },
];

export default function AProposPage() {
    return (
        <div className="pt-24 pb-20">
            {/* Hero */}
            <section className="container mx-auto px-6 pb-16">
                <HandWrittenTitle
                    title="Notre Histoire"
                    subtitle="L'art floral au cœur de Paris depuis 2010"
                />
            </section>

            {/* Story Section */}
            <section className="container mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div
                            className="relative aspect-[3/4] overflow-hidden shadow-2xl"
                            style={{ borderRadius: "40px 16px 40px 16px" }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                                alt="Notre boutique au cœur de Paris"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div
                            className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 -z-10"
                            style={{ borderRadius: "50% 20% 50% 20%" }}
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 order-1 lg:order-2"
                    >
                        <h2
                            className="text-3xl md:text-4xl text-foreground"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                            Pourquoi Jardin Digital ?
                        </h2>

                        <div className="space-y-4" style={{ fontFamily: "var(--font-outfit)" }}>
                            <p className="text-muted-foreground leading-relaxed">
                                Tout a commencé par un rêve d&apos;enfant. Marie, notre fondatrice,
                                passait ses étés dans le jardin de sa grand-mère en Provence,
                                entourée de roses, de lavande et de tournesols.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                En 2010, elle ouvre <strong>Jardin Digital</strong> au cœur du 11e arrondissement.
                                Le nom ? Un clin d&apos;œil à cette époque où tout devient numérique,
                                mais où le toucher, l&apos;odeur et l&apos;émotion restent irremplaçables.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Aujourd&apos;hui, notre équipe perpétue cette vision : créer des bouquets
                                qui racontent une histoire, avec des fleurs choisies avec soin
                                et un savoir-faire artisanal.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-muted/50">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2
                            className="text-3xl md:text-4xl text-foreground mb-4"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                            Nos Valeurs
                        </h2>
                        <p
                            className="text-muted-foreground max-w-2xl mx-auto"
                            style={{ fontFamily: "var(--font-outfit)" }}
                        >
                            Ce qui nous guide chaque jour dans notre métier.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="bg-card p-8 rounded-3xl text-center shadow-sm"
                                >
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                        <Icon size={32} className="text-primary" />
                                    </div>
                                    <h3
                                        className="text-xl text-foreground mb-3"
                                        style={{ fontFamily: "var(--font-cormorant)" }}
                                    >
                                        {value.title}
                                    </h3>
                                    <p
                                        className="text-muted-foreground text-sm"
                                        style={{ fontFamily: "var(--font-outfit)" }}
                                    >
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Users size={28} className="text-primary" />
                            <h2
                                className="text-3xl md:text-4xl text-foreground"
                                style={{ fontFamily: "var(--font-cormorant)" }}
                            >
                                Notre Équipe
                            </h2>
                        </div>
                        <p
                            className="text-muted-foreground max-w-2xl mx-auto"
                            style={{ fontFamily: "var(--font-outfit)" }}
                        >
                            Les visages derrière vos bouquets.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="text-center"
                            >
                                <div
                                    className="relative w-48 h-48 mx-auto mb-6 overflow-hidden"
                                    style={{ borderRadius: "50% 50% 40% 60% / 60% 40% 60% 40%" }}
                                >
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3
                                    className="text-2xl text-foreground mb-1"
                                    style={{ fontFamily: "var(--font-cormorant)" }}
                                >
                                    {member.name}
                                </h3>
                                <p
                                    className="text-primary text-sm font-medium mb-3"
                                    style={{ fontFamily: "var(--font-outfit)" }}
                                >
                                    {member.role}
                                </p>
                                <p
                                    className="text-muted-foreground text-sm"
                                    style={{ fontFamily: "var(--font-outfit)" }}
                                >
                                    {member.bio}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary/5">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2
                            className="text-3xl md:text-4xl text-foreground mb-6"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                            Maintenant que vous nous connaissez...
                        </h2>
                        <p
                            className="text-muted-foreground mb-8 max-w-xl mx-auto"
                            style={{ fontFamily: "var(--font-outfit)" }}
                        >
                            Venez nous rencontrer en boutique ou découvrez nos créations en ligne.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/produits">
                                <OrganicButton variant="primary" size="lg">
                                    Découvrir nos bouquets
                                </OrganicButton>
                            </Link>
                            <Link href="/contact">
                                <OrganicButton variant="outline" size="lg">
                                    Nous rendre visite
                                </OrganicButton>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Schema.org */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "mainEntity": {
                            "@type": "Florist",
                            "name": "Jardin Digital",
                            "foundingDate": "2010",
                            "founder": {
                                "@type": "Person",
                                "name": "Marie"
                            },
                            "numberOfEmployees": 3,
                            "slogan": "L'art floral, simplement."
                        }
                    })
                }}
            />
        </div>
    );
}
