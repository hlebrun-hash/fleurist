import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
    name: string
    handle: string
    avatar: string
}

export interface TestimonialCardProps {
    author: TestimonialAuthor
    text: string
    href?: string
    className?: string
}

export function TestimonialCard({
    author,
    text,
    href,
    className
}: TestimonialCardProps) {
    const Card = href ? 'a' : 'div'

    return (
        <Card
            {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
            className={cn(
                "flex flex-col rounded-2xl border border-border/50",
                "bg-gradient-to-b from-card to-card/80",
                "p-5 text-start sm:p-6",
                "hover:border-primary/30 hover:shadow-lg",
                "max-w-[320px] sm:max-w-[340px]",
                "transition-all duration-300",
                className
            )}
        >
            <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarImage src={author.avatar} alt={author.name} />
                </Avatar>
                <div className="flex flex-col items-start">
                    <h3
                        className="text-base font-semibold leading-tight text-foreground"
                        style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                        {author.name}
                    </h3>
                    <p
                        className="text-sm text-muted-foreground"
                        style={{ fontFamily: "var(--font-outfit)" }}
                    >
                        {author.handle}
                    </p>
                </div>
            </div>
            <p
                className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base"
                style={{ fontFamily: "var(--font-outfit)" }}
            >
                &ldquo;{text}&rdquo;
            </p>
        </Card>
    )
}
