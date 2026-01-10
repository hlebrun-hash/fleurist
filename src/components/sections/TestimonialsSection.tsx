'use client';

import { motion } from 'motion/react';
import { TestimonialsColumn } from '@/components/ui/testimonials-columns';
import { testimonials } from '@/lib/data';

export function TestimonialsSection() {
    const firstColumn = testimonials.slice(0, 3);
    const secondColumn = testimonials.slice(3, 6);
    const thirdColumn = testimonials.slice(6, 9);

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center mb-12"
                >
                    <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                        Témoignages
                    </span>

                    <h2 className="text-3xl md:text-5xl font-bold font-serif tracking-tight mb-5">
                        Ce que nos clients <span className="text-primary">disent de nous</span>
                    </h2>

                    <p className="text-muted-foreground text-lg">
                        La satisfaction de nos clients est notre plus belle récompense
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                </div>
            </div>
        </section>
    );
}
