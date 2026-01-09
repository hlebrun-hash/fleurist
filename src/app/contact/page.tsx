"use client";

import { motion } from "framer-motion";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import { OrganicButton } from "@/components/ui/organic-button";
import { MapPin, Phone, Clock, Mail, Navigation, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send to an API
        alert("Merci pour votre message ! Nous vous répondrons sous 24h.");
    };

    return (
        <div className="pt-24 pb-20">
            {/* Hero */}
            <section className="container mx-auto px-6 pb-16">
                <HandWrittenTitle
                    title="Contactez-nous"
                    subtitle="Une question ? Une commande spéciale ? Nous sommes là pour vous."
                />
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Phone - Big and prominent */}
                        <div className="bg-primary/5 rounded-3xl p-8">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                                    <Phone size={24} className="text-primary" />
                                </div>
                                <div>
                                    <p
                                        className="text-sm text-muted-foreground mb-1"
                                        style={{ fontFamily: "var(--font-outfit)" }}
                                    >
                                        Appelez-nous directement
                                    </p>
                                    <a
                                        href="tel:0123456789"
                                        className="text-3xl font-bold text-foreground hover:text-primary transition-colors"
                                        style={{ fontFamily: "var(--font-cormorant)" }}
                                    >
                                        01 23 45 67 89
                                    </a>
                                </div>
                            </div>
                            <p
                                className="text-sm text-muted-foreground mt-4"
                                style={{ fontFamily: "var(--font-outfit)" }}
                            >
                                Réponse immédiate pendant les heures d&apos;ouverture
                            </p>
                        </div>

                        {/* Address */}
                        <div className="bg-card rounded-3xl p-8 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0">
                                    <MapPin size={20} className="text-foreground" />
                                </div>
                                <div>
                                    <h3
                                        className="text-lg text-foreground mb-2"
                                        style={{ fontFamily: "var(--font-cormorant)" }}
                                    >
                                        Notre Boutique
                                    </h3>
                                    <p
                                        className="text-muted-foreground mb-4"
                                        style={{ fontFamily: "var(--font-outfit)" }}
                                    >
                                        42 Rue des Lilas<br />
                                        75011 Paris
                                    </p>
                                    <a
                                        href="https://maps.google.com/?q=42+Rue+des+Lilas+75011+Paris"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-primary hover:underline"
                                        style={{ fontFamily: "var(--font-outfit)" }}
                                    >
                                        <Navigation size={16} />
                                        Obtenir l&apos;itinéraire
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="bg-card rounded-3xl p-8 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0">
                                    <Clock size={20} className="text-foreground" />
                                </div>
                                <div className="flex-1">
                                    <h3
                                        className="text-lg text-foreground mb-4"
                                        style={{ fontFamily: "var(--font-cormorant)" }}
                                    >
                                        Horaires d&apos;ouverture
                                    </h3>
                                    <div
                                        className="space-y-2"
                                        style={{ fontFamily: "var(--font-outfit)" }}
                                    >
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Mardi - Samedi</span>
                                            <span className="font-semibold text-foreground">09h30 - 19h30</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Dimanche</span>
                                            <span className="font-semibold text-foreground">09h30 - 13h00</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Lundi</span>
                                            <span className="text-muted-foreground/70">Fermé</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="bg-card rounded-3xl p-8 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0">
                                    <Mail size={20} className="text-foreground" />
                                </div>
                                <div>
                                    <h3
                                        className="text-lg text-foreground mb-1"
                                        style={{ fontFamily: "var(--font-cormorant)" }}
                                    >
                                        Par email
                                    </h3>
                                    <a
                                        href="mailto:bonjour@jardindigital.fr"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        style={{ fontFamily: "var(--font-outfit)" }}
                                    >
                                        bonjour@jardindigital.fr
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="bg-card rounded-3xl p-8 shadow-lg">
                            <h2
                                className="text-2xl text-foreground mb-6"
                                style={{ fontFamily: "var(--font-cormorant)" }}
                            >
                                Envoyez-nous un message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-foreground mb-2"
                                            style={{ fontFamily: "var(--font-outfit)" }}
                                        >
                                            Votre nom *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            style={{ fontFamily: "var(--font-outfit)" }}
                                            placeholder="Marie Dupont"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-foreground mb-2"
                                            style={{ fontFamily: "var(--font-outfit)" }}
                                        >
                                            Téléphone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                            style={{ fontFamily: "var(--font-outfit)" }}
                                            placeholder="06 12 34 56 78"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-foreground mb-2"
                                        style={{ fontFamily: "var(--font-outfit)" }}
                                    >
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        style={{ fontFamily: "var(--font-outfit)" }}
                                        placeholder="marie@example.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-foreground mb-2"
                                        style={{ fontFamily: "var(--font-outfit)" }}
                                    >
                                        Sujet *
                                    </label>
                                    <select
                                        id="subject"
                                        required
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        style={{ fontFamily: "var(--font-outfit)" }}
                                    >
                                        <option value="">Choisir un sujet...</option>
                                        <option value="commande">Commander un bouquet</option>
                                        <option value="evenement">Événement (mariage, entreprise...)</option>
                                        <option value="livraison">Question sur la livraison</option>
                                        <option value="autre">Autre demande</option>
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-foreground mb-2"
                                        style={{ fontFamily: "var(--font-outfit)" }}
                                    >
                                        Votre message *
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                        style={{ fontFamily: "var(--font-outfit)" }}
                                        placeholder="Décrivez votre demande..."
                                    />
                                </div>

                                <OrganicButton variant="primary" size="lg" className="w-full">
                                    <Send size={18} className="mr-2" />
                                    Envoyer le message
                                </OrganicButton>

                                <p
                                    className="text-xs text-muted-foreground text-center"
                                    style={{ fontFamily: "var(--font-outfit)" }}
                                >
                                    Nous répondons généralement sous 24 heures.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Map Section */}
            <section className="container mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div
                        className="relative aspect-[21/9] rounded-3xl overflow-hidden bg-secondary/20"
                    >
                        {/* Stylized map placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/10" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-20 h-20 rounded-full bg-primary/30 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                                    <MapPin size={36} className="text-primary" />
                                </div>
                                <h3
                                    className="text-2xl text-foreground mb-2"
                                    style={{ fontFamily: "var(--font-cormorant)" }}
                                >
                                    Jardin Digital
                                </h3>
                                <p
                                    className="text-muted-foreground mb-6"
                                    style={{ fontFamily: "var(--font-outfit)" }}
                                >
                                    42 Rue des Lilas, 75011 Paris
                                </p>
                                <a
                                    href="https://maps.google.com/?q=42+Rue+des+Lilas+75011+Paris"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <OrganicButton variant="primary" size="md">
                                        <Navigation size={18} className="mr-2" />
                                        Voir sur Google Maps
                                    </OrganicButton>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Schema.org ContactPage */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "mainEntity": {
                            "@type": "Florist",
                            "name": "Jardin Digital",
                            "telephone": "+33123456789",
                            "email": "bonjour@jardindigital.fr",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "42 Rue des Lilas",
                                "addressLocality": "Paris",
                                "postalCode": "75011",
                                "addressCountry": "FR"
                            }
                        }
                    })
                }}
            />
        </div>
    );
}
