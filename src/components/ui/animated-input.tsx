"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
        color: "var(--muted-foreground)",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
        },
    },
};

export function AnimatedInput({
    label,
    className = "",
    value,
    ...props
}: AnimatedInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const showLabel = isFocused || value.length > 0;

    return (
        <div className={cn("relative", className)}>
            <motion.div
                className="absolute top-1/2 -translate-y-1/2 pointer-events-none text-foreground"
                variants={containerVariants}
                initial="initial"
                animate={showLabel ? "animate" : "initial"}
            >
                {label.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        className="inline-block text-sm"
                        style={{ fontFamily: "var(--font-outfit)", willChange: "transform" }}
                        variants={letterVariants}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.div>

            <input
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={value}
                {...props}
                className={cn(
                    "outline-none border-b-2 border-primary/50 focus:border-primary",
                    "py-3 w-full text-base font-medium",
                    "text-foreground bg-transparent",
                    "placeholder-transparent transition-colors duration-300"
                )}
                style={{ fontFamily: "var(--font-outfit)" }}
            />
        </div>
    );
}
