import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog & Conseils Fleurs",
    description: "Conseils d'entretien, tendances florales et inspirations. Découvrez notre blog pour tout savoir sur l'art floral et les fleurs.",
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
