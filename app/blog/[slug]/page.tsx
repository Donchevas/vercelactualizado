
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post no encontrado - Specialistati',
    }
  }

  return {
    title: `${post.title} - Specialistati`,
    description: post.excerpt || `Artículo sobre ${post.title}`,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20 px-6 bg-[#f7f8fa]">
      <article className="max-w-4xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-[#0f4c81] hover:gap-3 transition-all duration-300 mb-8 font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al blog
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {post.image && (
            <div className="relative w-full aspect-video bg-gray-200">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          )}
          
          <div className="p-8 md:p-12">
            {post.category && (
              <span className="inline-block text-sm font-semibold text-[#0f4c81] bg-blue-50 px-4 py-1.5 rounded-full mb-4">
                {post.category}
              </span>
            )}
            
            <h1 className="text-3xl md:text-5xl font-bold text-[#0f4c81] mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: es })}
                </span>
              </div>
              {post.readingTime && (
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Lectura de {post.readingTime} min</span>
                </div>
              )}
            </div>
            
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-8">
                <Tag className="w-5 h-5 text-gray-500" />
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div className="prose prose-lg max-w-none prose-headings:text-[#0f4c81] prose-a:text-[#0f4c81] prose-strong:text-[#0f4c81]">
              <MDXRemote 
                source={post.content as string}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                  },
                }}
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
