import { motion } from "framer-motion";

const artesanos = [
  { 
    nombre: "Ceramistas de Ráquira", 
    oficio: "Cerámica tradicional y artística", 
    municipio: "Ráquira",
    descripcion: "Reconocidos mundialmente por su cerámica colorida y técnicas ancestrales",
    icon: "🏺"
  },
  { 
    nombre: "Tejedores de Nobsa", 
    oficio: "Ruanas y tejidos en lana", 
    municipio: "Nobsa",
    descripcion: "Maestros en el arte del tejido de ruanas, cobijas y prendas de lana",
    icon: "🧶"
  },
  { 
    nombre: "Baloneros de Monguí", 
    oficio: "Balones de fútbol artesanales", 
    municipio: "Monguí",
    descripcion: "Únicos en Colombia, fabrican balones de cuero cosidos a mano desde hace más de 60 años",
    icon: "⚽"
  },
  { 
    nombre: "Cesteros y Talladores", 
    oficio: "Cestería y talla en madera", 
    municipio: "Tenza y Guacamayas",
    descripcion: "Expertos en cestería con fibras naturales y talla de madera de comino y cedro",
    icon: "🪵"
  },
];

export default function Artesanos() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-8 bg-azulProfundo/10">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-playfair text-center text-azulProfundo mb-4"
      >
        Tradiciones Artesanales de Boyacá
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-gray-700 mb-12 max-w-3xl mx-auto text-lg"
      >
        Cada municipio de Boyacá guarda secretos ancestrales transmitidos de generación en generación
      </motion.p>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
      >
        {artesanos.map((a, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
              y: -10
            }}
            className="bg-blancoHueso border-2 border-terracota rounded-xl p-6 text-center shadow-md transition-all flex flex-col"
          >
            {/* Icono/Imagen representativa */}
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
              className="text-6xl mb-4 mx-auto"
            >
              {a.icon}
            </motion.div>
            
            <motion.h3 
              whileHover={{ scale: 1.1 }}
              className="text-xl font-bold text-terracota mb-2"
            >
              {a.nombre}
            </motion.h3>
            <p className="text-verdeMusgo font-semibold mb-2">{a.oficio}</p>
            <p className="text-azulProfundo font-medium mb-3 flex items-center justify-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {a.municipio}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mt-auto">{a.descripcion}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
