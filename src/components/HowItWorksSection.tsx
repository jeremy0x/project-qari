import { motion } from "framer-motion";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Book Your Ride",
      description: "Open app, set destination, request ride",
      icon: "📱",
    },
    {
      number: "2",
      title: "Get Matched",
      description: "Connect with nearby verified driver",
      icon: "🤝",
    },
    {
      number: "3",
      title: "Enjoy the Journey",
      description: "Ride in comfort, pay securely",
      icon: "🎯",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, filter: "blur(16px)", y: 64 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="py-20 bg-white"
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
            Simple. Fast. Reliable.
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-qari-secondary/30"></div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center relative"
                  initial={{ opacity: 0, filter: "blur(16px)", y: 32 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.2 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  {/* Step number circle */}
                  <div className="relative z-10 mx-auto w-16 h-16 bg-qari-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl mb-4">{step.icon}</div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-qari-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorksSection;
