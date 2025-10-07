
import Image from 'next/image';
import { experience, certifications, skills } from '@/data/mock-data';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Profile */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/christian-profile.jpg"
                  alt="Christian - Ingeniero de Sistemas"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#0f4c81] text-white p-6 rounded-xl shadow-xl max-w-xs">
                <p className="text-3xl font-bold">23+</p>
                <p className="text-sm">Años de Experiencia</p>
              </div>
            </div>

            {/* Profile Info */}
            <div>
              <h1 className="text-5xl font-bold text-[#0f4c81] mb-4">
                Christian
              </h1>
              <h2 className="text-2xl text-gray-700 mb-6">
                Ingeniero de Sistemas | Project Delivery Manager
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Ingeniero de Sistemas con <strong>Maestría en Dirección de Sistemas y Tecnologías de la Información</strong> (UPC). Con más de <strong>23 años de experiencia</strong> liderando proyectos de transformación tecnológica en minería, banca, retail, energía y consultoría TI.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                He dirigido programas y proyectos valorados en más de <strong>USD $80M</strong>, logrando:
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#0f4c81] font-bold">✓</span>
                  <span>Reducción de costos de hasta <strong>20%</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0f4c81] font-bold">✓</span>
                  <span>Cumplimiento de plazos en <strong>+40 proyectos críticos</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0f4c81] font-bold">✓</span>
                  <span>Gestión de equipos de hasta <strong>50 profesionales</strong> multidisciplinarios</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 font-semibold italic">
                "Mi propósito es combinar innovación, estructura y visión estratégica para entregar proyectos que generen verdadero valor al negocio."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0f4c81] mb-12 text-center">
            Experiencia Profesional
          </h2>
          <div className="space-y-8">
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="relative w-24 h-24 bg-white rounded-lg shadow-md p-3">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#0f4c81] mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-xl text-gray-700 font-semibold">
                          {exp.company}
                        </p>
                        {exp.client && (
                          <p className="text-sm text-gray-500 italic">
                            Cliente: {exp.client}
                          </p>
                        )}
                      </div>
                      <span className="text-gray-600 font-medium whitespace-nowrap mt-2 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-gray-700 mb-2">
                        Logros Clave:
                      </p>
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-[#0f4c81] font-bold mt-1">→</span>
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0f4c81] mb-4 text-center">
            Certificaciones Internacionales
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            8 certificaciones profesionales en gestión de proyectos, gobernanza TI, 
            cloud computing y mejores prácticas internacionales.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
              >
                <div className="relative w-24 h-24 mb-4">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-2 line-clamp-2">
                  {cert.name}
                </h3>
                <p className="text-xs text-gray-500 mb-1">{cert.issuer}</p>
                <span className="text-xs bg-[#0f4c81] text-white px-3 py-1 rounded-full">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0f4c81] mb-12 text-center">
            Habilidades Técnicas y de Gestión
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">{skill.name}</span>
                  <span className="text-[#0f4c81] font-bold">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#0f4c81] to-blue-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#0f4c81] mb-12 text-center">
            Áreas de Experiencia
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Desarrollo de Software', icon: '💻' },
              { title: 'Infraestructura TI', icon: '🏗️' },
              { title: 'Ciberseguridad', icon: '🔒' },
              { title: 'Mejora de Procesos', icon: '📊' },
              { title: 'Migración de Sistemas', icon: '🔄' },
              { title: 'PMO', icon: '📋' },
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-gray-800">{area.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
