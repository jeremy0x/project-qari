
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
      description: "Instant, clean, and secure rides",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=720&h=280&fit=crop"
    },
    {
      icon: "🎁",
      title: "Rider Rewards",
      description: "Earn exclusive rewards on every ride",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=720&h=280&fit=crop"
    },
    {
      icon: "💸",
      title: "Low Driver Commission",
      description: "More earnings for our driver partners",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=720&h=280&fit=crop"
    },
    {
      icon: "🔒",
      title: "Fixed Transparent Pricing",
      description: "No surge pricing, no hidden fees",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=720&h=280&fit=crop"
    },
    {
      icon: "📱",
      title: "Active WhatsApp Support",
      description: "Dedicated support groups for drivers",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=720&h=280&fit=crop"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-qari-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-qari-primary mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ${
                isVisible ? `animate-scale-in animate-stagger-${index + 1}` : 'opacity-0'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-qari-primary/20"></div>
                <div className="absolute top-4 left-4 text-2xl bg-white/90 w-12 h-12 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-qari-primary mb-3">
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
