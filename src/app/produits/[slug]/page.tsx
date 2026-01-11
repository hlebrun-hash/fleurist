'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data';
import { ArrowLeft, ArrowRight, Phone, Check, Truck, ShieldCheck, Clock } from 'lucide-react';
import { notFound } from 'next/navigation';

interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
    const { slug } = use(params);
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    const faqs = [
        {
            question: `Comment entretenir ${product.name} ?`,
            answer: "Coupez les tiges en biais, changez l'eau tous les 2 jours, et gardez le bouquet à l'abri du soleil direct et des sources de chaleur."
        },
        {
            question: "Quelle est la durée de vie du bouquet ?",
            answer: "Avec un entretien approprié, nos bouquets durent généralement entre 7 et 14 jours selon les variétés de fleurs."
        },
        {
            question: "Livrez-vous ce produit ?",
            answer: "Oui ! Nous livrons dans tout Paris et l'Île-de-France. Livraison gratuite à partir de 60€ d'achat."
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Breadcrumb */}
            <nav className="container mx-auto px-6 py-4">
                <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                    <li>
                        <Link href="/" className="hover:text-primary transition-colors">
                            Accueil
                        </Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link href="/produits" className="hover:text-primary transition-colors">
                            Nos Bouquets
                        </Link>
                    </li>
                    <li>/</li>
                    <li className="text-foreground font-medium">{product.name}</li>
                </ol>
            </nav>

            {/* Product Hero */}
            <section className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden sticky top-24">
                            <Image
                                src={product.images[0]}
                                alt={product.name}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                quality={70}
                                className="object-cover"
                                priority
                            />
                            {product.featured && (
                                <div className="absolute top-4 left-4 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-full">
                                    Coup de cœur
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full mb-4">
                                {product.category === 'bouquet' && 'Bouquet'}
                                {product.category === 'fleurs-sechees' && 'Fleurs Séchées'}
                                {product.category === 'plante' && 'Plante'}
                                {product.category === 'accessoire' && 'Accessoire'}
                            </span>

                            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                                {product.name}
                            </h1>

                            <p className="text-3xl font-bold text-primary">
                                {product.price.max
                                    ? `${product.price.min}€ - ${product.price.max}€`
                                    : `${product.price.min}€`}
                            </p>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {product.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {product.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-secondary/50 text-sm rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="space-y-4">
                            <Link
                                href="/contact"
                                className="flex items-center justify-center gap-3 w-full py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:scale-[1.02] transition-transform shadow-lg"
                            >
                                <Phone className="w-5 h-5" />
                                <span>Commander ce bouquet</span>
                            </Link>

                            <a
                                href="tel:0123456789"
                                className="flex items-center justify-center gap-2 w-full py-3 border-2 border-border rounded-full hover:border-primary transition-colors"
                            >
                                <span className="text-muted-foreground">Ou appelez-nous :</span>
                                <span className="font-semibold">01 23 45 67 89</span>
                            </a>
                        </div>

                        {/* Trust badges */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                            <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl">
                                <Truck className="w-6 h-6 text-primary" />
                                <div>
                                    <p className="font-medium text-sm">Livraison Paris</p>
                                    <p className="text-xs text-muted-foreground">Sous 24-48h</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl">
                                <ShieldCheck className="w-6 h-6 text-primary" />
                                <div>
                                    <p className="font-medium text-sm">Fraîcheur garantie</p>
                                    <p className="text-xs text-muted-foreground">7 jours min.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-xl">
                                <Clock className="w-6 h-6 text-primary" />
                                <div>
                                    <p className="font-medium text-sm">Click & Collect</p>
                                    <p className="text-xs text-muted-foreground">En 2h</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Storytelling Section */}
            <section className="bg-secondary/20 py-16 mt-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold font-serif mb-8 text-center">
                            L'histoire de <span className="text-primary">{product.name}</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    <Check className="w-5 h-5 text-primary" />
                                    Créé avec passion
                                </h3>
                                <p className="text-muted-foreground">
                                    Chaque bouquet est composé à la main par nos artisans fleuristes,
                                    avec un souci du détail et une attention particulière à l'harmonie des couleurs.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    <Check className="w-5 h-5 text-primary" />
                                    Fleurs de saison
                                </h3>
                                <p className="text-muted-foreground">
                                    Nous sélectionnons les plus belles fleurs de saison auprès de nos
                                    producteurs partenaires pour garantir fraîcheur et qualité.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold font-serif mb-8 text-center">
                            Questions fréquentes
                        </h2>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.details
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group p-6 bg-card border border-border rounded-2xl"
                                >
                                    <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                                        {faq.question}
                                        <ArrowRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                                    </summary>
                                    <p className="mt-4 text-muted-foreground">
                                        {faq.answer}
                                    </p>
                                </motion.details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section className="py-16 bg-secondary/20">
                    <div className="container mx-auto px-6">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold font-serif">
                                Vous aimerez aussi
                            </h2>
                            <Link
                                href="/produits"
                                className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                            >
                                Voir tout
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {relatedProducts.map((relProduct) => (
                                <Link
                                    key={relProduct.id}
                                    href={`/produits/${relProduct.slug}`}
                                    className="group"
                                >
                                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-3">
                                        <Image
                                            src={relProduct.images[0]}
                                            alt={relProduct.name}
                                            fill
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                            quality={60}
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                                        {relProduct.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        À partir de {relProduct.price.min}€
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Back link */}
            <div className="container mx-auto px-6 pt-8">
                <Link
                    href="/produits"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Retour aux produits
                </Link>
            </div>

            {/* Schema.org Product */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Product',
                        name: product.name,
                        description: product.description,
                        image: product.images[0],
                        brand: {
                            '@type': 'Brand',
                            name: 'Jardin Digital',
                        },
                        offers: {
                            '@type': 'AggregateOffer',
                            lowPrice: product.price.min,
                            highPrice: product.price.max || product.price.min,
                            priceCurrency: 'EUR',
                            availability: product.inStock
                                ? 'https://schema.org/InStock'
                                : 'https://schema.org/OutOfStock',
                        },
                    }),
                }}
            />
        </div>
    );
}
