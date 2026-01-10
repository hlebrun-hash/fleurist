'use client';

import Link from 'next/link';
import { shopInfo } from '@/lib/data';
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary/50 border-t border-border">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand & Description */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-primary font-serif">
                            {shopInfo.name}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Artisan fleuriste au cœur de Paris. Nous créons des compositions
                            florales uniques qui racontent votre histoire.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a
                                href={shopInfo.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5 text-primary" />
                            </a>
                            <a
                                href={shopInfo.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5 text-primary" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold font-serif">Navigation</h4>
                        <nav className="flex flex-col gap-3">
                            <Link
                                href="/"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                Accueil
                            </Link>
                            <Link
                                href="/produits"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                Nos Bouquets
                            </Link>
                            <Link
                                href="/blog"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                Blog & Conseils
                            </Link>
                            <Link
                                href="/contact"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                Nous Contacter
                            </Link>
                        </nav>
                    </div>

                    {/* Hours */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold font-serif flex items-center gap-2">
                            <Clock className="w-5 h-5 text-primary" />
                            Horaires
                        </h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            <p className="flex justify-between">
                                <span>Mardi - Samedi</span>
                                <span>{shopInfo.hours.tuesday}</span>
                            </p>
                            <p className="flex justify-between">
                                <span>Dimanche</span>
                                <span>{shopInfo.hours.sunday}</span>
                            </p>
                            <p className="flex justify-between text-destructive font-medium">
                                <span>Lundi</span>
                                <span>{shopInfo.hours.monday}</span>
                            </p>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold font-serif">Contact</h4>
                        <div className="space-y-3">
                            <a
                                href={`tel:${shopInfo.phone.replace(/\s/g, '')}`}
                                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Phone className="w-5 h-5 text-primary" />
                                <span>{shopInfo.phone}</span>
                            </a>
                            <div className="flex items-start gap-3 text-muted-foreground">
                                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                                <address className="not-italic">
                                    {shopInfo.address}
                                    <br />
                                    {shopInfo.postalCode} {shopInfo.city}
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                        <p>
                            © {currentYear} {shopInfo.name}. Tous droits réservés.
                        </p>
                        <div className="flex gap-6">
                            <Link
                                href="/mentions-legales"
                                className="hover:text-primary transition-colors"
                            >
                                Mentions légales
                            </Link>
                            <Link
                                href="/politique-confidentialite"
                                className="hover:text-primary transition-colors"
                            >
                                Confidentialité
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Schema.org LocalBusiness JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Florist',
                        name: shopInfo.name,
                        image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1200',
                        '@id': '',
                        url: '',
                        telephone: shopInfo.phone,
                        address: {
                            '@type': 'PostalAddress',
                            streetAddress: shopInfo.address,
                            addressLocality: shopInfo.city,
                            postalCode: shopInfo.postalCode,
                            addressCountry: 'FR',
                        },
                        openingHoursSpecification: [
                            {
                                '@type': 'OpeningHoursSpecification',
                                dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                                opens: '09:30',
                                closes: '19:30',
                            },
                            {
                                '@type': 'OpeningHoursSpecification',
                                dayOfWeek: 'Sunday',
                                opens: '09:30',
                                closes: '13:00',
                            },
                        ],
                        priceRange: '€€',
                    }),
                }}
            />
        </footer>
    );
}
