import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center relative overflow-hidden"
      style={{
        backgroundImage:
          "url('../hero-background.jpg')",
      }}
    >
      {/* Overlay oscuro para mejorar contraste */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Círculos animados de fondo */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-verdeMusgo/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-terracota/10 rounded-full blur-3xl"
      />

      {/* Contenido con mejor contraste */}
      <div className="relative z-10 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-playfair text-white"
          style={{
            textShadow: '0 4px 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6), 0 8px 16px rgba(0,0,0,0.4)'
          }}
        >
          La Tienda de Sumercé
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-xl text-white max-w-2xl font-medium"
          style={{
            textShadow: '0 3px 6px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
          }}
        >
          Artesanías boyacenses hechas con el alma, la tierra y las manos de su gente.
        </motion.p>
        <motion.a 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
          whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(75,111,68,0.5)" }}
          whileTap={{ scale: 0.95 }}
          href="/productos"
          className="mt-10 inline-block bg-verdeMusgo text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-terracota transition-all shadow-2xl"
          style={{
            boxShadow: '0 4px 16px rgba(0,0,0,0.4)'
          }}
        >
          Explorar artesanías
        </motion.a>
      </div>
    </section>
  );
}
