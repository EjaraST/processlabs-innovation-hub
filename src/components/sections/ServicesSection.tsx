import { Users, Brain, Settings, Search } from "lucide-react";
import { Button } from "../ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "HR Intelligence Lab",
      subtitle: "Создаем AI для умного найма",
      features: [
        "AI-скрининг кандидатов",
        "Аналитика HR-процессов", 
        "Системы адаптации"
      ],
      price: "От 500,000 ₽",
      gradient: "from-accent/10 to-primary/10",
      iconBg: "bg-accent/10",
      iconColor: "text-accent"
    },
    {
      icon: Brain,
      title: "AI Process Research",
      subtitle: "Разрабатываем custom ИИ-решения",
      features: [
        "Telegram-боты с GPT/Claude",
        "Анализ аудио/видео/текста",
        "Векторные базы знаний"
      ],
      price: "От 400,000 ₽",
      gradient: "from-primary/10 to-accent/10",
      iconBg: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Settings,
      title: "Automation Architecture",
      subtitle: "Проектируем архитектуру автоматизации",
      features: [
        "Enterprise интеграции",
        "n8n автоматизация",
        "API разработка"
      ],
      price: "От 300,000 ₽",
      gradient: "from-accent/10 to-primary/10",
      iconBg: "bg-accent/10",
      iconColor: "text-accent"
    },
    {
      icon: Search,
      title: "Process Discovery",
      subtitle: "Находим точки оптимизации",
      features: [
        "Аудит процессов",
        "ROI-расчеты",
        "Roadmap цифровизации"
      ],
      price: "От 200,000 ₽",
      gradient: "from-primary/10 to-accent/10",
      iconBg: "bg-primary/10",
      iconColor: "text-primary"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-lab">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Лаборатории ProcessLabs
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Четыре направления исследований для полной автоматизации бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group bg-card rounded-2xl shadow-lab-md hover:shadow-lab-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-br ${service.gradient} p-6 text-center`}>
                  <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{service.subtitle}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-text-secondary text-sm flex items-start">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-border pt-4">
                    <Button 
                      onClick={scrollToContact}
                      variant="outline" 
                      className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      Заказать исследование
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl shadow-lab-md p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Нужно индивидуальное решение?
            </h3>
            <p className="text-text-secondary mb-6">
              Мы создаем уникальные исследовательские проекты под ваши специфические задачи
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-accent hover:bg-accent-hover text-accent-foreground shadow-glow"
            >
              Обсудить проект
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;