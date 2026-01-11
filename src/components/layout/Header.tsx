'use client';

import { Home, ShoppingBag, BookOpen, Mail } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';

const navItems = [
    { name: 'Accueil', url: '/', icon: Home },
    { name: 'Nos Bouquets', url: '/produits', icon: ShoppingBag },
    { name: 'Blog', url: '/blog', icon: BookOpen },
    { name: 'Contact', url: '/contact', icon: Mail },
];

import { Logo } from '@/components/ui/logo';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useScrollVisibility } from '@/hooks/use-scroll-visibility';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Header() {
    const { isVisible, isAtTop } = useScrollVisibility();
    const pathname = usePathname();
    const isProductPage = pathname?.startsWith('/produits');

    return (
        <>
            {/* Fond page produit pour lisibilité */}
            {isProductPage && (
                <motion.div
                    initial={{ y: 0, opacity: 0 }}
                    animate={{
                        y: isVisible ? 0 : -100,
                        opacity: isVisible ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed top-0 left-0 w-full h-24 bg-background/95 backdrop-blur-md z-[50] border-b border-border/50 shadow-sm"
                />
            )}

            <motion.div
                initial={{ y: 0, opacity: 1 }}
                animate={{
                    y: isVisible ? 0 : -100,
                    opacity: isVisible ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={cn(
                    "fixed top-4 left-4 md:top-6 md:left-8 z-[60] transition-colors duration-300 rounded-2xl",
                    (!isProductPage && !isAtTop) && "bg-background/80 backdrop-blur-md shadow-sm border border-border/50 p-2"
                )}
            >
                <Link href="/" className="transition-opacity duration-300 hover:opacity-80 block">
                    <Logo />
                </Link>
            </motion.div>
            <NavBar items={navItems} />
        </>
    );
}
