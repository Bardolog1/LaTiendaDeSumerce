import { useState } from "react";
import ReactDOM from "react-dom";
import { Menu, X } from "lucide-react";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar({ cart, setCart }) {
  const [open, setOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // Función para solicitar productos por WhatsApp
  const handleWhatsApp = () => {
    if (cart.length === 0) return;
    const msg = encodeURIComponent(
      'Hola, quiero solicitar los siguientes productos: ' +
      cart.map(p => `\n- ${p.name} (${p.origin}) x${p.qty || 1}`).join('')
    );
    window.open(`https://wa.me/57?text=${msg}`, '_blank');
  };

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "nosotros" },
    { name: "Productos", href: "productos" },
    { name: "Contacto", href: "contacto" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#F5F5DC]/90 backdrop-blur-md shadow-md border-b border-[#A65F3E]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* LOGO */}
          <a
            href="/"
            className="text-2xl font-[Playfair_Display] text-[#4B6F44] tracking-wide hover:text-[#A65F3E] transition"
          >
            La Tienda de Sumercé
          </a>

          {/* NAV LINKS */}
          <ul className="hidden md:flex space-x-8 text-[#4B6F44] font-medium items-center">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-[#A65F3E] transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
            {/* Ícono carrito */}
            <li>
              <button
                className="relative text-[#4B6F44] hover:text-[#A65F3E] transition text-2xl"
                onClick={() => setShowCart(true)}
              >
                <FaShoppingCart />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">{cart.length}</span>
                )}
              </button>
            </li>
          </ul>

          {/* MENU ICON (MÓVIL) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#4B6F44] hover:text-[#A65F3E] transition"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MENÚ DESPLEGABLE MÓVIL */}
        {open && (
          <div className="md:hidden bg-[#F5F5DC]/95 backdrop-blur-md border-t border-[#A65F3E]/20">
            <ul className="flex flex-col items-center py-4 space-y-3 text-[#4B6F44] font-medium">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block px-4 py-2 hover:text-[#A65F3E] transition"
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
      {/* MODAL CARRITO usando portal */}
      {showCart && ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 backdrop-blur-sm overflow-y-auto" onClick={() => setShowCart(false)}>
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative flex flex-col mt-16 mb-8 animate-in zoom-in duration-300"
            style={{ maxHeight: 'calc(100vh - 4rem)', overflowY: 'auto' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button 
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all hover:scale-110" 
              onClick={() => setShowCart(false)}
            >
              <X size={24} />
            </button>
            
            {/* Encabezado */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-[#1A3D6D] mb-2">Tu Carrito</h3>
              <p className="text-gray-600">
                {cart.length === 0 
                  ? "No tienes productos en tu carrito" 
                  : `${cart.length} ${cart.length === 1 ? 'producto' : 'productos'} en tu carrito`}
              </p>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-24 h-24 mx-auto mb-4 text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <p className="text-gray-500 mb-4">Tu carrito está vacío</p>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-[#1A3D6D] font-semibold hover:text-[#4B6F44] transition"
                >
                  Continuar comprando
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((p, i) => (
                    <div key={i} className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition group">
                      {/* Imagen del producto */}
                      <div className="relative w-20 h-20 flex-shrink-0">
                        {Array.isArray(p.images) && p.images.length > 0 ? (
                          <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover rounded-lg" />
                        ) : (
                          <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 6 9-6" />
                            </svg>
                          </div>
                        )}
                        {p?.discount > 0 && (
                          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                            -{(p.discount * 100).toFixed(0)}%
                          </div>
                        )}
                      </div>
                      
                      {/* Información del producto */}
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#1A3D6D] mb-1">{p.name}</h4>
                        <p className="text-sm text-gray-500 flex items-center gap-1 mb-2">
                          <span className="text-[#4B6F44]">•</span>
                          {p.origin}
                        </p>
                        
                        {/* Precio */}
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#1A3D6D]">
                            ${( (p.price || 0) * (1 - (p.discount || 0)) * (p.qty || 1) ).toLocaleString()}
                          </span>
                          {p?.discount > 0 && (
                            <span className="text-sm text-gray-400 line-through">
                              ${( (p.price || 0) * (p.qty || 1) ).toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Controles de cantidad */}
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2 bg-white rounded-lg shadow-sm border">
                          <button
                            onClick={() => {
                              if ((p.qty || 1) > 1) {
                                setCart(prev => prev.map(item => 
                                  item.name === p.name 
                                    ? {...item, qty: (item.qty || 1) - 1}
                                    : item
                                ))
                              }
                            }}
                            className="px-2 py-1 text-gray-500 hover:text-[#1A3D6D] transition"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-medium">{p.qty || 1}</span>
                          <button
                            onClick={() => {
                              setCart(prev => prev.map(item => 
                                item.name === p.name 
                                  ? {...item, qty: (item.qty || 1) + 1}
                                  : item
                              ))
                            }}
                            className="px-2 py-1 text-gray-500 hover:text-[#1A3D6D] transition"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => {
                            setCart(prev => prev.filter(item => item.name !== p.name))
                          }}
                          className="text-red-500 hover:text-red-700 text-sm transition opacity-0 group-hover:opacity-100"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total y botón de WhatsApp */}
                <div className="border-t pt-4 mt-auto">
                  <div className="flex justify-between text-lg font-bold text-[#1A3D6D] mb-6">
                    <span>Total:</span>
                    <span>${cart.reduce((sum, p) => sum + (p.price * (1 - p.discount) * (p.qty || 1)), 0).toLocaleString()}</span>
                  </div>

                  <button
                    onClick={handleWhatsApp}
                    className="w-full py-3 rounded-xl font-bold text-lg flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#128C7E] transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <FaShoppingCart className="text-xl" />
                    Solicitar por WhatsApp
                  </button>
                </div>
              </>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
