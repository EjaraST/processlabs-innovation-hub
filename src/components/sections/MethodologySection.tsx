import { Search, Palette, Code, Rocket, BarChart3 } from "lucide-react";

const MethodologySection = () => {
  const steps = [
    {
      number: "01",
      title: "Research",
      subtitle: "Исследование",
      description: [
        "Анализ процессов",
        "Сбор данных",
        "Выявление паттернов"
      ],
      icon: Search,
      color: "accent"
    },
    {
      number: "02",
      title: "Design",
      subtitle: "Проектирование",
      description: [
        "Архитектура решения",
        "Выбор технологий",
        "UX проектирование"
      ],
      icon: Palette,
      color: "primary"
    },
    {
      number: "03",
      title: "Develop",
      subtitle: "Разработка",
      description: [
        "MVP разработка",
        "Тестирование гипотез",
        "AI/ML обучение"
      ],
      icon: Code,
      color: "accent"
    },
    {
      number: "04",
      title: "Deploy",
      subtitle: "Внедрение",
      description: [
        "Миграция процессов",
        "Обучение команды",
        "Настройка мониторинга"
      ],
      icon: Rocket,
      color: "primary"
    },
    {
      number: "05",
      title: "Optimize",
      subtitle: "Оптимизация",
      description: [
        "Анализ метрик",
        "A/B тестирование",
        "Масштабирование"
      ],
      icon: BarChart3,
      color: "accent"
    }
  ];

  return (
    <section id="methodology" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Научный подход к автоматизации
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Каждый проект проходит через пять фаз исследования и разработки
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline for Desktop */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2"></div>
              
              <div className="grid grid-cols-5 gap-8">
                {steps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="relative">
                      {/* Timeline Node */}
                      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${
                        step.color === 'accent' ? 'bg-accent' : 'bg-primary'
                      } z-10`}></div>
                      
                      {/* Step Content */}
                      <div className="bg-card rounded-xl shadow-lab-md p-6 hover:shadow-lab-lg transition-all duration-300 hover:-translate-y-2 mt-12">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                          step.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'
                        }`}>
                          <IconComponent className={`w-6 h-6 ${
                            step.color === 'accent' ? 'text-accent' : 'text-primary'
                          }`} />
                        </div>
                        
                        <div className="text-sm text-text-muted font-semibold mb-2">{step.number}</div>
                        <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                        <h4 className="text-lg font-semibold text-text-primary mb-4">{step.subtitle}</h4>
                        
                        <ul className="space-y-2">
                          {step.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-text-secondary text-sm flex items-center">
                              <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                                step.color === 'accent' ? 'bg-accent' : 'bg-primary'
                              }`}></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Vertical Timeline for Mobile */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative pl-12">
                  {/* Timeline Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-border"></div>
                  )}
                  
                  {/* Timeline Node */}
                  <div className={`absolute left-4 top-4 w-4 h-4 rounded-full ${
                    step.color === 'accent' ? 'bg-accent' : 'bg-primary'
                  }`}></div>
                  
                  {/* Step Content */}
                  <div className="bg-card rounded-xl shadow-lab-md p-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      step.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        step.color === 'accent' ? 'text-accent' : 'text-primary'
                      }`} />
                    </div>
                    
                    <div className="text-sm text-text-muted font-semibold mb-2">{step.number}</div>
                    <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                    <h4 className="text-lg font-semibold text-text-primary mb-4">{step.subtitle}</h4>
                    
                    <ul className="space-y-2">
                      {step.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-text-secondary text-sm flex items-center">
                          <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                            step.color === 'accent' ? 'bg-accent' : 'bg-primary'
                          }`}></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;