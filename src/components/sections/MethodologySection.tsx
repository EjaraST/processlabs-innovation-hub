import { Search, Palette, Code, Rocket, BarChart3 } from "lucide-react";

const MethodologySection = () => {
  const steps = [
    {
      title: "Исследование",
      description: [
        "Анализ процессов",
        "Сбор данных",
        "Выявление паттернов"
      ],
      icon: Search,
      color: "accent"
    },
    {
      title: "Проектирование",
      description: [
        "Архитектура решения",
        "Выбор технологий",
        "UX проектирование"
      ],
      icon: Palette,
      color: "primary"
    },
    {
      title: "Разработка",
      description: [
        "MVP разработка",
        "Тестирование гипотез",
        "AI/ML обучение"
      ],
      icon: Code,
      color: "accent"
    },
    {
      title: "Внедрение",
      description: [
        "Миграция процессов",
        "Обучение команды",
        "Настройка мониторинга"
      ],
      icon: Rocket,
      color: "primary"
    },
    {
      title: "Оптимизация",
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
          {/* Grid Layout for Desktop - 2 rows */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                {/* First row connections */}
                <path d="M 20% 25% L 50% 25%" stroke="hsl(var(--border))" strokeWidth="2" fill="none" />
                <path d="M 50% 25% L 80% 25%" stroke="hsl(var(--border))" strokeWidth="2" fill="none" />
                {/* Connect first row to second row */}
                <path d="M 80% 25% Q 85% 25% 85% 50% Q 85% 75% 80% 75%" stroke="hsl(var(--border))" strokeWidth="2" fill="none" />
                {/* Second row connections */}
                <path d="M 80% 75% L 50% 75%" stroke="hsl(var(--border))" strokeWidth="2" fill="none" />
                <path d="M 50% 75% L 20% 75%" stroke="hsl(var(--border))" strokeWidth="2" fill="none" />
              </svg>
              
              {/* First Row */}
              <div className="grid grid-cols-3 gap-8 mb-16">
                {steps.slice(0, 3).map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="relative z-10">
                      {/* Step Content */}
                      <div className="bg-card rounded-xl shadow-lab-md p-6 hover:shadow-lab-lg transition-all duration-300 hover:-translate-y-2 text-center">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto ${
                          step.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'
                        }`}>
                          <IconComponent className={`w-6 h-6 ${
                            step.color === 'accent' ? 'text-accent' : 'text-primary'
                          }`} />
                        </div>
                        
                        <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                        
                        <ul className="space-y-2">
                          {step.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-text-secondary text-sm flex items-center justify-center">
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

              {/* Second Row */}
              <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
                {steps.slice(3, 5).map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="relative z-10">
                      {/* Step Content */}
                      <div className="bg-card rounded-xl shadow-lab-md p-6 hover:shadow-lab-lg transition-all duration-300 hover:-translate-y-2 text-center">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto ${
                          step.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'
                        }`}>
                          <IconComponent className={`w-6 h-6 ${
                            step.color === 'accent' ? 'text-accent' : 'text-primary'
                          }`} />
                        </div>
                        
                        <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                        
                        <ul className="space-y-2">
                          {step.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-text-secondary text-sm flex items-center justify-center">
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
                  <div className="bg-card rounded-xl shadow-lab-md p-6 text-center">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto ${
                      step.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        step.color === 'accent' ? 'text-accent' : 'text-primary'
                      }`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                    
                    <ul className="space-y-2">
                      {step.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-text-secondary text-sm flex items-center justify-center">
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