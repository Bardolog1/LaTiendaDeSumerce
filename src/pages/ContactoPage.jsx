import { MapPin, Mail, Phone, Clock, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function ContactoPage() {
  // Función para abrir WhatsApp con mensaje predefinido
  const handleWhatsApp = (tipo) => {
    const mensajes = {
      consulta: 'Hola, tengo una consulta sobre sus productos artesanales.',
      pedido: 'Hola, me gustaría hacer un pedido.',
      general: 'Hola, quisiera ponerme en contacto con ustedes.'
    };
    
    const numero = '34600000000'; // Reemplaza con tu número real de España
    const mensaje = encodeURIComponent(mensajes[tipo] || mensajes.general);
    window.open(`https://wa.me/${numero}?text=${mensaje}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blancoHueso to-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] bg-gradient-to-br from-verdeMusgo via-verdeMusgo/80 to-azulProfundo overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Patrón decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-amarilloOcre rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-terracota rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-white rounded-full"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">
          <MessageCircle size={64} className="text-amarilloOcre mb-4 animate-bounce" />
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4 drop-shadow-lg">
            Contáctanos
          </h1>
          <p className="text-lg md:text-xl text-blancoHueso max-w-2xl drop-shadow-md">
            Estamos en Madrid para atenderte. Escríbenos por WhatsApp y te responderemos enseguida.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Opciones de contacto por WhatsApp */}
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#25D366] p-3 rounded-full">
                  <FaWhatsapp className="text-white text-3xl" />
                </div>
                <div>
                  <h2 className="text-3xl font-playfair font-bold text-azulProfundo">
                    Escríbenos por WhatsApp
                  </h2>
                  <p className="text-gray-600">
                    Respuesta rápida y personalizada
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-8">
                Elige el tipo de consulta y te abriremos WhatsApp con un mensaje predefinido para que nos contactes directamente:
              </p>

              <div className="space-y-4">
                {/* Botón Consulta General */}
                <button
                  onClick={() => handleWhatsApp('consulta')}
                  className="w-full bg-gradient-to-r from-verdeMusgo to-verdeMusgo/80 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-xl hover:scale-[1.02] hover:from-terracota hover:to-terracota/80 transition-all duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle size={24} />
                    <div className="text-left">
                      <div className="font-bold">Consulta sobre productos</div>
                      <div className="text-sm text-white/80">Pregunta por nuestras artesanías</div>
                    </div>
                  </div>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                </button>

                {/* Botón Hacer Pedido */}
                <button
                  onClick={() => handleWhatsApp('pedido')}
                  className="w-full bg-gradient-to-r from-verdeMusgo to-verdeMusgo/80 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-xl hover:scale-[1.02] hover:from-terracota hover:to-terracota/80 transition-all duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Phone size={24} />
                    <div className="text-left">
                      <div className="font-bold">Hacer un pedido</div>
                      <div className="text-sm text-white/80">Realiza tu compra directamente</div>
                    </div>
                  </div>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                </button>

                

                {/* Botón General */}
                <button
                  onClick={() => handleWhatsApp('general')}
                  className="w-full bg-gradient-to-r from-azulProfundo to-azulProfundo/80 text-white font-semibold py-4 px-6 rounded-xl hover:shadow-xl hover:scale-[1.02] hover:from-amarilloOcre hover:to-amarilloOcre/80 transition-all duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <FaWhatsapp className="text-2xl" />
                    <div className="text-left">
                      <div className="font-bold">Otro motivo</div>
                      <div className="text-sm text-white/80">Contáctanos para cualquier consulta</div>
                    </div>
                  </div>
                  <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>

              {/* Nota informativa */}
              <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                <p className="text-sm text-blue-800">
                  <strong>💡 Tip:</strong> Al hacer clic, se abrirá WhatsApp con un mensaje predefinido. Puedes editarlo antes de enviarlo.
                </p>
              </div>
            </div>
          </div>

          {/* Información de Contacto */}
          <div className="order-1 md:order-2 space-y-6">
            {/* Información de la tienda */}
            <div className="bg-gradient-to-br from-verdeMusgo to-verdeMusgo/80 text-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-playfair font-bold mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-5">
                {/* Dirección */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                    <MapPin size={24} className="text-amarilloOcre" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Ubicación</h4>
                    <p className="text-blancoHueso">
                      Madrid, España<br />
                      Artesanías de Boyacá en Europa
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                    <FaWhatsapp className="text-amarilloOcre text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/34600000000" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blancoHueso hover:text-amarilloOcre transition-colors"
                    >
                      +34 600 000 000
                    </a>
                    <p className="text-sm text-blancoHueso/80 mt-1">Nuestro canal principal de atención</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                    <Mail size={24} className="text-amarilloOcre" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <a 
                      href="mailto:contacto@latiendadesumerce.com" 
                      className="text-blancoHueso hover:text-amarilloOcre transition-colors"
                    >
                      contacto@latiendadesumerce.com
                    </a>
                  </div>
                </div>

                {/* Horario */}
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                    <Clock size={24} className="text-amarilloOcre" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Horario de Atención</h4>
                    <p className="text-blancoHueso">
                      Lunes a Viernes: 10:00 - 19:00<br />
                      Sábados: 10:00 - 14:00<br />
                      Domingos: Cerrado
                    </p>
                    <p className="text-sm text-blancoHueso/80 mt-2">Horario peninsular español (CET/CEST)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-playfair font-bold text-azulProfundo mb-6">
                Síguenos en redes
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-verdeMusgo to-verdeMusgo/80 text-white p-4 rounded-xl hover:scale-110 hover:from-terracota hover:to-terracota/80 transition-all duration-300 shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram size={28} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-azulProfundo to-azulProfundo/80 text-white p-4 rounded-xl hover:scale-110 hover:from-verdeMusgo hover:to-verdeMusgo/80 transition-all duration-300 shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook size={28} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-terracota to-terracota/80 text-white p-4 rounded-xl hover:scale-110 hover:from-amarilloOcre hover:to-amarilloOcre/80 transition-all duration-300 shadow-lg"
                  aria-label="Twitter"
                >
                  <Twitter size={28} />
                </a>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Descubre nuestras artesanías y novedades en redes sociales
              </p>
            </div>

            {/* Mensaje destacado */}
            <div className="bg-gradient-to-r from-amarilloOcre to-terracota text-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="text-2xl">🇨🇴</span> Tradición Colombiana en España
              </h3>
              <p className="text-white/90 leading-relaxed">
                Traemos la auténtica artesanía de Boyacá, Colombia, directamente a Madrid. Cada pieza cuenta una historia de tradición y dedicación artesanal.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Sección de Preguntas Frecuentes */}
      <section className="bg-gradient-to-b from-blancoHueso to-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-azulProfundo text-center mb-12">
            Preguntas Frecuentes
          </h2>
          
          <div className="space-y-4">
            {[
              {
                pregunta: "¿Realizan envíos por toda España?",
                respuesta: "Sí, realizamos envíos a toda España peninsular e islas. Los gastos de envío y tiempos de entrega dependen de tu ubicación. Consúltanos por WhatsApp para más información."
              },
              {
                pregunta: "¿Cómo puedo realizar un pedido?",
                respuesta: "Es muy sencillo: haz clic en cualquiera de los botones de WhatsApp de esta página, o agréganos directamente al +34 600 000 000. Te responderemos enseguida y procesaremos tu pedido."
              },
              {
                pregunta: "¿Los productos son 100% artesanales?",
                respuesta: "Todos nuestros productos son elaborados artesanalmente por maestros artesanos de Boyacá, Colombia, manteniendo técnicas tradicionales transmitidas de generación en generación."
              },
              {
                pregunta: "¿Cuáles son las formas de pago?",
                respuesta: "Aceptamos transferencia bancaria, Bizum y otras opciones que coordinaremos contigo por WhatsApp. También ofrecemos pago contrareembolso según disponibilidad."
              },
              {
                pregunta: "¿Tienen tienda física en Madrid?",
                respuesta: "Actualmente trabajamos principalmente online para ofrecerte mejores precios. Sin embargo, podemos coordinar encuentros presenciales para que veas los productos. Escríbenos por WhatsApp."
              }
            ].map((faq, index) => (
              <details 
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
              >
                <summary className="cursor-pointer p-6 font-semibold text-verdeMusgo hover:bg-blancoHueso/50 transition-colors list-none flex justify-between items-center">
                  <span>{faq.pregunta}</span>
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-gray-700">
                  {faq.respuesta}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="bg-gradient-to-r from-verdeMusgo to-azulProfundo py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
            ¿Listo para conocer nuestras artesanías?
          </h2>
          <p className="text-xl text-blancoHueso mb-8">
            Escríbenos ahora por WhatsApp y descubre la auténtica tradición boyacense
          </p>
          <button
            onClick={() => handleWhatsApp('general')}
            className="inline-flex items-center gap-3 bg-amarilloOcre text-white font-bold text-lg py-4 px-8 rounded-full hover:bg-terracota hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            <FaWhatsapp className="text-3xl" />
            Contactar por WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}

