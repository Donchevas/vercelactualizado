
'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // Simular envío (en producción, esto sería una llamada a API)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e?.target?.name ?? '']: e?.target?.value ?? '',
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData?.name ?? ''}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent outline-none transition-all"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData?.email ?? ''}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent outline-none transition-all"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData?.message ?? ''}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0f4c81] focus:border-transparent outline-none transition-all resize-none"
          placeholder="Escribe tu mensaje aquí..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-6 py-3 bg-[#0f4c81] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === 'sending' ? (
          'Enviando...'
        ) : (
          <>
            <Send className="w-5 h-5" />
            Enviar Mensaje
          </>
        )}
      </button>

      {status === 'success' && (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg text-center font-semibold">
          ¡Mensaje enviado con éxito!
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg text-center font-semibold">
          Error al enviar. Por favor, inténtalo de nuevo.
        </div>
      )}
    </form>
  )
}
