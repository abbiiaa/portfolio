const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="container-wide flex items-center justify-center h-14">
        <a href="#" className="font-mono text-sm font-medium tracking-tight text-gold hover:text-gold-light transition-colors duration-200">
          SAM
        </a>
      </nav>
    </header>
  );
};

export default Header;