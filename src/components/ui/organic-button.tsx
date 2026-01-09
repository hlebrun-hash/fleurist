"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface OrganicButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    className?: string;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
}

export function OrganicButton({
    children,
    variant = "primary",
    size = "md",
    className = "",
    onClick,
    href,
    disabled = false,
}: OrganicButtonProps) {
    const baseStyles = cn(
        "relative inline-flex items-center justify-center font-medium transition-all duration-300",
        "rounded-full cursor-pointer overflow-hidden",
        "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background",
        {
            // Sizes
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
            // Variants
            "bg-primary text-primary-foreground hover:bg-primary/90": variant === "primary",
            "bg-secondary text-secondary-foreground hover:bg-secondary/90": variant === "secondary",
            "border-2 border-primary text-primary bg-transparent hover:bg-primary/10": variant === "outline",
            // Disabled
            "opacity-50 cursor-not-allowed": disabled,
        },
        className
    );

    const content = (
        <motion.span
            className={baseStyles}
            whileHover={disabled ? {} : { scale: 1.02 }}
            whileTap={disabled ? {} : { scale: 0.98 }}
            onClick={disabled ? undefined : onClick}
        >
            {/* Organic blob background animation */}
            <motion.span
                className="absolute inset-0 -z-10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <span
                    className={cn(
                        "absolute inset-0 blur-xl",
                        variant === "primary" && "bg-primary/30",
                        variant === "secondary" && "bg-secondary/30",
                        variant === "outline" && "bg-primary/20"
                    )}
                />
            </motion.span>

            <span className="relative z-10" style={{ fontFamily: "var(--font-outfit)" }}>
                {children}
            </span>
        </motion.span>
    );

    if (href && !disabled) {
        return (
            <a href={href} className="inline-block">
                {content}
            </a>
        );
    }

    return content;
}
