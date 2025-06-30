import { motion } from "framer-motion";

const DriverSection = () => {
  const benefits = [
    "Low commission structure",
    "24/7 WhatsApp support",
    "Weekly payments",
    "Vehicle maintenance support",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, filter: "blur(16px)", y: 64 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="py-20 bg-gradient-to-r from-qari-primary to-qari-primary/90"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, filter: "blur(16px)", y: 32 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
          >
            Drive with Qari
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, filter: "blur(16px)", y: 32 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
          >
            Join our growing network of professional drivers. Enjoy low
            commission rates, guaranteed earnings, and dedicated support.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-12"
            initial={{ opacity: 0, filter: "blur(16px)", y: 32 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center justify-center md:justify-start text-white/90"
              >
                <div className="w-2 h-2 bg-qari-secondary rounded-full mr-3"></div>
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className=""
            initial={{ opacity: 0, filter: "blur(16px)", y: 32 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75, delay: 0.4, ease: "easeOut" }}
          >
            <a
              href="https://forms.gle/zSEeMomP4jhNCaGC8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-qari-secondary text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Become a Driver Partner
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default DriverSection;
