import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface CalculatorState {
  projectType: string;
  complexity: string;
  modules: string[];
  integrations: string[];
  users: number;
  timeline: string;
}

const PROJECT_TYPES = {
  'new-implementation': { name: 'Новое внедрение 1С', basePrice: 150000 },
  'customization': { name: 'Доработка конфигурации', basePrice: 80000 },
  'migration': { name: 'Миграция данных', basePrice: 120000 },
  'integration': { name: 'Интеграция с внешними системами', basePrice: 100000 },
  'support': { name: 'Техническое сопровождение', basePrice: 25000 }
};

const COMPLEXITY_MULTIPLIERS = {
  'simple': { name: 'Простой', multiplier: 1 },
  'medium': { name: 'Средней сложности', multiplier: 1.5 },
  'complex': { name: 'Сложный', multiplier: 2.2 },
  'enterprise': { name: 'Корпоративный', multiplier: 3 }
};

const MODULES = [
  { id: 'accounting', name: 'Бухгалтерия', price: 30000 },
  { id: 'warehouse', name: 'Склад и логистика', price: 25000 },
  { id: 'sales', name: 'Продажи и CRM', price: 35000 },
  { id: 'hr', name: 'Управление персоналом', price: 20000 },
  { id: 'production', name: 'Производство', price: 40000 },
  { id: 'analytics', name: 'Аналитика и отчеты', price: 15000 }
];

const INTEGRATIONS = [
  { id: 'bank', name: 'Банк-клиент', price: 15000 },
  { id: 'website', name: 'Интернет-магазин', price: 25000 },
  { id: 'crm', name: 'CRM система', price: 20000 },
  { id: 'equipment', name: 'Торговое оборудование', price: 18000 },
  { id: 'api', name: 'API интеграции', price: 30000 }
];

const TIMELINE_MULTIPLIERS = {
  'urgent': { name: 'Срочно (до 2 недель)', multiplier: 1.8 },
  'fast': { name: 'Быстро (до 1 месяца)', multiplier: 1.3 },
  'normal': { name: 'Обычно (2-3 месяца)', multiplier: 1 },
  'planned': { name: 'Планово (3+ месяца)', multiplier: 0.9 }
};

