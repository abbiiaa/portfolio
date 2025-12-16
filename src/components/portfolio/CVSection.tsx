import { ArrowUp } from 'lucide-react';
import DownloadButton from './DownloadButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CVSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const experiencia = [
    {
      rol: 'Técnico informático en prácticas',
      empresa: 'Colegio San Bernardo, Madrid',
      periodo: '2025',
    },
    {
      rol: 'Técnico en Salvamento y Socorrismo',
      empresa: 'Class Comunity, Madrid',
      periodo: '06/2025 – 09/2025',
    },
  ];

  const formacion = [
    {
      titulo: 'Técnico en Sistemas Microinformáticos y Redes',
      centro: 'Prometeo by thePower, Madrid',
      periodo: '09/2024 – Actualidad',
    },
    {
      titulo: 'Curso de Socorrismo y Primeros Auxilios',
      centro: 'Aguanorte, Madrid',
      periodo: '03/2024 – Finalizado',
    },
    {
      titulo: 'Educación Secundaria Obligatoria',
      centro: 'Colegio Arzobispal Seminario Menor de Madrid',
      periodo: '2021 – 2024',
    },
  ];

  const habilidades = [
    'Virtualización (VirtualBox)',
    'Redes (Cisco Packet Tracer)',
    'Linux / Windows',
    'Seguridad en sistemas',
    'Montaje de equipos',
    'Microsoft Office',
  ];

  const softSkills = [
    'Pensamiento crítico',
    'Trabajo en equipo',
    'Comunicación efectiva',
    'Gestión del tiempo',
  ];

  return (
    <section 
      id="cv" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding border-t border-border transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-baseline justify-between mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter">
            <span className="text-gold">Currículum</span>
          </h2>
          <DownloadButton 
            href="/cv-santiago-abia.pdf" 
            label="Descargar CV"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Columna izquierda */}
          <div className="space-y-12">
            {/* Experiencia */}
            <div>
              <h3 className="text-sm font-mono text-gold/70 mb-6 uppercase tracking-wide">
                Experiencia
              </h3>
              <div className="space-y-6">
                {experiencia.map((exp, i) => (
                  <div key={i} className="group border-l-2 border-gold/20 pl-4 hover:border-gold/50 transition-colors duration-300">
                    <p className="font-medium">{exp.rol}</p>
                    <p className="text-sm text-muted-foreground mt-1">{exp.empresa}</p>
                    <p className="text-xs font-mono text-muted-foreground mt-2">{exp.periodo}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Formación */}
            <div>
              <h3 className="text-sm font-mono text-gold/70 mb-6 uppercase tracking-wide">
                Formación
              </h3>
              <div className="space-y-6">
                {formacion.map((form, i) => (
                  <div key={i} className="border-l-2 border-gold/20 pl-4 hover:border-gold/50 transition-colors duration-300">
                    <p className="font-medium">{form.titulo}</p>
                    <p className="text-sm text-muted-foreground mt-1">{form.centro}</p>
                    <p className="text-xs font-mono text-muted-foreground mt-2">{form.periodo}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="space-y-12">
            {/* Habilidades técnicas */}
            <div>
              <h3 className="text-sm font-mono text-gold/70 mb-6 uppercase tracking-wide">
                Habilidades Técnicas
              </h3>
              <div className="flex flex-wrap gap-2">
                {habilidades.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1.5 bg-gold/10 text-foreground border border-gold/20 hover:border-gold/40 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-sm font-mono text-gold/70 mb-6 uppercase tracking-wide">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1.5 border border-gold/30 hover:border-gold/50 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Idiomas */}
            <div>
              <h3 className="text-sm font-mono text-gold/70 mb-6 uppercase tracking-wide">
                Idiomas
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Español</span>
                  <span className="text-gold/70">Nativo</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Inglés</span>
                  <span className="text-gold/70">Medio</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to top */}
        <div className="flex justify-center mt-16">
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-gold/70 hover:text-gold transition-colors duration-300"
          >
            <ArrowUp className="w-4 h-4" />
            Volver al inicio
          </a>
        </div>
      </div>
    </section>
  );
};

export default CVSection;