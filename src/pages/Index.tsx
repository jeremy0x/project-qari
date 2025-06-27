
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductOverview from '@/components/ProductOverview';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import DriverSection from '@/components/DriverSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductOverview />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <DriverSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
