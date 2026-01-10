'use client';

import {
    useEffect,
    useRef,
    useState,
    ReactNode,
} from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface ScrollExpandMediaProps {
    mediaType?: 'video' | 'image';
    mediaSrc: string;
    posterSrc?: string;
    bgImageSrc: string;
    title?: string;
    subtitle?: string;
    scrollToExpand?: string;
    textBlend?: boolean;
    children?: ReactNode;
    ctaText?: string;
    ctaHref?: string;
}

const ScrollExpandMedia = ({
    mediaType = 'image',
    mediaSrc,
    posterSrc,
    bgImageSrc,
    title,
    subtitle,
    scrollToExpand,
    textBlend,
    children,
    ctaText,
    ctaHref,
}: ScrollExpandMediaProps) => {
    const router = useRouter();
    const [scrollProgress, setScrollProgress] = useState<number>(0);
    const [showContent, setShowContent] = useState<boolean>(false);
    const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
    const [touchStartY, setTouchStartY] = useState<number>(0);
    const [isMobileState, setIsMobileState] = useState<boolean>(false);

    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setScrollProgress(0);
        setShowContent(false);
        setMediaFullyExpanded(false);
    }, [mediaType]);

    useEffect(() => {
        // Check if the event target is an interactive element
        const isInteractiveElement = (target: EventTarget | null): boolean => {
            if (!target || !(target instanceof HTMLElement)) return false;
            const interactiveSelectors = 'a, button, input, select, textarea, [role="button"], [onclick]';
            return target.closest(interactiveSelectors) !== null;
        };

        const handleWheel = (e: WheelEvent) => {
            // Don't intercept if clicking on interactive elements
            if (isInteractiveElement(e.target)) return;

            if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
                setMediaFullyExpanded(false);
                e.preventDefault();
            } else if (!mediaFullyExpanded) {
                e.preventDefault();
                const scrollDelta = e.deltaY * 0.0009;
                const newProgress = Math.min(
                    Math.max(scrollProgress + scrollDelta, 0),
                    1
                );
                setScrollProgress(newProgress);

                if (newProgress >= 1) {
                    setMediaFullyExpanded(true);
                    setShowContent(true);
                } else if (newProgress < 0.75) {
                    setShowContent(false);
                }
            }
        };

        const handleTouchStart = (e: TouchEvent) => {
            // Don't intercept if touching interactive elements
            if (isInteractiveElement(e.target)) return;
            setTouchStartY(e.touches[0].clientY);
        };

        const handleTouchMove = (e: TouchEvent) => {
            // Don't intercept if touching interactive elements
            if (isInteractiveElement(e.target)) return;
            if (!touchStartY) return;

            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;

            if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
                setMediaFullyExpanded(false);
                e.preventDefault();
            } else if (!mediaFullyExpanded) {
                e.preventDefault();
                const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
                const scrollDelta = deltaY * scrollFactor;
                const newProgress = Math.min(
                    Math.max(scrollProgress + scrollDelta, 0),
                    1
                );
                setScrollProgress(newProgress);

                if (newProgress >= 1) {
                    setMediaFullyExpanded(true);
                    setShowContent(true);
                } else if (newProgress < 0.75) {
                    setShowContent(false);
                }

                setTouchStartY(touchY);
            }
        };

        const handleTouchEnd = (): void => {
            setTouchStartY(0);
        };

        const handleScroll = (): void => {
            if (!mediaFullyExpanded) {
                window.scrollTo(0, 0);
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        // window.addEventListener('scroll', handleScroll); // Disabled aggressive scroll locking
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            // window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [scrollProgress, mediaFullyExpanded, touchStartY]);

    useEffect(() => {
        const checkIfMobile = (): void => {
            setIsMobileState(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
    const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
    const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

    const firstWord = title ? title.split(' ')[0] : '';
    const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

    return (
        <div
            ref={sectionRef}
            className={`transition-colors duration-700 ease-in-out overflow-x-hidden ${mediaFullyExpanded ? 'pointer-events-none' : ''}`}
        >
            <section className='relative flex flex-col items-center justify-start min-h-[100dvh] pointer-events-auto'>
                <div className='relative w-full flex flex-col items-center min-h-[100dvh]'>
                    <motion.div
                        className='absolute inset-0 z-0 h-full pointer-events-none'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 - scrollProgress }}
                        transition={{ duration: 0.1 }}
                    >
                        <Image
                            src={bgImageSrc}
                            alt='Background floral'
                            width={1920}
                            height={1080}
                            className='w-screen h-screen'
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                            }}
                            priority
                        />
                        <div className='absolute inset-0 bg-black/30' />
                    </motion.div>

                    <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
                        <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>
                            <div
                                className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl overflow-hidden'
                                style={{
                                    width: `${mediaWidth}px`,
                                    height: `${mediaHeight}px`,
                                    maxWidth: '95vw',
                                    maxHeight: '85vh',
                                    boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
                                }}
                            >
                                {mediaType === 'video' ? (
                                    <div className='relative w-full h-full pointer-events-none'>
                                        <video
                                            src={mediaSrc}
                                            poster={posterSrc}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            preload='auto'
                                            className='w-full h-full object-cover rounded-xl'
                                            controls={false}
                                            disablePictureInPicture
                                            disableRemotePlayback
                                        />
                                        <motion.div
                                            className='absolute inset-0 bg-black/30 rounded-xl'
                                            initial={{ opacity: 0.7 }}
                                            animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    </div>
                                ) : (
                                    <div className='relative w-full h-full pointer-events-none'>
                                        <Image
                                            src={mediaSrc}
                                            alt={title || 'Bouquet de fleurs'}
                                            width={1280}
                                            height={720}
                                            className='w-full h-full object-cover rounded-xl'
                                        />
                                        <motion.div
                                            className='absolute inset-0 bg-black/40 rounded-xl'
                                            initial={{ opacity: 0.7 }}
                                            animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                                            transition={{ duration: 0.2 }}
                                        />
                                    </div>
                                )}

                                <div className='flex flex-col items-center text-center relative z-10 mt-4 transition-none'>
                                    {subtitle && (
                                        <p
                                            className='text-lg md:text-xl text-white/90 font-light'
                                            style={{ transform: `translateX(-${textTranslateX}vw)` }}
                                        >
                                            {subtitle}
                                        </p>
                                    )}
                                    {scrollToExpand && (
                                        <motion.div
                                            className='flex flex-col items-center gap-2 mt-4'
                                            style={{ transform: `translateX(${textTranslateX}vw)` }}
                                            animate={{ y: [0, 8, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <p className='text-white/80 font-medium text-center text-sm'>
                                                {scrollToExpand}
                                            </p>
                                            <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                            </svg>
                                        </motion.div>
                                    )}
                                </div>
                            </div>

                            <div
                                className={`flex items-center justify-center text-center gap-4 w-full relative z-10 transition-none flex-col ${textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                                    }`}
                            >
                                {/* Structure H1 pour SEO - Un seul H1 */}
                                <h1 className="sr-only">
                                    {title}
                                </h1>

                                {/* Éléments visuels animés (aria-hidden pour éviter la duplication pour les lecteurs d'écran) */}
                                <motion.span
                                    className='text-4xl md:text-5xl lg:text-7xl font-bold text-white transition-none drop-shadow-2xl block'
                                    style={{ transform: `translateX(-${textTranslateX}vw)` }}
                                    aria-hidden="true"
                                >
                                    {firstWord}
                                </motion.span>
                                <motion.span
                                    className='text-4xl md:text-5xl lg:text-7xl font-bold text-center text-white transition-none drop-shadow-2xl block'
                                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                                    aria-hidden="true"
                                >
                                    {restOfTitle}
                                </motion.span>
                                {ctaText && ctaHref && scrollProgress < 0.5 && (
                                    ctaHref.startsWith('#') ? (
                                        <motion.button
                                            onClick={() => {
                                                // Trigger full expansion and scroll to anchor
                                                setScrollProgress(1);
                                                setMediaFullyExpanded(true);
                                                setShowContent(true);

                                                setTimeout(() => {
                                                    const targetId = ctaHref.replace('#', '');
                                                    const targetElement = document.getElementById(targetId);
                                                    if (targetElement) {
                                                        targetElement.scrollIntoView({ behavior: 'smooth' });
                                                    }
                                                }, 500);
                                            }}
                                            className="mt-8 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:scale-105 transition-transform shadow-lg cursor-pointer z-50 pointer-events-auto"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1 - scrollProgress * 2, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            {ctaText}
                                        </motion.button>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1 - scrollProgress * 2, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                            className="relative z-50 pointer-events-auto"
                                        >
                                            <Link
                                                href={ctaHref}
                                                className="inline-block mt-8 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:scale-105 transition-transform shadow-lg cursor-pointer"
                                            >
                                                {ctaText}
                                            </Link>
                                        </motion.div>
                                    )
                                )}
                            </div>
                        </div>

                        <motion.section
                            className='flex flex-col w-full px-8 py-10 md:px-16 lg:py-20'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: showContent ? 1 : 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            {children}
                        </motion.section>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ScrollExpandMedia;
