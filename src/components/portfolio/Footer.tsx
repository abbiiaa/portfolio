const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="font-mono">
            © {new Date().getFullYear()} Santiago Abia Merino
          </p>
          <p>
            Técnico en Sistemas Microinformáticos y Redes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;