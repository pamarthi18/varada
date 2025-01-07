import { Cloud, Shield, Server, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Services = () => {
  const services = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Computing",
      description: "Scalable cloud solutions for modern businesses",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity",
      description: "Protecting your digital assets with advanced security",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "IT Infrastructure",
      description: "Robust infrastructure solutions for seamless operations",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "App Development",
      description: "Custom applications tailored to your needs",
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions designed to power your business forward
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="mb-4 text-primary">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};