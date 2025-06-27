
const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' }
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-qari-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Logo and Tagline */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold text-white">Qari</div>
              <div className="text-xs font-medium text-qari-secondary tracking-wider">MOVE BETTER</div>
            </div>
            <p className="text-white/80 max-w-sm">
              A premium ride-hailing platform designed for clean vehicles, fair pricing, and better driver treatment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up animate-stagger-1">
            <h4 className="text-lg font-semibold mb-4 text-qari-secondary">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-qari-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up animate-stagger-2">
            <h4 className="text-lg font-semibold mb-4 text-qari-secondary">Get Started</h4>
            <div className="space-y-3">
              <p className="text-white/80">Ready to experience better rides?</p>
              <a
                href="https://forms.gle/zSEeMomP4jhNCaGC8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-qari-secondary text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Qari. All rights reserved.
            </p>
            
            {/* Social Media Placeholder */}
            <div className="flex space-x-4">
              <div className="text-white/60 text-sm">Follow us:</div>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-qari-secondary transition-colors">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-qari-secondary transition-colors">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-qari-secondary transition-colors">
                  <span className="text-xs">i</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
