import { useState } from "react";
import { getAllProducts } from '../utils/productUtils';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.css";

  // Eliminado: export default function Productos() {
export default function ProductosDestacados({ addToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  // getAllProducts ya devuelve productos normalizados (name, images, price, discount, ...)
  const productos = getAllProducts();

  return (
    <section className="py-20 px-6 bg-[#F5F5DC]">
      <h2 className="text-4xl font-[Playfair_Display] text-center text-[#4B6F44] mb-12">
        Productos Destacados
      </h2>
      <div className="featured-slider max-w-7xl mx-auto">
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
          {productos.filter(product => product.destacado).map((product) => (
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
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          addToCart={addToCart}
        />
      )}
    </section>
  );
}