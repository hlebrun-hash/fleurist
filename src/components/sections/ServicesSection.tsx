'use client';

import { motion } from 'framer-motion';
import { Flower2, PartyPopper, Calendar, Building2 } from 'lucide-react';
import { services } from '@/lib/data';

const iconMap = {
    Flower2: Flower2,
    PartyPopper: PartyPopper,
    Calendar: Calendar,
    Building2: Building2,
};

export function ServicesSection() {
    return (
        <section className="py-24 bg-card/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold font-serif mb-4 text-foreground"
                    >
                        Nos Services
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-1 bg-primary mx-auto rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        // @ts-ignore - Lucide icons mapping dynamic
                        const Icon = iconMap[service.icon];

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative p-8 bg-background rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="mb-6 inline-flex p-4 rounded-xl bg-secondary/10 text-secondary group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                                    {Icon && <Icon size={32} strokeWidth={1.5} />}
                                </div>

                                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/5 rounded-2xl transition-colors duration-500 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
