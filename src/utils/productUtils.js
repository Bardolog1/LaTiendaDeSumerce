// Utilidades para manejar productos desde products.json
import products from '../data/products.json';

// Función para transformar el formato de los productos
function transformProduct(product) {
  return {
    id: product.id,
    name: product.nombre,
    origin: product.origen,
    price: product.precio,
    discount: product.descuento / 100, // Convertir porcentaje a decimal
    description: product.descripcion,
    images: Array.isArray(product.img) ? product.img : [product.img],
    category: product.categoria,
    featured: product.destacado || false,
    active: product.activo !== false // Si no está definido, asumimos que está activo
  };
}

export function getAllProducts(onlyActive = true) {
  return products
    .filter(product => !onlyActive || product.activo !== false)
    .map(transformProduct);
}

export function getFeaturedProducts(onlyActive = true) {
  return products
    .filter(product => product.destacado && (!onlyActive || product.activo !== false))
    .map(transformProduct);
}

export function getProductById(id) {
  const product = products.find(producto => producto.id === id);
  return product ? transformProduct(product) : null;
}

export function searchProducts(query, onlyActive = true) {
  const q = query.toLowerCase();
  return products
    .filter(product => 
      (!onlyActive || product.activo !== false) &&
      (product.nombre.toLowerCase().includes(q) ||
       product.descripcion.toLowerCase().includes(q) ||
       product.categoria.toLowerCase().includes(q))
    )
    .map(transformProduct);
}

export function getProductsByCategory(categoria, onlyActive = true) {
  return products
    .filter(product => 
      product.categoria === categoria && 
      (!onlyActive || product.activo !== false)
    )
    .map(transformProduct);
}
