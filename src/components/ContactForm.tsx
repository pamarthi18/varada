import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us to discuss your IT needs
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Input placeholder="Phone Number" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="h-32" />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600">contact@varada.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-gray-600">123 Business Street, Tech City, TC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};