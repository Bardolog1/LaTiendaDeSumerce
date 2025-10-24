import { motion } from "framer-motion";

export default function Tradicion() {
  return (
    <section className="py-20 px-8 bg-amarilloOcre/10">
      <div className="max-w-4xl mx-auto text-center">
        
        
        {/* Apartado: Significado de Sumercé */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6 mb-8 border-l-4 border-verdeMusgo"
        >
          <motion.h3 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-playfair text-verdeMusgo mb-3"
          >
            ¿Qué significa "Sumercé"?
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg leading-relaxed text-gray-700"
          >
            "Sumercé" es la forma boyacense de decir <span className="font-semibold text-verdeMusgo">"Su Merced"</span> o <span className="font-semibold text-verdeMusgo">"usted"</span>. 
            Es una palabra que refleja el respeto, la calidez y la humildad de nuestra gente, 
            y que nos identifica como boyacenses orgullosos de nuestras raíces.
          </motion.p>
        </motion.div>
        {/* Título Principal */}
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-playfair text-terracota mb-6"
        >
          Nuestra Tradición
        </motion.h2>
        {/* Descripción de la Tradición */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg leading-relaxed text-gray-700"
        >
          En el corazón de Boyacá, entre montañas y campos de papa, florece el arte
          de nuestras manos. Cada pieza que encuentras aquí lleva siglos de historia,
          paciencia y amor por lo propio. Es la esencia de una tierra que no olvida
          sus raíces.
        </motion.p>
      </div>
    </section>
  );
}
