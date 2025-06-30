import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Mouse } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const carRef = useRef(null);
  const controls = useAnimation();
  const [isBobbing, setIsBobbing] = useState(false);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#f8f8fa] via-white to-[#f8f8fa] font-dm px-4 overflow-hidden"
    >
      {/* Animated Blurs (now secondary color) */}
      <div className="pointer-events-none select-none">
        <div className="absolute top-[-80px] left-[-60px] w-72 h-72 bg-qari-secondary/10 blur-3xl rounded-full animate-blob1 z-0" />
        <div className="absolute top-[40%] right-[-100px] w-80 h-80 bg-qari-secondary/5 blur-[100px] rounded-full animate-blob2 z-0" />
        <div className="absolute bottom-[-100px] left-[30%] w-96 h-96 bg-qari-secondary/10 blur-[120px] rounded-full animate-blob3 z-0" />
        <div className="absolute bottom-[-60px] right-[-60px] w-60 h-60 bg-qari-secondary/15 blur-2xl rounded-full animate-blob4 z-0" />
      </div>

      <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center pt-24 pb-8 z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-qari-primary mb-6 leading-tight"
          initial={{ opacity: 0, filter: "blur(16px)", y: 32 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              transition: { duration: 1, delay: 0.1, ease: "easeOut" },
            },
          }}
        >
          Move Better with Qari
        </motion.h1>
        <motion.p
          className="text-sm md:text-base text-gray-700 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, filter: "blur(16px)", y: 32 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              transition: { duration: 1, delay: 0.3, ease: "easeOut" },
            },
          }}
        >
          A smarter ride-hailing platform for clean vehicles, fair pricing, and
          better driver treatment. Join our waitlist of 2,000+ riders!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, filter: "blur(16px)", y: 32 }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              transition: { duration: 1, delay: 0.5, ease: "easeOut" },
            },
          }}
        >
          <a
            href="https://forms.gle/zSEeMomP4jhNCaGC8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="glass"
              rightIcon={<ArrowRight size={20} />}
              className="text-base md:text-lg"
            >
              Join the Waitlist
            </Button>
          </a>
        </motion.div>
      </div>
      {/* Car Image with Animation */}
      <motion.div
        ref={carRef}
        initial={{ opacity: 0, x: 120, scale: 0.95, filter: "blur(12px)" }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            duration: 3,
            delay: 2,
            ease: "easeInOut",
            type: "spring",
          },
        }}
        className="relative z-10 mx-auto w-full max-w-lg md:max-w-2xl pb-16"
      >
        <img
          src="/qari-car-transparent.png"
          alt="Qari Car"
          className="w-full h-auto select-none pointer-events-none"
          draggable={false}
        />
        {/* Secondary Color Glow/Shadow under car */}
        <motion.div
          className="absolute left-0 -translate-x-1/2 bottom-14 w-full h-8 md:h-12 rounded-full bg-qari-secondary/50 blur-2xl z-[-1]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
        />
      </motion.div>
      {/* Scroll Down Icon */}
      <div className="absolute bottom-0 sm:left-1/2 -translate-x-1/2 flex flex-col items-center z-20 animate-bounce duration-1000">
        <div className="rounded-full border border-gray-300 bg-white/70 backdrop-blur-md p-1.5 shadow-sm flex items-center justify-center">
          <Mouse size={14} className="text-qari-primary" />
        </div>
        <span className="mt-2 text-xs text-gray-600 font-medium">
          Scroll down
        </span>
      </div>
      {/* Large fade at the bottom for smooth transition */}
      <div className="absolute left-0 right-0 bottom-0 h-32 md:h-48 bg-gradient-to-b from-transparent to-[#f8f8fa] pointer-events-none z-10" />
    </section>
  );
};

export default HeroSection;
