'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Détecte si l'élément survolé est interactif
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Point central (le curseur précis) */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-secondary rounded-full pointer-events-none z-[100] mix-blend-multiply hidden md:block"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 0 : 1,
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
            />

            {/* Cercle extérieur (l'âme organique) */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-secondary/50 rounded-full pointer-events-none z-[100] hidden md:block"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 2 : 1,
                    backgroundColor: isHovering ? 'rgba(235, 176, 196, 0.2)' : 'transparent', // Rose transparent au survol
                    borderColor: isHovering ? 'transparent' : 'rgba(92, 124, 91, 0.5)', // Vert transparent
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            />
        </>
    );
}
