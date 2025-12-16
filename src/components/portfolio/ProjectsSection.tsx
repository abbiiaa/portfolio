import { ArrowUp } from 'lucide-react';
import DownloadButton from './DownloadButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const proyectos = [
    {
      titulo: 'Administración Remota de Servidores Web en AWS',
      descripcion:
        'Configuración y administración de servidores EC2 en Amazon Web Services mediante conexión SSH. Incluye gestión de claves PEM, configuración de Security Groups, instalación de servicios web y buenas prácticas de seguridad en la nube.',
      tecnologias: ['AWS EC2', 'SSH', 'Ubuntu Server', 'VirtualBox', 'WSL2'],
      rol: 'Administrador de sistemas',
      documento: '/docs/proyecto-aws.pdf',
    },
    {
      titulo: 'Asegurar Servidor SSH con Fail2ban',
      descripcion:
        'Implementación de fail2ban para proteger servicios SSH contra ataques de fuerza bruta. Configuración de reglas de bloqueo automático, monitorización de logs de autenticación y gestión de IPs maliciosas.',
      tecnologias: ['Fail2ban', 'Linux', 'SSH', 'iptables', 'Logs'],
      rol: 'Administrador de seguridad',
      documento: '/docs/proyecto-fail2ban.pdf',
    },
    {
      titulo: 'Proyecto de Redes UT6',
      descripcion:
        'Proyecto integral de configuración de redes incluyendo diseño de topología, configuración de dispositivos de red, segmentación con VLANs y documentación técnica del proceso.',
      tecnologias: ['Cisco Packet Tracer', 'Networking', 'VLANs', 'Routing'],
      rol: 'Técnico de redes',
      documento: '/docs/proyecto-redes-ut6.pdf',
    },
  ];

  return (
    <section 
      id="proyectos" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding border-t border-border transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container-wide">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter">
            <span className="text-gold">Proyectos Profesionales</span>
          </h2>
        </div>

        <div className="space-y-16 md:space-y-24">
          {proyectos.map((proyecto, index) => (
            <article key={index} className="group">
              <div className="grid md:grid-cols-12 gap-6 md:gap-8">
                <div className="md:col-span-8">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4 group-hover:text-gold transition-colors duration-300">
                    {proyecto.titulo}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {proyecto.descripcion}
                  </p>
                </div>

                <div className="md:col-span-4 space-y-6">
                  <div>
                    <p className="text-xs font-mono text-gold/70 uppercase tracking-wide mb-2">
                      Rol
                    </p>
                    <p className="text-sm">{proyecto.rol}</p>
                  </div>

                  <div>
                    <p className="text-xs font-mono text-gold/70 uppercase tracking-wide mb-2">
                      Tecnologías
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {proyecto.tecnologias.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono px-2 py-1 bg-gold/10 border border-gold/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <DownloadButton
                    href={proyecto.documento}
                    label="Ver documentación"
                    variant="ghost"
                  />
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mt-16 md:mt-24" />
            </article>
          ))}
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

export default ProjectsSection;