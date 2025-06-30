import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: "🚘",
      title: "Premium Ride-Hailing",
      description: "Instant, clean, and secure rides",
    },
    {
      icon: "🎁",
      title: "Rider Rewards",
      description: "Earn exclusive rewards on every ride",
    },
    {
      icon: "💸",
      title: "Low Driver Commission",
      description: "More earnings for our driver partners",
    },
    {
      icon: "🔒",
      title: "Fixed Transparent Pricing",
      description: "No surge pricing, no hidden fees",
    },
    {
      icon: "📱",
      title: "Active WhatsApp Support",
      description: "Dedicated support groups for drivers",
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
      id="services"
      initial={{ opacity: 0, filter: "blur(16px)", y: 64 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="py-20 bg-gradient-to-b from-[#f6f7fa] via-white to-[#f6f7fa]"
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
            Our Services
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 hover:shadow-xl w-full sm:w-80"
              initial={{ opacity: 0, filter: "blur(16px)", y: 32 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.75,
                delay: 0.2 + index * 0.1,
                ease: "easeOut",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="text-center">
                <div className="text-4xl mb-6 bg-qari-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-qari-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
