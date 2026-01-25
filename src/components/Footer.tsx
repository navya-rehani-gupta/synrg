const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <div className="text-sm font-semibold mb-1">
            <span className="text-primary">sy</span>NRG<span className="text-primary">y</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Navya Rehani Gupta
          </p>
        </div>

        <a 
          href="https://www.linkedin.com/in/navyarehani/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
        >
          More about me here →
        </a>
      </div>
    </footer>
  );
};

export default Footer;
