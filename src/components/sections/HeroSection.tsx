import { Button } from "../ui/button";
import { ArrowRight, Beaker, Brain, Cog } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-lab">
        <div className="absolute top-20 left-10 w-4 h-4 bg-accent/20 rounded-full animate-glow-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-primary/20 rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent/30 rounded-full animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-60 right-40 w-5 h-5 bg-primary/15 rounded-full animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Logo and Name */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="flex items-center space-x-2">
              <Beaker className="w-8 h-8 text-accent" />
              <Brain className="w-8 h-8 text-primary" />
              <Cog className="w-8 h-8 text-accent" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-primary mb-6">
            ProcessLabs
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-8">
            Исследуем и создаем идеальные процессы
          </h2>
          
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
            Инновационная лаборатория автоматизации бизнес-процессов. 
            Мы не внедряем готовые решения — исследуем ваши задачи и разрабатываем 
            уникальные AI-системы с нуля.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent-hover text-accent-foreground shadow-glow text-lg px-8 py-4 group"
            >
              Заказать исследование
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('methodology')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Узнать больше
            </Button>
          </div>

          {/* Scientific Elements */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <p className="text-text-secondary text-sm">AI/ML Решения</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Beaker className="w-6 h-6 text-primary" />
              </div>
              <p className="text-text-secondary text-sm">Научный подход</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cog className="w-6 h-6 text-accent" />
              </div>
              <p className="text-text-secondary text-sm">Автоматизация</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;