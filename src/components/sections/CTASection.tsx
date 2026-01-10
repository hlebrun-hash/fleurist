'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

export function CTASection() {
    return (
        <section className="py-24 bg-primary relative overflow-hidden z-40">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-primary-foreground mb-6">
                        Prêt à transformer vos moments en souvenirs fleuris ?
                    </h2>

                    <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
                        Que ce soit pour un bouquet personnalisé, une décoration d'événement ou
                        un abonnement floral, notre équipe est là pour donner vie à vos envies.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:scale-105 transition-transform shadow-lg relative z-20"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Nous contacter</span>
                        </Link>

                        <Link
                            href="/produits"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors relative z-20"
                        >
                            <span>Découvrir nos bouquets</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
