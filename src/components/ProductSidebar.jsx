import React from 'react';
import { Search, SlidersHorizontal, CircleDollarSign } from 'lucide-react';

const ProductSidebar = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
  categories,
  maxPrice
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      {/* Buscador */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B6F44] focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Categorías */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-[#1A3D6D] mb-4 flex items-center gap-2">
          <SlidersHorizontal size={18} />
          Categorías
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
              !selectedCategory
                ? 'bg-[#4B6F44] text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            Todas
          </button>
          {categories.map((category, index) => (
            <button
              key={`${category || "cat"}-${index}`}
              onClick={() => setSelectedCategory(category)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? "bg-[#4B6F44] text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {category || "Sin categoría"}
            </button>
          ))}
        </div>
      </div>

      {/* Rango de Precio */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-[#1A3D6D] mb-4 flex items-center gap-2">
          <CircleDollarSign size={18} />
          Rango de Precio
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span>${priceRange[0].toLocaleString()}</span>
            <span>${priceRange[1].toLocaleString()}</span>
          </div>
          <input
            type="range"
            min={0}
            max={Number(maxPrice) || 0}
            value={Number(priceRange[1]) || 0}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-full accent-[#4B6F44]"
          />
        </div>
      </div>

      {/* Ordenar por */}
      <div>
        <h3 className="text-lg font-bold text-[#1A3D6D] mb-4">Ordenar por</h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4B6F44] focus:border-transparent"
        >
          <option value="featured">Destacados</option>
          <option value="price-asc">Precio: Menor a Mayor</option>
          <option value="price-desc">Precio: Mayor a Menor</option>
          <option value="name-asc">Nombre: A-Z</option>
          <option value="name-desc">Nombre: Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default ProductSidebar;