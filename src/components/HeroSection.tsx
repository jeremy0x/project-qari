
const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50/50 to-white"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-qari-primary mb-6 animate-blur-reveal text-balance">
            Qari — Move Better. Ride with Class.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 animate-blur-reveal animate-stagger-1 max-w-2xl mx-auto text-balance">
            A smarter ride-hailing platform designed for clean vehicles, fair pricing, and better driver treatment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-blur-reveal animate-stagger-2">
            <a
              href="https://forms.gle/zSEeMomP4jhNCaGC8"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-qari-secondary to-qari-secondary/90 text-white px-10 py-4 rounded-full font-semibold text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <span className="relative z-10">Join the Waitlist</span>
              <div className="absolute inset-0 bg-gradient-to-r from-qari-secondary/90 to-qari-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-qari-secondary to-qari-secondary/90 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
