
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-blur-reveal">
            <div className="text-2xl font-bold text-qari-primary">Qari</div>
            <div className="text-xs font-medium text-qari-secondary tracking-wider">MOVE BETTER</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-qari-primary hover:text-qari-secondary transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-qari-primary hover:text-qari-secondary transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-qari-primary hover:text-qari-secondary transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-qari-primary hover:text-qari-secondary transition-colors duration-300 font-medium"
            >
              Contact
            </button>
            <a
              href="https://forms.gle/zSEeMomP4jhNCaGC8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-qari-secondary text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300"
            >
              Join Waitlist
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-qari-primary hover:text-qari-secondary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t animate-fade-in-up">
            <nav className="flex flex-col py-4">
              <button
                onClick={() => scrollToSection('home')}
                className="px-4 py-3 text-left text-qari-primary hover:bg-gray-50 hover:text-qari-secondary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-4 py-3 text-left text-qari-primary hover:bg-gray-50 hover:text-qari-secondary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="px-4 py-3 text-left text-qari-primary hover:bg-gray-50 hover:text-qari-secondary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-3 text-left text-qari-primary hover:bg-gray-50 hover:text-qari-secondary transition-colors"
              >
                Contact
              </button>
              <div className="px-4 py-3">
                <a
                  href="https://forms.gle/zSEeMomP4jhNCaGC8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-qari-secondary text-white px-6 py-2 rounded-full font-medium text-center hover:bg-opacity-90 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Join Waitlist
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
