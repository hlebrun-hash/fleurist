import { MetadataRoute } from 'next';

const BASE_URL = 'https://fleuriste11.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Pages statiques
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/produits`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/mentions-legales`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.2,
        },
        {
            url: `${BASE_URL}/politique-confidentialite`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.2,
        },
    ];

    // Articles de blog dynamiques depuis Supabase
    let blogPages: MetadataRoute.Sitemap = [];
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
                blogPages = posts.map((post) => ({
                    url: `${BASE_URL}/blog/${post.slug}`,
                    lastModified: new Date(post.published_at),
                    changeFrequency: 'monthly' as const,
                    priority: 0.6,
                }));
            }
        }
    } catch (e) {
        console.warn('Sitemap: impossible de récupérer les articles.');
    }

    return [...staticPages, ...blogPages];
}
