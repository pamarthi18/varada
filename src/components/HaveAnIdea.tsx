import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HaveAnIdea = () => {
  return (
    <section id="idea" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="">
              <img src="/Brainstorming-cuate.svg" alt="Innovation" className="w-full h-auto rounded-lg " />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Have an Idea?</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Turn your innovative ideas into reality with our expert development team. We specialize in transforming concepts into successful digital solutions through our proven ideation and implementation process.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span>Comprehensive idea analysis and validation</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span>Agile development methodology</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span>Regular updates and transparent communication</span>
              </li>
            </ul>
            <Button size="lg">
              Let's Discuss Your Idea
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};