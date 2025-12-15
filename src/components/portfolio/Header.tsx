const Header = () => {
  const navItems = [
    { label: 'CV', href: '#cv' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Personal', href: '#personal' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="container-wide flex items-center justify-between h-14">
        <a href="#" className="font-mono text-sm font-medium tracking-tight">
          SAM
        </a>
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;