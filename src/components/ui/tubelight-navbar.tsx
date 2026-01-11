"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

interface NavItem {
    name: string
    url: string
    icon: LucideIcon
}

interface NavBarProps {
    items: NavItem[]
    className?: string
}

export function NavBar({ items, className }: NavBarProps) {
    const pathname = usePathname()
    const [activeTab, setActiveTab] = useState(items[0].name)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const activeItem = items.find(item => item.url === pathname);
        if (activeItem) {
            setActiveTab(activeItem.name);
        }
    }, [pathname, items]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            // Masquer si on descend de plus de 10px et qu'on n'est pas tout en haut
            if (currentScrollY > lastScrollY + 10 && currentScrollY > 50) {
                setIsVisible(false)
            }
            // Afficher si on remonte de plus de 10px ou qu'on est tout en haut
            else if (currentScrollY < lastScrollY - 10 || currentScrollY < 50) {
                setIsVisible(true)
            }
            setLastScrollY(currentScrollY)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    return (
        <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{
                y: isVisible ? 0 : (isMobile ? 100 : -100),
                opacity: isVisible ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
                "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-[100] mb-6 sm:pt-6 pointer-events-none",
                className,
            )}
        >
            <div className="flex items-center gap-3 bg-secondary/95 border border-secondary-foreground/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-xl pointer-events-auto">
                {items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.name

                    return (
                        <Link
                            key={item.name}
                            href={item.url}
                            onClick={() => setActiveTab(item.name)}
                            aria-label={item.name}
                            className={cn(
                                "relative cursor-pointer text-sm font-bold font-serif tracking-wide px-6 py-2 rounded-full transition-colors",
                                "text-secondary-foreground/70 hover:text-primary",
                                isActive && "bg-secondary-foreground/10 text-primary",
                            )}
                        >
                            <span className="hidden md:inline">{item.name}</span>
                            <span className="md:hidden">
                                <Icon size={18} strokeWidth={2.5} />
                            </span>
                            {isActive && (
                                <motion.div
                                    layoutId="lamp"
                                    className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                                    initial={false}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                >
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full shadow-[0_0_10px_rgba(214,166,166,0.5)]">
                                        <div className="absolute w-12 h-6 bg-primary/30 rounded-full blur-md -top-2 -left-2" />
                                        <div className="absolute w-8 h-6 bg-primary/30 rounded-full blur-md -top-1" />
                                        <div className="absolute w-4 h-4 bg-primary/30 rounded-full blur-sm top-0 left-2" />
                                    </div>
                                </motion.div>
                            )}
                        </Link>
                    )
                })}
            </div>
        </motion.div>
    )
}
