"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";

const blogPosts = [
    {
        slug: "garder-bouquet-frais-10-jours",
        title: "5 astuces de grand-mère pour garder votre bouquet frais plus de 10 jours",
        excerpt: "Découvrez les secrets transmis de génération en génération pour prolonger la vie de vos fleurs coupées.",
        image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80",
        category: "Conseils",
        readTime: "5 min",
        date: "8 janvier 2026",
    },
    {
        slug: "saint-valentin-signification-roses",
        title: "Saint-Valentin : La signification cachée derrière la couleur des roses",
        excerpt: "Rouge, rose, blanche... Chaque couleur de rose porte un message unique. Apprenez à parler le langage des fleurs.",
        image: "https://images.unsplash.com/photo-1518882605630-8f90a5227c90?w=800&q=80",
        category: "Culture florale",
        readTime: "4 min",
        date: "5 janvier 2026",
    },
    {
        slug: "fleurs-sechees-tendance-boheme",
        title: "Fleurs séchées : Comment adopter la tendance bohème chic chez soi ?",
        excerpt: "Le slow flower s'invite dans nos intérieurs. Guide complet pour créer vos propres compositions durables.",
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
        category: "Décoration",
        readTime: "6 min",
        date: "28 décembre 2025",
    },
    {
        slug: "plantes-interieur-increvables",
        title: "Les 10 plantes d'intérieur increvables pour ceux qui n'ont pas la main verte",
        excerpt: "Vous tuez toutes vos plantes ? Voici notre sélection de variétés quasi-immortelles, parfaites pour les débutants.",
        image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
        category: "Plantes",
        readTime: "7 min",
        date: "20 décembre 2025",
    },
    {
        slug: "fleurs-saison-francaises-calendrier",
        title: "Pourquoi privilégier les fleurs de saison et françaises ? (Calendrier inclus)",
        excerpt: "Écologie, fraîcheur, économies... Tous les avantages des fleurs locales avec notre calendrier des saisons.",
        image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&q=80",
        category: "Éco-responsable",
        readTime: "8 min",
        date: "15 décembre 2025",
    },
];

export default function BlogPage() {
    return (
        <div className="pt-24 pb-20">
            {/* Hero */}
            <section className="container mx-auto px-6 pb-16">
                <HandWrittenTitle
                    title="Notre Journal"
                    subtitle="Conseils, inspirations et coulisses de notre métier"
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-muted-foreground max-w-2xl mx-auto"
                    style={{ fontFamily: "var(--font-outfit)" }}
                >
                    Plongez dans l&apos;univers de l&apos;art floral. Des astuces pratiques,
                    des inspirations décoration et les secrets du métier de fleuriste.
                </motion.p>
            </section>

            {/* Featured Post */}
            <section className="container mx-auto px-6 pb-16">
                <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative bg-card rounded-3xl overflow-hidden shadow-lg max-w-5xl mx-auto"
                >
                    <Link href={`/blog/${blogPosts[0].slug}`} className="group block">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Image */}
                            <div className="relative aspect-[4/3] lg:aspect-auto">
                                <Image
                                    src={blogPosts[0].image}
                                    alt={blogPosts[0].title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute top-4 left-4">
                                    <span
                                        className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium"
                                        style={{ fontFamily: "var(--font-outfit)" }}
                                    >
                                        À la une
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                                    <span className="flex items-center gap-1.5">
                                        <Calendar size={14} />
                                        {blogPosts[0].date}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock size={14} />
                                        {blogPosts[0].readTime}
                                    </span>
                                </div>

                                <h2
                                    className="text-2xl lg:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors"
                                    style={{ fontFamily: "var(--font-cormorant)" }}
                                >
                                    {blogPosts[0].title}
                                </h2>

                                <p
                                    className="text-muted-foreground mb-6"
                                    style={{ fontFamily: "var(--font-outfit)" }}
                                >
                                    {blogPosts[0].excerpt}
                                </p>

                                <span
                                    className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all"
                                    style={{ fontFamily: "var(--font-outfit)" }}
                                >
                                    Lire l&apos;article
                                    <ArrowRight size={18} />
                                </span>
                            </div>
                        </div>
                    </Link>
                </motion.article>
            </section>

            {/* Blog Grid */}
            <section className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {blogPosts.slice(1).map((post, index) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            className="group bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                            <Link href={`/blog/${post.slug}`}>
                                {/* Image */}
                                <div className="relative aspect-[3/2] overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span
                                            className="bg-card/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium"
                                            style={{ fontFamily: "var(--font-outfit)" }}
                                        >
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                                        <span className="flex items-center gap-1">
                                            <Calendar size={12} />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock size={12} />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h3
                                        className="text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2"
                                        style={{ fontFamily: "var(--font-cormorant)" }}
                                    >
                                        {post.title}
                                    </h3>

                                    <p
                                        className="text-sm text-muted-foreground line-clamp-2"
                                        style={{ fontFamily: "var(--font-outfit)" }}
                                    >
                                        {post.excerpt}
                                    </p>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* Schema.org BlogPosting */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "name": "Journal - Jardin Digital",
                        "description": "Conseils floraux, inspirations et coulisses du métier de fleuriste",
                        "url": "https://jardindigital.fr/blog",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Jardin Digital",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://jardindigital.fr/images/logo.png"
                            }
                        },
                        "blogPost": blogPosts.map(post => ({
                            "@type": "BlogPosting",
                            "headline": post.title,
                            "description": post.excerpt,
                            "image": post.image,
                            "datePublished": post.date,
                            "author": {
                                "@type": "Person",
                                "name": "Jardin Digital"
                            }
                        }))
                    })
                }}
            />
        </div>
    );
}
