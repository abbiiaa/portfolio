import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate in after a short delay for a smooth entrance
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { label: 'CV', href: '#cv' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Personal', href: '#personal' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <section 
      className={`min-h-screen flex items-center justify-center section-padding pt-20 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container-narrow text-center">
        <p className="text-gold text-sm font-mono tracking-widest mb-6 uppercase">
          Portfolio
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter mb-8 text-foreground">
          Santiago Abia Merino
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
          Estudiante de Sistemas Microinformáticos y Redes, con conocimientos en configuración de redes, mantenimiento de hardware, administración de sistemas y soporte técnico. Proactivo, con rápida capacidad de aprendizaje y buena adaptación a entornos tecnológicos y de trabajo en equipo.
        </p>
        
        {/* Premium Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-premium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-center">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold/50 to-gold/20" />
        </div>
      </div>
    </section>
  );
};

export default Hero;