import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/'],
            },
            {
                // Allow search-related AI crawlers to improve visibility in AI Overviews and ChatGPT search
                userAgent: ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot'],
                allow: '/',
            },
            {
                // Optionally block training-only or aggressive crawlers if desired
                userAgent: ['CCBot', 'Bytespider', 'Google-Extended'],
                disallow: '/',
            }
        ],
        sitemap: 'https://fleuriste11.vercel.app/sitemap.xml',
    };
}
