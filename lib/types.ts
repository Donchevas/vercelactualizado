export type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  category: string
}

export type Experience = {
  id: number
  company: string
  logo: string
  position: string
  period: string
  client?: string
  description: string
  achievements: string[]
}

export type Certification = {
  id: number
  name: string
  issuer: string
  logo: string
  year: string
}

export type Skill = {
  name: string
  level: number
  category: string
}

export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}