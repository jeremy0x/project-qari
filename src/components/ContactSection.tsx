
import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-qari-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-qari-primary mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Get In Touch
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`${isVisible ? 'animate-fade-in-up animate-stagger-1' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold text-qari-primary mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <a 
                href="mailto:info@qariworld.com"
                className="flex items-center group hover:text-qari-secondary transition-colors"
              >
                <Mail className="mr-4 text-qari-secondary group-hover:scale-110 transition-transform" />
                <span className="text-lg">info@qariworld.com</span>
              </a>
              
              <div className="flex items-start group">
                <MapPin className="mr-4 text-qari-secondary mt-1 flex-shrink-0" />
                <span className="text-lg">
                  V8 Valley, Plot 8, The Providence Street,<br />
                  Lekki Phase 1, Lagos
                </span>
              </div>
              
              <a 
                href="tel:+2347072454198"
                className="flex items-center group hover:text-qari-secondary transition-colors"
              >
                <Phone className="mr-4 text-qari-secondary group-hover:scale-110 transition-transform" />
                <span className="text-lg">+234 707 245 4198</span>
              </a>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold text-qari-primary mb-4">Ready to get started?</h4>
              <a
                href="https://forms.gle/zSEeMomP4jhNCaGC8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-qari-secondary text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300"
              >
                Join Our Waitlist
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-in-up animate-stagger-2' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-qari-primary mb-2">
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
                  <label htmlFor="email" className="block text-sm font-medium text-qari-primary mb-2">
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
                <label htmlFor="phone" className="block text-sm font-medium text-qari-primary mb-2">
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
                <label htmlFor="message" className="block text-sm font-medium text-qari-primary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-qari-secondary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-qari-secondary hover:bg-opacity-90 transform hover:scale-105'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
