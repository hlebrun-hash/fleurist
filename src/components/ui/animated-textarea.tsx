"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
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
        y: "-24px", // Adjusted for textarea usually having more top padding or needing layout shift
        color: "var(--muted-foreground)",
        transition: {
            type: "spring" as const,
            stiffness: 300,
            damping: 20,
        },
    },
};

export const AnimatedTextarea = ({
    label,
    className = "",
    value,
    ...props
}: TextareaProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const showLabel = isFocused || value.length > 0;

    return (
        <div className={cn("relative pt-6", className)}>
            <motion.div
                className="absolute top-8 left-0 pointer-events-none text-muted-foreground origin-top-left"
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

            <textarea
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={value}
                {...props}
                className="outline-none border-b-2 border-primary/20 focus:border-primary py-2 w-full text-base font-medium bg-transparent placeholder-transparent transition-colors duration-300 resize-none"
            />
        </div>
    );
};
