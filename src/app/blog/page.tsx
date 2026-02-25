'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatedInput } from '@/components/ui/animated-input';
import { supabase } from '@/lib/supabase';

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image: string;
    category: string;
    tags: string[];
    reading_time: number;
    published_at: string;
    featured: boolean;
    author: {
        name: string;
        role: string;
        image: string;
        bio: string;
    };
    external_link?: {
        title: string;
        url: string;
    };
}

const AvatarImage = ({ src, alt, size = 40 }: { src: string; alt: string; size?: number }) => {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div
                className={`rounded-full bg-secondary flex items-center justify-center text-primary shrink-0`}
                style={{ width: size, height: size }}
            >
                <User size={size * 0.5} />
            </div>
        );
    }

    return (
        <Image
            width={size}
            height={size}
            src={src}
            alt={alt}
            className="rounded-full object-cover shrink-0"
            style={{ width: size, height: size }}
            onError={() => setError(true)}
            unoptimized
        />
    );
};

export default function BlogPage() {
    const [newsletterEmail, setNewsletterEmail] = useState("");
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            const { data, error } = await supabase
                .from('blog_posts')
                .select('*')
                .order('published_at', { ascending: false });

            if (error) {
                console.error('Erreur chargement articles:', error);
            } else {
                setPosts(data || []);
            }
            setLoading(false);
        }

        fetchPosts();
    }, []);

    const featuredPost = posts.find((post) => post.featured);
    const regularPosts = posts.filter((post) => !post.featured || post.id !== featuredPost?.id);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
                <div className="text-center space-y-4">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
                    <p className="text-muted-foreground">Chargement des articles...</p>
                </div>
            </div>
        );
    }

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
                            Conseils d&apos;experts, tendances florales et inspirations pour sublimer
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
                                            <span>{formatDate(featuredPost.published_at)}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            <span>{featuredPost.reading_time} min de lecture</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <AvatarImage
                                            src={featuredPost.author.image}
                                            alt={featuredPost.author.name}
                                            size={48}
                                        />
                                        <div>
                                            <p className="font-medium">{featuredPost.author.name}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {featuredPost.author.role}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                                        <span>Lire l&apos;article</span>
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
                                                    {post.reading_time} min
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
                                                    <AvatarImage
                                                        src={post.author.image}
                                                        alt={post.author.name}
                                                        size={32}
                                                    />
                                                    <span className="text-sm font-medium">
                                                        {post.author.name}
                                                    </span>
                                                </div>
                                                <span className="text-xs text-muted-foreground">
                                                    {formatDate(post.published_at)}
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
                                S&apos;inscrire
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
