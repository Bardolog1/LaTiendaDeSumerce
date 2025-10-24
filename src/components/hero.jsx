import React from "react";

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center relative"
      style={{
        backgroundImage:
          "url('../hero-background.jpg')",
      }}
    >
      {/* Overlay oscuro para mejorar contraste */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Contenido con mejor contraste */}
      <div className="relative z-10 px-4">
        <h1 
          className="text-5xl md:text-6xl font-[Playfair_Display] text-white animate-fade-in"
          style={{
            textShadow: '0 4px 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6), 0 8px 16px rgba(0,0,0,0.4)'
          }}
        >
          La Tienda de Sumercé
        </h1>
        <p 
          className="mt-6 text-xl text-white max-w-2xl font-medium"
          style={{
            textShadow: '0 3px 6px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)'
          }}
        >
          Artesanías boyacenses hechas con el alma, la tierra y las manos de su gente.
        </p>
        <a 
          href="/productos"
          className="mt-10 inline-block bg-[#4B6F44] text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-[#A65F3E] transition-all shadow-2xl hover:shadow-[0_8px_32px_rgba(75,111,68,0.5)] hover:scale-105 transform"
          style={{
            boxShadow: '0 4px 16px rgba(0,0,0,0.4)'
          }}
        >
          Explorar artesanías
        </a>
      </div>
    </section>
  );
}
