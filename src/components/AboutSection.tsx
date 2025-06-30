import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, filter: "blur(16px)", y: 64 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="py-20 bg-gradient-to-b from-qari-primary via-[#1a1a2e] to-qari-primary"
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
            Moving Forward, Moving Better
          </motion.h2>

          <motion.div
            className="text-sm md:text-base text-white/90 leading-relaxed space-y-6"
            initial={{ opacity: 0, filter: "blur(16px)", y: 32 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
          >
            <p>
              At Qari, we believe moving around should feel better — not
              stressful, unsafe, or overpriced. We're solving the frustrations
              of traditional ride-hailing apps by offering fast pickup, clean
              vehicles, and better pay for drivers.
            </p>

            <p>
              With our rider rewards, no high surge pricing, and a focus on
              premium service, Qari is designed for a new generation of smart
              urban movers.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 w-fit mx-auto"
            initial={{ opacity: 0, filter: "blur(16px)", y: 32 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" }}
          >
            <a
              href="https://forms.gle/zSEeMomP4jhNCaGC8"
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-fit mx-auto"
            >
              <Button
                size="lg"
                variant="glass"
                rightIcon={<ArrowRight size={18} />}
                className="mx-auto w-fit"
              >
                Join Our Mission
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
