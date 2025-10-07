
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/about', label: 'Acerca de' },
    { href: '/projects', label: 'Proyectos' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contacto' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-[#0f4c81] hover:opacity-80 transition-opacity">
            Specialistati
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href ?? '/'}
                className={`font-semibold transition-colors relative ${
                  pathname === link?.href
                    ? 'text-[#0f4c81]'
                    : 'text-gray-600 hover:text-[#0f4c81]'
                }`}
              >
                {link?.label}
                {pathname === link?.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0f4c81]" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#0f4c81]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {links?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href ?? '/'}
                onClick={() => setIsOpen(false)}
                className={`block py-3 font-semibold transition-colors ${
                  pathname === link?.href
                    ? 'text-[#0f4c81]'
                    : 'text-gray-600 hover:text-[#0f4c81]'
                }`}
              >
                {link?.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