export default function CostCalculator() {
  const [calculator, setCalculator] = useState<CalculatorState>({
    projectType: '',
    complexity: '',
    modules: [],
    integrations: [],
    users: 10,
    timeline: ''
  });

  const [showResult, setShowResult] = useState(false);

  const handleModuleChange = (moduleId: string, checked: boolean) => {
    setCalculator(prev => ({
      ...prev,
      modules: checked 
        ? [...prev.modules, moduleId]
        : prev.modules.filter(id => id !== moduleId)
    }));
  };

  const handleIntegrationChange = (integrationId: string, checked: boolean) => {
    setCalculator(prev => ({
      ...prev,
      integrations: checked 
        ? [...prev.integrations, integrationId]
        : prev.integrations.filter(id => id !== integrationId)
    }));
  };

  const calculateCost = () => {
    if (!calculator.projectType || !calculator.complexity || !calculator.timeline) {
      return 0;
    }

    let baseCost = PROJECT_TYPES[calculator.projectType as keyof typeof PROJECT_TYPES]?.basePrice || 0;
    
    // Применяем множитель сложности
    const complexityMultiplier = COMPLEXITY_MULTIPLIERS[calculator.complexity as keyof typeof COMPLEXITY_MULTIPLIERS]?.multiplier || 1;
    baseCost *= complexityMultiplier;

    // Добавляем стоимость модулей
    const modulesCost = calculator.modules.reduce((sum, moduleId) => {
      const module = MODULES.find(m => m.id === moduleId);
      return sum + (module?.price || 0);
    }, 0);

    // Добавляем стоимость интеграций
    const integrationsCost = calculator.integrations.reduce((sum, integrationId) => {
      const integration = INTEGRATIONS.find(i => i.id === integrationId);
      return sum + (integration?.price || 0);
    }, 0);

    // Множитель за количество пользователей
    const userMultiplier = calculator.users > 50 ? 1.5 : calculator.users > 20 ? 1.2 : 1;

    // Множитель временных рамок
    const timelineMultiplier = TIMELINE_MULTIPLIERS[calculator.timeline as keyof typeof TIMELINE_MULTIPLIERS]?.multiplier || 1;

    const totalCost = (baseCost + modulesCost + integrationsCost) * userMultiplier * timelineMultiplier;
    
    return Math.round(totalCost);
  };

  const handleCalculate = () => {
    setShowResult(true);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const totalCost = calculateCost();

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-[#1F2937] mb-4">Калькулятор стоимости проекта</h3>
          <p className="text-lg text-[#6B7280]">Рассчитайте приблизительную стоимость вашего проекта автоматизации</p>
        </div>

        <Card className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Тип проекта */}
              <div>
                <Label className="text-lg font-semibold text-[#1F2937] mb-3 block">
                  Тип проекта
                </Label>
                <Select value={calculator.projectType} onValueChange={(value) => 
                  setCalculator(prev => ({ ...prev, projectType: value }))
                }>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Выберите тип проекта" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(PROJECT_TYPES).map(([key, type]) => (
                      <SelectItem key={key} value={key}>
                        {type.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Сложность */}
              <div>
                <Label className="text-lg font-semibold text-[#1F2937] mb-3 block">
                  Сложность проекта
                </Label>
                <Select value={calculator.complexity} onValueChange={(value) => 
                  setCalculator(prev => ({ ...prev, complexity: value }))
                }>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Выберите сложность" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(COMPLEXITY_MULTIPLIERS).map(([key, complexity]) => (
                      <SelectItem key={key} value={key}>
                        {complexity.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Количество пользователей */}
              <div>
                <Label className="text-lg font-semibold text-[#1F2937] mb-3 block">
                  Количество пользователей
                </Label>
                <Input
                  type="number"
                  value={calculator.users}
                  onChange={(e) => setCalculator(prev => ({ ...prev, users: parseInt(e.target.value) || 1 }))}
                  min="1"
                  className="w-full"
                />
              </div>

              {/* Временные рамки */}
              <div>
                <Label className="text-lg font-semibold text-[#1F2937] mb-3 block">
                  Временные рамки
                </Label>
                <Select value={calculator.timeline} onValueChange={(value) => 
                  setCalculator(prev => ({ ...prev, timeline: value }))
                }>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Выберите сроки" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(TIMELINE_MULTIPLIERS).map(([key, timeline]) => (
                      <SelectItem key={key} value={key}>
                        {timeline.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-6">
              {/* Модули */}
              <div>
                <Label className="text-lg font-semibold text-[#1F2937] mb-3 block">
                  Необходимые модули
                </Label>
                <div className="space-y-3">
                  {MODULES.map((module) => (
                    <div key={module.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={module.id}
                        checked={calculator.modules.includes(module.id)}
                        onCheckedChange={(checked) => handleModuleChange(module.id, checked as boolean)}
                      />
                      <Label htmlFor={module.id} className="flex-1 cursor-pointer">
                        {module.name}
                      </Label>
                      <span className="text-sm text-[#6B7280]">
                        +{formatPrice(module.price)} ₽
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Интеграции */}
              <div>
                <Label className="text-lg font-semibold text-[#1F2937] mb-3 block">
                  Интеграции
                </Label>
                <div className="space-y-3">
                  {INTEGRATIONS.map((integration) => (
                    <div key={integration.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={integration.id}
                        checked={calculator.integrations.includes(integration.id)}
                        onCheckedChange={(checked) => handleIntegrationChange(integration.id, checked as boolean)}
                      />
                      <Label htmlFor={integration.id} className="flex-1 cursor-pointer">
                        {integration.name}
                      </Label>
                      <span className="text-sm text-[#6B7280]">
                        +{formatPrice(integration.price)} ₽
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Button 
                onClick={handleCalculate}
                size="lg"
                className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-8 py-3"
                disabled={!calculator.projectType || !calculator.complexity || !calculator.timeline}
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>

              {showResult && totalCost > 0 && (
                <div className="text-center sm:text-right">
                  <p className="text-sm text-[#6B7280] mb-1">Приблизительная стоимость:</p>
                  <p className="text-3xl font-bold text-[#2563EB]">
                    {formatPrice(totalCost)} ₽
                  </p>
                  <p className="text-xs text-[#6B7280] mt-1">
                    *Итоговая стоимость может отличаться после детального анализа
                  </p>
                </div>
              )}
            </div>

            {showResult && totalCost > 0 && (
              <div className="mt-6 p-4 bg-[#EFF6FF] rounded-lg border border-[#BFDBFE]">
                <div className="flex items-start space-x-3">
                  <Icon name="Info" size={20} className="text-[#2563EB] mt-0.5" />
                  <div className="text-sm text-[#1E40AF]">
                    <p className="font-semibold mb-1">Что входит в стоимость:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Анализ бизнес-процессов</li>
                      <li>Настройка и доработка конфигурации</li>
                      <li>Тестирование системы</li>
                      <li>Обучение пользователей</li>
                      <li>Техническая поддержка на период внедрения</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}