import { NextResponse } from 'next/server';
import { products } from '@/lib/data';

const BASE_URL = 'https://fleuriste11.vercel.app';

export async function GET() {
    const now = new Date().toISOString();
    
    const urlset = products.map(product => `  <url>
    <loc>${BASE_URL}/produits/${product.slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
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
