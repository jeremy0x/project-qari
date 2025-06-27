
const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-qari-primary mb-6 animate-blur-reveal text-balance">
            Qari — Move Better. Ride with Class.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-blur-reveal animate-stagger-1 max-w-3xl mx-auto text-balance">
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
      </div>
    </section>
  );
};

export default HeroSection;
