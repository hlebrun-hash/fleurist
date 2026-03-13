import { NextResponse } from 'next/server';

const BASE_URL = 'https://fleuriste11.vercel.app';

export async function GET() {
    const now = new Date().toISOString();
    const pages = [
        { url: '', priority: '1.0', changefreq: 'daily' },
        { url: '/blog', priority: '0.9', changefreq: 'daily' },
        { url: '/produits', priority: '0.8', changefreq: 'weekly' },
        { url: '/contact', priority: '0.7', changefreq: 'monthly' },
        { url: '/mentions-legales', priority: '0.2', changefreq: 'yearly' },
        { url: '/politique-confidentialite', priority: '0.2', changefreq: 'yearly' },
    ];

    const urlset = pages.map(page => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
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
