'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const trendingCategories = [
    {
        id: 'fete-grands-meres',
        title: 'Fête des Grands-Mères',
        subtitle: 'Bientôt ! Dimanche 1er Mars',
        image: '/images/nougatine-linen.png',
        link: '/produits?search=grands-mères',
    },
    {
        id: 'journee-femmes',
        title: 'Journée des Femmes',
        subtitle: '8 Mars - Mimosa & fleurs solaires',
        image: '/images/le-radieux-linen.png',
        link: '/produits?search=femmes',
    },
    {
        id: 'collection-printemps',
        title: 'Collection Printemps',
        subtitle: 'Tulipes, renoncules et anémones',
        image: '/images/les-renoncules-linen.png',
        link: '/produits?search=printemps',
    },
    {
        id: 'paques',
        title: 'Pâques en Famille',
        subtitle: 'Début Avril - Centes de table colorés',
        image: '/images/le-petillant-linen.png',
        link: '/produits?search=pâques',
    },
];

export function TrendingCategoriesSection() {
    return (
        <section className="py-24 bg-secondary/10">
            <div className="container mx-auto px-8 md:px-12 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                        Bientôt en boutique
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
                        Nos catégories <span className="text-primary">du moment</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Découvrez ce que le calendrier floral vous réserve dans les prochaines semaines. Préparez-vous à célébrer le printemps et vos proches !
                    </p>
                </motion.div>

                {/* Grille : 1 par ligne sur mobile? Non le user veut 2 par ligne sur mobile. On met grid-cols-2 */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {trendingCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            viewport={{ once: true }}
                        >
                            <Link href={category.link} className="group block relative w-full aspect-[4/5] rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-xl md:text-2xl font-serif font-bold mb-1 md:mb-2 text-white drop-shadow-lg">{category.title}</h3>
                                    <p className="text-xs md:text-sm text-white/90 font-medium drop-shadow-md">{category.subtitle}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
