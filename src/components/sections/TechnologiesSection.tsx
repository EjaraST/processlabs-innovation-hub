import { Database, Bot, Cloud, BarChart3, Brain, Cpu } from "lucide-react";

const TechnologiesSection = () => {
  const technologies = [
    { name: "Python", category: "Backend", icon: Cpu },
    { name: "OpenAI/Claude", category: "AI", icon: Brain },
    { name: "amoCRM", category: "CRM", icon: Database },
    { name: "n8n", category: "Automation", icon: Bot },
    { name: "PostgreSQL", category: "Database", icon: Database },
    { name: "Telegram API", category: "Integration", icon: Bot },
    { name: "React/Next.js", category: "Frontend", icon: Cpu },
    { name: "Docker", category: "DevOps", icon: Cloud },
    { name: "AWS", category: "Cloud", icon: Cloud },
    { name: "Metabase", category: "Analytics", icon: BarChart3 },
    { name: "Qdrant", category: "Vector DB", icon: Database },
    { name: "Vector DB", category: "AI/ML", icon: Brain }
  ];

  const categories = {
    "AI": { color: "bg-accent/10 text-accent", icon: Brain },
    "Backend": { color: "bg-primary/10 text-primary", icon: Cpu },
    "Database": { color: "bg-accent/10 text-accent", icon: Database },
    "Frontend": { color: "bg-primary/10 text-primary", icon: Cpu },
    "Cloud": { color: "bg-accent/10 text-accent", icon: Cloud },
    "DevOps": { color: "bg-primary/10 text-primary", icon: Cloud },
    "Integration": { color: "bg-accent/10 text-accent", icon: Bot },
    "Automation": { color: "bg-primary/10 text-primary", icon: Bot },
    "CRM": { color: "bg-accent/10 text-accent", icon: Database },
    "Analytics": { color: "bg-primary/10 text-primary", icon: BarChart3 },
    "Vector DB": { color: "bg-accent/10 text-accent", icon: Brain },
    "AI/ML": { color: "bg-accent/10 text-accent", icon: Brain }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Наша лаборатория
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-6">
            Современный стек технологий для создания enterprise-решений
          </p>
          <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
            Официальные партнеры amoCRM
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-w-6xl mx-auto mb-16">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            const categoryStyle = categories[tech.category];
            
            return (
              <div 
                key={index}
                className="group bg-card rounded-xl shadow-lab-sm hover:shadow-lab-md p-4 text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 ${categoryStyle.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-text-primary text-sm mb-1">{tech.name}</h3>
                <span className="text-text-muted text-xs">{tech.category}</span>
              </div>
            );
          })}
        </div>

        {/* Technology Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">AI-First подход</h3>
            <p className="text-text-secondary">
              Используем передовые языковые модели и машинное обучение 
              для создания интеллектуальных решений
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cloud className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Cloud-Native</h3>
            <p className="text-text-secondary">
              Разрабатываем масштабируемые решения с использованием 
              современных облачных технологий и контейнеризации
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Bot className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Automation-Ready</h3>
            <p className="text-text-secondary">
              Создаем решения с возможностью полной автоматизации 
              и интеграции с существующими системами
            </p>
          </div>
        </div>

        {/* Research & Development Note */}
        <div className="mt-16 bg-gradient-lab rounded-2xl p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Постоянные исследования
          </h3>
          <p className="text-text-secondary text-lg leading-relaxed">
            Мы следим за последними достижениями в области AI/ML и внедряем их в наши проекты. 
            Каждое решение использует самые современные технологические подходы.
          </p>
          
          <div className="flex items-center justify-center space-x-6 mt-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-text-muted text-sm">Еженедельные tech-обзоры</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-text-muted text-sm">Экспериментальные проекты</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-text-muted text-sm">Open source contributions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;