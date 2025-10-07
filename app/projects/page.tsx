
import ProjectCard from '@/components/project-card'
import { projects } from '@/data/mock-data'
import { FolderKanban } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-6 bg-[#f7f8fa]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <FolderKanban className="w-16 h-16 text-[#0f4c81]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f4c81] mb-4">
            Mis Proyectos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una colección de proyectos que reflejan mi experiencia en automatización, 
            redes y desarrollo de soluciones tecnológicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project, index) => (
            <ProjectCard key={project?.id ?? index} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
