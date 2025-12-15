import { ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const proyectos = [
    {
      numero: '01',
      titulo: 'Administración Remota de Servidores Web en AWS',
      descripcion:
        'Configuración y administración de servidores EC2 en Amazon Web Services mediante conexión SSH. Incluye gestión de claves PEM, configuración de Security Groups, instalación de servicios web y buenas prácticas de seguridad en la nube.',
      tecnologias: ['AWS EC2', 'SSH', 'Ubuntu Server', 'VirtualBox', 'WSL2'],
      rol: 'Administrador de sistemas',
    },
    {
      numero: '02',
      titulo: 'Asegurar Servidor SSH con Fail2ban',
      descripcion:
        'Implementación de fail2ban para proteger servicios SSH contra ataques de fuerza bruta. Configuración de reglas de bloqueo automático, monitorización de logs de autenticación y gestión de IPs maliciosas.',
      tecnologias: ['Fail2ban', 'Linux', 'SSH', 'iptables', 'Logs'],
      rol: 'Administrador de seguridad',
    },
    {
      numero: '03',
      titulo: 'Proyecto de Redes UT6',
      descripcion:
        'Proyecto integral de configuración de redes incluyendo diseño de topología, configuración de dispositivos de red, segmentación con VLANs y documentación técnica del proceso.',
      tecnologias: ['Cisco Packet Tracer', 'Networking', 'VLANs', 'Routing'],
      rol: 'Técnico de redes',
    },
  ];

  return (
    <section id="proyectos" className="section-padding border-t border-border">
      <div className="container-wide">
        <div className="mb-16">
          <span className="tag">02</span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mt-2">
            Proyectos Profesionales
          </h2>
        </div>

        <div className="space-y-16 md:space-y-24">
          {proyectos.map((proyecto) => (
            <article key={proyecto.numero} className="group">
              <div className="grid md:grid-cols-12 gap-6 md:gap-8">
                <div className="md:col-span-1">
                  <span className="font-mono text-sm text-muted-foreground">
                    {proyecto.numero}
                  </span>
                </div>

                <div className="md:col-span-7">
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
                    {proyecto.titulo}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {proyecto.descripcion}
                  </p>
                </div>

                <div className="md:col-span-4 space-y-6">
                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-2">
                      Rol
                    </p>
                    <p className="text-sm">{proyecto.rol}</p>
                  </div>

                  <div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide mb-2">
                      Tecnologías
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {proyecto.tecnologias.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono px-2 py-1 bg-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    Ver documentación
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="divider mt-16 md:mt-24" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;