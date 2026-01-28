'use client';

import { useRef, ReactNode } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
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
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Use a spring to smooth out the scroll values slightly for a premium feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    // Animation Transforms
    // 0 -> 0.6: Expansion phase
    // 0.6 -> 0.8: Content Pause/Fade In
    // 0.8 -> 1.0: Parallax exit?

    // Responsive initial width using CSS variables defined in className
    const width = useTransform(smoothProgress, [0, 0.6], ["var(--hero-width-start)", "100vw"]);
    const height = useTransform(smoothProgress, [0, 0.6], ["400px", "100vh"]);
    const borderRadius = useTransform(smoothProgress, [0, 0.6], ["1rem", "0rem"]);

    // Background Image Fades out
    const bgOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);

    // Title/Subtitle transforms
    const textOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
    const textY = useTransform(smoothProgress, [0, 0.3], [0, -50]);
    const textTranslateX = useTransform(smoothProgress, [0, 1], [0, 100]); // Parallax effect

    // Content (children) Fade In
    const contentOpacity = useTransform(smoothProgress, [0.6, 0.85], [0, 1]);
    const contentY = useTransform(smoothProgress, [0.6, 0.85], [50, 0]);
    const contentPointerEvents = useTransform(smoothProgress, (v) => v > 0.6 ? "auto" : "none");

    const handleScrollClick = () => {
        // Scroll to the point where expansion is complete (roughly 65% of container)
        if (containerRef.current) {
            const containerHeight = containerRef.current.offsetHeight;
            const targetScroll = containerRef.current.offsetTop + (containerHeight * 0.65);
            window.scrollTo({ top: targetScroll, behavior: 'smooth' });
        }
    };

    return (
        <div
            ref={containerRef}
            className="relative h-[250vh] w-full [--hero-width-start:85vw] md:[--hero-width-start:300px]"
        >
            <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex items-center justify-center">

                {/* Background Image Layer */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ opacity: bgOpacity }}
                >
                    <Image
                        src={bgImageSrc}
                        alt="Background floral"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </motion.div>

                {/* Main Expanding Card */}
                <motion.div
                    className="relative z-20 shadow-2xl overflow-hidden bg-black"
                    style={{
                        width,
                        height,
                        borderRadius,
                    }}
                >
                    {mediaType === 'video' ? (
                        <div className="relative w-full h-full">
                            {posterSrc && (
                                <Image
                                    src={posterSrc}
                                    alt={title || "Video background"}
                                    fill
                                    className="object-cover -z-10"
                                    priority
                                    sizes="100vw"
                                />
                            )}
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src={mediaSrc} type="video/mp4" />
                            </video>
                            {/* Overlay on video */}
                            <motion.div
                                className="absolute inset-0 bg-black/30"
                                style={{ opacity: useTransform(smoothProgress, [0, 1], [0.3, 0.5]) }}
                            />
                        </div>
                    ) : (
                        <div className="relative w-full h-full">
                            <Image
                                src={mediaSrc}
                                alt={title || 'Hero Media'}
                                fill
                                className="object-cover"
                            />
                            <motion.div
                                className="absolute inset-0 bg-black/40"
                                style={{ opacity: useTransform(smoothProgress, [0, 1], [0.3, 0.6]) }}
                            />
                        </div>
                    )}
                </motion.div>

                {/* Text & CTA Layer (Initial State) */}
                <motion.div
                    className={`absolute z-30 flex flex-col items-center justify-center text-center p-4 max-w-4xl ${textBlend ? 'mix-blend-difference text-white' : 'text-white'}`}
                    style={{ opacity: textOpacity, y: textY }}
                >
                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif font-normal drop-shadow-2xl mb-4 tracking-tight">
                        {title}
                    </h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <p className="text-xl md:text-2xl font-serif italic tracking-wide text-white/90 mb-8">
                            {subtitle}
                        </p>
                    )}

                    {/* Scroll Prompt */}
                    {scrollToExpand && (
                        <div
                            className="absolute bottom-[-15vh] md:bottom-[-20vh] left-0 right-0 flex flex-col items-center gap-2 cursor-pointer"
                            onClick={handleScrollClick}
                        >
                            <p className="text-sm font-medium uppercase tracking-widest text-white/80">{scrollToExpand}</p>
                            <motion.svg
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-6 h-6 text-white/80"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </motion.svg>

                            {/* CTA Button visible initially */}
                            {ctaText && ctaHref && (
                                <Link
                                    href={ctaHref}
                                    className="mt-6 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors rounded-full text-white font-semibold uppercase tracking-wider text-sm"
                                >
                                    {ctaText}
                                </Link>
                            )}
                        </div>
                    )}
                </motion.div>

                {/* Expanded Content Layer */}
                <motion.div
                    className="absolute inset-0 z-40 flex items-center justify-center"
                    style={{
                        opacity: contentOpacity,
                        y: contentY,
                        pointerEvents: contentPointerEvents
                    }}
                >
                    <div className="container mx-auto px-4 md:px-8 py-12">
                        {children}
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default ScrollExpandMedia;
