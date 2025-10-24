import React, { useState } from "react";
import { X, ShoppingBag, MapPin, Tag, ChevronLeft, ChevronRight, Star } from "lucide-react";

const ProductCard = ({ product, onClick, addToCart }) => {
    const finalPrice = (product?.price || 0) * (1 - (product?.discount || 0));
    const [isHovered, setIsHovered] = useState(false);

    // Safely resolve image source; fallback to an inline SVG placeholder when images missing
    const imageSrc = (() => {
        try {
            if (product && Array.isArray(product.images) && product.images.length > 0) {
                return product.images[0];
            }
        } catch {
            // ignore and use placeholder
        }
        // simple inline SVG placeholder (grey background with text)
        const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%23e5e7eb'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-family='Arial, Helvetica, sans-serif' font-size='24'>Sin imagen</text></svg>`;
        return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    })();

    return (
        <div
            className="group relative bg-white rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Badge de descuento */}
            {product.discount > 0 && (
                <div className="absolute top-4 right-4 z-10 bg-red-200 text-red-700 px-4 py-2 rounded-full font-bold text-sm shadow-lg transform rotate-3 animate-pulse">
                    -{product.discount * 100}%
                </div>
            )}

            {/* Imagen con efecto de zoom */}
            <div className="relative h-40 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200" onClick={onClick}>
                <img
                    src={imageSrc}
                    alt={product?.name || 'Producto'}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                        // if src fails to load, replace with placeholder
                        const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%23e5e7eb'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-family='Arial, Helvetica, sans-serif' font-size='24'>Sin imagen</text></svg>`;
                        e.currentTarget.src = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
                    }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                {/* Botón flotante que aparece al hover */}
                <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <button
                        className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold shadow-xl hover:bg-gray-100 transition-colors flex items-center gap-2 text-sm"
                        onClick={(e) => {
                            e.stopPropagation();
                            if (typeof addToCart === 'function') addToCart(product);
                        }}
                    >
                        <ShoppingBag size={18} />
                        Agregar al carrito
                    </button>
                </div>
            </div>

            {/* Contenido */}
            <div className="p-4">
                <div className="mb-2">
                    <h3 className="text-sm font-bold text-[#1A3D6D] group-hover:text-[#1A3D6D] transition-colors truncate">
                        {product.name}
                    </h3>
                    <div className="flex items-center gap-1 text-gray-600">
                        <MapPin size={12} className="text-[#1A3D6D]" />
                        <p className="text-xs truncate">{product.origin}</p>
                    </div>
                </div>       {/* Precio */}
                <div className="flex items-baseline justify-start gap-2 flex-wrap">
                    {product.discount > 0 && (
                        <span className="text-gray-400 line-through text-sm sm:text-base whitespace-nowrap">
                            ${product.price.toLocaleString()}
                        </span>
                    )}
                    <span className="text-lg sm:text-xl font-bold text-[#1A3D6D] whitespace-nowrap">
                        ${finalPrice.toLocaleString()}
                    </span>
                </div>

            </div>

            {/* Borde animado */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#1A3D6D] rounded-3xl transition-all duration-300 pointer-events-none" />
        </div>
    );
};
export default ProductCard;