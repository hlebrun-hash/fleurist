'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { shopInfo } from '@/lib/data';
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook, CheckCircle } from 'lucide-react';

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen pt-24 pb-16">
            {/* Hero Header */}
            <section className="relative py-16 bg-secondary/30">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
                            Parlons de vos <span className="text-primary">Envies Florales</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Une question, une demande spéciale ou un projet d'événement ?
                            Notre équipe est à votre écoute pour réaliser vos rêves fleuris.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-card border border-border rounded-3xl p-8 md:p-10">
                                <h2 className="text-2xl font-bold font-serif mb-6">
                                    Envoyez-nous un message
                                </h2>

                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                                        <h3 className="text-xl font-bold mb-2">Message envoyé !</h3>
                                        <p className="text-muted-foreground mb-6">
                                            Nous vous répondrons dans les plus brefs délais.
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="text-primary font-medium hover:underline"
                                        >
                                            Envoyer un autre message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                                    Votre nom *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                    placeholder="Marie Dupont"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                                    Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                    placeholder="marie@exemple.fr"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                                    Téléphone
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formState.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                    placeholder="06 12 34 56 78"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                                    Sujet *
                                                </label>
                                                <select
                                                    id="subject"
                                                    name="subject"
                                                    value={formState.subject}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                                >
                                                    <option value="">Choisir un sujet</option>
                                                    <option value="bouquet">Commande de bouquet</option>
                                                    <option value="evenement">Événement / Mariage</option>
                                                    <option value="abonnement">Abonnement floral</option>
                                                    <option value="entreprise">Fleurs pour entreprise</option>
                                                    <option value="autre">Autre demande</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                                Votre message *
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formState.message}
                                                onChange={handleChange}
                                                required
                                                rows={5}
                                                className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                                placeholder="Décrivez votre projet ou posez-nous vos questions..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                    <span>Envoi en cours...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    <span>Envoyer le message</span>
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-8"
                        >
                            {/* Quick Contact */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold font-serif">
                                    Informations de contact
                                </h2>

                                <div className="grid gap-4">
                                    <a
                                        href={`tel:${shopInfo.phone.replace(/\s/g, '')}`}
                                        className="flex items-center gap-4 p-5 bg-card border border-border rounded-2xl hover:border-primary transition-colors group"
                                    >
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                                        </div>
                                        <div>
                                            <p className="font-medium">{shopInfo.phone}</p>
                                            <p className="text-sm text-muted-foreground">Appelez-nous</p>
                                        </div>
                                    </a>

                                    <a
                                        href={`mailto:${shopInfo.email}`}
                                        className="flex items-center gap-4 p-5 bg-card border border-border rounded-2xl hover:border-primary transition-colors group"
                                    >
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                                        </div>
                                        <div>
                                            <p className="font-medium">{shopInfo.email}</p>
                                            <p className="text-sm text-muted-foreground">Écrivez-nous</p>
                                        </div>
                                    </a>

                                    <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-2xl">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                            <MapPin className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-medium">{shopInfo.address}</p>
                                            <p className="text-muted-foreground">
                                                {shopInfo.postalCode} {shopInfo.city}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Opening Hours */}
                            <div className="p-6 bg-secondary/30 rounded-2xl">
                                <h3 className="flex items-center gap-2 font-bold mb-4">
                                    <Clock className="w-5 h-5 text-primary" />
                                    Horaires d'ouverture
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span>Mardi - Samedi</span>
                                        <span className="font-medium">{shopInfo.hours.tuesday}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Dimanche</span>
                                        <span className="font-medium">{shopInfo.hours.sunday}</span>
                                    </div>
                                    <div className="flex justify-between text-destructive">
                                        <span>Lundi</span>
                                        <span className="font-medium">{shopInfo.hours.monday}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="space-y-4">
                                <h3 className="font-bold">Suivez-nous</h3>
                                <div className="flex gap-4">
                                    <a
                                        href={shopInfo.social.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                                    >
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={shopInfo.social.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                                    >
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Map placeholder */}
                            <div className="aspect-video bg-secondary rounded-2xl overflow-hidden relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.4773855876453!2d2.3796849!3d48.8568969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66df8d13f60b5%3A0x8e6e3ed9d4c9d6c7!2s42%20Rue%20des%20Lilas%2C%2075011%20Paris!5e0!3m2!1sfr!2sfr!4v1704888000000!5m2!1sfr!2sfr"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localisation Jardin Digital"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-secondary/20">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold font-serif text-center mb-12">
                            Questions fréquentes
                        </h2>

                        <div className="space-y-4">
                            {[
                                {
                                    q: 'Livrez-vous à domicile ?',
                                    a: 'Oui ! Nous livrons dans tout Paris et l\'Île-de-France. La livraison est gratuite à partir de 60€ d\'achat.',
                                },
                                {
                                    q: 'Peut-on personnaliser un bouquet ?',
                                    a: 'Absolument ! Contactez-nous avec vos envies et notre équipe créera une composition unique pour vous.',
                                },
                                {
                                    q: 'Quels sont les délais pour un événement ?',
                                    a: 'Pour les mariages et grands événements, nous recommandons de nous contacter au moins 3 mois à l\'avance.',
                                },
                                {
                                    q: 'Proposez-vous des abonnements floraux ?',
                                    a: 'Oui, nous proposons des abonnements hebdomadaires ou bimensuels pour particuliers et entreprises.',
                                },
                            ].map((faq, index) => (
                                <motion.details
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="group p-6 bg-card border border-border rounded-2xl"
                                >
                                    <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                                        {faq.q}
                                        <span className="text-2xl text-muted-foreground group-open:rotate-45 transition-transform">
                                            +
                                        </span>
                                    </summary>
                                    <p className="mt-4 text-muted-foreground">{faq.a}</p>
                                </motion.details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
