import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/info@qariworld.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          }),
        }
      );
      const data = await response.json();
      if (data.success === "true") {
        toast({
          title: "Message Sent!",
          description:
            "Thank you for your message. We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast({
          title: "Error",
          description:
            data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <motion.section
      id="contact"
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
            Get In Touch
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(16px)", y: 32 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-semibold text-qari-primary mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <a
                href="mailto:info@qariworld.com"
                className="flex items-center group hover:text-qari-secondary transition-colors text-sm"
              >
                <Mail className="mr-4 text-qari-secondary group-hover:scale-110 transition-transform" />
                <span className="text-sm">info@qariworld.com</span>
              </a>

              <div className="flex items-start group text-sm">
                <MapPin className="mr-4 text-qari-secondary mt-1 flex-shrink-0" />
                <span className="text-sm">
                  V8 Valley, Plot 8, The Providence Street,
                  <br />
                  Lekki Phase 1, Lagos
                </span>
              </div>

              <a
                href="tel:+2347072454198"
                className="flex items-center group hover:text-qari-secondary transition-colors text-sm"
              >
                <Phone className="mr-4 text-qari-secondary group-hover:scale-110 transition-transform" />
                <span className="text-sm">+234 707 245 4198</span>
              </a>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold text-qari-primary mb-4">
                Ready to get started?
              </h4>
              <Button
                asChild
                size="lg"
                rightIcon={<ArrowRight size={18} />}
                variant="glass"
                className="w-fit"
              >
                <a
                  href="https://forms.gle/zSEeMomP4jhNCaGC8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Our Waitlist
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(16px)", y: 32 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75, delay: 0.3, ease: "easeOut" }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-qari-primary mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-qari-secondary focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-qari-primary mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-qari-secondary focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-qari-primary mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-qari-secondary focus:border-transparent transition-all duration-300"
                  placeholder="+234 xxx xxx xxxx"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-qari-primary mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-qari-secondary focus:border-transparent transition-all duration-300 resize-none text-sm"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                rightIcon={<ArrowUpRight size={18} />}
                className="w-full"
                variant="glass"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
