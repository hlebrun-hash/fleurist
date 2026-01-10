'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Flower2, PartyPopper, Calendar, Building2, ArrowRight } from 'lucide-react';

const services = [
    {
        id: 'bouquets',
        title: 'Bouquets Sur Mesure',
        description: 'Des créations uniques, composées avec passion selon vos envies, vos couleurs et l\'occasion. Chaque bouquet raconte votre histoire.',
        icon: Flower2,
        link: '/produits',
        color: 'bg-primary/10 text-primary',
    },
    {
        id: 'evenements',
        title: 'Mariages & Événements',
        description: 'Décoration florale complète pour vos moments les plus précieux. Du bouquet de mariée aux centres de table.',
        icon: PartyPopper,
        link: '/contact',
        color: 'bg-accent/30 text-accent-foreground',
    },
    {
        id: 'abonnement',
        title: 'Abonnement Floral',
        description: 'Des fleurs fraîches livrées chez vous ou au bureau chaque semaine. L\'élégance au quotidien.',
        icon: Calendar,
        link: '/contact',
        color: 'bg-secondary text-secondary-foreground',
    },
    {
        id: 'entreprises',
        title: 'Fleurs pour Entreprises',
        description: 'Sublimez vos espaces professionnels et impressionnez vos clients avec des compositions régulières.',
        icon: Building2,
        link: '/contact',
        color: 'bg-muted text-muted-foreground',
    },
];

export function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                        Nos Services
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
                        L'Art Floral au Service de Vos <span className="text-primary">Émotions</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        De la création unique au service régulier, nous accompagnons chaque moment de votre vie avec des fleurs d'exception.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            viewport={{ once: true }}
                        >
                            <Link href={service.link} className="group block h-full">
                                <div className="h-full p-8 bg-card border border-border rounded-3xl hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                                    <div className={`inline-flex p-4 rounded-2xl ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-8 h-8" />
                                    </div>

                                    <h3 className="text-2xl font-bold font-serif mb-4 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                                        <span>En savoir plus</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
