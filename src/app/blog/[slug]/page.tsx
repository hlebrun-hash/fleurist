'use client';

import { use, useEffect, useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { Calendar, Clock, ArrowLeft, ChevronUp, Twitter, Facebook, Linkedin, Link as LinkIcon, Sparkles, ExternalLink, List, User } from 'lucide-react';
import { notFound } from 'next/navigation';
import { AnimatedInput } from '@/components/ui/animated-input';

interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string | null;
    image: string | null;
    category: string | null;
    tags: string[] | null;
    reading_time: number | null;
    published_at: string;
    featured: boolean | null;
    author: {
        name: string;
        role: string;
        image: string;
        bio: string;
        linkedin?: string;
    } | null;
    external_link?: {
        title?: string;
        url?: string;
    } | null;
}

/* ─── Composants image avec fallback ─── */
const AvatarImage = ({ src, alt, size = 40, className }: { src: string; alt: string; size?: number; className?: string }) => {
    const [error, setError] = useState(false);
    if (error || !src) {
        return (
            <div className={`rounded-full bg-secondary flex items-center justify-center text-primary shrink-0 ${className}`} style={{ width: size, height: size }}>
                <User size={size * 0.5} />
            </div>
        );
    }
    return <Image width={size} height={size} src={src} alt={alt} className={`rounded-full object-cover shrink-0 ${className}`} style={{ width: size, height: size }} onError={() => setError(true)} unoptimized />;
};

const PostImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
    const [error, setError] = useState(false);
    if (error || !src) {
        return <div className="absolute inset-0 bg-secondary flex items-center justify-center"><span className="text-6xl">🌸</span></div>;
    }
    return <Image src={src} alt={alt} fill className={className} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px" onError={() => setError(true)} />;
};

/* ─── Auteurs de secours ─── */
const DEFAULT_AUTHORS: { name: string; role: string; image: string; bio: string; linkedin?: string }[] = [
    { name: 'Camille Verdier', role: 'Maître Fleuriste', image: 'https://randomuser.me/api/portraits/women/32.jpg', bio: 'Passionnée par l\'art floral depuis plus de 15 ans, Camille partage ses conseils avec générosité.' },
    { name: 'Sophie Rose', role: 'Décoratrice Florale', image: 'https://randomuser.me/api/portraits/women/65.jpg', bio: 'Spécialiste des compositions florales et de la décoration d\'intérieur végétale.' },
    { name: 'Antoine Fleur', role: 'Expert Plantes', image: 'https://randomuser.me/api/portraits/men/45.jpg', bio: 'Botaniste de formation, Antoine guide nos lecteurs vers une vie plus verte.' },
];

function getAuthor(raw: BlogPost['author'] | null | undefined, slug: string): { name: string; role: string; image: string; bio: string; linkedin?: string } {
    if (raw && raw.name && raw.name.trim() !== '') {
        return { name: raw.name, role: raw.role || 'Rédactrice Florale', image: raw.image || '', bio: raw.bio || 'Passionnée par l\'univers floral.', linkedin: raw.linkedin };
    }
    const index = slug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % DEFAULT_AUTHORS.length;
    return DEFAULT_AUTHORS[index];
}

