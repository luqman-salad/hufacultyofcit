import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaShareNodes } from "react-icons/fa6";

async function getNewsData(slug: string) {
  const [news, latestPosts] = await Promise.all([
    client.fetch(`*[_type == "newsItem" && slug.current == $slug][0]`, { slug }),
    client.fetch(`*[_type == "newsItem"] | order(publishedAt desc)[0...3]{
      title, "slug": slug.current, "image": image.asset._ref, publishedAt
    }`)
  ]);
  return { news, latestPosts };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { news, latestPosts } = await getNewsData(slug);
  
  if (!news) notFound();

  // Calculate dynamic reading time (assuming 200 words per minute)
  const readTime = news.content 
    ? Math.ceil(JSON.stringify(news.content).split(' ').length / 200) 
    : 5;

  return (
    <main className="bg-white py-12 px-6">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Full Width Thumbnail */}
        {news.image && (
          <div className="relative w-full aspect-[21/9] mb-12 rounded-2xl overflow-hidden shadow-lg">
            <Image src={urlFor(news.image).url()} alt={news.title} fill className="object-cover" />
          </div>
        )}

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-16">
          
          <article>
            {/* Meta Header */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 uppercase tracking-widest font-bold">
              <span>{news.category || 'Academic News'}</span>
              <span>•</span>
              <span>{new Date(news.publishedAt).toLocaleDateString()}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-[#1F2E4F] mb-8 leading-tight">
              {news.title}
            </h1>

            {/* Author & Sharing Bar */}
            <div className="flex items-center justify-between border-y border-gray-100 py-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#4c9c6f]/20 rounded-full flex items-center justify-center font-bold text-[#4c9c6f]">
                  {news.author?.charAt(0) || 'F'}
                </div>
                <span className="font-bold text-sm">
                  {news.author || 'Faculty Admin'} • {readTime} Min Read
                </span>
              </div>
              <button className="flex items-center gap-2 text-[#4c9c6f] font-bold text-sm hover:underline">
                <FaShareNodes /> Share
              </button>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-[#4A5568] text-justify">
              <PortableText value={news.content} />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-12">
            <div>
              <h3 className="font-bold text-[#1F2E4F] mb-6 text-xl border-b pb-2">Latest Posts</h3>
              <div className="flex flex-col gap-6">
                {latestPosts.map((post: any) => (
                  <Link href={`/news/${post.slug}`} key={post.slug} className="flex gap-4 group">
                    <div className="relative w-20 h-16 flex-shrink-0 rounded overflow-hidden">
                      <Image src={urlFor(post.image).url()} alt={post.title} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1F2E4F] group-hover:text-[#4c9c6f] line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 mt-1">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}