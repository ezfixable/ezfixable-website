import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [quickForm, setQuickForm] = useState({
    name: '',
    phone: '',
    appliance: ''
  });
  const [fullForm, setFullForm] = useState({
    name: '',
    phone: '',
    address: '',
    zip: '',
    appliance: '',
    time: '',
    description: ''
  });

  const submitQuickForm = (e) => {
    e.preventDefault();
    
    if (!quickForm.name || !quickForm.phone) {
      alert('Please fill in name and phone');
      return;
    }
    
    const form = document.createElement('form');
    form.action = 'https://formsubmit.co/ezfixable@gmail.com';
    form.method = 'POST';
    form.target = '_blank';
    
    const fields = {
      name: quickForm.name,
      phone: quickForm.phone,
      appliance: quickForm.appliance,
      _subject: 'New Quick Service Request - EZFixable',
      _template: 'table',
      _next: 'https://ezfixable.com'
    };
    
    Object.keys(fields).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = fields[key];
      form.appendChild(input);
    });
    
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    
    setSubmitted(true);
    setQuickForm({ name: '', phone: '', appliance: '' });
  };

  const submitFullForm = (e) => {
    e.preventDefault();
    
    if (!fullForm.name || !fullForm.phone || !fullForm.address) {
      alert('Please fill in name, phone, and address');
      return;
    }
    
    const form = document.createElement('form');
    form.action = 'https://formsubmit.co/ezfixable@gmail.com';
    form.method = 'POST';
    form.target = '_blank';
    
    const fields = {
      name: fullForm.name,
      phone: fullForm.phone,
      address: fullForm.address,
      zip: fullForm.zip,
      appliance: fullForm.appliance,
      time: fullForm.time,
      description: fullForm.description,
      _subject: 'New Service Request - EZFixable',
      _template: 'table',
      _next: 'https://ezfixable.com'
    };
    
    Object.keys(fields).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = fields[key];
      form.appendChild(input);
    });
    
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    
    setSubmitted(true);
    setFullForm({
      name: '',
      phone: '',
      address: '',
      zip: '',
      appliance: '',
      time: '',
      description: ''
    });
  };

  return (
    <div className="App">
      {/* Language Selector */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button 
          onClick={() => setCurrentLang('en')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${currentLang === 'en' ? 'bg-orange-500 text-white' : 'bg-white/20 text-gray-700 hover:bg-white/30'}`}
        >
          EN
        </button>
        <button 
          onClick={() => setCurrentLang('ru')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${currentLang === 'ru' ? 'bg-orange-500 text-white' : 'bg-white/20 text-gray-700 hover:bg-white/30'}`}
        >
          RU
        </button>
        <button 
          onClick={() => setCurrentLang('es')}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${currentLang === 'es' ? 'bg-orange-500 text-white' : 'bg-white/20 text-gray-700 hover:bg-white/30'}`}
        >
          ES
        </button>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="logo-container">
                <img 
                  src="https://customer-assets.emergentagent.com/ezfixable-logo.png" 
                  alt="EZFixable" 
                  className="h-12 w-auto logo-spin"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'block';
                  }}
                />
                <div className="h-12 flex items-center px-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg font-bold text-xl" style={{display: 'none'}}>
                  EZFixable
                </div>
              </div>
              <span className="text-2xl font-bold text-gray-800">EZFixable</span>
            </div>
            
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 holographic-button">
              {currentLang === 'en' && '📞 Call Now'}
              {currentLang === 'ru' && '📞 Звонить'}
              {currentLang === 'es' && '📞 Llamar'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - БЕЗ WOODLAND HILLS */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-orange-100/30"></div>
        
        <div className="hero-content max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left space-y-8 fade-in-up">
              {currentLang === 'en' && (
                <h1 className="text-5xl lg:text-7xl font-black gradient-text mb-8 text-depth leading-tight">
                  Appliance & Commercial Oven Repair
                </h1>
              )}
              {currentLang === 'ru' && (
                <h1 className="text-5xl lg:text-7xl font-black gradient-text mb-8 text-depth leading-tight">
                  Ремонт бытовой техники и коммерческих печей
                </h1>
              )}
              {currentLang === 'es' && (
                <h1 className="text-5xl lg:text-7xl font-black gradient-text mb-8 text-depth leading-tight">
                  Reparación de electrodomésticos y hornos comerciales
                </h1>
              )}
              
              {currentLang === 'en' && (
                <p className="text-2xl text-gray-700 mb-12 font-medium">
                  Same-day when possible. Transparent pricing.<br/>
                  30-day labor / 90-day parts warranty.
                </p>
              )}
              {currentLang === 'ru' && (
                <p className="text-2xl text-gray-700 mb-12 font-medium">
                  Выезд в день обращения, когда возможно. Прозрачные цены.<br/>
                  30 дней на работу / 90 дней на запчасти гарантии.
                </p>
              )}
              {currentLang === 'es' && (
                <p className="text-2xl text-gray-700 mb-12 font-medium">
                  Mismo día cuando sea posible. Precios transparentes.<br/>
                  30 días de mano de obra / 90 días de garantía de piezas.
                </p>
              )}

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 holographic-button">
                  {currentLang === 'en' && '📞 Call Now'}
                  {currentLang === 'ru' && '📞 Звонить'}
                  {currentLang === 'es' && '📞 Llamar'}
                </button>
                <button className="bg-white/70 backdrop-blur-md border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-2xl text-xl font-bold hover:bg-white/90 hover:shadow-xl transition-all duration-300 glass-card">
                  {currentLang === 'en' && '⚡ Request Service'}
                  {currentLang === 'ru' && '⚡ Заказать ремонт'}
                  {currentLang === 'es' && '⚡ Solicitar servicio'}
                </button>
                <button className="bg-white/70 backdrop-blur-md border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-2xl text-xl font-bold hover:bg-white/90 hover:shadow-xl transition-all duration-300 glass-card">
                  {currentLang === 'en' && '💬 Text Us'}
                  {currentLang === 'ru' && '💬 Написать'}
                  {currentLang === 'es' && '💬 Enviar mensaje'}
                </button>
              </div>
            </div>
            
            <div className="relative fade-in-up">
              <div className="glass-card p-8 bg-white/70 backdrop-blur-md border border-gray-200 rounded-3xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556909114-5bb329f6eb61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Professional Kitchen" 
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-6 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-2">
                    {currentLang === 'en' && '$60 diagnostic fee, applied to your repair.'}
                    {currentLang === 'ru' && 'Диагностика $60, засчитывается в стоимость ремонта.'}
                    {currentLang === 'es' && 'Tarifa de diagnóstico de $60, aplicada a su reparación.'}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a 
              href="https://www.google.com/maps/place/EZFixable/@34.168971,-118.608165,17z/data=!4m6!3m5!1s0x0:0x123abc!8m2!3d34.168971!4d-118.608165!16s%2Fg%2F11c123abc"
              target="_blank"
              rel="noopener noreferrer" 
              className="glass-card bg-white/70 backdrop-blur-md px-8 py-4 rounded-2xl border border-gray-200 hover:bg-white/90 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                <span className="font-semibold text-gray-800">
                  {currentLang === 'en' && 'Google Reviews'}
                  {currentLang === 'ru' && 'Отзывы Google'}
                  {currentLang === 'es' && 'Reseñas Google'}
                </span>
              </div>
            </a>
            
            <a 
              href="https://www.yelp.com/biz/ezfixable-woodland-hills"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card bg-white/70 backdrop-blur-md px-8 py-4 rounded-2xl border border-gray-200 hover:bg-white/90 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                <span className="font-semibold text-gray-800">
                  {currentLang === 'en' && 'Yelp Reviews'}
                  {currentLang === 'ru' && 'Отзывы Yelp'}
                  {currentLang === 'es' && 'Reseñas Yelp'}
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            {currentLang === 'en' && (
              <h2 className="text-5xl font-black text-gray-800 mb-6 gradient-text">
                Our Repair Services
              </h2>
            )}
            {currentLang === 'ru' && (
              <h2 className="text-5xl font-black text-gray-800 mb-6 gradient-text">
                Наши услуги ремонта
              </h2>
            )}
            {currentLang === 'es' && (
              <h2 className="text-5xl font-black text-gray-800 mb-6 gradient-text">
                Nuestros servicios de reparación
              </h2>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="glass-card bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Washing Machine Repair" 
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              {currentLang === 'en' && (
                <>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Washers</h3>
                  <p className="text-gray-600 mb-6">Not spinning, draining, or starting? We fix all washer issues quickly.</p>
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Request Service →
                  </button>
                </>
              )}
              {currentLang === 'ru' && (
                <>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Стиральные машины</h3>
                  <p className="text-gray-600 mb-6">Не крутит, не сливает или не запускается? Быстро устраним все неисправности.</p>
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Заказать ремонт →
                  </button>
                </>
              )}
              {currentLang === 'es' && (
                <>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Lavadoras</h3>
                  <p className="text-gray-600 mb-6">¿No gira o no arranca? Reparamos todos los problemas de lavadoras rápidamente.</p>
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Solicitar servicio →
                  </button>
                </>
              )}
            </div>

            <div className="glass-card bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Dryer Repair" 
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              {currentLang === 'en' && (
                <>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Dryers</h3>
                  <p className="text-gray-600 mb-6">Not heating or taking too long? We restore proper drying function.</p>
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Request Service →
                  </button>
                </>
              )}
              {currentLang === 'ru' && (
                <>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Сушилки</h3>
                  <p className="text-gray-600 mb-6">Не греет или долго сушит? Восстановим правильную работу сушки.</p>
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Заказать ремонт →
                  </button>
                </>
              )}
              {currentLang === 'es' && (
                <>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Secadoras</h3>
                  <p className="text-gray-600 mb-6">¿No calienta o tarda demasiado? Restauramos el funcionamiento adecuado del secado.</p>
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Solicitar servicio →
                  </button>
                </>
              )}
            </div>

            <div className="glass-card bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1556909114-5bb329f6eb61?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Oven Repair" 
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              {currentLang === 'en' && (
                <>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Ovens & Ranges</h3>
                  <p className="text-gray-600 mb-6">Temperature issues or burner problems? We handle all oven repairs.</p>
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Request Service →
                  </button>
                </>
              )}
              {currentLang === 'ru' && (
                <>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Духовки и плиты</h3>
                  <p className="text-gray-600 mb-6">Проблемы с температурой или конфорками? Ремонтируем все виды духовок.</p>
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Заказать ремонт →
                  </button>
                </>
              )}
              {currentLang === 'es' && (
                <>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Hornos y Estufas</h3>
                  <p className="text-gray-600 mb-6">¿Problemas de temperatura o quemadores? Manejamos todas las reparaciones de hornos.</p>
                  <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Solicitar servicio →
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area - БЕЗ WOODLAND HILLS */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {currentLang === 'en' && (
                <h2 className="text-5xl font-black text-gray-800 mb-8 gradient-text">
                  Service Area
                </h2>
              )}
              {currentLang === 'ru' && (
                <h2 className="text-5xl font-black text-gray-800 mb-8 gradient-text">
                  Область обслуживания
                </h2>
              )}
              {currentLang === 'es' && (
                <h2 className="text-5xl font-black text-gray-800 mb-8 gradient-text">
                  Área de servicio
                </h2>
              )}
              
              {currentLang === 'en' && (
                <p className="text-lg text-gray-700 mb-6">
                  We cover the San Fernando Valley and nearby neighborhoods within 10–15 miles.
                </p>
              )}
              {currentLang === 'ru' && (
                <p className="text-lg text-gray-700 mb-6">
                  Обслуживаем San Fernando Valley и районы в радиусе 10–15 миль.
                </p>
              )}
              {currentLang === 'es' && (
                <p className="text-lg text-gray-700 mb-6">
                  Cubrimos San Fernando Valley y vecindarios a 10–15 millas.
                </p>
              )}
              
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-600">
                  <li>• San Fernando Valley</li>
                  <li>• Calabasas</li>
                  <li>• Tarzana</li>
                  <li>• Reseda</li>
                </ul>
                <ul className="space-y-2 text-gray-600">
                  <li>• Van Nuys</li>
                  <li>• Encino</li>
                  <li>• Sherman Oaks</li>
                  <li>• Canoga Park</li>
                </ul>
              </div>
            </div>
            
            <div className="glass-card bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-gray-200 text-center">
              <div className="text-6xl mb-6">📍</div>
              {currentLang === 'en' && (
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Local Service Area
                </h3>
              )}
              {currentLang === 'ru' && (
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Местная зона обслуживания
                </h3>
              )}
              {currentLang === 'es' && (
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Área de servicio local
                </h3>
              )}
              
              {currentLang === 'en' && (
                <p className="text-sm text-gray-500 mt-2">
                  San Fernando Valley + 10-15 mile radius
                </p>
              )}
              {currentLang === 'ru' && (
                <p className="text-sm text-gray-500 mt-2">
                  San Fernando Valley + радиус 10-15 миль
                </p>
              )}
              {currentLang === 'es' && (
                <p className="text-sm text-gray-500 mt-2">
                  San Fernando Valley + radio de 10-15 millas
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            {currentLang === 'en' && (
              <h2 className="text-5xl font-black text-gray-800 mb-6 gradient-text">
                Frequently Asked Questions
              </h2>
            )}
            {currentLang === 'ru' && (
              <h2 className="text-5xl font-black text-gray-800 mb-6 gradient-text">
                Часто задаваемые вопросы
              </h2>
            )}
            {currentLang === 'es' && (
              <h2 className="text-5xl font-black text-gray-800 mb-6 gradient-text">
                Preguntas frecuentes
              </h2>
            )}
          </div>
          
          <div className="space-y-4">
            {[
              {
                en: { q: "Do you offer same-day service?", a: "Yes, we offer same-day service when possible. Call us early in the day for the best chance of same-day availability." },
                ru: { q: "Предоставляете ли вы услуги в день обращения?", a: "Да, мы предоставляем услуги в день обращения, когда это возможно. Звоните нам рано утром для лучшей возможности получить услугу в тот же день." },
                es: { q: "¿Ofrecen servicio el mismo día?", a: "Sí, ofrecemos servicio el mismo día cuando es posible. Llámenos temprano en el día para tener la mejor oportunidad de disponibilidad el mismo día." }
              },
              {
                en: { q: "What is your diagnostic fee?", a: "Our diagnostic fee is $60, which is applied to the repair cost if you proceed with the service." },
                ru: { q: "Какова ваша плата за диагностику?", a: "Наша плата за диагностику составляет $60, которая засчитывается в стоимость ремонта, если вы продолжаете с обслуживанием." },
                es: { q: "¿Cuál es su tarifa de diagnóstico?", a: "Nuestra tarifa de diagnóstico es de $60, que se aplica al costo de reparación si procede con el servicio." }
              },
              {
                en: { q: "Do you provide warranties?", a: "Yes, we provide a 30-day warranty on labor and 90-day warranty on parts." },
                ru: { q: "Предоставляете ли вы гарантии?", a: "Да, мы предоставляем 30-дневную гарантию на работу и 90-дневную гарантию на запчасти." },
                es: { q: "¿Proporcionan garantías?", a: "Sí, proporcionamos una garantía de 30 días en mano de obra y 90 días en piezas." }
              }
            ].map((faq, index) => (
              <div key={index} className="glass-card bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  className="w-full p-6 text-left font-semibold text-gray-800 hover:bg-white/50 transition-all duration-300"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg">{faq[currentLang].q}</span>
                    <span className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq[currentLang].a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            {currentLang === 'en' && (
              <h2 className="text-5xl font-black text-gray-800 mb-6 gradient-text">
                Get Quick Service
              </h2>
            )}
            {currentLang === 'ru' && (
              <h2 className="text-5xl font-black text-gray-800 mb-6 gradient-text">
                Получить быстрое обслуживание
              </h2>
            )}
            {currentLang === 'es' && (
              <h2 className="text-5xl font-black text-gray-800 mb-6 gradient-text">
                Obtener servicio rápido
              </h2>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Quick Form */}
            <div className="glass-card bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-gray-200">
              {currentLang === 'en' && (
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Request</h3>
              )}
              {currentLang === 'ru' && (
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Быстрый запрос</h3>
              )}
              {currentLang === 'es' && (
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Solicitud rápida</h3>
              )}
              
              <form onSubmit={submitQuickForm} className="space-y-6">
                <input
                  type="text"
                  placeholder={currentLang === 'en' ? "Your Name" : currentLang === 'ru' ? "Ваше имя" : "Su nombre"}
                  value={quickForm.name}
                  onChange={(e) => setQuickForm({...quickForm, name: e.target.value})}
                  className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="tel"
                  placeholder={currentLang === 'en' ? "Phone Number" : currentLang === 'ru' ? "Номер телефона" : "Número de teléfono"}
                  value={quickForm.phone}
                  onChange={(e) => setQuickForm({...quickForm, phone: e.target.value})}
                  className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <select
                  value={quickForm.appliance}
                  onChange={(e) => setQuickForm({...quickForm, appliance: e.target.value})}
                  className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">
                    {currentLang === 'en' ? "Select Appliance" : currentLang === 'ru' ? "Выберите прибор" : "Seleccionar electrodoméstico"}
                  </option>
                  <option value="washer">
                    {currentLang === 'en' ? "Washer" : currentLang === 'ru' ? "Стиральная машина" : "Lavadora"}
                  </option>
                  <option value="dryer">
                    {currentLang === 'en' ? "Dryer" : currentLang === 'ru' ? "Сушилка" : "Secadora"}
                  </option>
                  <option value="oven">
                    {currentLang === 'en' ? "Oven/Range" : currentLang === 'ru' ? "Духовка/Плита" : "Horno/Estufa"}
                  </option>
                  <option value="dishwasher">
                    {currentLang === 'en' ? "Dishwasher" : currentLang === 'ru' ? "Посудомойка" : "Lavavajillas"}
                  </option>
                  <option value="hvac">
                    {currentLang === 'en' ? "HVAC" : currentLang === 'ru' ? "Кондиционер" : "HVAC"}
                  </option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300 holographic-button"
                >
                  {currentLang === 'en' ? "Request Service" : currentLang === 'ru' ? "Заказать ремонт" : "Solicitar servicio"}
                </button>
              </form>
            </div>
            
            {/* Detailed Form */}
            <div className="glass-card bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-gray-200">
              {currentLang === 'en' && (
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Detailed Request</h3>
              )}
              {currentLang === 'ru' && (
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Подробный запрос</h3>
              )}
              {currentLang === 'es' && (
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Solicitud detallada</h3>
              )}
              
              <form onSubmit={submitFullForm} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={currentLang === 'en' ? "Name" : currentLang === 'ru' ? "Имя" : "Nombre"}
                    value={fullForm.name}
                    onChange={(e) => setFullForm({...fullForm, name: e.target.value})}
                    className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="tel"
                    placeholder={currentLang === 'en' ? "Phone" : currentLang === 'ru' ? "Телефон" : "Teléfono"}
                    value={fullForm.phone}
                    onChange={(e) => setFullForm({...fullForm, phone: e.target.value})}
                    className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder={currentLang === 'en' ? "Address" : currentLang === 'ru' ? "Адрес" : "Dirección"}
                  value={fullForm.address}
                  onChange={(e) => setFullForm({...fullForm, address: e.target.value})}
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={currentLang === 'en' ? "ZIP Code" : currentLang === 'ru' ? "Индекс" : "Código postal"}
                    value={fullForm.zip}
                    onChange={(e) => setFullForm({...fullForm, zip: e.target.value})}
                    className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <select
                    value={fullForm.appliance}
                    onChange={(e) => setFullForm({...fullForm, appliance: e.target.value})}
                    className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">
                      {currentLang === 'en' ? "Appliance" : currentLang === 'ru' ? "Прибор" : "Electrodoméstico"}
                    </option>
                    <option value="washer">
                      {currentLang === 'en' ? "Washer" : currentLang === 'ru' ? "Стиральная машина" : "Lavadora"}
                    </option>
                    <option value="dryer">
                      {currentLang === 'en' ? "Dryer" : currentLang === 'ru' ? "Сушилка" : "Secadora"}
                    </option>
                    <option value="oven">
                      {currentLang === 'en' ? "Oven/Range" : currentLang === 'ru' ? "Духовка/Плита" : "Horno/Estufa"}
                    </option>
                    <option value="dishwasher">
                      {currentLang === 'en' ? "Dishwasher" : currentLang === 'ru' ? "Посудомойка" : "Lavavajillas"}
                    </option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder={currentLang === 'en' ? "Preferred Time" : currentLang === 'ru' ? "Удобное время" : "Hora preferida"}
                  value={fullForm.time}
                  onChange={(e) => setFullForm({...fullForm, time: e.target.value})}
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <textarea
                  placeholder={currentLang === 'en' ? "Problem Description" : currentLang === 'ru' ? "Описание проблемы" : "Descripción del problema"}
                  value={fullForm.description}
                  onChange={(e) => setFullForm({...fullForm, description: e.target.value})}
                  rows={3}
                  className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 holographic-button"
                >
                  {currentLang === 'en' ? "Send Detailed Request" : currentLang === 'ru' ? "Отправить подробный запрос" : "Enviar solicitud detallada"}
                </button>
              </form>
            </div>
          </div>
          
          {submitted && (
            <div className="mt-8 p-6 bg-green-100 border border-green-300 rounded-2xl text-center">
              <p className="text-green-800 font-semibold">
                {currentLang === 'en' && "Thank you! We'll contact you soon."}
                {currentLang === 'ru' && "Спасибо! Мы свяжемся с вами в ближайшее время."}
                {currentLang === 'es' && "¡Gracias! Nos pondremos en contacto contigo pronto."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer - БЕЗ WOODLAND HILLS */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">EZ</span>
                </div>
                <span className="text-2xl font-bold">EZFixable</span>
              </div>
              
              {currentLang === 'en' && (
                <p className="text-gray-300 mb-4">
                  Professional appliance repair in San Fernando Valley and surrounding areas. Same-day service when possible.
                </p>
              )}
              {currentLang === 'ru' && (
                <p className="text-gray-300 mb-4">
                  Профессиональный ремонт техники в San Fernando Valley и окрестностях. Выезд в день обращения, когда возможно.
                </p>
              )}
              {currentLang === 'es' && (
                <p className="text-gray-300 mb-4">
                  Reparación profesional de electrodomésticos en San Fernando Valley y áreas circundantes. Servicio el mismo día cuando sea posible.
                </p>
              )}
            </div>
            
            <div>
              {currentLang === 'en' && (
                <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              )}
              {currentLang === 'ru' && (
                <h3 className="text-xl font-bold mb-6">Контактная информация</h3>
              )}
              {currentLang === 'es' && (
                <h3 className="text-xl font-bold mb-6">Información de contacto</h3>
              )}
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-orange-500">📞</span>
                  <span>+1 (323) 388-1315</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-500">📧</span>
                  <span>ezfixable@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange-500">🕒</span>
                  <span>
                    {currentLang === 'en' && 'Mon-Sun: 8AM-8PM'}
                    {currentLang === 'ru' && 'Пн-Вс: 8:00-20:00'}
                    {currentLang === 'es' && 'Lun-Dom: 8AM-8PM'}
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              {currentLang === 'en' && (
                <h3 className="text-xl font-bold mb-6">Our Services</h3>
              )}
              {currentLang === 'ru' && (
                <h3 className="text-xl font-bold mb-6">Наши услуги</h3>
              )}
              {currentLang === 'es' && (
                <h3 className="text-xl font-bold mb-6">Nuestros servicios</h3>
              )}
              
              <div className="space-y-2 text-gray-300">
                {currentLang === 'en' && (
                  <>
                    <div>• Washer Repair</div>
                    <div>• Dryer Repair</div>
                    <div>• Oven & Range Repair</div>
                    <div>• Dishwasher Repair</div>
                    <div>• HVAC Services</div>
                  </>
                )}
                {currentLang === 'ru' && (
                  <>
                    <div>• Ремонт стиральных машин</div>
                    <div>• Ремонт сушилок</div>
                    <div>• Ремонт духовок и плит</div>
                    <div>• Ремонт посудомоек</div>
                    <div>• Услуги HVAC</div>
                  </>
                )}
                {currentLang === 'es' && (
                  <>
                    <div>• Reparación de lavadoras</div>
                    <div>• Reparación de secadoras</div>
                    <div>• Reparación de hornos y estufas</div>
                    <div>• Reparación de lavavajillas</div>
                    <div>• Servicios HVAC</div>
                  </>
                )}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EZFixable. {currentLang === 'en' ? 'All rights reserved.' : currentLang === 'ru' ? 'Все права защищены.' : 'Todos los derechos reservados.'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
