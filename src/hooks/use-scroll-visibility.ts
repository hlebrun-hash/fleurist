import { useState, useEffect, useRef } from 'react';

export function useScrollVisibility(threshold = 50) {
    const [isVisible, setIsVisible] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsAtTop(currentScrollY < threshold);

            // Masquer si on descend de plus de 10px et qu'on n'est pas tout en haut
            if (currentScrollY > lastScrollY.current + 10 && currentScrollY > threshold) {
                setIsVisible(false);
            }
            // Afficher si on remonte de plus de 10px ou qu'on est tout en haut
            else if (currentScrollY < lastScrollY.current - 10 || currentScrollY < threshold) {
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return { isVisible, isAtTop };
}
