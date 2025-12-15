const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container-narrow text-center">
        <p className="font-mono text-sm text-muted-foreground mb-6">
          Técnico en Sistemas Microinformáticos y Redes
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter mb-8">
          Santiago Abia Merino
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Configuración de redes, administración de sistemas, mantenimiento de hardware y soporte técnico.
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