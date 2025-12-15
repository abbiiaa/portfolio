import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CVSection = () => {
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
    <section id="cv" className="section-padding border-t border-border">
      <div className="container-wide">
        <div className="flex items-baseline justify-between mb-16">
          <div>
            <span className="tag">01</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mt-2">
              Currículum
            </h2>
          </div>
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <a href="/cv-santiago-abia.pdf" download>
              <Download className="w-4 h-4" />
              Descargar CV
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Columna izquierda */}
          <div className="space-y-12">
            {/* Experiencia */}
            <div>
              <h3 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wide">
                Experiencia
              </h3>
              <div className="space-y-6">
                {experiencia.map((exp, i) => (
                  <div key={i} className="group">
                    <p className="font-medium">{exp.rol}</p>
                    <p className="text-sm text-muted-foreground mt-1">{exp.empresa}</p>
                    <p className="text-xs font-mono text-muted-foreground mt-2">{exp.periodo}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Formación */}
            <div>
              <h3 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wide">
                Formación
              </h3>
              <div className="space-y-6">
                {formacion.map((form, i) => (
                  <div key={i}>
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
              <h3 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wide">
                Habilidades Técnicas
              </h3>
              <div className="flex flex-wrap gap-2">
                {habilidades.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1.5 bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wide">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1.5 border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Idiomas */}
            <div>
              <h3 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wide">
                Idiomas
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Español</span>
                  <span className="text-muted-foreground">Nativo</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Inglés</span>
                  <span className="text-muted-foreground">Medio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;