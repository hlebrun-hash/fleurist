import { MetadataRoute } from 'next';
import { products } from '@/lib/data';

const BASE_URL = 'https://fleuriste11.vercel.app';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date();

    // 1. Static Pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${BASE_URL}/blog`,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/produits`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/contact`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/mentions-legales`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.2,
        },
        {
            url: `${BASE_URL}/politique-confidentialite`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.2,
        },
    ];

    // 2. Product Pages
    const productPages: MetadataRoute.Sitemap = products.map((product) => ({
        url: `${BASE_URL}/produits/${product.slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    // 3. Category Pages (Collections)
    const categoryPages: MetadataRoute.Sitemap = [
        'bouquet',
        'fleurs-sechees',
        'plante',
        'accessoire',
    ].map((cat) => ({
        url: `${BASE_URL}/produits?category=${cat}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.7,
    }));

    // 4. Dynamic Blog Posts from Supabase
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
                    lastModified: post.published_at ? new Date(post.published_at) : now,
                    changeFrequency: 'monthly',
                    priority: 0.6,
                }));
            }
        }
    } catch (e) {
        console.warn('Sitemap: Error fetching blog posts from Supabase');
    }

    return [...staticPages, ...productPages, ...categoryPages, ...blogPages];
}

