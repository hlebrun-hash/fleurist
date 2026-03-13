import { NextResponse } from 'next/server';

const BASE_URL = 'https://fleuriste11.vercel.app';

export async function GET() {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<!--  This is the parent sitemap linking to additional sitemaps for products, collections and pages as shown below. The sitemap can not be edited manually, but is kept up to date in real time.  -->
<sitemap>
<loc>${BASE_URL}/sitemap_products_1.xml</loc>
</sitemap>
<sitemap>
<loc>${BASE_URL}/sitemap_pages_1.xml</loc>
</sitemap>
<sitemap>
<loc>${BASE_URL}/sitemap_collections_1.xml</loc>
</sitemap>
<sitemap>
<loc>${BASE_URL}/sitemap_blogs_1.xml</loc>
</sitemap>
</sitemapindex>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=600',
        },
    });
}
