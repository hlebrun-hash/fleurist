'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flower2, PartyPopper, Calendar, Building2, X, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/lib/data';

const iconMap = {
    Flower2: Flower2,
    PartyPopper: PartyPopper,
    Calendar: Calendar,
    Building2: Building2,
};

export function ServicesSection() {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {services.map((service, index) => {
                        // @ts-ignore - Lucide icons mapping dynamic
                        const Icon = iconMap[service.icon];

                        return (
                            <motion.div
                                key={service.id}
                                layoutId={`card-${service.id}`}
                                onClick={() => setSelectedService(service)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-background border border-border/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer"
                            >
                                {/* Image Area */}
                                <div className="relative h-48 overflow-hidden">
                                    <motion.div
                                        layoutId={`image-${service.id}`}
                                        className="w-full h-full relative"
                                    >
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
                                            quality={60}
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </motion.div>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />

                                    {/* Icon Floating Badge */}
                                    <div className="absolute -bottom-6 left-6 p-4 bg-background border border-border shadow-md text-secondary group-hover:text-primary transition-colors duration-300 z-10">
                                        {Icon && <Icon size={28} strokeWidth={1.5} />}
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-8 pt-10 flex-grow flex flex-col">
                                    <motion.h3
                                        layoutId={`title-${service.id}`}
                                        className="text-xl font-serif font-semibold mb-3 text-foreground group-hover:text-primary transition-colors"
                                    >
                                        {service.title}
                                    </motion.h3>

                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        {service.description}
                                    </p>

                                    <div className="mt-auto pt-4 flex items-center text-primary font-medium text-sm gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                        En découvrir plus <ArrowRight size={16} />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Fullscreen Modal Overlay */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-background flex flex-col md:flex-row overflow-hidden"
                    >
                        {/* Close Button (Fixed) */}
                        <button
                            onClick={() => setSelectedService(null)}
                            className="absolute top-6 right-6 z-50 p-3 bg-background/80 hover:bg-background text-foreground backdrop-blur-md rounded-full border border-border/50 shadow-lg transition-all duration-300 hover:rotate-90 hover:scale-110"
                        >
                            <X size={28} />
                        </button>

                        {/* Image Section (Half Screen Desktop / Top Mobile) */}
                        <div className="w-full md:w-1/2 h-[40vh] md:h-full p-4 md:p-8">
                            <motion.div
                                layoutId={`image-${selectedService.id}`}
                                className="w-full h-full relative overflow-hidden shadow-lg"
                            >
                                <Image
                                    src={selectedService.image}
                                    alt={selectedService.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    quality={60}
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20" />
                            </motion.div>
                        </div>

                        {/* Content Section (Half Screen Desktop / Bottom Mobile) */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="w-full md:w-1/2 h-[60vh] md:h-full overflow-y-auto bg-background p-8 md:p-16 flex flex-col"
                        >
                            <div className="max-w-xl mx-auto space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-primary">
                                        {(() => {
                                            // @ts-ignore
                                            const Icon = iconMap[selectedService.icon];
                                            return Icon ? <Icon size={32} /> : null;
                                        })()}
                                        <span className="text-sm font-bold uppercase tracking-wider">Service Proposé</span>
                                    </div>

                                    <motion.h3
                                        layoutId={`title-${selectedService.id}`}
                                        className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight"
                                    >
                                        {selectedService.title}
                                    </motion.h3>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                            {/* @ts-ignore - Data added dynamically */}
                                            {selectedService.detailedDescription}
                                        </p>
                                    </div>

                                    <div className="bg-secondary/5 p-8 rounded-2xl border border-secondary/10">
                                        <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                                            <span className="w-8 h-1 bg-secondary rounded-full" />
                                            Notre Processus
                                        </h4>
                                        <ul className="space-y-4">
                                            {/* @ts-ignore - Data added dynamically */}
                                            {selectedService.process?.map((step: string, i: number) => (
                                                <li key={i} className="flex items-start gap-4 text-foreground/80">
                                                    <div className="mt-1 min-w-6 min-h-6 flex items-center justify-center rounded-full bg-secondary/20 text-secondary text-xs font-bold">
                                                        {i + 1}
                                                    </div>
                                                    <span className="text-base">{step}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-8">
                                        <Link
                                            href={`/contact?subject=${selectedService.id}`}
                                            className="group flex items-center justify-between w-full p-6 bg-foreground text-background rounded-xl text-lg font-bold hover:bg-primary hover:text-foreground transition-all duration-300"
                                        >
                                            <span>Demander un devis pour ce service</span>
                                            <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
