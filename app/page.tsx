
import Hero from '@/components/hero'
import ProjectCard from '@/components/project-card'
import PostCard from '@/components/post-card'
import { projects } from '@/data/mock-data'
import { getRecentPosts } from '@/lib/posts'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default async function Home() {
  const recentPosts = await getRecentPosts(3)
  const recentProjects = projects?.slice(0, 2) ?? []

  return (
    <div>
      <Hero />
      
      {/* Proyectos Recientes */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f4c81]">Proyectos Recientes</h2>
            <Link 
              href="/projects" 
              className="flex items-center gap-2 text-[#0f4c81] hover:gap-3 transition-all duration-300 font-semibold"
            >
              Ver todos <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {recentProjects?.map((project, index) => (
              <ProjectCard key={project?.id ?? index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Artículos Recientes */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f4c81]">Últimos Artículos</h2>
            <Link 
              href="/blog" 
              className="flex items-center gap-2 text-[#0f4c81] hover:gap-3 transition-all duration-300 font-semibold"
            >
              Ver blog <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts?.map((post, index) => (
              <PostCard key={post?.slug ?? index} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
