import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full py-4 px-6 bg-white/95 backdrop-blur-sm fixed top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem>
                <button onClick={() => scrollToSection('hero')} className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:text-lg hover:text-primary  focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                )}>
                  Home
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button onClick={() => scrollToSection('services')} className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:text-lg hover:text-primary  focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                )}>
                  Services
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button onClick={() => scrollToSection('idea')} className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:text-lg hover:text-primary  focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                )}>
                  Have an Idea
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button onClick={() => scrollToSection('contact')} className={cn(
                  "group inline-flex h-9 w-max items-center justify-center bg-blue-600 rounded-md px-4 py-2 text-lg font-medium transition-colors text-white hover:text-lg  focus:bg-gray-100  focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                )}>
                  Contact Us
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <img src="/logo.svg" alt="Varada Logo" className="h-8 w-8" />
          <span className="text-2xl font-bold text-primary">arada</span>
        </div>

        <NavigationMenu className="hidden md:flex items-center space-x-6" >
          <NavigationMenuList>
            <NavigationMenuItem>
              <button onClick={() => scrollToSection('hero')} className={cn(
                "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:text-lg hover:text-primary  focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              )}>
                Home
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button onClick={() => scrollToSection('services')} className={cn(
                "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:text-lg hover:text-primary  focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              )}>
                Services
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button onClick={() => scrollToSection('idea')} className={cn(
                "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:text-lg hover:text-primary  focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              )}>
                Have an Idea
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button onClick={() => scrollToSection('contact')} className={cn(
                "group inline-flex h-9 w-max items-center justify-center bg-blue-600 rounded-md px-4 py-2 text-lg font-medium transition-colors text-white hover:text-lg  focus:bg-gray-100  focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              )}>
                Contact Us
              </button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};