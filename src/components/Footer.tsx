const Footer = () => {
  return (
    <footer className="bg-qari-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center animate-fade-in-up mb-4 md:mb-0">
            <img src="/qari-logo.png" alt="Qari Logo" className="h-10 w-auto" />
            <span className="text-xs font-semibold text-qari-secondary tracking-wide mt-1">
              MOVE BETTER
            </span>
          </div>

          {/* Copyright */}
          <p className="text-white/60 text-sm animate-fade-in-up animate-stagger-1">
            © {new Date().getFullYear()} Qari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
