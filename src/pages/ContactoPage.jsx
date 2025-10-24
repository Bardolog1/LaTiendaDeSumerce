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

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    },
    tap: { scale: 0.98 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-blancoHueso to-white"
    >
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] bg-gradient-to-br from-verdeMusgo via-verdeMusgo/80 to-azulProfundo overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Patrón decorativo animado */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute top-10 left-10 w-32 h-32 border-4 border-amarilloOcre rounded-full"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute bottom-20 right-20 w-24 h-24 border-4 border-terracota rounded-full"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-white rounded-full"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <MessageCircle size={64} className="text-amarilloOcre mb-4" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4 drop-shadow-lg"
          >
            Contáctanos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-blancoHueso max-w-2xl drop-shadow-md"
          >
            Estamos en Madrid para atenderte. Escríbenos por WhatsApp y te responderemos enseguida.
          </motion.p>
        </motion.div>
      </section>

      {/* Contenido Principal */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 lg:gap-16"
        >
          
          {/* Opciones de contacto por WhatsApp */}
          <motion.div 
            variants={itemVariants}
            className="order-2 md:order-1"
          >
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 hover:shadow-3xl transition-shadow duration-300"
            >
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

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {/* Botón Consulta General */}
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => handleWhatsApp('consulta')}
                  className="w-full bg-gradient-to-r from-verdeMusgo to-verdeMusgo/80 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:from-terracota hover:to-terracota/80 transition-colors duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle size={24} />
                    <div className="text-left">
                      <div className="font-bold">Consulta sobre productos</div>
                      <div className="text-sm text-white/80">Pregunta por nuestras artesanías</div>
                    </div>
                  </div>
                  <motion.span 
                    className="text-2xl"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>

                {/* Botón Hacer Pedido */}
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => handleWhatsApp('pedido')}
                  className="w-full bg-gradient-to-r from-verdeMusgo to-verdeMusgo/80 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:from-terracota hover:to-terracota/80 transition-colors duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <Phone size={24} />
                    <div className="text-left">
                      <div className="font-bold">Hacer un pedido</div>
                      <div className="text-sm text-white/80">Realiza tu compra directamente</div>
                    </div>
                  </div>
                  <motion.span 
                    className="text-2xl"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                  >
                    →
                  </motion.span>
                </motion.button>

                

                {/* Botón General */}
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  onClick={() => handleWhatsApp('general')}
                  className="w-full bg-gradient-to-r from-azulProfundo to-azulProfundo/80 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:from-amarilloOcre hover:to-amarilloOcre/80 transition-colors duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <FaWhatsapp className="text-2xl" />
                    <div className="text-left">
                      <div className="font-bold">Otro motivo</div>
                      <div className="text-sm text-white/80">Contáctanos para cualquier consulta</div>
                    </div>
                  </div>
                  <motion.span 
                    className="text-2xl"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>

              {/* Nota informativa */}
              <div className="mt-8 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                <p className="text-sm text-blue-800">
                  <strong>💡 Tip:</strong> Al hacer clic, se abrirá WhatsApp con un mensaje predefinido. Puedes editarlo antes de enviarlo.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Información de Contacto */}
          <motion.div 
            variants={itemVariants}
            className="order-1 md:order-2 space-y-6"
          >
            {/* Información de la tienda */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-verdeMusgo to-verdeMusgo/80 text-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-playfair font-bold mb-6">
                Información de Contacto
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-5"
              >
                {/* Dirección */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/20 p-3 rounded-lg flex-shrink-0"
                  >
                    <MapPin size={24} className="text-amarilloOcre" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Ubicación</h4>
                    <p className="text-blancoHueso">
                      Madrid, España<br />
                      Artesanías de Boyacá en Europa
                    </p>
                  </div>
                </motion.div>

                {/* WhatsApp */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/20 p-3 rounded-lg flex-shrink-0"
                  >
                    <FaWhatsapp className="text-amarilloOcre text-2xl" />
                  </motion.div>
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
                </motion.div>

                {/* Email */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/20 p-3 rounded-lg flex-shrink-0"
                  >
                    <Mail size={24} className="text-amarilloOcre" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <a 
                      href="mailto:contacto@latiendadesumerce.com" 
                      className="text-blancoHueso hover:text-amarilloOcre transition-colors"
                    >
                      contacto@latiendadesumerce.com
                    </a>
                  </div>
                </motion.div>

                {/* Horario */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/20 p-3 rounded-lg flex-shrink-0"
                  >
                    <Clock size={24} className="text-amarilloOcre" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Horario de Atención</h4>
                    <p className="text-blancoHueso">
                      Lunes a Viernes: 10:00 - 19:00<br />
                      Sábados: 10:00 - 14:00<br />
                      Domingos: Cerrado
                    </p>
                    <p className="text-sm text-blancoHueso/80 mt-2">Horario peninsular español (CET/CEST)</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Redes Sociales */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-playfair font-bold text-azulProfundo mb-6">
                Síguenos en redes
              </h3>
              <motion.div 
                className="flex gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.a
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-verdeMusgo to-verdeMusgo/80 text-white p-4 rounded-xl hover:from-terracota hover:to-terracota/80 transition-colors duration-300 shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram size={28} />
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-azulProfundo to-azulProfundo/80 text-white p-4 rounded-xl hover:from-verdeMusgo hover:to-verdeMusgo/80 transition-colors duration-300 shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook size={28} />
                </motion.a>
                <motion.a
                  variants={itemVariants}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-terracota to-terracota/80 text-white p-4 rounded-xl hover:from-amarilloOcre hover:to-amarilloOcre/80 transition-colors duration-300 shadow-lg"
                  aria-label="Twitter"
                >
                  <Twitter size={28} />
                </motion.a>
              </motion.div>
              <p className="text-sm text-gray-600 mt-4">
                Descubre nuestras artesanías y novedades en redes sociales
              </p>
            </motion.div>

            {/* Mensaje destacado */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-r from-amarilloOcre to-terracota text-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <motion.h3 
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                className="text-xl font-bold mb-3 flex items-center gap-2"
              >
                <motion.span 
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-2xl"
                >
                  🇨🇴
                </motion.span> 
                Tradición Colombiana en España
              </motion.h3>
              <p className="text-white/90 leading-relaxed">
                Traemos la auténtica artesanía de Boyacá, Colombia, directamente a Madrid. Cada pieza cuenta una historia de tradición y dedicación artesanal.
              </p>
            </motion.div>
          </motion.div>

        </motion.div>
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
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-verdeMusgo to-azulProfundo py-16 px-6 relative overflow-hidden"
      >
        {/* Animación de fondo */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-amarilloOcre/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-terracota/10 rounded-full blur-3xl"
        />

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.h2 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4"
          >
            ¿Listo para conocer nuestras artesanías?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blancoHueso mb-8"
          >
            Escríbenos ahora por WhatsApp y descubre la auténtica tradición boyacense
          </motion.p>
          <motion.button
            onClick={() => handleWhatsApp('general')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(212, 160, 23, 0)",
                "0 0 0 20px rgba(212, 160, 23, 0)",
                "0 0 0 0 rgba(212, 160, 23, 0)"
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity
              }
            }}
            className="inline-flex items-center gap-3 bg-amarilloOcre text-white font-bold text-lg py-4 px-8 rounded-full hover:bg-terracota transition-colors duration-300 shadow-2xl"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
            >
              <FaWhatsapp className="text-3xl" />
            </motion.div>
            Contactar por WhatsApp
          </motion.button>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}

