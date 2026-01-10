'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { useState } from 'react';
import { AnimatedInput } from '@/components/ui/animated-input';

export default function BlogPage() {
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const featuredPost = blogPosts.find((post) => post.featured);
    const regularPosts = blogPosts.filter((post) => !post.featured || post.id !== featuredPost?.id);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
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
                            Blog & <span className="text-primary">Inspirations</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Conseils d'experts, tendances florales et inspirations pour sublimer
                            votre quotidien avec des fleurs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href={`/blog/${featuredPost.slug}`}
                                className="group grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                            >
                                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden">
                                    <Image
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                                        Article vedette
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <span className="inline-block px-4 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                                        {featuredPost.category}
                                    </span>

                                    <h2 className="text-3xl md:text-4xl font-bold font-serif group-hover:text-primary transition-colors">
                                        {featuredPost.title}
                                    </h2>

                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {featuredPost.excerpt}
                                    </p>

                                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{formatDate(featuredPost.publishedAt)}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            <span>{featuredPost.readingTime} min de lecture</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={featuredPost.author.image}
                                            alt={featuredPost.author.name}
                                            width={48}
                                            height={48}
                                            className="rounded-full"
                                        />
                                        <div>
                                            <p className="font-medium">{featuredPost.author.name}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {featuredPost.author.role}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                                        <span>Lire l'article</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* All Posts Grid */}
            <section className="py-16 bg-secondary/20">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-bold font-serif mb-12 text-center">
                        Tous nos articles
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="group block h-full"
                                >
                                    <article className="h-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                                        <div className="relative aspect-[16/10]">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>

                                        <div className="p-6 space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                                                    {post.category}
                                                </span>
                                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {post.readingTime} min
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold font-serif group-hover:text-primary transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>

                                            <p className="text-muted-foreground text-sm line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between pt-4 border-t border-border">
                                                <div className="flex items-center gap-2">
                                                    <Image
                                                        src={post.author.image}
                                                        alt={post.author.name}
                                                        width={32}
                                                        height={32}
                                                        className="rounded-full"
                                                    />
                                                    <span className="text-sm font-medium">
                                                        {post.author.name}
                                                    </span>
                                                </div>
                                                <span className="text-xs text-muted-foreground">
                                                    {formatDate(post.publishedAt)}
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">
                            Recevez nos conseils floraux
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Inscrivez-vous à notre newsletter pour recevoir nos meilleurs
                            conseils et être informé de nos nouveautés.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <div className="flex-1 min-w-[280px]">
                                <AnimatedInput
                                    label="Votre adresse email"
                                    value={newsletterEmail}
                                    onChange={(e) => setNewsletterEmail(e.target.value)}
                                    className="bg-card"
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:scale-105 transition-transform"
                            >
                                S'inscrire
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
