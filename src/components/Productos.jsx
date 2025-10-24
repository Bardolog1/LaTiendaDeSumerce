import { useState } from "react";
import { getAllProducts } from '../utils/productUtils';

    import ProductCard from './ProductCard';
    import ProductModal from './ProductModal';

  // Eliminado: export default function Productos() {
export default function ProductosDestacados({ addToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  // Reusar la transformación centralizada en productUtils
  const productos = getAllProducts();

  return (
    <section className="py-20 px-6 bg-[#F5F5DC]">
      <h2 className="text-4xl font-[Playfair_Display] text-center text-[#4B6F44] mb-12">
        Productos Destacados
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {productos.map((product, i) => (
          <ProductCard
            key={product.id || i}
            product={product}
            onClick={() => setSelectedProduct(product)}
            addToCart={addToCart}
          />
        ))}
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