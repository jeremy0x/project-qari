
import { useState, useEffect, useRef } from 'react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: "🚘",
      title: "Premium Ride-Hailing",
      description: "Instant, clean, and secure rides"
    },
    {
      icon: "🎁",
      title: "Rider Rewards",
      description: "Earn exclusive rewards on every ride"
    },
    {
      icon: "💸",
      title: "Low Driver Commission",
      description: "More earnings for our driver partners"
    },
    {
      icon: "🔒",
      title: "Fixed Transparent Pricing",
      description: "No surge pricing, no hidden fees"
    },
    {
      icon: "📱",
      title: "Active WhatsApp Support",
      description: "Dedicated support groups for drivers"
    }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-qari-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-qari-primary mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto lg:[&>*:nth-child(4)]:col-start-1 lg:[&>*:nth-child(4)]:col-end-2 lg:[&>*:nth-child(5)]:col-start-3 lg:[&>*:nth-child(5)]:col-end-4 lg:[&>*:nth-child(4)]:mx-auto lg:[&>*:nth-child(5)]:mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 cursor-pointer ${
                isVisible ? `animate-scale-in animate-stagger-${index + 1}` : 'opacity-0'
              }`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="text-center">
                <div className="text-4xl mb-6 bg-qari-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-qari-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
