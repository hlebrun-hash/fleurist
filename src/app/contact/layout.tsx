import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Nous Contacter",
    description: "Contactez Jardin Digital, votre fleuriste artisan à Paris. Demandes de devis, questions sur nos bouquets ou prise de rendez-vous.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
