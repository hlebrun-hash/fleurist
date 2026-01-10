'use client';

import { motion } from 'framer-motion';

export function EmpathySection() {
    const painPoints = [
        {
            icon: '😔',
            text: "Vous manquez de temps pour trouver le bouquet parfait ?",
        },
        {
            icon: '😟',
            text: "Peur de faire le mauvais choix pour une occasion importante ?",
        },
        {
            icon: '😞',
            text: "Déçu par des fleurs qui fanent trop vite ?",
        },
        {
            icon: '🤔',
            text: "Vous ne savez pas quel message transmettre avec vos fleurs ?",
        },
    ];

    return (
        <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                        Nous vous comprenons
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">
                        Offrir des fleurs devrait être un <span className="text-primary">plaisir</span>, pas un stress
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors group"
                        >
                            <span className="text-3xl group-hover:scale-110 transition-transform">
                                {point.icon}
                            </span>
                            <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                                {point.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-xl font-medium text-foreground">
                        Chez <span className="text-primary font-serif">Jardin Digital</span>, nous avons la solution.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
