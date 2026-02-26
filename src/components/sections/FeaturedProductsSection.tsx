'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

export function FeaturedProductsSection() {
    const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

    return (
        <section id="bouquets" className="py-24 bg-background">
            <div className="container mx-auto px-8 md:px-12 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                        Nos Créations
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
                        Bouquets <span className="text-primary">Coup de Cœur</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Découvrez nos compositions les plus appréciées, créées avec amour par nos artisans fleuristes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {featuredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href={`/produits/${product.slug}`}
                                className="group block"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden mb-4">
                                    <Image
                                        src={product.images[0]}
                                        alt={product.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
                                        quality={60}
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Badges container */}
                                    <div className="absolute top-2 left-2 right-2 md:top-4 md:left-4 md:right-4 flex flex-wrap gap-2 justify-end z-10">
                                        {/* Price badge */}
                                        <div className="px-2.5 py-1 md:px-4 md:py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm ml-auto">
                                            <span className="font-semibold text-[11px] md:text-sm text-foreground whitespace-nowrap">
                                                {product.price.max
                                                    ? `${product.price.min}€ - ${product.price.max}€`
                                                    : `${product.price.min}€`}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Quick view button */}
                                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                        <div className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-full font-medium">
                                            <span>Découvrir</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold font-serif group-hover:text-primary transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-muted-foreground line-clamp-2">
                                        {product.shortDescription}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {product.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs px-3 py-1 bg-secondary rounded-full text-secondary-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Link
                        href="/produits"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                    >
                        <span>Voir tous nos bouquets</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
