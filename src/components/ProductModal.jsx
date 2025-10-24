import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Tag, MapPin, Star, ShoppingBag } from "lucide-react";

const ProductModal = ({ product, onClose, addToCart }) => {
  const [currentImage, setCurrentImage] = useState(0);
  // defensas: product puede venir sin imágenes o sin precios
  const images = (product && Array.isArray(product.images) && product.images.length)
    ? product.images
    : [
        // placeholder SVG data URL
        `data:image/svg+xml;utf8,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%23e5e7eb'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-family='Arial, Helvetica, sans-serif' font-size='24'>Sin imagen</text></svg>")}`
      ];

  const finalPrice = (product?.price || 0) * (1 - (product?.discount || 0));

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl w-full max-w-2xl md:max-w-3xl flex flex-col md:flex-row p-6 gap-8 relative shadow-2xl animate-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar mejorado */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all hover:scale-110"
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Columna izquierda: Galería */}
          <div className="md:w-1/2">
            {/* Imagen principal */}
            <div className="relative group rounded-2xl overflow-hidden bg-gray-100 aspect-square">
              <img
                src={images[currentImage]}
                alt={product?.name || 'Producto'}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%23e5e7eb'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-family='Arial, Helvetica, sans-serif' font-size='24'>Sin imagen</text></svg>`;
                  e.currentTarget.src = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
                }}
              />
              
              {/* Chip de descuento */}
              {product?.discount > 0 && (
                <div className="absolute top-4 right-4 z-10 bg-red-200 text-red-700 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  <Tag size={16} className="inline mr-1" />
                  -{product.discount * 100}%
                </div>
              )}

              {/* Controles de navegación */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Miniaturas */}
              {images.length > 1 && (
              <div className="flex gap-3 justify-center mt-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden transition-all ${
                      index === currentImage
                        ? "ring-4 ring-[#1A3D6D] scale-105"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" onError={(e)=>{ const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%23e5e7eb'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-family='Arial, Helvetica, sans-serif' font-size='16'>Sin imagen</text></svg>`; e.currentTarget.src = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}` }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Columna derecha: Información */}
          <div className="md:w-1/2 flex flex-col">
            <h2 className="text-2xl font-bold text-[#1A3D6D] mb-2">
              {product.name}
            </h2>

            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <MapPin size={18} className="text-[#1A3D6D]" />
              <span>{product.origin}</span>
            </div>

            <p className="text-gray-700 mb-6">
              {product.description}
            </p>

            {/* Características */}
            <div className="bg-[#F5F5DC]/50 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-[#1A3D6D] mb-2">Características:</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#1A3D6D] rounded-full" />
                  100% hecho a mano
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#1A3D6D] rounded-full" />
                  Materiales sostenibles
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#1A3D6D] rounded-full" />
                  Diseño único y auténtico
                </li>
              </ul>
            </div>

            {/* Precio y botón */}
            <div className="mt-auto">
              <div className="flex items-center gap-3 mb-4">
                {product?.discount > 0 && (
                  <span className="text-lg text-gray-400 line-through">
                    ${ (product?.price || 0).toLocaleString() }
                  </span>
                )}
                <span className="text-3xl font-bold text-[#1A3D6D]">
                  ${finalPrice.toLocaleString()}
                </span>
              </div>

              <button
                onClick={() => { if (typeof addToCart === 'function') addToCart(product); }}
                className="w-full bg-[#1A3D6D] text-white py-3 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#4B6F44] transition"
              >
                <ShoppingBag size={20} /> Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;