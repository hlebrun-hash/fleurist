'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { shopInfo } from '@/lib/data';

export function AboutSection() {
    return (
        <section id="about" className="py-24 bg-secondary/20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="relative max-w-sm mx-auto w-full"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/images/about-artisan-florist.png"
                                alt="Notre équipe de fleuristes passionnés au travail"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                quality={75}
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>

                        {/* Floating badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-6 shadow-xl"
                        >
                            <div className="text-center">
                                <span className="text-4xl font-bold font-serif">10+</span>
                                <p className="text-sm mt-1">ans d'expertise</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                            Notre Histoire
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold font-serif">
                            Des artisans fleuristes passionnés au cœur de <span className="text-primary">Paris</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                Fondé en 2016, <span className="text-foreground font-medium">{shopInfo.name}</span> est né
                                d'une passion profonde pour l'art floral et d'une volonté de réinventer l'expérience
                                de la boutique de fleurs.
                            </p>
                            <p>
                                Nous croyons que chaque bouquet doit raconter une histoire. C'est pourquoi nous
                                sélectionnons nos fleurs avec soin auprès de producteurs locaux et créons des
                                compositions uniques qui reflètent vos émotions.
                            </p>
                            <p>
                                Située au{' '}
                                <span className="text-foreground font-medium">
                                    {shopInfo.address}, {shopInfo.postalCode} {shopInfo.city}
                                </span>
                                , notre boutique est un havre de paix où le parfum des fleurs fraîches
                                vous accueille.
                            </p>
                        </div>

                        <blockquote className="relative pl-6 border-l-4 border-primary italic text-xl text-foreground font-serif">
                            "Chaque fleur que nous arrangeons porte en elle une part de notre âme d'artisan."
                            <footer className="mt-2 text-sm text-muted-foreground not-italic">
                                — L'équipe {shopInfo.name}
                            </footer>
                        </blockquote>


                    </motion.div>
                </div>
            </div>
        </section>
    );
}
