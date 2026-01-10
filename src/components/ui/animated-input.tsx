"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    value: string;
    className?: string;
}

const containerVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const letterVariants = {
    initial: {
        y: 0,
        color: "inherit",
    },
    animate: {
        y: "-120%",
        color: "var(--muted-foreground)", // Using theme variable
        transition: {
            type: "spring" as const,
            stiffness: 300,
            damping: 20,
        },
    },
};

export const AnimatedInput = ({
    label,
    className = "",
    value,
    ...props
}: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const showLabel = isFocused || value.length > 0;

    return (
        <div className={cn("relative pt-6", className)}> {/* Increased padding-top */}
            <motion.div
                className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none text-muted-foreground z-10"
                variants={containerVariants}
                initial="initial"
                animate={showLabel ? "animate" : "initial"}
            >
                {label.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        className="inline-block text-base"
                        variants={letterVariants}
                        style={{ willChange: "transform" }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.div>

            <input
                type="text"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={value}
                {...props}
                className="outline-none border-b-2 border-primary/20 focus:border-primary py-2 w-full text-base font-medium bg-transparent placeholder-transparent transition-colors duration-300"
            />
        </div>
    );
};
