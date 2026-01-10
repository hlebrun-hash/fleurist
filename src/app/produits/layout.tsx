import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Nos Bouquets et Compositions Florales",
    description: "Découvrez notre collection de bouquets artisanaux, compositions florales et fleurs séchées. Des créations uniques pour tous vos moments précieux.",
};

export default function ProduitsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
