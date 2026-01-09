"use client";

import { motion } from "framer-motion";
import { Heart, Leaf, Clock } from "lucide-react";

const empathyPoints = [
    {
        icon: Heart,
        title: "On vous comprend",
        text: "Vous cherchez le bouquet parfait pour exprimer vos émotions ? Nous savons que chaque occasion est unique.",
    },
    {
        icon: Clock,
        title: "Pas le temps de chercher ?",
        text: "Entre le travail et la vie quotidienne, trouver le temps de choisir des fleurs peut être compliqué.",
    },
    {
        icon: Leaf,
        title: "Qualité incertaine ?",
        text: "Marre des fleurs fanées en 3 jours ? Vous méritez des créations fraîches qui durent.",
    },
];

export function EmpathySection() {
    return (
        <section className="py-20 md:py-28 bg-muted/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2
                        className="text-3xl md:text-4xl text-foreground mb-6"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                        Nous comprenons vos besoins
                    </h2>
                    <p
                        className="text-muted-foreground text-lg"
                        style={{ fontFamily: "var(--font-outfit)" }}
                    >
                        Offrir des fleurs devrait être un plaisir, pas une source de stress.
                        C&apos;est pourquoi nous avons créé un espace où beauté rime avec simplicité.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {empathyPoints.map((point, index) => {
                        const Icon = point.icon;
                        return (
                            <motion.div
                                key={point.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="relative bg-card p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                    <Icon size={28} className="text-primary" />
                                </div>
                                <h3
                                    className="text-xl text-foreground mb-3"
                                    style={{ fontFamily: "var(--font-cormorant)" }}
                                >
                                    {point.title}
                                </h3>
                                <p
                                    className="text-muted-foreground text-sm leading-relaxed"
                                    style={{ fontFamily: "var(--font-outfit)" }}
                                >
                                    {point.text}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
