import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold text-primary">ProcessLabs</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('methodology')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Методология
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('cases')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Кейсы
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-text-secondary hover:text-primary transition-colors"
            >
              Контакты
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-accent hover:bg-accent-hover text-accent-foreground"
            >
              Заказать исследование
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('methodology')}
                className="text-left text-text-secondary hover:text-primary transition-colors"
              >
                Методология
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-text-secondary hover:text-primary transition-colors"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('cases')}
                className="text-left text-text-secondary hover:text-primary transition-colors"
              >
                Кейсы
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-text-secondary hover:text-primary transition-colors"
              >
                Контакты
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-accent-hover text-accent-foreground w-full"
              >
                Заказать исследование
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;