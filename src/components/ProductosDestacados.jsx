import { useState } from "react";
import { getFeaturedProducts } from '../utils/productUtils';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.css";

export default function ProductosDestacados({ addToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productosDestacados = getFeaturedProducts(); // Usando la función específica para productos destacados

  console.log('Productos destacados:', productosDestacados.length);
  console.log('Productos destacados:', productosDestacados);

  const sliderSettings = {
    dots: true,
    infinite: productosDestacados.length > 3,
    speed: 500,
    slidesToShow: Math.min(4, productosDestacados.length),
    slidesToScroll: 1,
    autoplay: productosDestacados.length > 1,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: Math.min(4, productosDestacados.length),
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: Math.min(3, productosDestacados.length),
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, productosDestacados.length),
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(2, productosDestacados.length),
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  // Temporalmente removido para depuración
  // if (productosDestacados.length === 0) {
  //   return null;
  // }

  return (
    <section className="py-20 px-6 bg-blancoHueso">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-playfair text-center text-verdeMusgo mb-12"
      >
        Productos Destacados
      </motion.h2>
      
      {productosDestacados.length === 0 ? (
        <div className="text-center text-gray-600 py-10">
          <p>No hay productos destacados disponibles en este momento.</p>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="featured-slider max-w-7xl mx-auto px-4"
        >
          <Slider {...sliderSettings}>
            {productosDestacados.map((product) => (
              <div key={product.id} className="px-3">
                <ProductCard
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                  addToCart={addToCart}
                />
              </div>
            ))}
          </Slider>
        </motion.div>
      )}
      
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