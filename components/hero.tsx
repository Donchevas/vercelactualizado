
'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 bg-gradient-to-br from-[#0f4c81] via-blue-600 to-blue-400 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-block">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Project Delivery Manager | 23+ años de experiencia
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Christian
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-blue-100">
              Ingeniero de Sistemas
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-50 leading-relaxed max-w-2xl">
            Transformando ideas en soluciones tecnológicas con{' '}
            <span className="font-bold text-white">USD $80M+</span> en proyectos exitosos.
          </p>

          <p className="text-lg text-blue-100 leading-relaxed">
            Especialista en <strong>gestión de proyectos complejos</strong>, infraestructura TI, 
            SD-WAN, integración SAP y transformación digital para sectores minería, energía y seguros.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-4 py-6">
            <div className="text-center">
              <div className="text-4xl font-bold">23+</div>
              <div className="text-sm text-blue-100">Años Exp.</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">$80M+</div>
              <div className="text-sm text-blue-100">En Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">8</div>
              <div className="text-sm text-blue-100">Certificaciones</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Link
              href="/projects"
              className="group bg-white text-[#0f4c81] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
            >
              Ver Proyectos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group bg-transparent border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#0f4c81] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Contáctame
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative">
          <div className="relative w-full max-w-md mx-auto">
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-2xl opacity-30"></div>
            
            {/* Image container */}
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20">
              <Image
                src="/images/christian-profile.jpg"
                alt="Christian - Project Delivery Manager"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white text-[#0f4c81] p-4 rounded-xl shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🎯</div>
                <div>
                  <div className="font-bold text-sm">PMP® | ITIL Expert</div>
                  <div className="text-xs text-gray-600">Certificado Internacional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
