import React, { useState, useEffect, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import ProductSidebar from "../components/ProductSidebar";
import { getAllProducts, getFeaturedProducts } from "../utils/productUtils";
import { Tag, Star } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.css";

export default function ProductosPage({ addToCart }) {
  // Estados básicos
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Estados para filtros y búsqueda
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState([0, Number(1000000)]);
  const [sortBy, setSortBy] = useState("featured");

  // Obtener categorías únicas
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(p => p.category))];
    return uniqueCategories.sort();
  }, [products]);

  // Obtener precio máximo
const maxPrice = useMemo(() => {
  return Math.max(...products.map(p => p.price), 0);
}, [products]);



  // Filtrar y ordenar productos
  const filteredProducts = useMemo(() => {
    const normalize = (str) =>
      str?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") || "";

    const term = normalize(searchTerm);
    const selected = normalize(selectedCategory);

    return products
      .filter((product) => {
        const nombre = normalize(product.name);
        const descripcion = normalize(product.description);
        const categoria = normalize(product.category);

        const matchesSearch =
          !term || nombre.includes(term) || descripcion.includes(term);

        const matchesCategory =
          !selected || categoria === selected;

        const matchesPrice =
          product.price >= priceRange[0] && product.price <= priceRange[1];

        return matchesSearch && matchesCategory && matchesPrice;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          case "name-asc":
            return a.name.localeCompare(b.name);
          case "name-desc":
            return b.name.localeCompare(a.name);
          default:
            return 0;
        }
      });
  }, [products, searchTerm, selectedCategory, priceRange, sortBy]);



  useEffect(() => {
  try {
    const featured = getFeaturedProducts(true) || [];
    const all = getAllProducts(true) || [];
    setFeaturedProducts(featured);
    setProducts(all);

    // Determinar el precio máximo con la estructura transformada
    const highestPrice = Math.max(...all.map(p => p.price), 0);

    // Inicializar el rango de precios con el valor máximo
    setPriceRange([0, highestPrice]);
  } catch (error) {
    console.error("Error cargando productos:", error);
  } finally {
    setLoading(false);
  }
}, []);


  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F5DC] flex items-center justify-center">
        <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-[#4B6F44]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      {/* Header */}
      <div className="relative overflow-hidden bg-[#4B6F44] text-white py-16 px-6 pb-11">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-xl md:text-5xl m-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Productos para sumercé
          </h1>
          <p className="text-xl md:text-xl opacity-90 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Tradición, cultura y arte en cada pieza
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              ✨ Productos únicos
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              ❤️ Hecho en Colombia
            </div>
          </div>
        </div>
      </div>

      {/* Productos Destacados */}
      {featuredProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 mb-8">
            <Star className="text-yellow-500" fill="currentColor" />
            <h2 className="text-2xl font-bold text-[#1A3D6D]">Productos Destacados</h2>
          </div>
          <div className="featured-slider">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={5}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
              pauseOnHover={true}
              responsive={[
                {
                  breakpoint: 1536,
                  settings: {
                    slidesToShow: 4,
                  }
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1,
                  }
                }
              ]}
            >
              {featuredProducts.map((product) => (
                <div key={product.id} className="px-2">
                  <ProductCard
                    product={product}
                    onClick={() => setSelectedProduct(product)}
                    addToCart={addToCart}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}

      {/* Todos los Productos */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center gap-2 mb-8">
          <Tag className="text-[#4B6F44]" />
          <h2 className="text-2xl font-bold text-[#1A3D6D]">Todos los Productos</h2>
        </div>
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-8">
              <ProductSidebar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                sortBy={sortBy}
                setSortBy={setSortBy}
                categories={categories}
                maxPrice={maxPrice}
              />
            </div>
          </div>

          {/* Lista de productos */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard
                    product={product}
                    onClick={() => setSelectedProduct(product)}
                    addToCart={addToCart}
                  />
                </div>
              ))}
            </div>

            {/* Mensaje cuando no hay resultados */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No se encontraron productos que coincidan con tu búsqueda.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      )}
    </div>
  );
}