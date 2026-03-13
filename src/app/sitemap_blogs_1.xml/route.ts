import { NextResponse } from 'next/server';

const BASE_URL = 'https://fleuriste11.vercel.app';

export async function GET() {
    let urlset = '';
    const now = new Date().toISOString();

    try {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (supabaseUrl && supabaseKey && !supabaseUrl.includes('placeholder')) {
            const { createClient } = await import('@supabase/supabase-js');
            const supabase = createClient(supabaseUrl, supabaseKey);
            const { data: posts } = await supabase
                .from('blog_posts')
                .select('slug, published_at')
                .order('published_at', { ascending: false });

            if (posts) {
                urlset = posts.map(post => `  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.published_at ? new Date(post.published_at).toISOString() : now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('\n');
            }
        }
    } catch (e) {
        console.warn('Sitemap Blogs: Error fetching from Supabase');
    }

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
