
import ContactForm from '@/components/contact-form'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-6 bg-[#f7f8fa]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Mail className="w-16 h-16 text-[#0f4c81]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0f4c81] mb-4">
            Contacto
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o propuesta? Déjame un mensaje y te responderé 
            lo antes posible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#0f4c81] mb-6">
              Envíame un mensaje
            </h2>
            <ContactForm />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#0f4c81] mb-6">
              Información de Contacto
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#0f4c81] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">christian@specialistati.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#0f4c81] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Ubicación</h3>
                  <p className="text-gray-600">Disponible para trabajo remoto</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#0f4c81] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Disponibilidad</h3>
                  <p className="text-gray-600">Lunes a Viernes, 9:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#f7f8fa] rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Tiempo de respuesta</h3>
              <p className="text-gray-600 text-sm">
                Normalmente respondo dentro de las 24 horas. Si tu consulta es urgente, 
                por favor indícalo en el mensaje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
