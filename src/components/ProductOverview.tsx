
import { useState, useEffect, useRef } from 'react';

const ProductOverview = () => {
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

  const features = [
    {
      title: "Premium Experience",
      description: "Clean vehicles, professional drivers",
      icon: "🚗"
    },
    {
      title: "Fair Pricing",
      description: "No surge pricing, transparent costs",
      icon: "💰"
    },
    {
      title: "Fast & Reliable",
      description: "Quick pickup times, dependable service",
      icon: "⚡"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-qari-primary mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Why Choose Qari?
          </h2>
          <p className={`text-lg text-gray-600 max-w-4xl mx-auto text-balance ${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
            Qari is a premium ride-hailing platform built for convenience, class, and speed. We connect riders with quality drivers in clean, comfortable vehicles at fair, fixed prices — all powered by a tech-driven, low-commission model that benefits both drivers and riders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-2xl bg-gray-50 hover:bg-qari-secondary/5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg ${
                isVisible ? `animate-scale-in animate-stagger-${index + 2}` : 'opacity-0'
              }`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-qari-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
