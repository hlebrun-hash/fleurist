"use client"

import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import { Star } from "lucide-react"

interface TestimonialsSectionProps {
    title: string
    description: string
    testimonials: Array<{
        author: TestimonialAuthor
        text: string
        href?: string
    }>
    className?: string
}

export function TestimonialsSection({
    title,
    description,
    testimonials,
    className
}: TestimonialsSectionProps) {
    return (
        <section className={cn(
            "bg-muted/30 text-foreground",
            "py-16 sm:py-24 md:py-28 px-0 overflow-hidden",
            className
        )}>
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center sm:gap-12">
                {/* Header */}
                <div className="flex flex-col items-center gap-4 px-6 sm:gap-6">
                    <h2
                        className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                        {title}
                    </h2>
                    <p
                        className="max-w-[600px] text-base text-muted-foreground sm:text-lg"
                        style={{ fontFamily: "var(--font-outfit)" }}
                    >
                        {description}
                    </p>
                </div>

                {/* Marquee Container */}
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
                        <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                            {[...Array(4)].map((_, setIndex) => (
                                testimonials.map((testimonial, i) => (
                                    <TestimonialCard
                                        key={`${setIndex}-${i}`}
                                        {...testimonial}
                                    />
                                ))
                            ))}
                        </div>
                    </div>

                    {/* Gradient overlays */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-muted/30 to-transparent sm:block" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-gradient-to-l from-muted/30 to-transparent sm:block" />
                </div>

                {/* Google Reviews Badge */}
                <div className="flex items-center gap-2 bg-card px-6 py-3 rounded-full shadow-sm border border-border/50">
                    <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                size={16}
                                className="fill-primary text-primary"
                            />
                        ))}
                    </div>
                    <span
                        className="text-sm text-muted-foreground"
                        style={{ fontFamily: "var(--font-outfit)" }}
                    >
                        4.9/5 sur Google (127 avis)
                    </span>
                </div>
            </div>
        </section>
    )
}
