'use client';

import { use, useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { Calendar, Clock, ArrowLeft, ChevronUp, Twitter, Facebook, Linkedin, Link as LinkIcon, Sparkles, ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';
import { AnimatedInput } from '@/components/ui/animated-input';

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = use(params);
    const post = blogPosts.find((p) => p.slug === slug);
    const [readingProgress, setReadingProgress] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setReadingProgress(progress);
            setShowScrollTop(window.scrollY > 500);

            // Highlight TOC active section
            const sections = document.querySelectorAll('h2[id]');
            let current = '';
            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                if (window.scrollY >= sectionTop - 100) {
                    current = section.getAttribute('id') || '';
                }
            });
            setActiveSection(current);
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

    // Generate TOC and process content
    const { processedContent, toc } = useMemo(() => {
        const tocItems: { id: string; title: string }[] = [];
        let content = post.content;

        // Match H2s and replace with ID-injected H2s
        const h2Regex = /## (.*?)\n/g;
        let match;
        // Simple slugify function
        const slugify = (text: string) => text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/^-+|-+$/g, '');

        // We'll replace the content manually to inject IDs
        const newContent = content.replace(h2Regex, (match, title) => {
            const id = slugify(title);
            tocItems.push({ id, title });
            return `## <span id="${id}"></span>${title}\n`; // Markdown/HTML mix
        });

        // Advanced Markdown to HTML conversion
        let htmlContent = newContent
            .replace(/\n/g, '<br/>')
            .replace(/## <span id="(.*?)"><\/span>(.*?)(<br\/>|$)/g, '<h2 id="$1" class="text-2xl md:text-3xl font-bold font-serif mt-12 mb-6 text-foreground scroll-mt-32">$2</h2>')
            .replace(/# (.*?)(<br\/>|$)/g, '<h1 class="text-3xl md:text-4xl font-bold font-serif mb-6">$1</h1>')
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>') // Bold
            .replace(/\* (.*?)(<br\/>|$)/g, '<li class="ml-4 mb-2 list-disc pl-2">$1</li>') // List items
            .replace(/> "(.*?)"/g, '<blockquote class="border-l-4 border-primary pl-6 py-2 italic text-xl text-foreground/80 my-8 bg-secondary/10 rounded-r-lg">"$1"</blockquote>'); // Blockquote

        // Inject CTA after the second paragraph (approx) or first H2
        const splitPoint = htmlContent.indexOf('</h2>');
        if (splitPoint !== -1) {
            const firstPart = htmlContent.substring(0, splitPoint + 5);
            const secondPart = htmlContent.substring(splitPoint + 5);
            const ctaHtml = `
                <div class="my-12 p-8 bg-primary/5 border border-primary/20 rounded-2xl text-center not-prose">
                    <h3 class="text-2xl font-serif font-bold mb-3 text-foreground">Une envie florale particulière ?</h3>
                    <p class="text-muted-foreground mb-6">Nos artisans fleuristes réalisent vos rêves sur mesure pour toutes les occasions.</p>
                    <a href="/contact" class="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                        Demander un devis gratuit
                    </a>
                </div>
             `;
            htmlContent = firstPart + ctaHtml + secondPart;
        }

        return { processedContent: htmlContent, toc: tocItems };
    }, [post.content]);

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
                    <ol className="flex items-center gap-2 text-sm text-muted-foreground" itemScope itemType="https://schema.org/BreadcrumbList">
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <Link href="/" className="hover:text-primary transition-colors" itemProp="item">
                                <span itemProp="name">Accueil</span>
                            </Link>
                            <meta itemProp="position" content="1" />
                        </li>
                        <li className="select-none">/</li>
                        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <Link href="/blog" className="hover:text-primary transition-colors" itemProp="item">
                                <span itemProp="name">Blog</span>
                            </Link>
                            <meta itemProp="position" content="2" />
                        </li>
                        <li className="select-none">/</li>
                        <li className="text-foreground font-medium truncate max-w-[200px]" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                            <span itemProp="name">{post.title}</span>
                            <meta itemProp="position" content="3" />
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
                        <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm rounded-full mb-6 font-medium tracking-wide">
                            {post.category}
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-8 leading-tight text-foreground">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-muted-foreground mb-8 text-sm md:text-base">
                            <div className="flex items-center gap-2">
                                <Image
                                    src={post.author.image}
                                    alt={post.author.name}
                                    width={32}
                                    height={32}
                                    className="rounded-full object-cover shrink-0 border border-border"
                                />
                                <span className="font-medium text-foreground">{post.author.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(post.publishedAt)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{post.readingTime} min de lecture</span>
                            </div>
                        </div>

                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
                            {post.excerpt}
                        </p>
                    </motion.div>
                </header>

                {/* Featured Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="container mx-auto px-6 mb-16"
                >
                    <div className="relative aspect-[21/9] max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                        />
                    </div>
                </motion.div>

                {/* Article Grid Layout */}
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">

                        {/* LEFT: Social Share - Sticky */}
                        <aside className="hidden lg:block lg:col-span-1 h-full">
                            <div className="sticky top-32 flex flex-col items-center gap-4">
                                <p className="text-[10px] uppercase tracking-widest text-muted-foreground -rotate-90 py-8">
                                    Partager
                                </p>
                                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110" aria-label="Twitter">
                                    <Twitter className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110" aria-label="Facebook">
                                    <Facebook className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110" aria-label="LinkedIn">
                                    <Linkedin className="w-4 h-4" />
                                </button>
                            </div>
                        </aside>

                        {/* CENTER: Content */}
                        <div className="lg:col-span-8">
                            <div
                                className="prose prose-lg md:prose-xl max-w-none
                                    prose-headings:font-serif prose-headings:text-foreground
                                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                                    prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                                    prose-blockquote:not-italic prose-blockquote:font-normal
                                    prose-li:text-muted-foreground prose-li:my-1
                                    prose-img:rounded-2xl prose-img:shadow-lg"
                                dangerouslySetInnerHTML={{ __html: processedContent }}
                            />

                            {/* Maillage Interne - Collections */}
                            <div className="my-12 p-6 bg-secondary/20 rounded-2xl border border-secondary md:mx-0 not-prose">
                                <h3 className="font-serif font-bold text-lg mb-4 text-foreground flex items-center gap-2">
                                    🌿 Envie de nature ?
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    <Link href="/produits" className="text-sm font-medium bg-background text-foreground hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md">
                                        Voir nos bouquets
                                    </Link>
                                    <Link href="/produits?category=plante" className="text-sm font-medium bg-background text-foreground hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md">
                                        Nos plantes vertes
                                    </Link>
                                    <Link href="/contact" className="text-sm font-medium bg-background text-foreground hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md">
                                        Création sur mesure
                                    </Link>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-border/50">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-full hover:bg-secondary/80 transition-colors cursor-default"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Author Box (E-E-A-T) */}
                            <div className="mt-16 p-8 md:p-10 bg-secondary/30 rounded-3xl border border-secondary">
                                <div className="flex flex-col sm:flex-row gap-8 items-start">
                                    <Image
                                        src={post.author.image}
                                        alt={post.author.name}
                                        width={120}
                                        height={120}
                                        className="rounded-full object-cover shrink-0 border-4 border-background shadow-md"
                                    />
                                    <div className="space-y-4 flex-1">
                                        <div>
                                            <h3 className="text-2xl font-bold font-serif text-foreground">
                                                {post.author.name}
                                            </h3>
                                            <p className="text-primary font-medium">{post.author.role}</p>
                                        </div>
                                        <p className="text-muted-foreground italic text-lg leading-relaxed">
                                            "{post.author.bio}"
                                        </p>
                                        {post.author.linkedin && (
                                            <div className="pt-2">
                                                <a
                                                    href={post.author.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors uppercase tracking-wide"
                                                >
                                                    <Linkedin className="w-4 h-4" />
                                                    Suivre l'expert
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Sidebar (TOC & More) */}
                        <aside className="hidden lg:block lg:col-span-3">
                            <div className="sticky top-32 space-y-8">
                                {/* Table of Contents */}
                                {toc.length > 0 && (
                                    <div className="p-6 bg-background rounded-2xl border border-border shadow-sm">
                                        <h3 className="font-bold font-serif mb-4 text-lg flex items-center gap-2">
                                            <span>📑</span> Sommaire
                                        </h3>
                                        <nav className="flex flex-col gap-2">
                                            {toc.map((item) => (
                                                <a
                                                    key={item.id}
                                                    href={`#${item.id}`}
                                                    className={`text-sm py-1 px-2 rounded-md transition-colors block truncate ${activeSection === item.id
                                                        ? 'bg-primary/10 text-primary font-medium'
                                                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                                                        }`}
                                                >
                                                    {item.title}
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                )}

                                {/* Newsletter Box */}
                                <div className="p-6 bg-secondary/30 rounded-2xl border border-primary/20 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-50">
                                        <Sparkles className="w-16 h-16 text-primary/20" />
                                    </div>
                                    <h3 className="font-bold font-serif mb-2 text-lg relative z-10 text-foreground">
                                        Rejoignez le club
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-6 relative z-10">
                                        Inspiration et conseils exclusifs chaque semaine.
                                    </p>
                                    <div className="relative z-20 mb-4">
                                        <AnimatedInput
                                            label="Votre email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <button className="w-full py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full hover:bg-primary/90 transition-colors relative z-10 shadow-md transform hover:-translate-y-0.5 duration-200">
                                        S'inscrire
                                    </button>
                                </div>

                                {/* External Link Box for SEO */}
                                {post.externalLink && (
                                    <div className="p-6 bg-background rounded-2xl border border-border shadow-sm">
                                        <h3 className="font-bold font-serif mb-3 text-lg flex items-center gap-2">
                                            <span>🔗</span> Pour aller plus loin
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Découvrez plus d'informations sur ce sujet :
                                        </p>
                                        <a
                                            href={post.externalLink.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-primary hover:underline font-medium text-sm break-words group"
                                        >
                                            <ExternalLink className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
                                            <span>{post.externalLink.title}</span>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </aside>
                    </div>
                </div>

                {/* Related Posts */}
                <section className="py-20 mt-20 bg-secondary/30 border-t border-border">
                    <div className="container mx-auto px-6">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl font-bold font-serif">
                                À lire aussi
                            </h2>
                            <Link href="/blog" className="hidden md:inline-flex items-center gap-2 text-primary font-medium hover:underline">
                                Voir tout le blog <ArrowLeft className="w-4 h-4 rotate-180" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {relatedPosts.map((relPost) => (
                                <Link
                                    key={relPost.id}
                                    href={`/blog/${relPost.slug}`}
                                    className="group flex flex-col"
                                >
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 shadow-sm group-hover:shadow-md transition-shadow">
                                        <Image
                                            src={relPost.image}
                                            alt={relPost.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
                                            {relPost.category}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold font-serif mb-2 group-hover:text-primary transition-colors leading-tight">
                                        {relPost.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                                        {relPost.excerpt}
                                    </p>
                                    <div className="mt-auto flex items-center text-xs text-muted-foreground font-medium uppercase tracking-wider">
                                        Lire l'article
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Back link */}
                <div className="container mx-auto px-6 py-8 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all hover:-translate-x-1"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Retourner à la liste des articles
                    </Link>
                </div>
            </div>

            {/* Scroll to top */}
            {showScrollTop && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    aria-label="Remonter en haut"
                >
                    <ChevronUp className="w-6 h-6" />
                </motion.button>
            )}

            {/* Schema.org */}
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
                        dateModified: post.publishedAt, // Using same date for now or add updated field
                        author: {
                            '@type': 'Person',
                            name: post.author.name,
                            jobTitle: post.author.role,
                            url: post.author.linkedin
                        },
                        publisher: {
                            '@type': 'Organization',
                            name: 'Jardin Digital',
                            logo: {
                                '@type': 'ImageObject',
                                url: 'https://jardin-digital.fr/logo.png' // Placeholder
                            }
                        },
                        mainEntityOfPage: {
                            '@type': 'WebPage',
                            '@id': `https://jardin-digital.fr/blog/${post.slug}`
                        }
                    }),
                }}
            />
            {/* Breadcrumb Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            {
                                '@type': 'ListItem',
                                position: 1,
                                name: 'Accueil',
                                item: 'https://jardin-digital.fr/'
                            },
                            {
                                '@type': 'ListItem',
                                position: 2,
                                name: 'Blog',
                                item: 'https://jardin-digital.fr/blog'
                            },
                            {
                                '@type': 'ListItem',
                                position: 3,
                                name: post.title,
                                item: `https://jardin-digital.fr/blog/${post.slug}`
                            }
                        ]
                    }),
                }}
            />
        </>
    );
}
