import React from 'react';

export default function Contacto() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl font-[Playfair_Display] text-center text-[#4B6F44] mb-12">
        Contáctanos
      </h2>
      <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Tu nombre"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Correo Electrónico
          </label>
          <input
            type="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Tu correo electrónico"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Mensaje
          </label>
          <textarea
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows="4"
            placeholder="Tu mensaje"
          ></textarea>
        </div>
        <button className="w-full bg-[#4B6F44] text-[#F5F5DC] py-2 rounded-md hover:bg-[#A65F3E] transition">
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
}
