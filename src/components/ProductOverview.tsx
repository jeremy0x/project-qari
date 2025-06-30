import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

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
      icon: "🚗",
    },
    {
      title: "Fair Pricing",
      description: "No surge pricing, transparent costs",
      icon: "💰",
    },
    {
      title: "Fast & Reliable",
      description: "Quick pickup times, dependable service",
      icon: "⚡",
    },
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
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <motion.section
      initial={{ opacity: 0, filter: "blur(16px)", y: 64 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="py-20 bg-gradient-to-b from-white via-[#f8f8fa] to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-qari-primary mb-6"
            initial={{ opacity: 0, filter: "blur(16px)", y: 32 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
          >
            Why Choose Qari?
          </motion.h2>
          <motion.p
            className="text-sm text-gray-600 max-w-4xl mx-auto text-balance"
            initial={{ opacity: 0, filter: "blur(16px)", y: 32 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
          >
            Qari is a premium ride-hailing platform built for convenience,
            class, and speed. We connect riders with quality drivers in clean,
            comfortable vehicles at fair, fixed prices — all powered by a
            tech-driven, low-commission model that benefits both drivers and
            riders.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:shadow-xl"
              initial={{ opacity: 0, filter: "blur(16px)", y: 32 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.75,
                delay: 0.3 + index * 0.1,
                ease: "easeOut",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="text-center">
                <div className="text-4xl mb-6 bg-qari-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold text-qari-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProductOverview;
