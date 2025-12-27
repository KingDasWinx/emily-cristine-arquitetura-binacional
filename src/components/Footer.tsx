const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-padding-sm bg-foreground">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <p className="font-display text-xl text-background font-medium">
              Emily Cristine
            </p>
            <p className="text-background/60 text-sm">
              Arquitetura de Alto Padrão
            </p>
          </div>

          {/* Copyright */}
          <p className="text-background/50 text-sm">
            © {currentYear} Emily Cristine. Todos os direitos reservados.
          </p>

          {/* Location */}
          <p className="text-background/60 text-sm text-center md:text-right">
            Oeste do Paraná, Brasil & Paraguai
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
