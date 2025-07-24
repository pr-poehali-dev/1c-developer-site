import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import CostCalculator from '@/components/CostCalculator';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-[#2563EB]">1С ОЖА</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-[#1F2937] hover:text-[#2563EB] transition-colors">Услуги</a>
              <a href="#portfolio" className="text-[#1F2937] hover:text-[#2563EB] transition-colors">Портфолио</a>
              <a href="#about" className="text-[#1F2937] hover:text-[#2563EB] transition-colors">О нас</a>
              <a href="#prices" className="text-[#1F2937] hover:text-[#2563EB] transition-colors">Цены</a>
              <a href="#contact" className="text-[#1F2937] hover:text-[#2563EB] transition-colors">Контакты</a>
            </nav>
            <Button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white">
              Получить консультацию
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F8FAFC] to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-[#1F2937] mb-6">
              Автоматизация бизнеса на <span className="text-[#2563EB]">1С</span>
            </h2>
            <p className="text-xl text-[#6B7280] mb-8 max-w-3xl mx-auto">
              Профессиональные решения для автоматизации бизнес-процессов. 
              Внедрение, доработка и сопровождение систем 1С любой сложности.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-8 py-3">
                Заказать проект
              </Button>
              <Button size="lg" variant="outline" className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white px-8 py-3">
                Узнать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-[#1F2937] mb-4">Наши услуги</h3>
            <p className="text-lg text-[#6B7280]">Полный спектр услуг по автоматизации на платформе 1С</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow border-gray-100">
              <div className="w-16 h-16 bg-[#2563EB] rounded-lg flex items-center justify-center mb-6">
                <Icon name="Code" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-[#1F2937] mb-4">Разработка решений</h4>
              <p className="text-[#6B7280] mb-4">
                Создание индивидуальных конфигураций и доработка типовых решений под ваши задачи
              </p>
              <Button variant="outline" className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white">
                Подробнее
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-gray-100">
              <div className="w-16 h-16 bg-[#2563EB] rounded-lg flex items-center justify-center mb-6">
                <Icon name="Database" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-[#1F2937] mb-4">Внедрение 1С</h4>
              <p className="text-[#6B7280] mb-4">
                Полный цикл внедрения от анализа процессов до обучения пользователей
              </p>
              <Button variant="outline" className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white">
                Подробнее
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-gray-100">
              <div className="w-16 h-16 bg-[#2563EB] rounded-lg flex items-center justify-center mb-6">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-[#1F2937] mb-4">Сопровождение</h4>
              <p className="text-[#6B7280] mb-4">
                Техническая поддержка, обновления и консультации по работе с системой
              </p>
              <Button variant="outline" className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white">
                Подробнее
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-gray-100">
              <div className="w-16 h-16 bg-[#2563EB] rounded-lg flex items-center justify-center mb-6">
                <Icon name="BarChart" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-[#1F2937] mb-4">Аналитика и отчеты</h4>
              <p className="text-[#6B7280] mb-4">
                Настройка управленческой отчетности и систем аналитики данных
              </p>
              <Button variant="outline" className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white">
                Подробнее
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-gray-100">
              <div className="w-16 h-16 bg-[#2563EB] rounded-lg flex items-center justify-center mb-6">
                <Icon name="Settings" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-[#1F2937] mb-4">Интеграции</h4>
              <p className="text-[#6B7280] mb-4">
                Подключение внешних сервисов, API и синхронизация с другими системами
              </p>
              <Button variant="outline" className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white">
                Подробнее
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-gray-100">
              <div className="w-16 h-16 bg-[#2563EB] rounded-lg flex items-center justify-center mb-6">
                <Icon name="Cog" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-[#1F2937] mb-4">Оптимизация</h4>
              <p className="text-[#6B7280] mb-4">
                Повышение производительности и оптимизация существующих конфигураций
              </p>
              <Button variant="outline" className="border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white">
                Подробнее
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-[#1F2937] mb-4">Почему выбирают нас</h3>
            <p className="text-lg text-[#6B7280]">Профессиональный подход и гарантированный результат</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">5+</span>
              </div>
              <h4 className="text-xl font-semibold text-[#1F2937] mb-2">Лет опыта</h4>
              <p className="text-[#6B7280]">Работаем с 1С с 2019 года</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">100+</span>
              </div>
              <h4 className="text-xl font-semibold text-[#1F2937] mb-2">Проектов</h4>
              <p className="text-[#6B7280]">Успешно реализованных решений</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">24/7</span>
              </div>
              <h4 className="text-xl font-semibold text-[#1F2937] mb-2">Поддержка</h4>
              <p className="text-[#6B7280]">Круглосуточная техподдержка</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Award" size={40} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-[#1F2937] mb-2">Сертификат</h4>
              <p className="text-[#6B7280]">Официальные партнеры 1С</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Calculator */}
      <CostCalculator />

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-[#1F2937] mb-4">Связаться с нами</h3>
            <p className="text-lg text-[#6B7280]">Обсудим ваш проект и предложим оптимальное решение</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8">
                <h4 className="text-2xl font-semibold text-[#1F2937] mb-6">Отправить заявку</h4>
                <form className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      className="border-gray-300 focus:border-[#2563EB] focus:ring-[#2563EB]"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      className="border-gray-300 focus:border-[#2563EB] focus:ring-[#2563EB]"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="border-gray-300 focus:border-[#2563EB] focus:ring-[#2563EB]"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Опишите ваш проект или задачу" 
                      rows={4}
                      className="border-gray-300 focus:border-[#2563EB] focus:ring-[#2563EB]"
                    />
                  </div>
                  <Button className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white py-3">
                    Отправить заявку
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-[#1F2937] mb-2">Телефон</h5>
                  <p className="text-[#6B7280]">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-[#1F2937] mb-2">Email</h5>
                  <p className="text-[#6B7280]">info@1c-ozha.ru</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-[#1F2937] mb-2">Адрес</h5>
                  <p className="text-[#6B7280]">г. Москва, ул. Профессиональная, д. 1С</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-white" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-[#1F2937] mb-2">Режим работы</h5>
                  <p className="text-[#6B7280]">Пн-Пт: 9:00-18:00<br />Сб-Вс: по договоренности</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2937] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold text-[#2563EB] mb-4">1С ОЖА</h4>
              <p className="text-gray-400">
                Профессиональная автоматизация бизнеса на платформе 1С
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Разработка</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Внедрение</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Сопровождение</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Интеграции</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Цены</a></li>
                <li><a href="#" className="hover:text-[#2563EB] transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@1c-ozha.ru</p>
                <p>г. Москва</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 1С ОЖА. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}