'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
    // Use MotionValues to track mouse position without triggering React re-renders
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Create smooth spring physics for the follower cursor
    const springConfig = { damping: 25, stiffness: 150 }; // Slightly smoother
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    // State for hover effect is okay as it changes infrequently
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
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
            {/* Point central (le curseur précis) - Direct following */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-secondary rounded-full pointer-events-none z-[100] mix-blend-multiply hidden md:block"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
                animate={{
                    scale: isHovering ? 0 : 1,
                }}
                transition={{ duration: 0.1 }}
            />

            {/* Cercle extérieur (l'âme organique) - Physics based following */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-secondary/50 rounded-full pointer-events-none z-[100] hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%'
                }}
                animate={{
                    scale: isHovering ? 2 : 1,
                    backgroundColor: isHovering ? 'rgba(235, 176, 196, 0.2)' : 'transparent',
                    borderColor: isHovering ? 'transparent' : 'rgba(92, 124, 91, 0.5)',
                }}
                transition={{ duration: 0.15 }} // Only affects valid animate prop changes like scale/color
            />
        </>
    );
}
