import { TrendingUp, Clock, DollarSign, Target } from "lucide-react";

const CasesSection = () => {
  const cases = [
    {
      company: "Крупная строительная компания",
      industry: "Строительство инженерной инфраструктуры",
      challenge: "Автоматизация подбора персонала",
      solution: "AI-система полного цикла HR",
      results: [
        { metric: "Время подбора", change: "↓ 60%", icon: Clock, color: "text-red-500" },
        { metric: "Качество кандидатов", change: "↑ 40%", icon: Target, color: "text-green-500" },
        { metric: "Затраты на HR", change: "↓ 35%", icon: DollarSign, color: "text-red-500" }
      ],
      description: "Внедрили комплексную AI-систему для автоматизации процесса найма: от анализа резюме до предсказания успешности кандидата в компании."
    },
    {
      company: "Компания по производству светопрозрачных конструкций",
      industry: "Производство и промышленность",
      challenge: "Анализ звонков продаж",
      solution: "TranskriBot с NLP",
      results: [
        { metric: "Конверсия звонков", change: "↑ 25%", icon: TrendingUp, color: "text-green-500" },
        { metric: "Время анализа", change: "↓ 90%", icon: Clock, color: "text-red-500" },
        { metric: "Точность прогнозов", change: "↑ 80%", icon: Target, color: "text-green-500" }
      ],
      description: "Разработали AI-бота для автоматической транскрипции и анализа продажных звонков с выявлением ключевых метрик и рекомендаций."
    }
  ];

  return (
    <section id="cases" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Результаты наших исследований
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Реальные кейсы внедрения AI-решений с измеримыми результатами
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {cases.map((caseStudy, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl shadow-lab-lg p-8 hover:shadow-glow transition-all duration-300"
            >
              {/* Header */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {caseStudy.industry}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{caseStudy.company}</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-text-muted font-medium">Задача:</span>
                      <p className="text-text-primary">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <span className="text-text-muted font-medium">Решение:</span>
                      <p className="text-text-primary font-semibold">{caseStudy.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {caseStudy.results.map((result, resultIndex) => {
                    const IconComponent = result.icon;
                    return (
                      <div 
                        key={resultIndex}
                        className="bg-gradient-lab rounded-xl p-4 text-center"
                      >
                        <div className="flex items-center justify-center mb-2">
                          <IconComponent className={`w-5 h-5 ${result.color}`} />
                        </div>
                        <div className={`text-2xl font-bold mb-1 ${result.color}`}>
                          {result.change}
                        </div>
                        <div className="text-text-muted text-sm">
                          {result.metric}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Description */}
              <div className="border-t border-border pt-6">
                <p className="text-text-secondary leading-relaxed">
                  {caseStudy.description}
                </p>
              </div>

              {/* Research Badge */}
              <div className="mt-6 flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-text-muted text-sm font-medium">Исследовательский проект</span>
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-text-muted text-sm">6 месяцев разработки</span>
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-text-muted text-sm">Запатентованное решение</span>
              </div>
            </div>
          ))}
        </div>

        {/* Research Methodology Note */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-hero rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Научная достоверность</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Все результаты получены в ходе контролируемых экспериментов с применением A/B тестирования 
              и статистически значимой выборкой данных. Каждое решение проходит этап peer-review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;