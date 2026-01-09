"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { OrganicButton } from "./organic-button";

interface BouquetCardProps {
    name: string;
    price: string;
    image: string;
    description?: string;
    ctaText?: string;
    onCta?: () => void;
}

export function BouquetCard({
    name,
    price,
    image,
    description,
    ctaText = "Choisir ce bouquet",
    onCta,
}: BouquetCardProps) {
    return (
        <motion.article
            className="group relative bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Image container with organic shape */}
            <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                    src={image}
                    alt={`Bouquet ${name}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />

                {/* Price tag - organic shape */}
                <div
                    className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-4 py-2 shadow-md"
                    style={{ borderRadius: "20px 8px 20px 8px" }}
                >
                    <span
                        className="text-lg font-semibold text-primary"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                        {price}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                <h3
                    className="text-2xl text-foreground"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                >
                    {name}
                </h3>

                {description && (
                    <p
                        className="text-muted-foreground text-sm line-clamp-2"
                        style={{ fontFamily: "var(--font-outfit)" }}
                    >
                        {description}
                    </p>
                )}

                <OrganicButton
                    variant="primary"
                    size="md"
                    onClick={onCta}
                    className="w-full"
                >
                    {ctaText}
                </OrganicButton>
            </div>
        </motion.article>
    );
}
