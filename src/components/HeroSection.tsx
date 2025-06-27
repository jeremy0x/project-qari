
const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden qari-gradient"
      style={{
        backgroundImage: `linear-gradient(rgba(12, 20, 33, 0.8), rgba(12, 20, 33, 0.6)), url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1920&h=1080&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-qari-secondary/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-qari-secondary/20 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-qari-secondary/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-qari-secondary/10 rotate-12 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-blur-reveal text-balance">
            Qari — Move Better. Ride with Class.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-blur-reveal animate-stagger-1 max-w-3xl mx-auto text-balance">
            A smarter ride-hailing platform designed for clean vehicles, fair pricing, and better driver treatment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-blur-reveal animate-stagger-2">
            <a
              href="https://forms.gle/zSEeMomP4jhNCaGC8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-qari-secondary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Join the Waitlist
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
