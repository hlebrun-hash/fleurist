'use client';

import { Home, ShoppingBag, BookOpen, Mail } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';

const navItems = [
    { name: 'Accueil', url: '/', icon: Home },
    { name: 'Nos Bouquets', url: '/produits', icon: ShoppingBag },
    { name: 'Blog', url: '/blog', icon: BookOpen },
    { name: 'Contact', url: '/contact', icon: Mail },
];

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <NavBar items={navItems} />
        </header>
    );
}
