import { MetadataRoute } from 'next';
import { products } from '@/lib/data';

const BASE_URL = 'https://fleuriste11.vercel.app';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

/**
 * Generate multiple sitemaps to mimic a sitemap index structure.
 * This will result in:
 * /sitemap.xml -> Index pointing to the sub-sitemaps
 * /sitemap/pages.xml
 * /sitemap/products.xml
 * /sitemap/collections.xml
 * /sitemap/blogs.xml
 */
export async function generateSitemaps() {
    return [
        { id: 'pages' },
        { id: 'products' },
        { id: 'collections' },
        { id: 'blogs' },
    ];
}

export default async function sitemap({ id }: { id: string }): Promise<MetadataRoute.Sitemap> {
    const now = new Date();

    switch (id) {
        case 'pages':
            return [
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
            ];

        case 'products':
            return products.map((product) => ({
                url: `${BASE_URL}/produits/${product.slug}`,
                lastModified: now,
                changeFrequency: 'weekly',
                priority: 0.8,
            }));

        case 'collections':
            // Corresponding to the categories used for filtering
            const categories = [
                { slug: 'bouquet', priority: 0.8 },
                { slug: 'fleurs-sechees', priority: 0.7 },
                { slug: 'plante', priority: 0.7 },
                { slug: 'accessoire', priority: 0.6 },
            ];
            return categories.map((cat) => ({
                url: `${BASE_URL}/produits?category=${cat.slug}`,
                lastModified: now,
                changeFrequency: 'weekly',
                priority: cat.priority,
            }));

        case 'blogs':
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
            return blogPages;

        default:
            return [];
    }
}

