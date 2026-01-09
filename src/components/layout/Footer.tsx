"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-foreground text-background">
            {/* Main Footer */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <h3
                            className="text-3xl text-background"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                            Jardin Digital
                        </h3>
                        <p
                            className="text-background/70 text-sm leading-relaxed"
                            style={{ fontFamily: "var(--font-outfit)" }}
                        >
                            L&apos;art floral au cœur de Paris. Des créations uniques,
                            composées avec passion et savoir-faire artisanal.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h4
                            className="text-xl text-background"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                            Nous trouver
                        </h4>
                        <ul className="space-y-3 text-sm" style={{ fontFamily: "var(--font-outfit)" }}>
                            <li className="flex items-start gap-3 text-background/70">
                                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                                <span>42 Rue des Lilas<br />75011 Paris</span>
                            </li>
                            <li>
                                <a
                                    href="tel:0123456789"
                                    className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
                                >
                                    <Phone size={18} className="flex-shrink-0 text-primary" />
                                    <span>01 23 45 67 89</span>
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Hours */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h4
                            className="text-xl text-background"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                            Horaires
                        </h4>
                        <ul className="space-y-2 text-sm text-background/70" style={{ fontFamily: "var(--font-outfit)" }}>
                            <li className="flex items-center gap-3">
                                <Clock size={18} className="text-primary" />
                                <span>Mar - Sam : 09h30 - 19h30</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock size={18} className="text-primary" />
                                <span>Dimanche : 09h30 - 13h00</span>
                            </li>
                            <li className="flex items-center gap-3 text-background/50">
                                <Clock size={18} className="text-background/30" />
                                <span>Fermé le Lundi</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-4"
                    >
                        <h4
                            className="text-xl text-background"
                            style={{ fontFamily: "var(--font-cormorant)" }}
                        >
                            Navigation
                        </h4>
                        <ul className="space-y-2 text-sm" style={{ fontFamily: "var(--font-outfit)" }}>
                            {[
                                { label: "Accueil", href: "/" },
                                { label: "Nos Bouquets", href: "/produits" },
                                { label: "Journal", href: "/blog" },
                                { label: "À Propos", href: "/a-propos" },
                                { label: "Contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-background/70 hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-background/10">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/50" style={{ fontFamily: "var(--font-outfit)" }}>
                        <p>© {currentYear} Jardin Digital. Tous droits réservés.</p>
                        <div className="flex gap-6">
                            <Link href="/mentions-legales" className="hover:text-primary transition-colors">
                                Mentions légales
                            </Link>
                            <Link href="/politique-confidentialite" className="hover:text-primary transition-colors">
                                Politique de confidentialité
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Schema.org LocalBusiness */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Florist",
                        "name": "Jardin Digital",
                        "image": "https://jardindigital.fr/images/boutique.jpg",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "42 Rue des Lilas",
                            "addressLocality": "Paris",
                            "postalCode": "75011",
                            "addressCountry": "FR"
                        },
                        "telephone": "+33123456789",
                        "openingHoursSpecification": [
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                "opens": "09:30",
                                "closes": "19:30"
                            },
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": "Sunday",
                                "opens": "09:30",
                                "closes": "13:00"
                            }
                        ],
                        "priceRange": "€€",
                        "sameAs": [
                            "https://instagram.com/jardindigital",
                            "https://facebook.com/jardindigital"
                        ]
                    })
                }}
            />
        </footer>
    );
}
