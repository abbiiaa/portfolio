import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const PersonalSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      id="personal" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding border-t border-border bg-secondary/30 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container-wide">
        <div className="mb-16">
          <span className="tag">03</span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mt-2">
            Proyecto Personal
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-8">
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-8">
              Edición Audiovisual
            </h3>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Proyecto personal centrado en la edición audiovisual con un enfoque técnico 
                y narrativo. Desarrollo piezas optimizadas para redes sociales y formatos 
                digitales, cuidando el ritmo, la estructura del mensaje y la coherencia visual.
              </p>

              <p>
                Trabajo el proceso completo: selección de material, montaje, corrección 
                básica de color y adaptación a distintos objetivos y audiencias.
              </p>

              <p className="text-foreground font-medium">
                El objetivo no es solo editar, sino comunicar con intención y criterio, 
                mejorando el impacto del contenido final.
              </p>
            </div>

            <div className="mt-12">
              <Button variant="default" size="lg" className="gap-3" asChild>
                <a href="#contacto">
                  Ver trabajos de edición
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="space-y-8">
              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-3">
                  Enfoque
                </p>
                <ul className="space-y-2 text-sm">
                  <li>Narrativa visual</li>
                  <li>Ritmo y estructura</li>
                  <li>Coherencia estética</li>
                  <li>Optimización de formatos</li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-3">
                  Proceso
                </p>
                <ul className="space-y-2 text-sm">
                  <li>Selección de material</li>
                  <li>Montaje</li>
                  <li>Corrección de color</li>
                  <li>Adaptación multiplataforma</li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-3">
                  Plataformas
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Redes sociales</li>
                  <li>Formatos digitales</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;