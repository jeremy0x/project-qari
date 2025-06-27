
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
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(12, 20, 33, 0.9), rgba(12, 20, 33, 0.8)), url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
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
              className="inline-block bg-qari-secondary text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Join Our Mission
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
