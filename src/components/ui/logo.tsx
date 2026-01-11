import React from 'react';
import { cn } from '@/lib/utils'; // Assurez-vous d'avoir une fonction cn ou utilitaire de classe

interface LogoProps {
    className?: string;
    showText?: boolean;
    variant?: 'default' | 'light' | 'dark';
}

export function Logo({ className, showText = true, variant = 'default' }: LogoProps) {
    // Définition des couleurs selon la variante
    const primaryColor = variant === 'light' ? 'text-white' : 'text-primary';
    const secondaryColor = variant === 'light' ? 'text-white/90' : 'text-secondary';
    const textColor = variant === 'light' ? 'text-white' : 'text-foreground';

    return (
        <div className={cn("flex items-center gap-2 select-none", className)}>
            {/* Icône Florale SVG */}
            <div className={cn("relative w-10 h-10 flex items-center justify-center", secondaryColor)}>
                <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full"
                >
                    {/* Tige courbe */}
                    <path d="M50 90 C 50 90, 45 60, 60 40 C 75 20, 50 10, 50 10" className="opacity-80" />
                    {/* Feuilles gauche */}
                    <path d="M50 70 C 50 70, 30 65, 35 50" className="opacity-60" />
                    <path d="M55 50 C 55 50, 40 45, 45 35" className="opacity-60" />
                    {/* Pétales / Fleur stylisée en haut */}
                    <path d="M50 10 C 50 10, 30 20, 35 30" stroke={variant === 'default' ? '#EBB0C4' : 'currentColor'} className={variant === 'default' ? 'text-primary' : ''} />
                    <path d="M50 10 C 50 10, 70 20, 65 30" stroke={variant === 'default' ? '#EBB0C4' : 'currentColor'} className={variant === 'default' ? 'text-primary' : ''} />

                    {/* Cercle décoratif fin */}
                    <circle cx="50" cy="50" r="45" strokeWidth="1" className="opacity-30" />
                </svg>
            </div>

            {/* Texte du Logo */}
            {showText && (
                <div className="flex flex-col leading-none">
                    <span className={cn("font-serif italic text-2xl tracking-tight -mb-1", textColor)}>
                        Jardin
                    </span>
                    <span className={cn("font-sans font-bold text-[0.65rem] tracking-[0.2em] uppercase", variant === 'light' ? 'text-white/80' : 'text-foreground/60')}>
                        Digital
                    </span>
                </div>
            )}
        </div>
    );
}
