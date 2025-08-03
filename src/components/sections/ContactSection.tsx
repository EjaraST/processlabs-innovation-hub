import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Mail, Phone, Linkedin, Send, CheckCircle } from "lucide-react";
import { useToast } from "../../hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    description: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в течение 24 часов для обсуждения исследования.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        description: ""
      });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Начнем исследование
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Расскажите о ваших процессах, и мы проведем предварительный анализ возможностей автоматизации
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl shadow-lab-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Имя *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-2 border-border focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                    Компания *
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="border-2 border-border focus:border-accent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-2 border-border focus:border-accent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-2 border-border focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-text-primary mb-2">
                  Опишите ваши процессы *
                </label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Расскажите о процессах, которые хотите автоматизировать, текущих проблемах и ожидаемых результатах..."
                  className="border-2 border-border focus:border-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent-hover text-accent-foreground text-lg py-3 shadow-glow disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Отправляем...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Заказать исследование</span>
                  </div>
                )}
              </Button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-lg font-semibold text-primary mb-4">Контактная информация</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-text-secondary">research@processlabs.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-text-secondary">+7 (XXX) XXX-XX-XX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-accent" />
                  <span className="text-text-secondary">/company/processlabs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Process Info */}
          <div className="space-y-8">
            {/* Research Process */}
            <div className="bg-gradient-hero rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Процесс исследования</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Анализ заявки</p>
                    <p className="text-white/80 text-sm">Изучение ваших процессов и задач</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Консультация</p>
                    <p className="text-white/80 text-sm">30-минутная встреча для обсуждения деталей</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Предложение</p>
                    <p className="text-white/80 text-sm">Техническое задание и план исследования</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Исследование</p>
                    <p className="text-white/80 text-sm">Разработка и тестирование решения</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-card rounded-2xl shadow-lab-md p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Что вы получите</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-text-secondary text-sm">Бесплатная консультация</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-secondary text-sm">Анализ процессов</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-text-secondary text-sm">ROI расчеты</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-secondary text-sm">Техническое решение</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-text-secondary text-sm">Готовый продукт</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-secondary text-sm">6 месяцев поддержки</span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gradient-lab rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary mb-4">Сроки ответа</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Первичный ответ</span>
                  <span className="font-semibold text-primary">2 часа</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Консультация</span>
                  <span className="font-semibold text-primary">24 часа</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-secondary">Техническое предложение</span>
                  <span className="font-semibold text-primary">3-5 дней</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;