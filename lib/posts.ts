
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { cache } from 'react'

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content?: React.ReactNode
  readingTime?: string
  image?: string
  category?: string
  tags?: string[]
}

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

function ensurePostsDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
  }
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = content?.trim()?.split(/\s+/)?.length ?? 0
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes}`
}

export const getAllPosts = cache(async (): Promise<Post[]> => {
  try {
    ensurePostsDirectory()
    
    const fileNames = fs.readdirSync(postsDirectory)
    const mdxFiles = fileNames?.filter((fn) => fn?.endsWith('.mdx')) ?? []

    const posts = mdxFiles?.map((fileName) => {
      const slug = fileName?.replace(/\.mdx$/, '') ?? ''
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data?.title ?? 'Sin título',
        date: data?.date ?? '',
        excerpt: data?.excerpt ?? '',
        readingTime: calculateReadingTime(content ?? ''),
        image: data?.image,
        category: data?.category,
        tags: data?.tags,
      }
    }) ?? []

    return posts?.sort((a, b) => {
      const dateA = new Date(a?.date ?? 0).getTime()
      const dateB = new Date(b?.date ?? 0).getTime()
      return dateB - dateA
    }) ?? []
  } catch (error) {
    console.error('Error loading posts:', error)
    return []
  }
})

export const getRecentPosts = cache(async (limit: number = 3): Promise<Post[]> => {
  const allPosts = await getAllPosts()
  return allPosts?.slice(0, limit) ?? []
})

export const getPostBySlug = cache(async (slug: string): Promise<Post | null> => {
  try {
    ensurePostsDirectory()
    
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data?.title ?? 'Sin título',
      date: data?.date ?? '',
      excerpt: data?.excerpt ?? '',
      content: content ?? '',
      readingTime: calculateReadingTime(content ?? ''),
      image: data?.image,
      category: data?.category,
      tags: data?.tags,
    }
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error)
    return null
  }
})
