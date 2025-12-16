import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`min-h-screen flex items-center justify-center section-padding pt-32 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container-narrow text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter mb-8 text-foreground">
          Santiago Abia Merino
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Estudiante de Sistemas Microinformáticos y Redes, con conocimientos en configuración de redes, mantenimiento de hardware, administración de sistemas y soporte técnico. Proactivo, con rápida capacidad de aprendizaje y buena adaptación a entornos tecnológicos y de trabajo en equipo.
        </p>
        <div className="mt-12">
          <a
            href="#cv"
            className="inline-block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;