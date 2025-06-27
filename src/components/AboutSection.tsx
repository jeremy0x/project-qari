
import { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-qari-primary"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-8 ${isVisible ? 'animate-blur-reveal' : 'opacity-0'}`}>
            Moving Forward, Moving Better
          </h2>
          
          <div className={`text-lg md:text-xl text-white/90 leading-relaxed space-y-6 ${isVisible ? 'animate-blur-reveal animate-stagger-1' : 'opacity-0'}`}>
            <p>
              At Qari, we believe moving around should feel better — not stressful, unsafe, or overpriced. We're solving the frustrations of traditional ride-hailing apps by offering fast pickup, clean vehicles, and better pay for drivers.
            </p>
            
            <p>
              With our rider rewards, no high surge pricing, and a focus on premium service, Qari is designed for a new generation of smart urban movers.
            </p>
          </div>

          <div className={`mt-12 ${isVisible ? 'animate-scale-in animate-stagger-2' : 'opacity-0'}`}>
            <a
              href="https://forms.gle/zSEeMomP4jhNCaGC8"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-qari-secondary to-qari-secondary/90 text-white px-10 py-4 rounded-full font-semibold overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <span className="relative z-10">Join Our Mission</span>
              <div className="absolute inset-0 bg-gradient-to-r from-qari-secondary/90 to-qari-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-qari-secondary to-qari-secondary/90 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
