
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-6 mt-8 text-[#0f4c81]">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mb-4 mt-6 text-[#0f4c81]">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mb-3 mt-5 text-[#0f4c81]">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold mb-2 mt-4 text-[#0f4c81]">{children}</h4>,
    p: ({ children }) => <p className="mb-4 leading-relaxed text-gray-700">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>,
    li: ({ children }) => <li className="ml-4">{children}</li>,
    a: ({ href, children }) => (
      <a href={href} className="text-[#0f4c81] hover:underline font-semibold">
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#0f4c81] pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),
    ...components,
  }
}
