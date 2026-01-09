"use client";

import { NavBar } from "@/components/ui/tubelight-navbar";
import { Home, Flower2, BookOpen, Users, Phone } from "lucide-react";

const navItems = [
    { name: "Accueil", url: "/", icon: Home },
    { name: "Nos Bouquets", url: "/produits", icon: Flower2 },
    { name: "Journal", url: "/blog", icon: BookOpen },
    { name: "À Propos", url: "/a-propos", icon: Users },
    { name: "Contact", url: "/contact", icon: Phone },
];

export function Header() {
    return (
        <header>
            <NavBar items={navItems} />
        </header>
    );
}
