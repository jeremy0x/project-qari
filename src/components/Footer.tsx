
const Footer = () => {
  return (
    <footer className="bg-qari-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Tagline */}
          <div className="animate-fade-in-up mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-white">Qari</div>
              <div className="text-xs font-medium text-qari-secondary tracking-wider">MOVE BETTER</div>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-white/60 text-sm animate-fade-in-up animate-stagger-1">
            © 2024 Qari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
