"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { OrganicButton } from "@/components/ui/organic-button";

export function LocationSection() {
    return (
        <section className="py-20 md:py-28 bg-foreground text-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2
                        className="text-3xl md:text-4xl text-background mb-4"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                        Venez nous rendre visite
                    </h2>
                    <p
                        className="text-background/70"
                        style={{ fontFamily: "var(--font-outfit)" }}
                    >
                        Notre boutique vous accueille dans une atmosphère chaleureuse et parfumée.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Map placeholder with custom styling */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-3xl overflow-hidden bg-background/10"
                    >
                        {/* Stylized map background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-8">
                                <div className="w-20 h-20 rounded-full bg-primary/30 flex items-center justify-center mx-auto mb-4">
                                    <MapPin size={40} className="text-primary" />
                                </div>
                                <p
                                    className="text-xl font-semibold text-background mb-2"
                                    style={{ fontFamily: "var(--font-cormorant)" }}
                                >
                                    42 Rue des Lilas
                                </p>
                                <p
                                    className="text-background/70 mb-6"
                                    style={{ fontFamily: "var(--font-outfit)" }}
                                >
                                    75011 Paris
                                </p>
                                <a
                                    href="https://maps.google.com/?q=42+Rue+des+Lilas+75011+Paris"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <OrganicButton variant="primary" size="md">
                                        <Navigation size={18} className="mr-2" />
                                        Itinéraire
                                    </OrganicButton>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        {/* Phone - Big and clickable */}
                        <div className="bg-background/10 rounded-3xl p-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 rounded-full bg-primary/30 flex items-center justify-center">
                                    <Phone size={24} className="text-primary" />
                                </div>
                                <div>
                                    <p
                                        className="text-sm text-background/60 mb-1"
                                        style={{ fontFamily: "var(--font-outfit)" }}
                                    >
                                        Appelez-nous
                                    </p>
                                    <a
                                        href="tel:0123456789"
                                        className="text-2xl md:text-3xl font-bold text-background hover:text-primary transition-colors"
                                        style={{ fontFamily: "var(--font-cormorant)" }}
                                    >
                                        01 23 45 67 89
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="bg-background/10 rounded-3xl p-8">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0">
                                    <Clock size={24} className="text-primary" />
                                </div>
                                <div className="flex-1">
                                    <p
                                        className="text-sm text-background/60 mb-3"
                                        style={{ fontFamily: "var(--font-outfit)" }}
                                    >
                                        Horaires d&apos;ouverture
                                    </p>
                                    <div
                                        className="space-y-2 text-background"
                                        style={{ fontFamily: "var(--font-outfit)" }}
                                    >
                                        <div className="flex justify-between">
                                            <span>Mardi - Samedi</span>
                                            <span className="font-semibold">09h30 - 19h30</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Dimanche</span>
                                            <span className="font-semibold">09h30 - 13h00</span>
                                        </div>
                                        <div className="flex justify-between text-background/50">
                                            <span>Lundi</span>
                                            <span>Fermé</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
