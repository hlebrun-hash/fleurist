import { NextResponse } from 'next/server';

const BASE_URL = 'https://fleuriste11.vercel.app';

export async function GET() {
    const now = new Date().toISOString();
    const categories = [
        { slug: 'bouquet', priority: '0.8' },
        { slug: 'fleurs-sechees', priority: '0.7' },
        { slug: 'plante', priority: '0.7' },
        { slug: 'accessoire', priority: '0.6' },
    ];

    const urlset = categories.map(cat => `  <url>
    <loc>${BASE_URL}/produits?category=${cat.slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${cat.priority}</priority>
  </url>`).join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
        },
    });
}
