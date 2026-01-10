'use client';

import { use, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { Calendar, Clock, ArrowLeft, ChevronUp, Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = use(params);
    const post = blogPosts.find((p) => p.slug === slug);
    const [readingProgress, setReadingProgress] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setReadingProgress(progress);
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!post) {
        notFound();
    }

    const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Reading Progress Bar */}
            <div
                className="fixed top-0 left-0 h-1 bg-primary z-[100] transition-all duration-150"
                style={{ width: `${readingProgress}%` }}
            />

            <div className="min-h-screen pt-24 pb-16">
                {/* Breadcrumb */}
                <nav className="container mx-auto px-6 py-4">
                    <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                        <li>
                            <Link href="/" className="hover:text-primary transition-colors">
                                Accueil
                            </Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link href="/blog" className="hover:text-primary transition-colors">
                                Blog
                            </Link>
                        </li>
                        <li>/</li>
                        <li className="text-foreground font-medium truncate max-w-[200px]">
                            {post.title}
                        </li>
                    </ol>
                </nav>

                {/* Article Header */}
                <header className="container mx-auto px-6 py-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm rounded-full mb-6">
                            {post.category}
                        </span>

                        <h1 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-center gap-6 text-muted-foreground mb-8">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(post.publishedAt)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{post.readingTime} min de lecture</span>
                            </div>
                        </div>

                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            {post.excerpt}
                        </p>
                    </motion.div>
                </header>

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="container mx-auto px-6 mb-12"
                >
                    <div className="relative aspect-[21/9] max-w-5xl mx-auto rounded-3xl overflow-hidden">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Article Content */}
                <article className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
                        {/* Social Share - Sticky Sidebar */}
                        <aside className="hidden lg:block lg:col-span-1">
                            <div className="sticky top-32 space-y-4">
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                                    Partager
                                </p>
                                <button
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                                    aria-label="Partager sur Twitter"
                                >
                                    <Twitter className="w-4 h-4" />
                                </button>
                                <button
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                                    aria-label="Partager sur Facebook"
                                >
                                    <Facebook className="w-4 h-4" />
                                </button>
                                <button
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                                    aria-label="Partager sur LinkedIn"
                                >
                                    <Linkedin className="w-4 h-4" />
                                </button>
                                <button
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                                    aria-label="Copier le lien"
                                >
                                    <LinkIcon className="w-4 h-4" />
                                </button>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <div className="lg:col-span-8">
                            <div
                                className="prose prose-lg max-w-none
                  prose-headings:font-serif prose-headings:text-foreground
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-blockquote:border-primary prose-blockquote:text-foreground prose-blockquote:font-serif
                  prose-strong:text-foreground
                  prose-li:text-muted-foreground"
                                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>').replace(/## /g, '<h2>').replace(/# /g, '<h1>').replace(/<h2>/g, '</p><h2 class="text-2xl font-bold mt-8 mb-4">').replace(/<h1>/g, '</p><h1 class="text-3xl font-bold mt-8 mb-4">').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/> "(.*?)"/g, '<blockquote class="border-l-4 border-primary pl-6 italic text-xl my-8">$1</blockquote>') }}
                            />

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-full"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Author Box */}
                            <div className="mt-12 p-8 bg-secondary/30 rounded-3xl">
                                <div className="flex flex-col sm:flex-row gap-6">
                                    <Image
                                        src={post.author.image}
                                        alt={post.author.name}
                                        width={100}
                                        height={100}
                                        className="rounded-full"
                                    />
                                    <div className="space-y-3">
                                        <div>
                                            <h3 className="text-xl font-bold font-serif">
                                                {post.author.name}
                                            </h3>
                                            <p className="text-primary">{post.author.role}</p>
                                        </div>
                                        <p className="text-muted-foreground">
                                            {post.author.bio}
                                        </p>
                                        {post.author.linkedin && (
                                            <a
                                                href={post.author.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-primary hover:underline"
                                            >
                                                <Linkedin className="w-4 h-4" />
                                                <span>Suivre sur LinkedIn</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-3">
                            <div className="sticky top-32 space-y-8">
                                {/* Newsletter */}
                                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                                    <h3 className="font-bold font-serif mb-3">
                                        📬 Newsletter
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Recevez nos conseils floraux directement dans votre boîte mail.
                                    </p>
                                    <input
                                        type="email"
                                        placeholder="votre@email.com"
                                        className="w-full px-4 py-2 text-sm rounded-full border border-border mb-3"
                                    />
                                    <button className="w-full py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                                        S'inscrire
                                    </button>
                                </div>

                                {/* Did You Know */}
                                <div className="p-6 bg-accent/20 rounded-2xl">
                                    <h3 className="font-bold font-serif mb-3 flex items-center gap-2">
                                        💡 Le saviez-vous ?
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Les fleurs coupées absorbent mieux l'eau tiède que l'eau froide.
                                        La température idéale est d'environ 20-25°C.
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </article>

                {/* Related Posts */}
                <section className="py-16 mt-16 bg-secondary/20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-2xl md:text-3xl font-bold font-serif mb-8 text-center">
                            Articles similaires
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {relatedPosts.map((relPost) => (
                                <Link
                                    key={relPost.id}
                                    href={`/blog/${relPost.slug}`}
                                    className="group"
                                >
                                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                                        <Image
                                            src={relPost.image}
                                            alt={relPost.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <h3 className="font-bold font-serif group-hover:text-primary transition-colors line-clamp-2">
                                        {relPost.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        {relPost.readingTime} min de lecture
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Back link */}
                <div className="container mx-auto px-6 pt-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Retour au blog
                    </Link>
                </div>
            </div>

            {/* Scroll to top button */}
            {showScrollTop && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={scrollToTop}
                    className="fixed bottom-24 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50"
                    aria-label="Remonter en haut"
                >
                    <ChevronUp className="w-6 h-6" />
                </motion.button>
            )}

            {/* Schema.org Article */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        headline: post.title,
                        description: post.excerpt,
                        image: post.image,
                        datePublished: post.publishedAt,
                        author: {
                            '@type': 'Person',
                            name: post.author.name,
                            jobTitle: post.author.role,
                        },
                        publisher: {
                            '@type': 'Organization',
                            name: 'Jardin Digital',
                        },
                    }),
                }}
            />
        </>
    );
}
