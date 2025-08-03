import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "В чем отличие от обычного агентства?",
      answer: "Мы не используем готовые решения. Каждый проект — это исследование с созданием уникального решения под ваши задачи. Применяем научные методы: формулируем гипотезы, проводим эксперименты, тестируем результаты."
    },
    {
      question: "Сколько времени занимает исследование?",
      answer: "От 2 до 6 месяцев в зависимости от сложности. Мы работаем итерациями с промежуточными результатами каждые 2-3 недели. Вы видите прогресс на каждом этапе и можете корректировать направление исследования."
    },
    {
      question: "Какие гарантии результата?",
      answer: "Мы гарантируем измеримый ROI от внедрения. Все решения тестируются на реальных данных с применением A/B тестирования. Если KPI не достигнуты — дорабатываем бесплатно или возвращаем деньги."
    },
    {
      question: "Работаете ли с малым бизнесом?",
      answer: "Мы фокусируемся на средних и крупных компаниях от 100 сотрудников с бюджетом от 200,000 ₽. Для малого бизнеса исследовательский подход может быть избыточным — рекомендуем готовые решения."
    },
    {
      question: "Предоставляете ли техподдержку?",
      answer: "Да, включаем 6 месяцев поддержки и обучения команды клиента. Также предоставляем полную документацию, техническое описание и возможность самостоятельного развития решения."
    },
    {
      question: "Можете ли интегрироваться с нашими системами?",
      answer: "Да, мы специализируемся на enterprise интеграциях. Работаем с любыми API, базами данных и legacy системами. Создаем решения, которые легко встраиваются в существующую IT-архитектуру."
    },
    {
      question: "Что происходит с интеллектуальной собственностью?",
      answer: "Весь код и алгоритмы передаются заказчику. Мы подписываем NDA и гарантируем конфиденциальность. Исключительные права на разработанное решение принадлежат вам."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-lab">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Ответы на основные вопросы о нашем исследовательском подходе
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl shadow-lab-sm hover:shadow-lab-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 rounded-xl transition-colors"
              >
                <h3 className="text-lg font-semibold text-primary pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-accent" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-text-muted" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="pt-4 border-t border-border">
                    <p className="text-text-secondary leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl shadow-lab-md p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Не нашли ответ?
            </h3>
            <p className="text-text-secondary mb-6">
              Оставьте заявку, и мы проведем бесплатную консультацию по вашему проекту
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-text-muted">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>30 минут консультации</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Анализ возможностей</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Без обязательств</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;