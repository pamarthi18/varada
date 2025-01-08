import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const heroContent = [
  {
    title: "Innovative IT Solutions for Your Business",
    description: "Empowering businesses with cutting-edge technology solutions that drive growth and innovation.",
    image: "/Innovation.svg"
  },
  {
    title: "Application Modernization",
    description: "Transform your legacy applications into modern, scalable, and efficient solutions.",
    image: "/app-modern.svg"
  },
  {
    title: "Agile Coaching Excellence",
    description: "Expert guidance in implementing agile methodologies for improved project delivery.",
    image: "/agile-method.svg"
  }
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + heroContent.length) % heroContent.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroContent.length);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>

      <div id="hero" className="hero-gradient min-h-[90vh] flex items-center justify-center text-white px-4 mt-16">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevious}
          className="bg-white/20 hover:bg-white/30 left-0 absolute ml-3 hidden md:flex"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          <div className="text-left relative">
            {heroContent.map((content, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${index === currentIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute top-0 pointer-events-none"
                  }`}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {content.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  {content.description}
                </p>
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100" onClick={() => scrollToSection('contact')}>
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>
          <div className="relative">
            {heroContent.map((content, index) => (
              <img
                key={index}
                src={content.image}
                alt={content.title}
                className={`transition-all duration-500 w-full max-w-md mx-auto ${index === currentIndex
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 absolute top-0 pointer-events-none"
                  }`}
              />
            ))}

          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="bg-white/20 hover:bg-white/30 right-0 absolute mr-3 hidden md:flex"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
};