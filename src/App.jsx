import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tradicion from "./components/Tradicion";
import ProductosDestacados from "./components/ProductosDestacados";
import Artesanos from "./components/Artesanos";
import Footer from "./components/Footer";
import ProductosPage from "./pages/ProductosPage";
import NosotrosPage from "./pages/NosotrosPage";
import ContactoPage from "./pages/ContactoPage";

function App() {
  // Estado y persistencia del carrito
  const [cart, setCart] = useState(() => {
    const stored = sessionStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCart(prev => {
      const idx = prev.findIndex(p => p.id === product.id);
      if (idx !== -1) {
        // Si ya existe, aumentar cantidad
        const updated = [...prev];
        updated[idx].qty = (updated[idx].qty || 1) + 1;
        return updated;
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  return (
    <Router>
      <Navbar cart={cart} setCart={setCart} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Tradicion />
              <ProductosDestacados cart={cart} addToCart={addToCart} />
              <Artesanos />
              <Footer />
            </>
          }
        />
        <Route path="/productos" element={<>
          <ProductosPage addToCart={addToCart} />
          <Footer />
        </>} />
        <Route path="/nosotros" element={<>
          <NosotrosPage />
          <Footer />
        </>} />
        <Route path="/contacto" element={<>
          <ContactoPage />
          <Footer />
        </>} />
      </Routes>
    </Router>
  );
}

export default App;
