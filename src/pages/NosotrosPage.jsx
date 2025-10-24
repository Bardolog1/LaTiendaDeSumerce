import React, { useState, useEffect, useCallback } from "react";
import { MapPin, Heart, Globe, Palmtree, Mountain, Sparkles, Users, Store, Camera, X, ChevronLeft, ChevronRight, Home, Map, PartyPopper, Scissors, Utensils, BookOpen } from "lucide-react";

export default function NosotrosPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalCity, setModalCity] = useState(null);
  const [activeSection, setActiveSection] = useState('inicio');
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Función para scroll suave a sección
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Altura del navbar fijo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Detectar scroll para resaltar botón activo
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'nosotros', 'geografia e historia', 'pueblos', 'galeria', 'festividades', 'artesanias', 'gastronomia', 'mision'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Array de fotos de Boyacá
  const fotosGaleria = [
    { 
      src: "/Raquira-43.jpg", 
      alt: "Ráquira - Pueblo de colores y cerámica artesanal",
      title: "Ráquira",
      category: "Pueblos"
    },
    { 
      src: "/raquira-boyaca.webp", 
      alt: "Cerámica de Ráquira - Artesanías tradicionales",
      title: "Cerámica de Ráquira",
      category: "Artesanías"
    },
    { 
      src: "/nevado-del-cocuy-boyaca.webp", 
      alt: "Sierra Nevada del Cocuy - Paisaje de páramo",
      title: "Sierra Nevada del Cocuy",
      category: "Naturaleza"
    },
    { 
      src: "/Boyaca_.jpg", 
      alt: "Paisajes de Boyacá - Montañas verdes",
      title: "Boyacá",
      category: "Paisajes"
    },
    { 
      src: "/lago-de-tota-boyaca.jpg", 
      alt: "Lago de Tota - El lago más grande de Colombia",
      title: "Lago de Tota",
      category: "Naturaleza"
    },
    { 
      src: "/Mongui-Boyaca.jpg", 
      alt: "Pueblo de Mongüí - Patrimonio cultural",
      title: "Mongüí",
      category: "Pueblos"
    },
    { 
      src: "/paipa_optimized.jpg", 
      alt: "Paipa - Turismo y aguas termales",
      title: "Paipa",
      category: "Turismo"
    },
    { 
      src: "/Artesanal.jpeg", 
      alt: "Artesanías boyacenses hechas a mano",
      title: "Artesanías",
      category: "Tradición"
    },
    { 
      src: "/Puente_de_Boyaca_4ad35f6a55.webp", 
      alt: "Puente de Boyacá - Monumento histórico de la independencia",
      title: "Puente de Boyacá",
      category: "Historia"
    },
    { 
      src: "/duitama-boyaca.webp", 
      alt: "Duitama - Ciudad boyacense",
      title: "Duitama",
      category: "Ciudades"
    },
    { 
      src: "/colombia-4884157_1920.jpg", 
      alt: "Paisajes colombianos de Boyacá",
      title: "Paisajes de Boyacá",
      category: "Naturaleza"
    },
    { 
      src: "/balon.jpg", 
      alt: "Balones artesanales de Mongüí",
      title: "Balones de Mongüí",
      category: "Artesanías"
    },
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(fotosGaleria[index]);
  };

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const openCityModal = (city) => {
    setModalCity(city);
  };

  const closeCityModal = () => {
    setModalCity(null);
  };

  const nextImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentIndex(prev => {
      const newIdx = (prev + 1) % fotosGaleria.length;
      setSelectedImage(fotosGaleria[newIdx]);
      return newIdx;
    });
  }, [fotosGaleria]);

  const prevImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setCurrentIndex(prev => {
      const newIdx = (prev - 1 + fotosGaleria.length) % fotosGaleria.length;
      setSelectedImage(fotosGaleria[newIdx]);
      return newIdx;
    });
  }, [fotosGaleria]);

  // Navegación con teclado
  useEffect(() => {
    if (!selectedImage) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeModal, nextImage, prevImage]);

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      {/* Hero Section */}
      <div id="inicio" className="relative overflow-hidden bg-gradient-to-br from-[#4B6F44] to-[#3a5835] text-white py-20 px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-[Playfair_Display] mb-6">
            Sobre Nosotros
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Llevando el alma de Boyacá a cada rincón de España
          </p>
        </div>
      </div>

      {/* Barra de Navegación Interna */}
      <div className="sticky top-0 z-40 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
            <button
              onClick={() => scrollToSection('inicio')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                activeSection === 'inicio' 
                  ? 'bg-[#4B6F44] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Home size={18} />
              <span className="text-sm font-medium">Inicio</span>
            </button>
            
            <button
              onClick={() => scrollToSection('historia')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                activeSection === 'historia' 
                  ? 'bg-[#4B6F44] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Store size={18} />
              <span className="text-sm font-medium">Nosotros</span>
            </button>

            <button
              onClick={() => scrollToSection('geografia')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                activeSection === 'geografia' 
                  ? 'bg-[#4B6F44] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Mountain size={18} />
              <span className="text-sm font-medium">Geografía e Historia</span>
            </button>

            <button
              onClick={() => scrollToSection('pueblos')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                activeSection === 'pueblos' 
                  ? 'bg-[#4B6F44] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Map size={18} />
              <span className="text-sm font-medium">Pueblos</span>
            </button>

            <button
              onClick={() => scrollToSection('galeria')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                activeSection === 'galeria' 
                  ? 'bg-[#4B6F44] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Camera size={18} />
              <span className="text-sm font-medium">Galería</span>
            </button>

            <button
              onClick={() => scrollToSection('festividades')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                activeSection === 'festividades' 
                  ? 'bg-[#4B6F44] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <PartyPopper size={18} />
              <span className="text-sm font-medium">Festividades</span>
            </button>

            <button
              onClick={() => scrollToSection('artesanias')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                activeSection === 'artesanias' 
                  ? 'bg-[#4B6F44] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Scissors size={18} />
              <span className="text-sm font-medium">Artesanías</span>
            </button>

            <button
              onClick={() => scrollToSection('gastronomia')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                activeSection === 'gastronomia' 
                  ? 'bg-[#4B6F44] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Utensils size={18} />
              <span className="text-sm font-medium">Gastronomía</span>
            </button>

            <button
              onClick={() => scrollToSection('cultura')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                activeSection === 'cultura' 
                  ? 'bg-[#4B6F44] text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <BookOpen size={18} />
              <span className="text-sm font-medium">Misión</span>
            </button>
          </div>
        </div>
      </div>

      {/* Nuestra Historia */}
      <section id="historia" className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Store className="text-[#4B6F44]" size={32} />
            <h2 className="text-3xl md:text-4xl font-[Playfair_Display] text-[#1A3D6D]">
              La Tienda de Sumercé
            </h2>
          </div>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Fundada en 2025, <span className="font-semibold text-[#4B6F44]">La Tienda de Sumercé</span> nació 
              del corazón de quienes, estando lejos de casa, sentían la nostalgia de las tierras boyacenses. 
              Somos más que una tienda; somos un puente entre dos mundos, un abrazo de nostalgia 
              envuelto en artesanía, un pedacito de Colombia en tierras españolas.
            </p>
            <p>
              Sabemos lo que es extrañar. Extrañar el olor de la tierra mojada después de la lluvia, 
              el frío de la madrugada en Tunja, el sabor de un canelazo caliente en Villa de Leyva, 
              la calidez de un ruana tejida a mano. Por eso, cada producto que traemos desde Boyacá 
              lleva consigo historias, tradiciones y el amor de las manos que lo crearon.
            </p>
            <p className="text-xl font-medium text-[#A65F3E] italic border-l-4 border-[#4B6F44] pl-6">
              "Para los colombianos en el exterior que quieren recordar sus raíces, 
              y para los españoles que desean conocer la magia de nuestras tierras."
            </p>
          </div>
        </div>
      </section>

      {/* Boyacá: Nuestra Tierra */}
      <section id="geografia" className="bg-[#D4A017]/10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mountain className="text-[#4B6F44]" size={40} />
              <h2 className="text-4xl font-[Playfair_Display] text-[#A65F3E]">
                Boyacá: La Cuna de la Libertad
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Entre montañas verdes, páramos eternos y pueblos de ensueño, 
              Boyacá es un departamento que respira historia en cada esquina.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Geografía y Clima */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-[Playfair_Display] text-[#1A3D6D] mb-4 flex items-center gap-2">
                <MapPin className="text-[#4B6F44]" />
                Geografía y Clima
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ubicado en el corazón del altiplano cundiboyacense, Boyacá se caracteriza 
                por sus páramos de frailejones, valles fértiles y un clima que va desde 
                el frío de las alturas hasta el calor de sus tierras bajas. Con una altura 
                promedio de 2.820 metros sobre el nivel del mar, el frío boyacense es tan 
                característico como su gente cálida.
              </p>
            </div>

            {/* Historia */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-[Playfair_Display] text-[#1A3D6D] mb-4 flex items-center gap-2">
                <Sparkles className="text-[#4B6F44]" />
                Historia Libertadora
              </h3>
              <p className="text-gray-700 leading-relaxed">
                En el Puente de Boyacá se selló la independencia de Colombia en 1819. 
                Esta tierra vio nacer próceres, poetas y artistas que forjaron la identidad 
                de nuestra nación. Cada piedra de sus caminos reales cuenta historias de 
                resistencia, valentía y amor por la libertad.
              </p>
            </div>
          </div>

          {/* Principales Ciudades */}
          <div id="pueblos" className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-8">
            <h3 className="text-3xl font-[Playfair_Display] text-[#1A3D6D] mb-8 text-center">
              Ciudades y Pueblos Mágicos
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Tunja */}
              <div 
                onClick={() => openCityModal({
                  nombre: "Tunja",
                  imagen: "/Boyaca_.jpg",
                  descripcion: "La capital del departamento, ciudad universitaria y colonial por excelencia. Sus calles empedradas guardan tesoros arquitectónicos y el alma boyacense más pura."
                })}
                className="group cursor-pointer bg-gradient-to-br from-[#4B6F44]/5 to-[#3a5835]/5 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src="/Boyaca_.jpg" 
                    alt="Tunja"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h4 className="text-xl font-semibold text-white">Tunja</h4>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    La capital del departamento, ciudad universitaria y colonial por excelencia. Sus calles empedradas guardan tesoros arquitectónicos y el alma boyacense más pura.
                  </p>
                </div>
              </div>

              {/* Villa de Leyva */}
              <div 
                onClick={() => openCityModal({
                  nombre: "Villa de Leyva",
                  imagen: "/Raquira-43.jpg",
                  descripcion: "Pueblo patrimonio con la plaza más grande de Colombia. Sus calles adoquinadas, casas blancas con techos de teja y su cielo estrellado la hacen única en el mundo."
                })}
                className="group cursor-pointer bg-gradient-to-br from-[#4B6F44]/5 to-[#3a5835]/5 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src="/Raquira-43.jpg" 
                    alt="Villa de Leyva"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h4 className="text-xl font-semibold text-white">Villa de Leyva</h4>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Pueblo patrimonio con la plaza más grande de Colombia. Sus calles adoquinadas, casas blancas con techos de teja y su cielo estrellado la hacen única en el mundo.
                  </p>
                </div>
              </div>

              {/* Paipa */}
              <div 
                onClick={() => openCityModal({
                  nombre: "Paipa",
                  imagen: "/paipa_optimized.jpg",
                  descripcion: "Famosa por sus aguas termales y el Lago Sochagota. Un destino de descanso y tradición, donde el frío se combate con un buen canelazo."
                })}
                className="group cursor-pointer bg-gradient-to-br from-[#4B6F44]/5 to-[#3a5835]/5 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src="/paipa_optimized.jpg" 
                    alt="Paipa"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h4 className="text-xl font-semibold text-white">Paipa</h4>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Famosa por sus aguas termales y el Lago Sochagota. Un destino de descanso y tradición, donde el frío se combate con un buen canelazo.
                  </p>
                </div>
              </div>

              {/* Sogamoso */}
              <div 
                onClick={() => openCityModal({
                  nombre: "Sogamoso",
                  imagen: "/duitama-boyaca.webp",
                  descripcion: "La Ciudad del Sol, antigua capital de los muiscas. Centro industrial de Boyacá pero guardián de tradiciones ancestrales."
                })}
                className="group cursor-pointer bg-gradient-to-br from-[#4B6F44]/5 to-[#3a5835]/5 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src="/duitama-boyaca.webp" 
                    alt="Sogamoso"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h4 className="text-xl font-semibold text-white">Sogamoso</h4>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    La Ciudad del Sol, antigua capital de los muiscas. Centro industrial de Boyacá pero guardián de tradiciones ancestrales.
                  </p>
                </div>
              </div>

              {/* Ráquira */}
              <div 
                onClick={() => openCityModal({
                  nombre: "Ráquira",
                  imagen: "/raquira-boyaca.webp",
                  descripcion: "La capital artesanal de Colombia. Sus casas de colores y talleres de cerámica son el corazón del arte boyacense."
                })}
                className="group cursor-pointer bg-gradient-to-br from-[#4B6F44]/5 to-[#3a5835]/5 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src="/raquira-boyaca.webp" 
                    alt="Ráquira"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h4 className="text-xl font-semibold text-white">Ráquira</h4>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    La capital artesanal de Colombia. Sus casas de colores y talleres de cerámica son el corazón del arte boyacense.
                  </p>
                </div>
              </div>

              {/* Mongüí */}
              <div 
                onClick={() => openCityModal({
                  nombre: "Mongüí",
                  imagen: "/Mongui-Boyaca.jpg",
                  descripcion: "Pueblo patrimonio famoso por sus balones de fútbol hechos a mano y su puente de piedra que parece sacado de un cuento."
                })}
                className="group cursor-pointer bg-gradient-to-br from-[#4B6F44]/5 to-[#3a5835]/5 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img 
                    src="/Mongui-Boyaca.jpg" 
                    alt="Mongüí"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h4 className="text-xl font-semibold text-white">Mongüí</h4>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Pueblo patrimonio famoso por sus balones de fútbol hechos a mano y su puente de piedra que parece sacado de un cuento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Boyacá */}
      <section id="galeria" className="py-16 px-6 bg-gradient-to-b from-[#F5F5DC] to-[#D4A017]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Camera className="text-[#4B6F44]" size={40} />
              <h2 className="text-4xl font-[Playfair_Display] text-[#A65F3E]">
                Boyacá en Imágenes
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Déjate enamorar por los paisajes, colores y tradiciones de nuestra tierra
            </p>
          </div>

          {/* Grid de Galería - Masonry Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fotosGaleria.map((foto, index) => (
              <div 
                key={index}
                onClick={() => openModal(index)}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer bg-white"
              >
                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <img
                    src={foto.src}
                    alt={foto.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback si la imagen no existe
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#4B6F44] to-[#3a5835]">
                          <div class="text-center text-white p-6">
                            <div class="text-4xl mb-2">📷</div>
                            <div class="font-semibold">${foto.title}</div>
                          </div>
                        </div>
                      `;
                    }}
                  />
                  {/* Overlay con información */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <span className="inline-block bg-[#4B6F44] px-3 py-1 rounded-full text-xs font-semibold mb-2">
                        {foto.category}
                      </span>
                      <h3 className="text-xl font-[Playfair_Display] font-bold">
                        {foto.title}
                      </h3>
                      <p className="text-sm opacity-90">{foto.alt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nota sobre las fotos */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 italic">
              📸 Todas las fotografías capturan la esencia auténtica de Boyacá y su gente
            </p>
          </div>
        </div>
      </section>

      {/* Artesanías y Tradiciones */}
      <section id="artesanias" className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Palmtree className="text-[#4B6F44]" size={40} />
            <h2 className="text-4xl font-[Playfair_Display] text-[#A65F3E]">
              Artesanías y Tradiciones
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Cerámica */}
          <div 
            className="bg-gradient-to-br from-[#A65F3E]/10 to-[#D4A017]/10 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => openCityModal({
              nombre: 'Cerámica de Ráquira',
              imagen: 'Raquira-43.jpg',
              descripcion: 'Las manos artesanas de Ráquira transforman el barro en ollas, jarrones, platos y figuras de colores vivos que alegran cualquier hogar. Esta tradición de más de 400 años es reconocida en todo el mundo. Los artesanos utilizan técnicas ancestrales transmitidas de generación en generación, creando piezas únicas que combinan funcionalidad y belleza. Los colores vibrantes y los diseños tradicionales hacen de la cerámica de Ráquira un símbolo inconfundible de la artesanía colombiana.'
            })}
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src="/Raquira-43.jpg" 
                alt="Cerámica de Ráquira"
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-[Playfair_Display] text-[#1A3D6D] mb-4">
                🏺 Cerámica de Ráquira
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Las manos artesanas de Ráquira transforman el barro en ollas, jarrones, 
                platos y figuras de colores vivos que alegran cualquier hogar. Esta tradición 
                de más de 400 años es reconocida en todo el mundo.
              </p>
            </div>
          </div>

          {/* Ruanas */}
          <div 
            className="bg-gradient-to-br from-[#4B6F44]/10 to-[#3a5835]/10 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => openCityModal({
              nombre: 'Ruanas y Textiles',
              imagen: 'artesanos2.jpeg',
              descripcion: 'La ruana boyacense es más que una prenda: es identidad. Tejida en lana virgen con técnicas ancestrales, protege del frío de páramo y abraza como solo la tierra boyacense sabe hacerlo. Cada ruana es una obra de arte textil que puede tomar semanas en completarse. Los artesanos seleccionan cuidadosamente la lana, la tiñen con tintes naturales y tejen a mano patrones que cuentan historias de las montañas y la cultura andina. La ruana es símbolo de hospitalidad, abrigo y tradición viva.'
            })}
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src="/artesanos2.jpeg" 
                alt="Ruanas y Textiles"
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-[Playfair_Display] text-[#1A3D6D] mb-4">
                🧣 Ruanas y Textiles
              </h3>
              <p className="text-gray-700 leading-relaxed">
                La ruana boyacense es más que una prenda: es identidad. Tejida en lana virgen 
                con técnicas ancestrales, protege del frío de páramo y abraza como solo la 
                tierra boyacense sabe hacerlo.
              </p>
            </div>
          </div>

          {/* Cestería */}
          <div 
            className="bg-gradient-to-br from-[#D4A017]/10 to-[#F5F5DC]/30 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => openCityModal({
              nombre: 'Cestería y Mimbre',
              imagen: 'Artesanal.jpeg',
              descripcion: 'Canastos, sombreros y artículos decorativos tejidos en mimbre y fique. Cada pieza lleva horas de trabajo y la paciencia infinita de nuestros artesanos. El arte de la cestería en Boyacá se remonta a tiempos precolombinos, cuando las comunidades indígenas tejían contenedores para almacenar alimentos y transportar cosechas. Hoy, esta tradición continúa viva, combinando técnicas ancestrales con diseños contemporáneos. Cada canasto, cada sombrero, es testimonio de la dedicación y el amor por el oficio.'
            })}
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src="/Artesanal.jpeg" 
                alt="Cestería y Mimbre"
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-[Playfair_Display] text-[#1A3D6D] mb-4">
                🧺 Cestería y Mimbre
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Canastos, sombreros y artículos decorativos tejidos en mimbre y fique. 
                Cada pieza lleva horas de trabajo y la paciencia infinita de nuestros 
                artesanos.
              </p>
            </div>
          </div>

          {/* Talla en Madera */}
          <div 
            className="bg-gradient-to-br from-[#1A3D6D]/10 to-[#4B6F44]/10 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => openCityModal({
              nombre: 'Talla en Madera',
              imagen: 'raquira-boyaca.webp',
              descripcion: 'Esculturas religiosas, muebles coloniales y figuras decorativas talladas con maestría. El trabajo en madera boyacense es sinónimo de calidad y tradición centenaria. Los talladores boyacenses son herederos de una larga tradición que combina influencias indígenas y coloniales. Con herramientas simples y una paciencia infinita, transforman troncos en santos, vírgenes, ángeles y figuras que adornan iglesias y hogares. Cada talla es única, marcada por el estilo personal del artesano y el alma que le imprime a la madera.'
            })}
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src="/raquira-boyaca.webp" 
                alt="Talla en Madera"
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-[Playfair_Display] text-[#1A3D6D] mb-4">
                🪵 Talla en Madera
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Esculturas religiosas, muebles coloniales y figuras decorativas talladas 
                con maestría. El trabajo en madera boyacense es sinónimo de calidad y 
                tradición centenaria.
              </p>
            </div>
          </div>
        </div>

        {/* Gastronomía */}
        <div id="gastronomia" className="mt-12 bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl font-[Playfair_Display] text-[#1A3D6D] mb-6 text-center">
            🍲 Sabores de Boyacá
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            La gastronomía boyacense es tan rica como su cultura. Desde el cuchuco 
            de trigo hasta las almojábanas recién horneadas, cada plato es un viaje 
            a las cocinas de nuestras abuelas.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {["Ajiaco", "Cuchuco", "Canelazo", "Mazamorra", "Almojábanas", "Arepas", "Longaniza", "Papa Criolla"].map((plato, i) => (
              <div key={i} className="bg-[#F5F5DC] rounded-lg p-4 font-medium text-[#4B6F44]">
                {plato}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultura y Actividades */}
      <section id="festividades" className="bg-[#1A3D6D]/5 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="text-[#4B6F44]" size={40} />
              <h2 className="text-4xl font-[Playfair_Display] text-[#A65F3E]">
                Cultura y Festividades
              </h2>
            </div>
          </div>

          {/* Carrusel de Festividades */}
          <div className="relative max-w-4xl mx-auto mt-8">
            {(() => {
              const festividades = [
                {
                  nombre: "Festival de Luces",
                  imagen: "/Raquira-43.jpg",
                  emoji: "🎭",
                  descripcion: "Villa de Leyva se ilumina cada diciembre con miles de velas en un espectáculo mágico que atrae visitantes de todo el mundo. Las calles empedradas del pueblo se convierten en un mar de luz creando una atmósfera única y mágica. Cada rincón, cada balcón, cada ventana se decora con faroles de colores que iluminan la noche colonial."
                },
                {
                  nombre: "Aguinaldo Boyacense",
                  imagen: "/Artesanal.jpeg",
                  emoji: "🎪",
                  descripcion: "Festival folclórico que celebra las tradiciones musicales y danzas típicas de la región cada año en Tunja. Este evento reúne a los mejores exponentes de la cultura boyacense en un ambiente de alegría y tradición. El Aguinaldo Boyacense es una manifestación cultural que preserva las danzas folclóricas, los cantos tradicionales y la música campesina de la región."
                },
                {
                  nombre: "Festival del Balón",
                  imagen: "/balon.jpg",
                  emoji: "⚽",
                  descripcion: "En Mongüí se celebra la tradición de los balones hechos a mano, patrimonio cultural del municipio. Esta festividad honra el oficio artesanal que ha dado fama mundial a este hermoso pueblo boyacense. Los artesanos demuestran cómo fabrican balones de cuero cosidos a mano, una técnica que ha pasado de generación en generación."
                },
                {
                  nombre: "Semana Santa en Tunja",
                  imagen: "/Boyaca_.jpg",
                  emoji: "✝️",
                  descripcion: "Tunja vive una de las celebraciones de Semana Santa más tradicionales y emotivas de Colombia. Las procesiones recorren las calles coloniales con imágenes religiosas centenarias, música sacra y una devoción profunda que se respira en cada rincón. Es una experiencia espiritual única que combina fe, historia y tradición en el corazón de Boyacá."
                },
                {
                  nombre: "Festival de Cometas",
                  imagen: "/lago-de-tota-boyaca.jpg",
                  emoji: "🪁",
                  descripcion: "Cada agosto, el cielo de Villa de Leyva se llena de color con el Festival de Cometas. Familias enteras acuden con sus cometas artesanales de todos los tamaños y formas imaginables. Es una tradición que une generaciones y transforma el páramo en un espectáculo visual único. Los niños corren por la plaza mayor mientras las cometas danzan en el viento andino, creando un ambiente de alegría y libertad."
                },
                {
                  nombre: "Concurso Nacional del Torbellino",
                  imagen: "/paipa_optimized.jpg",
                  emoji: "💃",
                  descripcion: "El torbellino es el ritmo del alma boyacense, y cada año se celebra en Paipa el Concurso Nacional que reúne a los mejores intérpretes de este baile tradicional. Con acordeón, tiple y guitarra, las parejas giran y zapatean al compás de la música campesina. Es un evento que mantiene viva una tradición musical que define la identidad cultural de la región andina colombiana."
                },
                {
                  nombre: "Festival del Sol y el Acero",
                  imagen: "/duitama-boyaca.webp",
                  emoji: "☀️",
                  descripcion: "Sogamoso, la ciudad del sol, celebra cada año su herencia Muisca con el Festival del Sol y el Acero. Esta festividad combina música, danzas folclóricas, muestras artesanales y eventos deportivos. Es un homenaje al Templo del Sol que existió en tiempos precolombinos y a la tradición siderúrgica que marcó el desarrollo industrial de la región. Un encuentro perfecto entre historia ancestral y modernidad."
                },
                {
                  nombre: "Festival de la Virgen de Chiquinquirá",
                  imagen: "/Mongui-Boyaca.jpg",
                  emoji: "🙏",
                  descripcion: "Cada 9 de julio, miles de peregrinos llegan a Chiquinquirá para venerar a la Virgen del mismo nombre, patrona de Colombia. La basílica se llena de devotos que vienen a agradecer milagros y pedir bendiciones. Las celebraciones incluyen procesiones, misas, música religiosa y una feria artesanal que transforma el municipio en un centro de fe y tradición. Es uno de los eventos religiosos más importantes del país."
                },
                {
                  nombre: "Festival Astronómico",
                  imagen: "/colombia-4884157_1920.jpg",
                  emoji: "🌟",
                  descripcion: "Villa de Leyva tiene uno de los cielos más limpios de Colombia, perfecto para la observación estelar. Cada año se celebra el Festival Astronómico donde científicos, astrónomos aficionados y curiosos se reúnen para observar las estrellas, planetas y constelaciones. Hay conferencias, talleres educativos y jornadas nocturnas de observación con telescopios profesionales. Es una experiencia única que conecta a las personas con el universo."
                },
                {
                  nombre: "Feria Ganadera y Agroindustrial",
                  imagen: "/paipa_optimized.jpg",
                  emoji: "🐄",
                  descripcion: "La Feria Ganadera es uno de los eventos más importantes del sector agropecuario en Boyacá. Durante varios días, campesinos y ganaderos presentan sus mejores ejemplares de ganado bovino, ovino y caprino. Hay exposiciones de maquinaria agrícola, productos lácteos artesanales y gastronomía campesina. Es un encuentro que celebra la tradición ganadera y agrícola que ha sido motor económico de la región por siglos."
                },
                {
                  nombre: "Festival del Campesino",
                  imagen: "/Artesanal.jpeg",
                  emoji: "👨‍🌾",
                  descripcion: "Un homenaje a los hombres y mujeres del campo que con su trabajo alimentan a Boyacá y Colombia. El Festival del Campesino incluye muestras gastronómicas, concursos de productos agrícolas, música carranguera y presentaciones de danzas folclóricas. Es una celebración de la vida rural, las costumbres campesinas y el orgullo de trabajar la tierra. Los agricultores comparten sus cosechas, recetas tradicionales y la sabiduría ancestral del campo boyacense."
                },
                {
                  nombre: "Encuentro de Bandas Musicales",
                  imagen: "/Boyaca_.jpg",
                  emoji: "🎺",
                  descripcion: "Las bandas municipales de Boyacá se reúnen en un colorido encuentro musical que llena las calles de ritmo y alegría. Desde bambucos hasta marchas, pasando por pasillos y danzas, las bandas demuestran su talento en un evento que preserva la tradición musical popular boyacense. Es una fiesta de sonidos que reúne a músicos de todas las edades y pueblos del departamento en una celebración de la cultura musical de la región."
                }
              ];

              const nextSlide = () => {
                setCarouselIndex((prev) => (prev + 1) % festividades.length);
              };

              const prevSlide = () => {
                setCarouselIndex((prev) => (prev - 1 + festividades.length) % festividades.length);
              };

              return (
                <>
                  <div className="overflow-hidden rounded-xl shadow-xl bg-white">
                    <div 
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
                    >
                      {festividades.map((fest, index) => (
                        <div key={index} className="min-w-full">
                          <div 
                            onClick={() => openCityModal(fest)}
                            className="cursor-pointer"
                          >
                            <div className="aspect-video bg-gray-200 relative overflow-hidden">
                              <img 
                                src={fest.imagen} 
                                alt={fest.nombre}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                                <span className="text-3xl mb-2">{fest.emoji}</span>
                                <h3 className="text-2xl font-[Playfair_Display] text-white font-bold mb-1">
                                  {fest.nombre}
                                </h3>
                                <p className="text-white/90 text-xs line-clamp-2">
                                  {fest.descripcion.substring(0, 120)}...
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Controles del carrusel */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-white/90 hover:bg-white text-[#4B6F44] p-2 rounded-full shadow-lg transition-all hover:scale-110"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-white/90 hover:bg-white text-[#4B6F44] p-2 rounded-full shadow-lg transition-all hover:scale-110"
                  >
                    <ChevronRight size={24} />
                  </button>

                  {/* Indicadores */}
                  <div className="flex justify-center gap-1.5 mt-4">
                    {festividades.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCarouselIndex(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          index === carouselIndex 
                            ? 'bg-[#4B6F44] w-6' 
                            : 'bg-gray-300 w-1.5 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Nuestra Misión */}
      <section id="cultura" className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-[#D4A017]/20 to-[#A65F3E]/20 rounded-3xl p-8 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-[#4B6F44] text-white p-4 rounded-full">
              <Heart size={40} />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-[Playfair_Display] text-[#1A3D6D] mb-6">
            Nuestra Misión
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Conectar a los colombianos en España con sus raíces, y compartir con el mundo 
            la riqueza cultural de Boyacá. Cada producto que vendemos es un abrazo desde 
            Colombia, un pedacito de tierra boyacense que viaja miles de kilómetros para 
            llegar a tu hogar.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-[#4B6F44] font-semibold">💚 Tradición</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-[#4B6F44] font-semibold">🌎 Conexión</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-[#4B6F44] font-semibold">✨ Calidad</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md">
              <span className="text-[#4B6F44] font-semibold">❤️ Nostalgia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Llamado a la Acción */}
      <section className="bg-[#4B6F44] text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <Globe size={48} className="mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-[Playfair_Display] mb-6">
            ¿Listo para llevar Boyacá a tu hogar?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Explora nuestra colección de artesanías auténticas y vive la experiencia 
            de tener un pedacito de Colombia contigo.
          </p>
          <a 
            href="/productos"
            className="inline-block bg-white text-[#4B6F44] px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-[#D4A017] hover:text-white transition-all shadow-xl hover:scale-105 transform"
          >
            Ver Productos
          </a>
        </div>
      </section>

      {/* Modal Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          {/* Overlay verde */}
          <div className="absolute inset-0 bg-[#4B6F44]/20 backdrop-blur-sm"></div>
          
          {/* Contenido del Modal */}
          <div 
            className="relative z-10 max-w-4xl w-full my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              onClick={closeModal}
              className="absolute -top-4 md:-top-12 right-0 text-white hover:text-[#D4A017] transition-colors z-20"
              aria-label="Cerrar"
            >
              <X size={36} />
            </button>

            {/* Botones de Navegación */}
            <button
              onClick={prevImage}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-20"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} className="md:w-8 md:h-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full backdrop-blur-sm transition-all hover:scale-110 z-20"
              aria-label="Siguiente"
            >
              <ChevronRight size={24} className="md:w-8 md:h-8" />
            </button>

            {/* Imagen */}
            <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[50vh] md:max-h-[60vh] object-contain bg-gray-100"
                onError={(e) => {
                  e.target.src = '';
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="w-full h-64 md:h-96 flex items-center justify-center bg-gradient-to-br from-[#4B6F44] to-[#3a5835]">
                      <div class="text-center text-white p-6">
                        <div class="text-4xl md:text-6xl mb-4">📷</div>
                        <div class="text-xl md:text-2xl font-semibold mb-2">${selectedImage.title}</div>
                        <div class="text-xs md:text-sm opacity-80">${selectedImage.alt}</div>
                      </div>
                    </div>
                  `;
                }}
              />
              {/* Información de la imagen */}
              <div className="bg-gradient-to-r from-[#4B6F44] to-[#3a5835] text-white p-4 md:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <span className="inline-block bg-white/20 px-2 md:px-3 py-1 rounded-full text-xs font-semibold mb-2">
                      {selectedImage.category}
                    </span>
                    <h3 className="text-lg md:text-2xl font-[Playfair_Display] font-bold mb-1 truncate">
                      {selectedImage.title}
                    </h3>
                    <p className="text-xs md:text-sm opacity-90 line-clamp-2">{selectedImage.alt}</p>
                  </div>
                  <div className="text-xs md:text-sm opacity-75 whitespace-nowrap">
                    {currentIndex + 1} / {fotosGaleria.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Indicador de teclas - solo desktop */}
            <div className="hidden md:block text-center mt-4 text-white/70 text-sm">
              <p>← → para navegar | ESC para cerrar</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal para Ciudades */}
      {modalCity && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeCityModal}
        >
          {/* Overlay verde */}
          <div className="absolute inset-0 bg-[#4B6F44]/20 backdrop-blur-sm"></div>
          
          {/* Contenido del Modal */}
          <div 
            className="relative z-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar */}
            <button
              onClick={closeCityModal}
              className="absolute -top-3 -right-3 md:top-2 md:right-2 bg-white text-[#4B6F44] hover:bg-[#D4A017] hover:text-white p-2 rounded-full shadow-lg transition-all z-20"
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>

            {/* Card con layout horizontal */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Imagen */}
                <div className="relative h-64 md:h-full">
                  <img
                    src={modalCity.imagen}
                    alt={modalCity.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Información */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-[Playfair_Display] text-[#1A3D6D] mb-3">
                    {modalCity.nombre}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {modalCity.descripcion}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
