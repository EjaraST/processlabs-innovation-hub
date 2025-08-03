import { Users, Award, Code, Zap } from "lucide-react";

const TeamSection = () => {
  return (
    <section className="py-20 bg-gradient-lab">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Команда исследователей
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Эксперты в области AI/ML и промышленной автоматизации
          </p>
        </div>

        {/* Main Team Member */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-lab-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Avatar Placeholder */}
              <div className="lg:col-span-1">
                <div className="w-48 h-48 bg-gradient-hero rounded-2xl mx-auto flex items-center justify-center">
                  <Users className="w-24 h-24 text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold text-primary mb-2">Роман Галеев</h3>
                <p className="text-xl text-accent font-semibold mb-6">
                  Главный исследователь и основатель
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-text-primary">10+ лет R&D</p>
                        <p className="text-text-secondary text-sm">в автоматизации</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Code className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-text-primary">Эксперт AI/ML</p>
                        <p className="text-text-secondary text-sm">интеграций</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-text-primary">20+ решений</p>
                        <p className="text-text-secondary text-sm">внедрено</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-text-primary">Специализация</p>
                        <p className="text-text-secondary text-sm">промышленная автоматизация</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl shadow-lab-md p-6">
              <h4 className="text-xl font-bold text-primary mb-4">Философия исследований</h4>
              <p className="text-text-secondary leading-relaxed">
                "Каждая задача автоматизации уникальна. Мы не адаптируем готовые решения — 
                создаем новые с нуля, основываясь на глубоком понимании бизнес-процессов."
              </p>
            </div>
            
            <div className="bg-card rounded-xl shadow-lab-md p-6">
              <h4 className="text-xl font-bold text-primary mb-4">Научный подход</h4>
              <p className="text-text-secondary leading-relaxed">
                "Применяем методы научного исследования: гипотезы, эксперименты, 
                статистическая значимость результатов и peer-review каждого решения."
              </p>
            </div>
          </div>

          {/* Expanding Team Notice */}
          <div className="mt-12 bg-gradient-accent rounded-2xl p-8 text-center">
            <h4 className="text-2xl font-bold text-accent-foreground mb-4">
              Команда растет
            </h4>
            <p className="text-accent-foreground/80 text-lg">
              Мы активно привлекаем ведущих исследователей и AI-инженеров 
              для расширения наших лабораторий
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;