import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { HaveAnIdea } from "@/components/HaveAnIdea";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import '../index.css'

const Index = () => {
  return (
    <div className="min-h-screen custom-scrollbar">
      <Header />
      <Hero />
      <About />
      <Services />
      <HaveAnIdea />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;