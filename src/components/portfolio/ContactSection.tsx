import { Mail, Phone, Linkedin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const contactInfo = [
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+34 681 08 52 90',
      href: 'tel:+34681085290',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'abiamerinosantiago@gmail.com',
      href: 'mailto:abiamerinosantiago@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Santiago Abia Merino',
      href: 'https://www.linkedin.com/in/santiago-abia-merino',
    },
  ];

  return (
    <section 
      id="contacto" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-padding border-t border-border transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="tag">04</span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mt-2">
            Contacta conmigo
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Disponible para oportunidades profesionales y colaboraciones.
          </p>
        </div>

        <div className="space-y-8">
          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === 'LinkedIn' ? '_blank' : undefined}
              rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
              className="flex items-center justify-between py-6 border-b border-border group hover:border-foreground transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                <span className="text-sm font-mono text-muted-foreground uppercase tracking-wide">
                  {item.label}
                </span>
              </div>
              <span className="text-foreground">{item.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;