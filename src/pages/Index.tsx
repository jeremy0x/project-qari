
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductOverview from '@/components/ProductOverview';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
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
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
