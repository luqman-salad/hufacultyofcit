import * as React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { groq } from "next-sanity";
import { ShareButton } from "@/components/layout/ShareButton";

// Define custom components for Portable Text rendering
const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="relative w-full aspect-video my-8 rounded-xl overflow-hidden shadow-md">
        <Image 
          src={urlFor(value).width(960).height(540).quality(75).url()} 
          alt="Article Image" 
          fill 
          className="object-cover" 
          sizes="(max-width: 1024px) 100vw, 900px"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-black text-[#1F2E4F] mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold text-[#1F2E4F] mt-6 mb-3">{children}</h2>,
    normal: ({ children }) => <p className="mb-4 text-justify leading-relaxed">{children}</p>,
  },
};

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Fetch Data
  const news = await client.fetch(
    groq`*[_type == "newsItem" && slug.current == $slug][0]`, 
    { slug }
  );

  const latestPosts = await client.fetch(
    groq`*[_type == "newsItem" && slug.current != $slug] | order(publishedAt desc)[0...3]{
      title, "slug": slug.current, "image": image.asset._ref, publishedAt
    }`, 
    { slug }
  );
  
  if (!news) notFound();

  // Simple word count for Read Time (Assuming ~200 words per minute)
  // We use JSON stringify to approximate text length since we are in a server component
  const readTime = Math.ceil((JSON.stringify(news.content || "").length / 1000)) || 1;

  return (
    <main className="bg-white py-12 px-6">
      <div className="max-w-[1000px] mx-auto">
        
        {/* Full Width Thumbnail */}
        {news.image && (
          <div className="relative w-full aspect-[21/9] mb-12 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={urlFor(news.image).width(1200).height(514).quality(75).url()}
              alt={news.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1000px"
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-16">
          
          <article>
            {/* Meta Header */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 uppercase tracking-widest font-bold">
              <span>{news.category || 'Academic News'}</span>
              <span>•</span>
              <span>{news.publishedAt ? new Date(news.publishedAt).toLocaleDateString() : 'Recent'}</span>
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
                <span className="font-bold text-sm text-[#1F2E4F]">
                  {news.author || 'Faculty Admin'} • {readTime} Min Read
                </span>
              </div>
              <ShareButton title={news.title} />
            </div>

            {/* Article Content with Renderer */}
            <div className="prose prose-lg max-w-none text-[#4A5568]">
              {news.content ? (
                <PortableText value={news.content} components={components} />
              ) : (
                <p>No content available for this article.</p>
              )}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-12">
            <div>
              <h3 className="font-bold text-[#1F2E4F] mb-6 text-xl border-b pb-2">Latest Posts</h3>
              <div className="flex flex-col gap-6">
                {latestPosts.map((post: any) => (
                  <Link href={`/news/${post.slug}`} key={post.slug} prefetch={false} className="flex gap-4 group">
                    <div className="relative w-20 h-16 flex-shrink-0 rounded overflow-hidden">
                      <Image
                        src={urlFor(post.image).width(160).height(128).quality(70).url()}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1F2E4F] group-hover:text-[#4c9c6f] line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-[10px] text-gray-400 mt-1">
                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}
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
