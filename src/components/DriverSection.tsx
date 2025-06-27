
import { useState, useEffect, useRef } from 'react';

const DriverSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    "Low commission structure",
    "24/7 WhatsApp support", 
    "Weekly payments",
    "Vehicle maintenance support"
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-qari-primary to-qari-primary/90"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-8 ${isVisible ? 'animate-blur-reveal' : 'opacity-0'}`}>
            Drive with Qari
          </h2>
          
          <p className={`text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto ${isVisible ? 'animate-blur-reveal animate-stagger-1' : 'opacity-0'}`}>
            Join our growing network of professional drivers. Enjoy low commission rates, guaranteed earnings, and dedicated support.
          </p>

          <div className={`grid md:grid-cols-2 gap-6 mb-12 ${isVisible ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0'}`}>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start text-white/90">
                <div className="w-2 h-2 bg-qari-secondary rounded-full mr-3"></div>
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          <div className={`${isVisible ? 'animate-scale-in animate-stagger-3' : 'opacity-0'}`}>
            <a
              href="https://forms.gle/zSEeMomP4jhNCaGC8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-qari-secondary text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Become a Driver Partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverSection;
