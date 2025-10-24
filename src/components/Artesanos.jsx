const artesanos = [
  { nombre: "Doña Eulalia", oficio: "Tejedora de ruanas", municipio: "Nobsa" },
  { nombre: "Don Ramiro", oficio: "Ceramista", municipio: "Ráquira" },
  { nombre: "Doña Melba", oficio: "Sombrerera", municipio: "Paipa" },
];

export default function Artesanos() {
  return (
    <section className="py-20 px-8 bg-[#1A3D6D]/10">
      <h2 className="text-4xl font-[Playfair_Display] text-center text-[#1A3D6D] mb-8">
        Conoce a Nuestros Artesanos
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {artesanos.map((a, i) => (
          <div
            key={i}
            className="bg-[#F5F5DC] border-2 border-[#A65F3E] rounded-xl p-6 w-64 text-center shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-[#A65F3E]">{a.nombre}</h3>
            <p className="text-[#4B6F44]">{a.oficio}</p>
            <p className="text-[#1A3D6D] font-medium">{a.municipio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
