import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Fotografický zápisník',
    description: 'RSS feed for Fotografický zápisník',
    site: context.site || 'http://localhost:3000',
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description || '',
      link: `/blog/${post.slug}`,
    })),
  });
}
