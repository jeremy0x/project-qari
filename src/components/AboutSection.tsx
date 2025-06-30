import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, filter: "blur(16px)", y: 64 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="pt-20 pb-32 bg-gradient-to-b from-qari-primary via-[#1a1a2e] to-qari-primary"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
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
            className="text-sm md:text-base text-white/90 leading-relaxed space-y-6 max-w-4xl mx-auto"
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

          {/* Carousel of mockup images */}
          <div className="mt-16 flex flex-col items-center">
            <div className="relative w-full max-w-6xl">
              <Carousel opts={{ loop: true }}>
                <CarouselContent>
                  {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                    <CarouselItem
                      key={num}
                      className="flex justify-center basis-full md:basis-1/3"
                    >
                      <img
                        src={`/qari-phone-mockup-0${num}.jpg`}
                        alt={`Qari phone mockup ${num}`}
                        className="rounded-xl shadow-lg object-contain h-[35rem] w-auto bg-black"
                        draggable={false}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* Carousel Arrows at bottom center */}
                <div className="absolute left-1/2 -bottom-20 -translate-x-1/2 flex gap-0 z-10">
                  <CarouselPrevious className="opacity-60 hover:opacity-100 transition-opacity relative" />
                  <CarouselNext className="opacity-60 hover:opacity-100 transition-opacity relative" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