/* ─── Page principale ─── */
interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = use(params);
    const [post, setPost] = useState<BlogPost | null>(null);
    const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [notFoundState, setNotFoundState] = useState(false);
    const [readingProgress, setReadingProgress] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [email, setEmail] = useState('');
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const contentStartRef = useRef<HTMLDivElement>(null);
    const contentEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        async function fetchPost() {
            const { data, error } = await supabase.from('blog_posts').select('*').eq('slug', slug).single();
            if (error || !data) {
                setNotFoundState(true);
            } else {
                // Normaliser les champs null pour éviter les crashes
                const parseExternalLink = (raw: unknown) => {
                    if (!raw) return null;
                    if (typeof raw === 'string') {
                        try { return JSON.parse(raw); } catch { return null; }
                    }
                    if (typeof raw === 'object') return raw;
                    return null;
                };
                const normalized = {
                    ...data,
                    content: data.content ?? '',
                    excerpt: data.excerpt ?? '',
                    image: data.image ?? '',
                    category: data.category ?? 'Article',
                    tags: Array.isArray(data.tags) ? data.tags : [],
                    reading_time: data.reading_time ?? 5,
                    featured: data.featured ?? false,
                    author: data.author ?? null,
                    external_link: parseExternalLink(data.external_link),
                };
                setPost(normalized);
                const { data: related } = await supabase.from('blog_posts').select('*').neq('id', data.id).order('published_at', { ascending: false }).limit(3);
                setRelatedPosts(related || []);
            }
            setLoading(false);
        }
        fetchPost();
    }, [slug]);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            setReadingProgress((window.scrollY / totalHeight) * 100);
            setShowScrollTop(window.scrollY > 500);
            // Visibilité de la sidebar : entre le début du contenu et "Envie de nature ?"
            const startEl = contentStartRef.current;
            const endEl = contentEndRef.current;
            if (startEl && endEl) {
                const startTop = startEl.getBoundingClientRect().top;
                const endTop = endEl.getBoundingClientRect().top;
                setSidebarVisible(startTop <= 80 && endTop > 80);
            }
            const sections = document.querySelectorAll('h2[id]');
            let current = '';
            sections.forEach((section) => {
                if (window.scrollY >= (section as HTMLElement).offsetTop - 100) current = section.getAttribute('id') || '';
            });
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const { processedContent, toc } = useMemo(() => {
        if (!post) return { processedContent: '', toc: [] };

        const tocItems: { id: string; title: string }[] = [];
        const slugify = (text: string) =>
            text.toLowerCase()
                .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // retirer accents pour l'id
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/^-+|-+$/g, '');

        // Normaliser les fins de ligne (Windows \r\n → \n)
        const raw = (post.content ?? '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');

        const lines = raw.split('\n');
        const htmlLines: string[] = [];
        let insideList = false;

        for (const line of lines) {
            // ### → H4
            const h4 = line.match(/^### (.+)$/);
            if (h4) {
                if (insideList) { htmlLines.push('</ul>'); insideList = false; }
                const title = h4[1].trim();
                const id = slugify(title);
                htmlLines.push(`<h4 id="${id}" class="text-lg md:text-xl font-bold font-serif mt-8 mb-3 text-foreground scroll-mt-32">${title}</h4>`);
                continue;
            }
            // ## → H3
            const h3 = line.match(/^## (.+)$/);
            if (h3) {
                if (insideList) { htmlLines.push('</ul>'); insideList = false; }
                const title = h3[1].trim();
                const id = slugify(title);
                tocItems.push({ id, title });
                htmlLines.push(`<h3 id="${id}" class="text-xl md:text-2xl font-bold font-serif mt-10 mb-4 text-foreground scroll-mt-32">${title}</h3>`);
                continue;
            }
            // # → H2
            const h2 = line.match(/^# (.+)$/);
            if (h2) {
                if (insideList) { htmlLines.push('</ul>'); insideList = false; }
                const title = h2[1].trim();
                const id = slugify(title);
                tocItems.push({ id, title });
                htmlLines.push(`<h2 id="${id}" class="text-2xl md:text-3xl font-bold font-serif mt-12 mb-6 text-foreground scroll-mt-32">${title}</h2>`);
                continue;
            }
            // * item → liste
            const li = line.match(/^\* (.+)$/);
            if (li) {
                if (!insideList) { htmlLines.push('<ul class="list-disc pl-6 my-4 space-y-2">'); insideList = true; }
                htmlLines.push(`<li class="text-muted-foreground">${li[1].trim()}</li>`);
                continue;
            }
            // Ligne vide
            if (line.trim() === '') {
                if (insideList) { htmlLines.push('</ul>'); insideList = false; }
                htmlLines.push('');
                continue;
            }
            // Fermer liste si on n'est plus dedans
            if (insideList) { htmlLines.push('</ul>'); insideList = false; }

            // Blockquote > "texte"
            let text = line;
            const bq = text.match(/^> \"(.+)\"$/);
            if (bq) {
                htmlLines.push(`<blockquote class="border-l-4 border-primary pl-6 py-2 italic text-xl text-foreground/80 my-8 bg-secondary/10 rounded-r-lg">"${bq[1]}"</blockquote>`);
                continue;
            }

            // Inline : gras, liens
            text = text
                .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
                .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary underline hover:text-primary/80" target="_blank" rel="noopener noreferrer">$1</a>');

            htmlLines.push(`<p class="text-muted-foreground leading-relaxed mb-4">${text}</p>`);
        }
        if (insideList) htmlLines.push('</ul>');

        let html = htmlLines.join('\n');

        // Insérer le CTA après le premier </h2> ou </h3>
        const splitPoint = html.search(/<\/(h2|h3)>/);
        if (splitPoint !== -1) {
            const closeTag = html.substring(splitPoint, html.indexOf('>', splitPoint) + 1);
            const afterClose = splitPoint + closeTag.length;
            const ctaHtml = `<div class="my-12 p-8 bg-primary/5 border border-primary/20 rounded-2xl text-center not-prose"><h3 class="text-2xl font-serif font-bold mb-3 text-foreground">Une envie florale particulière ?</h3><p class="text-muted-foreground mb-6">Nos artisans fleuristes réalisent vos rêves sur mesure.</p><a href="/contact" class="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">Demander un devis gratuit</a></div>`;
            html = html.substring(0, afterClose) + ctaHtml + html.substring(afterClose);
        }

        return { processedContent: html, toc: tocItems };
    }, [post]);


    if (loading) {
        return (
            <div className="min-h-screen pt-24 flex items-center justify-center">
                <div className="text-center space-y-4">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
                    <p className="text-muted-foreground">Chargement de l&apos;article...</p>
                </div>
            </div>
        );
    }
    if (notFoundState || !post) notFound();

    const formatDate = (dateString: string) => {
        const date = new Date(dateString.includes('T') ? dateString : `${dateString}T00:00:00`);
        return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    const author = getAuthor(post!.author, slug);

    return (
        <>
            {/* Barre de progression */}
            <div className="fixed top-0 left-0 h-1 bg-primary z-[100] transition-all duration-150" style={{ width: `${readingProgress}%` }} />

            {/* ═══════════════════════════════════════════════
                SIDEBAR FIXE — toujours visible pendant le scroll
            ═══════════════════════════════════════════════ */}
            <aside
                className={`hidden xl:block fixed z-40 transition-all duration-300 ${sidebarVisible ? 'opacity-100 translate-x-0' : 'opacity-0 pointer-events-none translate-x-4'}`}
                style={{ top: '6rem', right: '1.5rem', width: '17rem', maxHeight: 'calc(100vh - 7rem)', overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: 'var(--border) transparent', overscrollBehavior: 'contain' }}
            >
                {/* Wrapper interne — garantit que overflow-y fonctionne dans un block */}
                <div className="flex flex-col gap-4 pb-4">

                    {/* Sommaire */}
                    {toc.length > 0 && (
                        <div className="p-5 bg-background rounded-2xl border border-border shadow-md">
                            <h3 className="font-bold font-serif mb-3 text-base flex items-center gap-2">
                                <List className="w-4 h-4 text-primary" /> Sommaire
                            </h3>
                            <nav className="flex flex-col gap-1">
                                {toc.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className={`text-sm py-1.5 px-3 rounded-lg transition-all block truncate ${activeSection === item.id
                                            ? 'bg-primary/10 text-primary font-semibold border-l-2 border-primary'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                                            }`}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    )}

                    {/* Newsletter */}
                    <div className="p-5 bg-secondary/30 rounded-2xl border border-primary/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 opacity-40">
                            <Sparkles className="w-12 h-12 text-primary/20" />
                        </div>
                        <h3 className="font-bold font-serif mb-1 text-base relative z-10 text-foreground">Rejoignez le club</h3>
                        <p className="text-xs text-muted-foreground mb-3 relative z-10">Inspiration et conseils exclusifs chaque semaine.</p>
                        <div className="relative z-20 mb-3">
                            <AnimatedInput label="Votre email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <button className="w-full py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full hover:bg-primary/90 transition-colors relative z-10 shadow-md">
                            S&apos;inscrire
                        </button>
                    </div>

                    {/* Lien externe */}
                    {post!.external_link && (
                        <div className="p-5 bg-background rounded-2xl border border-border shadow-md">
                            <h3 className="font-bold font-serif mb-2 text-base flex items-center gap-2">
                                <LinkIcon className="w-4 h-4 text-primary" /> Pour aller plus loin
                            </h3>
                            <a
                                href={post!.external_link.url || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-primary hover:underline font-medium text-sm break-words group"
                            >
                                <ExternalLink className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                                <span>{post!.external_link.title || post!.external_link.url || 'Voir la ressource'}</span>
                            </a>
                        </div>
                    )}

                </div>
            </aside>


            <div className="min-h-screen pt-24 pb-16">
                {/* Breadcrumb */}
                <nav className="container mx-auto px-8 md:px-12 lg:px-16 py-4">
                    <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                        <li><Link href="/" className="hover:text-primary transition-colors">Accueil</Link></li>
                        <li>/</li>
                        <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                        <li>/</li>
                        <li className="text-foreground font-medium truncate max-w-[200px]">{post!.title}</li>
                    </ol>
                </nav>

                {/* Header article */}
                <header className="container mx-auto px-8 md:px-12 lg:px-16 py-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm rounded-full mb-6 font-medium">{post!.category}</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-8 leading-tight text-foreground">{post!.title}</h1>
                        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-muted-foreground mb-8 text-sm md:text-base">
                            <div className="flex items-center gap-2">
                                <AvatarImage src={author.image} alt={author.name} size={32} className="border border-border" />
                                <span className="font-medium text-foreground">{author.name}</span>
                            </div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{formatDate(post!.published_at)}</span></div>
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{post!.reading_time} min de lecture</span></div>
                        </div>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">{post!.excerpt}</p>
                    </motion.div>
                </header>

                {/* Image principale */}
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="container mx-auto px-8 md:px-12 lg:px-16 mb-16">
                    <div className="relative aspect-[21/9] max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
                        <PostImage src={post!.image ?? ''} alt={post!.title} className="object-cover" />
                    </div>
                </motion.div>

                {/* Contenu de l'article — décalé pour laisser place à la sidebar fixe */}
                <div className="container mx-auto px-8 md:px-12 lg:px-16 xl:pr-80">
                    <div className="flex gap-8 max-w-5xl mx-auto xl:max-w-none">

                        {/* Boutons partage gauche */}
                        <aside className="hidden lg:flex flex-col items-center gap-4 shrink-0 self-start sticky top-32">
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground -rotate-90 py-8">Partager</p>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110" aria-label="Twitter"><Twitter className="w-4 h-4" /></button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110" aria-label="Facebook"><Facebook className="w-4 h-4" /></button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></button>
                        </aside>

                        {/* Contenu central */}
                        <div className="flex-1 min-w-0">
                            {/* REF début du contenu (déclenche apparition sidebar) */}
                            <div ref={contentStartRef} />
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

                            {/* REF fin (déclenche disparition sidebar) */}
                            <div ref={contentEndRef} />

                            {/* Maillage interne */}
                            <div className="my-12 p-6 bg-secondary/20 rounded-2xl border border-secondary not-prose">
                                <h3 className="font-serif font-bold text-lg mb-4 text-foreground flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-primary" /> Envie de nature ?
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    <Link href="/produits" className="text-sm font-medium bg-background text-foreground hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md">Voir nos bouquets</Link>
                                    <Link href="/produits?category=plante" className="text-sm font-medium bg-background text-foreground hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md">Nos plantes vertes</Link>
                                    <Link href="/contact" className="text-sm font-medium bg-background text-foreground hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md">Création sur mesure</Link>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-border/50">
                                {(post!.tags ?? []).map((tag) => (
                                    <span key={tag} className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-full cursor-default">#{tag}</span>
                                ))}
                            </div>

                            {/* Auteur */}
                            <div className="mt-16 p-8 md:p-10 bg-secondary/30 rounded-3xl border border-secondary">
                                <div className="flex flex-col sm:flex-row gap-8 items-start">
                                    <AvatarImage src={author.image} alt={author.name} size={120} className="border-4 border-background shadow-md hidden sm:block" />
                                    <AvatarImage src={author.image} alt={author.name} size={80} className="border-4 border-background shadow-md sm:hidden mx-auto" />
                                    <div className="space-y-4 flex-1">
                                        <div>
                                            <h3 className="text-2xl font-bold font-serif text-foreground">{author.name}</h3>
                                            <p className="text-primary font-medium">{author.role}</p>
                                        </div>
                                        <p className="text-muted-foreground italic text-lg leading-relaxed">&quot;{author.bio}&quot;</p>
                                        {author.linkedin && (
                                            <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors uppercase tracking-wide">
                                                <Linkedin className="w-4 h-4" /> Suivre l&apos;expert
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Articles liés */}
                {relatedPosts.length > 0 && (
                    <section className="py-20 mt-20 bg-secondary/30 border-t border-border">
                        <div className="container mx-auto px-8 md:px-12 lg:px-16">
                            <div className="flex items-center justify-between mb-12">
                                <h2 className="text-3xl font-bold font-serif">À lire aussi</h2>
                                <Link href="/blog" className="hidden md:inline-flex items-center gap-2 text-primary font-medium hover:underline">
                                    Voir tout le blog <ArrowLeft className="w-4 h-4 rotate-180" />
                                </Link>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
                                {relatedPosts.map((relPost) => (
                                    <Link key={relPost.id} href={`/blog/${relPost.slug}`} className="group flex flex-col">
                                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 shadow-sm group-hover:shadow-md transition-shadow">
                                            <PostImage src={relPost.image ?? ''} alt={relPost.title} className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">{relPost.category ?? 'Article'}</div>
                                        </div>
                                        <h3 className="text-xl font-bold font-serif mb-2 group-hover:text-primary transition-colors leading-tight">{relPost.title}</h3>
                                        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{relPost.excerpt}</p>
                                        <div className="mt-auto flex items-center text-xs text-muted-foreground font-medium uppercase tracking-wider">Lire l&apos;article</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Retour */}
                <div className="container mx-auto px-8 md:px-12 lg:px-16 py-8 text-center">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all hover:-translate-x-1">
                        <ArrowLeft className="w-4 h-4" /> Retourner à la liste des articles
                    </Link>
                </div>
            </div>

            {/* Bouton scroll top */}
            {showScrollTop && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-8 left-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50"
                    aria-label="Remonter en haut"
                >
                    <ChevronUp className="w-6 h-6" />
                </motion.button>
            )}

            {/* Schema.org */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BlogPosting',
                    headline: post!.title,
                    description: post!.excerpt,
                    image: post!.image,
                    datePublished: post!.published_at,
                    author: { '@type': 'Person', name: author.name, jobTitle: author.role },
                    publisher: { '@type': 'Organization', name: 'Jardin Digital' },
                })
            }} />
        </>
    );
}
