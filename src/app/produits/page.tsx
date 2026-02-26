'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data';
import { Search, Filter, ArrowRight, X } from 'lucide-react';
import { useScrollVisibility } from '@/hooks/use-scroll-visibility';
import { cn } from '@/lib/utils';

const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'bouquet', label: 'Bouquets' },
    { id: 'fleurs-sechees', label: 'Fleurs Séchées' },
    { id: 'plante', label: 'Plantes' },
    { id: 'accessoire', label: 'Accessoires' },
];

export default function ProduitsPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showFilters, setShowFilters] = useState(false);
    const { isVisible } = useScrollVisibility();

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesSearch =
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.tags.some((tag) =>
                    tag.toLowerCase().includes(searchQuery.toLowerCase())
                );

            const matchesCategory =
                selectedCategory === 'all' || product.category === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Hero Header */}
            <section className="relative py-16 bg-secondary/30">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
                            Nos <span className="text-primary">Créations</span> Florales
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Découvrez notre collection de bouquets artisanaux, chaque composition
                            est une œuvre unique créée avec passion et savoir-faire.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters Section */}
            <section
                className={cn(
                    "sticky z-40 bg-background/95 backdrop-blur-xl border-b border-border py-4 shadow-sm transition-all duration-300",
                    isVisible ? "top-[80px]" : "top-0" // Desktop: suit la navbar. Mobile: top-0 (navbar en bas) mais on peut affiner.
                )}
            >
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Rechercher un bouquet, une occasion..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-card focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-4 top-1/2 -translate-y-1/2"
                                >
                                    <X className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                                </button>
                            )}
                        </div>

                        {/* Category Filters - Desktop */}
                        <div className="hidden md:flex items-center gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-5 py-2 rounded-full font-medium transition-all ${selectedCategory === category.id
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                                        }`}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Filter Button */}
                        <button
                            className="md:hidden flex items-center gap-2 px-4 py-2 border border-border rounded-full"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <Filter className="w-4 h-4" />
                            <span>Filtrer</span>
                        </button>
                    </div>

                    {/* Mobile Filters */}
                    <AnimatePresence>
                        {showFilters && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="md:hidden overflow-hidden"
                            >
                                <div className="flex flex-wrap gap-2 pt-4">
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => {
                                                setSelectedCategory(category.id);
                                                setShowFilters(false);
                                            }}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category.id
                                                ? 'bg-primary text-primary-foreground'
                                                : 'bg-secondary text-secondary-foreground'
                                                }`}
                                        >
                                            {category.label}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-12 relative z-0">
                <div className="container mx-auto px-6">
                    {/* Results count */}
                    <p className="text-muted-foreground mb-8">
                        {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.05,
                                    }}
                                >
                                    <Link
                                        href={`/produits/${product.slug}`}
                                        className="group block"
                                    >
                                        <div className="relative aspect-[3/4] overflow-hidden mb-4">
                                            <Image
                                                src={product.images[0]}
                                                alt={product.name}
                                                fill
                                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                                quality={60}
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            {/* Price badge */}
                                            <div className="absolute top-3 right-3 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                                                <span className="font-semibold text-sm text-foreground">
                                                    {product.price.max
                                                        ? `${product.price.min}€ - ${product.price.max}€`
                                                        : `${product.price.min}€`}
                                                </span>
                                            </div>

                                            {/* Featured badge */}
                                            {product.featured && (
                                                <div className="absolute top-3 left-3 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                                                    Coup de cœur
                                                </div>
                                            )}

                                            {/* Hover button */}
                                            <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                                                <div className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-full text-sm font-medium">
                                                    <span>Voir le produit</span>
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <h3 className="text-lg font-bold font-serif group-hover:text-primary transition-colors">
                                                {product.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground line-clamp-2">
                                                {product.shortDescription}
                                            </p>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Empty state */}
                    {filteredProducts.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <p className="text-xl text-muted-foreground mb-4">
                                Aucun produit ne correspond à votre recherche
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedCategory('all');
                                }}
                                className="text-primary font-medium hover:underline"
                            >
                                Réinitialiser les filtres
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}
