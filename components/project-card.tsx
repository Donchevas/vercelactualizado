
'use client'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  category?: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
    >
      <div className="relative aspect-video bg-gray-200 overflow-hidden">
        <Image
          src={project?.image ?? ''}
          alt={project?.title ?? 'Proyecto'}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#0f4c81] mb-3 group-hover:text-blue-700 transition-colors">
          {project?.title ?? 'Sin título'}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {project?.description ?? 'Sin descripción'}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.tags?.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#f7f8fa] text-[#0f4c81] text-sm rounded-full font-medium"
            >
              {tag}
            </span>
          )) ?? null}
        </div>
        
        {project?.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#0f4c81] font-semibold hover:gap-3 transition-all duration-300"
          >
            Ver más <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  )
}
