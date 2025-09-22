import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index: React.FC = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      id: 1,
      title: 'Цифровая грамотность',
      description: 'Обучение жителей региона современным цифровым технологиям',
      progress: 85,
      budget: '3,200,000',
      beneficiaries: 1540,
      category: 'Образование'
    },
    {
      id: 2,
      title: 'Электронное правительство',
      description: 'Содействие внедрению госуслуг и цифровых платформ',
      progress: 75,
      budget: '2,800,000',
      beneficiaries: 45000,
      category: 'Госуслуги'
    },
    {
      id: 3,
      title: 'Умные технологии',
      description: 'Разработка и внедрение современных ИТ-решений для региона',
      progress: 92,
      budget: '4,500,000',
      beneficiaries: 8750,
      category: 'Инновации'
    }
  ];

  const financialData = [
    { year: '2023', income: 8500000, expenses: 7800000, projects: 12 },
    { year: '2022', income: 7200000, expenses: 6900000, projects: 10 },
    { year: '2021', income: 6100000, expenses: 5800000, projects: 8 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Heart" size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">АНО РКЦ "Цифровой регион"</h1>
                <p className="text-sm text-gray-600">Региональный координационный центр</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">О нас</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Проекты</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Документы</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Поддержать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/img/6640df5d-c538-40b3-bd33-4c2e068dc369.jpg" 
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Цифровое развитие региона
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Мы содействуем цифровой трансформации Хабаровского края и Дальнего Востока. 
                Координируем проекты в сфере информационных технологий.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Icon name="Users" size={20} className="mr-2" />
                  Присоединиться
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Наша деятельность
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/6bbc7ce6-6981-4d0d-bb96-6454667f9efe.jpg" 
                alt="Хабаровск - наш родной город"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-blue-500 mb-2">50+</div>
              <div className="text-gray-600">Проектов завершено</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Людей получили помощь</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-4xl font-bold text-blue-500 mb-2">95%</div>
              <div className="text-gray-600">Прозрачность расходов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="projects" className="text-sm font-semibold">
                <Icon name="FolderOpen" size={16} className="mr-2" />
                Текущие проекты
              </TabsTrigger>
              <TabsTrigger value="reports" className="text-sm font-semibold">
                <Icon name="BarChart3" size={16} className="mr-2" />
                Финансовые отчеты
              </TabsTrigger>
              <TabsTrigger value="contact" className="text-sm font-semibold">
                <Icon name="MessageSquare" size={16} className="mr-2" />
                Обратная связь
              </TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-center mb-8 text-navy-600">
                  Проекты цифровой трансформации
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <Card key={project.id} className="hover:shadow-lg transition-shadow animate-scale-in">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg text-gray-800">{project.title}</CardTitle>
                          <Badge variant="secondary" className="bg-blue-500 text-white">
                            {project.category}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm">{project.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium">Прогресс</span>
                              <span className="text-sm text-gray-600">{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} className="h-2" />
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-gray-600">Бюджет</div>
                              <div className="font-semibold text-blue-600">{project.budget} ₽</div>
                            </div>
                            <div>
                              <div className="text-gray-600">Получили помощь</div>
                              <div className="font-semibold text-blue-500">{project.beneficiaries}</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reports" className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-center mb-8 text-navy-600">
                  Финансовая отчетность
                </h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="animate-fade-in">
                    <CardHeader>
                      <CardTitle className="flex items-center text-navy-600">
                        <Icon name="TrendingUp" size={20} className="mr-2" />
                        Динамика доходов и расходов
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img 
                        src="/img/c8dd8eb9-6975-44a6-8b5a-f9e71d65e987.jpg" 
                        alt="Финансовая аналитика"
                        className="w-full rounded-lg mb-4"
                      />
                      <div className="space-y-3">
                        {financialData.map((year) => (
                          <div key={year.year} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div>
                              <div className="font-semibold">{year.year} год</div>
                              <div className="text-sm text-gray-600">{year.projects} проектов</div>
                            </div>
                            <div className="text-right">
                              <div className="text-green-600 font-semibold">
                                +{(year.income / 1000000).toFixed(1)}М ₽
                              </div>
                              <div className="text-red-500 text-sm">
                                -{(year.expenses / 1000000).toFixed(1)}М ₽
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="animate-fade-in">
                    <CardHeader>
                      <CardTitle className="flex items-center text-navy-600">
                        <Icon name="PieChart" size={20} className="mr-2" />
                        Распределение средств в 2023
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-blue-600 rounded mr-3"></div>
                            <span>Образовательные программы</span>
                          </div>
                          <span className="font-semibold">45%</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
                            <span>Инфраструктурные проекты</span>
                          </div>
                          <span className="font-semibold">30%</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
                            <span>Инновационные решения</span>
                          </div>
                          <span className="font-semibold">15%</span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-gray-400 rounded mr-3"></div>
                            <span>Административные расходы</span>
                          </div>
                          <span className="font-semibold">5%</span>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-green-50 rounded-lg">
                        <div className="flex items-center justify-center text-green-700">
                          <Icon name="CheckCircle" size={20} className="mr-2" />
                          <span className="font-semibold">90% средств направлено на реализацию проектов</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-center mb-8 text-navy-600">
                  Свяжитесь с нами
                </h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="animate-fade-in">
                    <CardHeader>
                      <CardTitle className="text-navy-600">Обратная связь</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Имя</label>
                          <Input placeholder="Ваше имя" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email</label>
                          <Input type="email" placeholder="ваш@email.com" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Сообщение</label>
                          <Textarea placeholder="Расскажите, как мы можем помочь..." rows={4} />
                        </div>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          <Icon name="Send" size={16} className="mr-2" />
                          Отправить сообщение
                        </Button>
                      </form>
                    </CardContent>
                  </Card>

                  <Card className="animate-fade-in">
                    <CardHeader>
                      <CardTitle className="text-navy-600">Контактная информация</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-start space-x-3">
                        <Icon name="MapPin" size={20} className="text-blue-600 mt-1" />
                        <div>
                          <div className="font-medium">Адрес</div>
                          <div className="text-gray-600">г. Хабаровск, ул. Муравьева-Амурского, д. 25</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="Phone" size={20} className="text-blue-500 mt-1" />
                        <div>
                          <div className="font-medium">Телефон</div>
                          <div className="text-gray-600">+7 (495) 123-45-67</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="Mail" size={20} className="text-blue-600 mt-1" />
                        <div>
                          <div className="font-medium">Email</div>
                          <div className="text-gray-600">info@nonprofit.org</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="Clock" size={20} className="text-blue-500 mt-1" />
                        <div>
                          <div className="font-medium">Время работы</div>
                          <div className="text-gray-600">Пн-Пт: 9:00-18:00</div>
                        </div>
                      </div>
                      <div className="pt-4 border-t">
                        <div className="font-medium mb-3">Следите за нами:</div>
                        <div className="flex space-x-3">
                          <Button size="sm" variant="outline" className="p-2">
                            <Icon name="Facebook" size={16} />
                          </Button>
                          <Button size="sm" variant="outline" className="p-2">
                            <Icon name="Twitter" size={16} />
                          </Button>
                          <Button size="sm" variant="outline" className="p-2">
                            <Icon name="Instagram" size={16} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded">
                  <Icon name="Heart" size={16} className="text-white m-2" />
                </div>
                <span className="font-bold text-lg">АНО РКЦ ЦР</span>
              </div>
              <p className="text-gray-300 text-sm">
                Автономная некоммерческая организация "Региональный координационный центр 'Цифровой регион'" 
                содействует цифровому развитию региона.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Проекты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Устав организации</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Финансовые отчеты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Годовая отчетность</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Аудиторские заключения</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm">
                  Сделать пожертвование
                </Button>
                <Button variant="outline" className="w-full text-sm border-gray-400 text-gray-300 hover:bg-white hover:text-gray-800">
                  Стать волонтером
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-500 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 АНО РКЦ «Цифровой регион». Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;