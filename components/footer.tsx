
import Link from 'next/link'
import { Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0f4c81] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Specialistati</h3>
            <p className="text-blue-100">
              Portafolio y Blog de Christian, Ingeniero de Sistemas especializado en 
              automatización y redes.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-blue-100 hover:text-white transition-colors">
                Acerca de
              </Link>
              <Link href="/projects" className="block text-blue-100 hover:text-white transition-colors">
                Proyectos
              </Link>
              <Link href="/blog" className="block text-blue-100 hover:text-white transition-colors">
                Blog
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Conecta</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
                title="Síguenos en LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="GitHub"
                title="Síguenos en GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Contacto"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400/30 pt-8 text-center text-blue-100">
          <p>© {currentYear} Specialistati. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
