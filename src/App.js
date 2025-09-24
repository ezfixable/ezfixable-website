import React, { useState, useEffect } from "react";
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
    
    // Create simple form element for submission
    const form = document.createElement('form');
    form.action = 'https://formsubmit.co/ezfixable@gmail.com';
    form.method = 'POST';
    form.target = '_blank';
    
    // Add all form data
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
    setTimeout(() => {
      setSubmitted(false);
      setQuickForm({ name: '', phone: '', appliance: '' });
    }, 2000);
  };

  const submitFullForm = (e) => {
    e.preventDefault();
    
    if (!fullForm.name || !fullForm.phone) {
      alert('Please fill in name and phone');
      return;
    }
    
    // Create simple form element for submission
    const form = document.createElement('form');
    form.action = 'https://formsubmit.co/ezfixable@gmail.com';
    form.method = 'POST';
    form.target = '_blank';
    
    // Add all form data
    const fields = {
      name: fullForm.name,
      phone: fullForm.phone,
      address: fullForm.address,
      zip: fullForm.zip,
      appliance: fullForm.appliance,
      preferred_time: fullForm.time,
      description: fullForm.description,
      _subject: 'New Detailed Service Request - EZFixable',
      _template: 'table',
      _next: 'https://ezfixable.com'
    };
    
    Object.keys(fields).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = fields[key] || '';
      form.appendChild(input);
    });
    
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFullForm({
        name: '', phone: '', address: '', zip: '', 
        appliance: '', time: '', description: ''
      });
    }, 2000);
  };

  useEffect(() => {
    // Simple analytics tracking without complex event handlers
    const trackClick = (e) => {
      const target = e.target.closest('[data-analytics]');
      if (target) {
        const action = target.getAttribute('data-analytics');
        console.log('Analytics:', action);
      }
    };
    
    document.addEventListener('click', trackClick);
    return () => document.removeEventListener('click', trackClick);
  }, []);

  return (
    <div className="font-sans overflow-x-hidden w-full min-h-screen">
      {/* Skip Links for Accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-orange text-white p-2 z-50">Skip to main content</a>
      
      {/* Sticky Header Bar */}
      <div className="sticky-header fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <img src="https://customer-assets.emergentagent.com/job_ezfixable-landing/artifacts/1esvhsuc_photo_2025-09-11_23-07-46.jpg" 
                 alt="EZFixable Logo" 
                 className="h-12 w-12 sm:h-16 sm:w-16 logo-animated" />
            <span className="font-bold text-navy text-lg sm:text-2xl gradient-text">EZFixable</span>
          </div>
          
          <div className="flex items-center space-x-3 sm:space-x-6">
            {/* Language Switcher */}
            <div className="flex space-x-1 sm:space-x-2">
              <button onClick={() => setCurrentLang('en')} 
                      className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${currentLang === 'en' ? 'bg-orange text-white neon-glow' : 'text-gray-600 hover:text-orange glass-card'}`}>EN</button>
              <button onClick={() => setCurrentLang('ru')} 
                      className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${currentLang === 'ru' ? 'bg-orange text-white neon-glow' : 'text-gray-600 hover:text-orange glass-card'}`}>RU</button>
              <button onClick={() => setCurrentLang('es')} 
                      className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${currentLang === 'es' ? 'bg-orange text-white neon-glow' : 'text-gray-600 hover:text-orange glass-card'}`}>ES</button>
            </div>
            
            {/* Call Button */}
            <a href="tel:+13233881315" 
               className="holo-button text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold phone-pulse hover:shadow-2xl transition-all duration-300 text-sm sm:text-lg whitespace-nowrap"
               data-analytics="call">
               <span className="hidden sm:inline">📞 Call Now</span>
               <span className="sm:hidden">📞</span>
            </a>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="particle" style={{left: '10%', animationDelay: '0s'}}></div>
        <div className="particle" style={{left: '20%', animationDelay: '-1s'}}></div>
        <div className="particle" style={{left: '30%', animationDelay: '-2s'}}></div>
        <div className="particle" style={{left: '70%', animationDelay: '-3s'}}></div>
        <div className="particle" style={{left: '80%', animationDelay: '-4s'}}></div>
        <div className="particle" style={{left: '90%', animationDelay: '-0.5s'}}></div>
      </div>

      <main id="main-content" className="pt-28">
        
        {/* Hero Section */}
        <section id="hero" className="hero-colorful py-24 lg:py-32 digital-grid relative min-h-screen flex items-center">
          {/* Background appliance images with parallax */}
          <div className="parallax-bg" style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_ezfixable-landing/artifacts/j6kbwtgw_photo_2025-08-21_03-20-57.jpg')`
          }}></div>
          
          {/* Floating appliance elements */}
          <div className="floating-appliance" style={{top: '20%', left: '5%', width: '80px', height: '160px'}}>
            <img src="https://customer-assets.emergentagent.com/job_ezfixable-landing/artifacts/j6kbwtgw_photo_2025-08-21_03-20-57.jpg" 
                 alt="Wall Heater" className="w-full h-full object-cover rounded-lg opacity-20" />
          </div>
          
          <div className="floating-appliance" style={{top: '60%', right: '5%', width: '100px', height: '60px'}}>
            <img src="https://customer-assets.emergentagent.com/job_ezfixable-landing/artifacts/sa1vxf1h_photo_2025-08-21_03-20-54.jpg" 
                 alt="AC Unit" className="w-full h-full object-cover rounded-lg opacity-20" />
          </div>
          
          <div className="hero-content max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left space-y-8 fade-in-up">
                {currentLang === 'en' && (
                  <h1 className="text-5xl lg:text-7xl font-black gradient-text mb-8 text-depth leading-tight">
                    Appliance & Commercial Oven Repair in Woodland Hills
                  </h1>
                )}
                {currentLang === 'ru' && (
                  <h1 className="text-5xl lg:text-7xl font-black gradient-text mb-8 text-depth leading-tight">
                    Ремонт бытовой техники и коммерческих печей в Woodland Hills
                  </h1>
                )}
                {currentLang === 'es' && (
                  <h1 className="text-5xl lg:text-7xl font-black gradient-text mb-8 text-depth leading-tight">
                    Reparación de electrodomésticos y hornos comerciales en Woodland Hills
                  </h1>
                )}
                
                {currentLang === 'en' && (
                  <p className="text-2xl text-gray-700 mb-12 font-medium">
                    Same-day when possible. Transparent pricing. 30-day labor / 90-day parts warranty.
                  </p>
                )}
                {currentLang === 'ru' && (
                  <p className="text-2xl text-gray-700 mb-12 font-medium">
                    Выезд в день обращения, когда возможно. Прозрачные цены. Гарантия: 30 дней на работу / 90 дней на детали.
                  </p>
                )}
                {currentLang === 'es' && (
                  <p className="text-2xl text-gray-700 mb-12 font-medium">
                    Servicio el mismo día cuando sea posible. Precios transparentes. Garantía: 30 días mano de obra / 90 días piezas.
                  </p>
                )}
                
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start scale-in">
                  <a href="tel:+13233881315" 
                     className="holo-button text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-300 text-center neon-glow"
                     data-analytics="call">
                    {currentLang === 'en' && '📞 Call Now'}
                    {currentLang === 'ru' && '📞 Позвонить'}
                    {currentLang === 'es' && '📞 Llamar ahora'}
                  </a>
                  <a href="#contact" 
                     className="glass-card-colorful text-navy border-2 border-navy px-12 py-6 rounded-2xl font-bold text-xl hover:bg-navy hover:text-white transition-all duration-500 text-center"
                     data-analytics="form-open">
                    {currentLang === 'en' && '📝 Request Service'}
                    {currentLang === 'ru' && '📝 Оставить заявку'}
                    {currentLang === 'es' && '📝 Solicitar servicio'}
                  </a>
                  <a href="sms:+13233881315?body=Hi%20EZFixable%2C%20I%20need%20service" 
                     className="glass-card-colorful text-navy px-12 py-6 rounded-2xl font-bold text-xl hover:bg-gray-200 transition-all duration-300 text-center"
                     data-analytics="sms">
                    {currentLang === 'en' && '💬 Text Us'}
                    {currentLang === 'ru' && '💬 Написать SMS'}
                    {currentLang === 'es' && '💬 Enviar SMS'}
                  </a>
                </div>
                
                {/* Diagnostic Info */}
                <div className="glass-card-colorful p-8 rounded-2xl border border-orange/20 neon-glow">
                  {currentLang === 'en' && (
                    <p className="text-2xl font-bold text-navy">
                      $60 diagnostic fee, applied to your repair.
                    </p>
                  )}
                  {currentLang === 'ru' && (
                    <p className="text-2xl font-bold text-navy">
                      Диагностика $60, засчитывается в ремонт.
                    </p>
                  )}
                  {currentLang === 'es' && (
                    <p className="text-2xl font-bold text-navy">
                      Diagnóstico $60, se aplica a la reparación.
                    </p>
                  )}
                </div>
                
                {/* Trust Badges with Real Links */}
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-12">
                  <a href="https://www.google.com/search?q=EZFixable+appliance+repair+Woodland+Hills&rlz=1C1GCEA_en&oq=EZFixable" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="glass-card-colorful px-8 py-4 rounded-2xl neon-glow hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span>
                      <span className="text-lg font-bold">Google Reviews</span>
                    </div>
                  </a>
                  <a href="https://yelp.to/fqFFTd-iW9"
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="glass-card-colorful px-8 py-4 rounded-2xl neon-glow hover:scale-105 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span>
                      <span className="text-lg font-bold">Yelp Reviews</span>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="text-center scale-in">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858" 
                       alt="Modern Kitchen Appliances" 
                       className="rounded-3xl shadow-2xl mx-auto max-w-full h-auto card-3d transform rotate-2"
                       loading="lazy" />
                  
                  {/* Floating service badges */}
                  <div className="absolute top-2 left-2 glass-card-colorful p-3 rounded-2xl neon-glow floating-appliance">
                    <span className="text-2xl">🔧</span>
                    <p className="text-xs font-bold text-navy mt-1">Expert Repair</p>
                  </div>
                  
                  <div className="absolute bottom-2 right-2 glass-card-colorful p-3 rounded-2xl neon-glow floating-appliance">
                    <span className="text-2xl">⚡</span>
                    <p className="text-xs font-bold text-navy mt-1">Same Day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Section divider */}
          <div className="section-divider absolute bottom-0 left-0 right-0"></div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 services-colorful digital-grid relative">
          {/* Background elements */}
          <div className="parallax-bg opacity-3" style={{
            backgroundImage: `url('https://customer-assets.emergentagent.com/job_ezfixable-landing/artifacts/xclogapu_photo_2025-08-21_03-20-48.jpg')`
          }}></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16 fade-in-up">
              {currentLang === 'en' && (
                <h2 className="text-4xl lg:text-6xl font-black gradient-text mb-6 text-depth">
                  Our Repair Services
                </h2>
              )}
              {currentLang === 'ru' && (
                <h2 className="text-4xl lg:text-6xl font-black gradient-text mb-6 text-depth">
                  Наши услуги по ремонту
                </h2>
              )}
              {currentLang === 'es' && (
                <h2 className="text-4xl lg:text-6xl font-black gradient-text mb-6 text-depth">
                  Nuestros servicios de reparación
                </h2>
              )}
              
              <div className="section-divider w-32 mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              
              {/* Washer Repair */}
              <div className="glass-card-colorful rounded-3xl p-8 card-3d hover:neon-glow transition-all duration-500 scale-in">
                <div className="card-inner">
                  <img src="https://customer-assets.emergentagent.com/job_ezfixable-landing/artifacts/4aq4h6n0_photo_2025-08-21_03-20-38.jpg" 
                       alt="Washer Repair" 
                       className="w-full h-48 object-cover rounded-2xl mb-6"
                       loading="lazy" />
                  
                  {currentLang === 'en' && <h3 className="text-2xl font-black text-navy mb-4">Washers</h3>}
                  {currentLang === 'ru' && <h3 className="text-2xl font-black text-navy mb-4">Стиральные машины</h3>}
                  {currentLang === 'es' && <h3 className="text-2xl font-black text-navy mb-4">Lavadoras</h3>}
                  
                  {currentLang === 'en' && (
                    <p className="text-gray-600 mb-6 text-lg">
                      Not spinning, draining, or starting? We fix all washer issues quickly.
                    </p>
                  )}
                  {currentLang === 'ru' && (
                    <p className="text-gray-600 mb-6 text-lg">
                      Не крутит, не сливает или не запускается? Быстро устраним все неисправности.
                    </p>
                  )}
                  {currentLang === 'es' && (
                    <p className="text-gray-600 mb-6 text-lg">
                      ¿No gira, no drena o no arranca? Reparamos todos los problemas rápidamente.
                    </p>
                  )}
                  
                  <a href="#contact" className="inline-block holo-button text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300">
                    {currentLang === 'en' && 'Request Service →'}
                    {currentLang === 'ru' && 'Заказать ремонт →'}
                    {currentLang === 'es' && 'Solicitar servicio →'}
                  </a>
                </div>
              </div>

              {/* Dryer Repair */}
              <div className="glass-card-colorful rounded-3xl p-8 card-3d hover:neon-glow transition-all duration-500 scale-in">
                <div className="card-inner">
                  <img src="https://customer-assets.emergentagent.com/job_ezfixable-landing/artifacts/2w0pgojc_photo_2025-08-21_03-20-41.jpg" 
                       alt="Dryer Repair" 
                       className="w-full h-48 object-cover rounded-2xl mb-6"
                       loading="lazy" />
                       
                  {currentLang === 'en' && <h3 className="text-2xl font-black text-navy mb-4">Dryers</h3>}
                  {currentLang === 'ru' && <h3 className="text-2xl font-black text-navy mb-4">Сушилки</h3>}
                  {currentLang === 'es' && <h3 className="text-2xl font-black text-navy mb-4">Secadoras</h3>}
                  
                  {currentLang === 'en' && (
                    <p className="text-gray-600 mb-6 text-lg">
                      Not heating or taking too long? We restore proper drying function.
                    </p>
                  )}
                  {currentLang === 'ru' && (
                    <p className="text-gray-600 mb-6 text-lg">
                      Не греет или долго сушит? Восстановим правильную работу сушки.
                    </p>
                  )}
                  {currentLang === 'es' && (
                    <p className="text-gray-600 mb-6 text-lg">
                      ¿No calienta o tarda mucho? Restauramos el funcionamiento correcto.
                    </p>
                  )}
                  
                  <a href="#contact" className="inline-block holo-button text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300">
                    {currentLang === 'en' && 'Request Service →'}
                    {currentLang === 'ru' && 'Заказать ремонт →'}
                    {currentLang === 'es' && 'Solicitar servicio →'}
                  </a>
                </div>
              </div>

              {/* Oven Service */}
              <div className="glass-card-colorful rounded-3xl p-8 card-3d hover:neon-glow transition-all duration-500 scale-in">
                <div className="card-inner">
                  <img src="https://images.unsplash.com/photo-1715591780947-2784b54e5bfa" 
                       alt="Oven Repair" 
                       className="w-full h-48 object-cover rounded-2xl mb-6"
                       loading="lazy" />
                       
                  {currentLang === 'en' && <h3 className="text-2xl font-black text-navy mb-4">Ovens & Ranges</h3>}
                  {currentLang === 'ru' && <h3 className="text-2xl font-black text-navy mb-4">Духовки и плиты</h3>}
                  {currentLang === 'es' && <h3 className="text-2xl font-black text-navy mb-4">Hornos y cocinas</h3>}
                  
                  {currentLang === 'en' && (
                    <p className="text-gray-600 mb-6 text-lg">
                      Temperature issues or burner problems? We handle all oven repairs.
                    </p>
                  )}
                  {currentLang === 'ru' && (
                    <p className="text-gray-600 mb-6 text-lg">
                      Проблемы с температурой или конфорками? Ремонтируем все виды духовок.
                    </p>
                  )}
                  {currentLang === 'es' && (
                    <p className="text-gray-600 mb-6 text-lg">
                      ¿Problemas de temperatura o quemadores? Reparamos todos los hornos.
                    </p>
                  )}
                  
                  <a href="#contact" className="inline-block holo-button text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300">
                    {currentLang === 'en' && 'Request Service →'}
                    {currentLang === 'ru' && 'Заказать ремонт →'}
                    {currentLang === 'es' && 'Solicitar servicio →'}
                  </a>
                </div>
              </div>

              {/* Dishwasher Service */}
              <div className="glass-card-colorful rounded-3xl p-8 card-3d hover:neon-glow transition-all duration-500 scale-in">
                <div className="card-inner">
                  <img src="https://images.unsplash.com/photo-1581622558663-b2e33377dfb2" 
                       alt="Dishwasher Repair" 
                       className="w-full h-48 object-cover rounded-2xl mb-6"
                       loading="lazy" />
                       
                  {currentLang === 'en' && <h3 className="text-2xl font-black text-navy mb-4">Dishwashers</h3>}
                  {currentLang === 'ru' && <h3 className="text-2xl font-black text-navy mb-4">Посудомоечные машины</h3>}
                  {currentLang === 'es' && <h3 className="text-2xl font-black text-navy mb-4">Lavavajillas</h3>}
                  
                  {currentLang === 'en' && (
                    <p className="text-gray-600 mb-6 text-lg">
                      Not cleaning properly or leaking? We fix all dishwasher issues.
                    </p>
                  )}
                  {currentLang === 'ru' && (
                    <p className="text-gray-600 mb-6 text-lg">
                      Плохо моет или протекает? Устраним все неисправности посудомоек.
                    </p>
                  )}
                  {currentLang === 'es' && (
                    <p className="text-gray-600 mb-6 text-lg">
                      ¿No limpia bien o gotea? Reparamos todos los problemas.
                    </p>
                  )}
                  
                  <a href="#contact" className="inline-block holo-button text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300">
                    {currentLang === 'en' && 'Request Service →'}
                    {currentLang === 'ru' && 'Заказать ремонт →'}
                    {currentLang === 'es' && 'Solicitar servicio →'}
                  </a>
                </div>
              </div>

              {/* Commercial Ovens */}
              <div className="glass-card-colorful rounded-3xl p-8 card-3d hover:neon-glow transition-all duration-500 scale-in">
                <div className="card-inner">
                  <img src="https://images.unsplash.com/photo-1574801439983-71705fb11bc9" 
                       alt="Commercial Oven" 
                       className="w-full h-48 object-cover rounded-2xl mb-6"
                       loading="lazy" />
                       
                  {currentLang === 'en' && <h3 className="text-2xl font-black text-navy mb-4">Commercial & Pizza Ovens</h3>}
                  {currentLang === 'ru' && <h3 className="text-2xl font-black text-navy mb-4">Коммерческие и пицца-печи</h3>}
                  {currentLang === 'es' && <h3 className="text-2xl font-black text-navy mb-4">Hornos comerciales y para pizza</h3>}
                  
                  {currentLang === 'en' && (
                    <p className="text-gray-600 mb-6 text-lg">
                      Restaurant equipment down? We specialize in commercial oven repair.
                    </p>
                  )}
                  {currentLang === 'ru' && (
                    <p className="text-gray-600 mb-6 text-lg">
                      Оборудование ресторана сломалось? Специализируемся на ремонте коммерческих печей.
                    </p>
                  )}
                  {currentLang === 'es' && (
                    <p className="text-gray-600 mb-6 text-lg">
                      ¿Equipo de restaurante averiado? Nos especializamos en reparación comercial.
                    </p>
                  )}
                  
                  <a href="#contact" className="inline-block holo-button text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300">
                    {currentLang === 'en' && 'Request Service →'}
                    {currentLang === 'ru' && 'Заказать ремонт →'}
                    {currentLang === 'es' && 'Solicitar servicio →'}
                  </a>
                </div>
              </div>

              {/* HVAC */}
              <div className="glass-card-colorful rounded-3xl p-8 card-3d hover:neon-glow transition-all duration-500 scale-in">
                <div className="card-inner">
                  <img src="https://customer-assets.emergentagent.com/job_ezfixable-landing/artifacts/sa1vxf1h_photo_2025-08-21_03-20-54.jpg" 
                       alt="HVAC System" 
                       className="w-full h-48 object-cover rounded-2xl mb-6"
                       loading="lazy" />
                       
                  {currentLang === 'en' && <h3 className="text-2xl font-black text-navy mb-4">HVAC & Wall Heaters</h3>}
                  {currentLang === 'ru' && <h3 className="text-2xl font-black text-navy mb-4">HVAC и настенные обогреватели</h3>}
                  {currentLang === 'es' && <h3 className="text-2xl font-black text-navy mb-4">HVAC y calentadores de pared</h3>}
                  
                  {currentLang === 'en' && (
                    <p className="text-gray-600 mb-6 text-lg">
                      Heating or cooling issues? We service HVAC systems and wall heaters.
                    </p>
                  )}
                  {currentLang === 'ru' && (
                    <p className="text-gray-600 mb-6 text-lg">
                      Проблемы с отоплением или охлаждением? Обслуживаем HVAC системы.
                    </p>
                  )}
                  {currentLang === 'es' && (
                    <p className="text-gray-600 mb-6 text-lg">
                      ¿Problemas de calefacción o refrigeración? Reparamos sistemas HVAC.
                    </p>
                  )}
                  
                  <a href="#contact" className="inline-block holo-button text-white font-bold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300">
                    {currentLang === 'en' && 'Request Service →'}
                    {currentLang === 'ru' && 'Заказать ремонт →'}
                    {currentLang === 'es' && 'Solicitar servicio →'}
                  </a>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Section divider */}
          <div className="section-divider absolute bottom-0 left-0 right-0"></div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-24 benefits-colorful">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 fade-in-up">
              {currentLang === 'en' && (
                <h2 className="text-4xl lg:text-6xl font-black gradient-text mb-6 text-depth">
                  Why Choose EZFixable?
                </h2>
              )}
              {currentLang === 'ru' && (
                <h2 className="text-4xl lg:text-6xl font-black gradient-text mb-6 text-depth">
                  Почему выбирают EZFixable?
                </h2>
              )}
              {currentLang === 'es' && (
                <h2 className="text-4xl lg:text-6xl font-black gradient-text mb-6 text-depth">
                  ¿Por qué elegir EZFixable?
                </h2>
              )}
              
              <div className="section-divider w-32 mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center scale-in">
                <div className="glass-card-colorful rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <span className="text-3xl">💯</span>
                </div>
                {currentLang === 'en' && <h3 className="font-black text-navy mb-3 text-xl">Honest Diagnostics</h3>}
                {currentLang === 'ru' && <h3 className="font-black text-navy mb-3 text-xl">Честная диагностика</h3>}
                {currentLang === 'es' && <h3 className="font-black text-navy mb-3 text-xl">Diagnóstico honesto</h3>}
                
                {currentLang === 'en' && <p className="text-gray-600 text-lg">Transparent pricing, no hidden fees</p>}
                {currentLang === 'ru' && <p className="text-gray-600 text-lg">Прозрачные цены, никаких скрытых платежей</p>}
                {currentLang === 'es' && <p className="text-gray-600 text-lg">Precios transparentes, sin tarifas ocultas</p>}
              </div>
              
              <div className="text-center scale-in">
                <div className="glass-card-colorful rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <span className="text-3xl">⚡</span>
                </div>
                {currentLang === 'en' && <h3 className="font-black text-navy mb-3 text-xl">Fast Arrival</h3>}
                {currentLang === 'ru' && <h3 className="font-black text-navy mb-3 text-xl">Быстрое прибытие</h3>}
                {currentLang === 'es' && <h3 className="font-black text-navy mb-3 text-xl">Llegada rápida</h3>}
                
                {currentLang === 'en' && <p className="text-gray-600 text-lg">Same-day service when possible</p>}
                {currentLang === 'ru' && <p className="text-gray-600 text-lg">Выезд в день обращения, когда возможно</p>}
                {currentLang === 'es' && <p className="text-gray-600 text-lg">Servicio el mismo día cuando sea posible</p>}
              </div>
              
              <div className="text-center scale-in">
                <div className="glass-card-colorful rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <span className="text-3xl">🔧</span>
                </div>
                {currentLang === 'en' && <h3 className="font-black text-navy mb-3 text-xl">OEM Parts</h3>}
                {currentLang === 'ru' && <h3 className="font-black text-navy mb-3 text-xl">Оригинальные запчасти</h3>}
                {currentLang === 'es' && <h3 className="font-black text-navy mb-3 text-xl">Piezas originales</h3>}
                
                {currentLang === 'en' && <p className="text-gray-600 text-lg">Original parts & proper installation</p>}
                {currentLang === 'ru' && <p className="text-gray-600 text-lg">Оригинальные детали и правильная установка</p>}
                {currentLang === 'es' && <p className="text-gray-600 text-lg">Piezas originales e instalación correcta</p>}
              </div>
              
              <div className="text-center scale-in">
                <div className="glass-card-colorful rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <span className="text-3xl">🛡️</span>
                </div>
                {currentLang === 'en' && <h3 className="font-black text-navy mb-3 text-xl">Warranty</h3>}
                {currentLang === 'ru' && <h3 className="font-black text-navy mb-3 text-xl">Гарантия</h3>}
                {currentLang === 'es' && <h3 className="font-black text-navy mb-3 text-xl">Garantía</h3>}
                
                {currentLang === 'en' && <p className="text-gray-600 text-lg">30-day labor / 90-day parts</p>}
                {currentLang === 'ru' && <p className="text-gray-600 text-lg">30 дней на работу / 90 дней на детали</p>}
                {currentLang === 'es' && <p className="text-gray-600 text-lg">30 días mano de obra / 90 días piezas</p>}
              </div>
            </div>
          </div>
          
          {/* Section divider */}
          <div className="section-divider absolute bottom-0 left-0 right-0"></div>
        </section>

        {/* Service Area Section */}
        <section id="areas" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {currentLang === 'en' && (
                  <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
                    Service Area
                  </h2>
                )}
                {currentLang === 'ru' && (
                  <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
                    Зона обслуживания
                  </h2>
                )}
                {currentLang === 'es' && (
                  <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-6">
                    Área de servicio
                  </h2>
                )}
                
                {currentLang === 'en' && (
                  <p className="text-lg text-gray-700 mb-6">
                    We cover Woodland Hills and nearby neighborhoods within 10–15 miles.
                  </p>
                )}
                {currentLang === 'ru' && (
                  <p className="text-lg text-gray-700 mb-6">
                    Обслуживаем Woodland Hills и районы в радиусе 10–15 миль.
                  </p>
                )}
                {currentLang === 'es' && (
                  <p className="text-lg text-gray-700 mb-6">
                    Cubrimos Woodland Hills y vecindarios a 10–15 millas.
                  </p>
                )}
                
                <div className="grid grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Woodland Hills</li>
                    <li>• Calabasas</li>
                    <li>• Tarzana</li>
                    <li>• Reseda</li>
                    <li>• Encino</li>
                  </ul>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Canoga Park</li>
                    <li>• Chatsworth</li>
                    <li>• Northridge</li>
                    <li>• Thousand Oaks</li>
                  </ul>
                </div>
                
                <div className="mt-6 p-4 bg-orange/10 rounded-lg border border-orange/20">
                  {currentLang === 'en' && (
                    <p className="text-sm text-orange font-medium">
                      ⚡ Same-day arrival when possible
                    </p>
                  )}
                  {currentLang === 'ru' && (
                    <p className="text-sm text-orange font-medium">
                      ⚡ Выезд в тот же день, когда возможно
                    </p>
                  )}
                  {currentLang === 'es' && (
                    <p className="text-sm text-orange font-medium">
                      ⚡ Llegada el mismo día cuando sea posible
                    </p>
                  )}
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🗺️</div>
                {currentLang === 'en' && <p className="text-gray-600">Service Area Map</p>}
                {currentLang === 'ru' && <p className="text-gray-600">Карта зоны обслуживания</p>}
                {currentLang === 'es' && <p className="text-gray-600">Mapa del área de servicio</p>}
                
                {currentLang === 'en' && (
                  <p className="text-sm text-gray-500 mt-2">
                    Woodland Hills + 10-15 mile radius
                  </p>
                )}
                {currentLang === 'ru' && (
                  <p className="text-sm text-gray-500 mt-2">
                    Woodland Hills + радиус 10-15 миль
                  </p>
                )}
                {currentLang === 'es' && (
                  <p className="text-sm text-gray-500 mt-2">
                    Woodland Hills + radio de 10-15 millas
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Band */}
        <section id="cta-band" className="py-12 cta-gradient">
          <div className="max-w-7xl mx-auto px-4 text-center">
            {currentLang === 'en' && (
              <h2 className="text-3xl font-bold text-white mb-4">
                Need Appliance Repair Today?
              </h2>
            )}
            {currentLang === 'ru' && (
              <h2 className="text-3xl font-bold text-white mb-4">
                Нужен ремонт техники сегодня?
              </h2>
            )}
            {currentLang === 'es' && (
              <h2 className="text-3xl font-bold text-white mb-4">
                ¿Necesita reparación de electrodomésticos hoy?
              </h2>
            )}
            
            {currentLang === 'en' && (
              <p className="text-xl text-white/90 mb-8">
                Call now or request service online. We're ready to help!
              </p>
            )}
            {currentLang === 'ru' && (
              <p className="text-xl text-white/90 mb-8">
                Позвоните сейчас или оставьте заявку онлайн. Мы готовы помочь!
              </p>
            )}
            {currentLang === 'es' && (
              <p className="text-xl text-white/90 mb-8">
                Llame ahora o solicite servicio en línea. ¡Estamos listos para ayudar!
              </p>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+13233881315" 
                 className="bg-white text-navy px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 phone-pulse"
                 data-analytics="call">
                📞 +1 323-388-1315
              </a>
              
              {/* Quick Form */}
              <form onSubmit={submitQuickForm} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md w-full">
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" 
                         value={quickForm.name}
                         onChange={(e) => setQuickForm({...quickForm, name: e.target.value})}
                         placeholder="Your name" 
                         className="px-3 py-2 rounded-lg text-navy placeholder-gray-500" required />
                  <input type="tel" 
                         value={quickForm.phone}
                         onChange={(e) => setQuickForm({...quickForm, phone: e.target.value})}
                         placeholder="Phone" 
                         className="px-3 py-2 rounded-lg text-navy placeholder-gray-500" required />
                </div>
                <select value={quickForm.appliance}
                        onChange={(e) => setQuickForm({...quickForm, appliance: e.target.value})}
                        className="w-full mt-3 px-3 py-2 rounded-lg text-navy" required>
                  <option value="">
                    {currentLang === 'en' && 'Select appliance'}
                    {currentLang === 'ru' && 'Выберите технику'}
                    {currentLang === 'es' && 'Seleccione electrodoméstico'}
                  </option>
                  <option value="washer">Washer / Стиральная машина / Lavadora</option>
                  <option value="dryer">Dryer / Сушилка / Secadora</option>
                  <option value="oven">Oven / Духовка / Horno</option>
                  <option value="dishwasher">Dishwasher / Посудомойка / Lavavajillas</option>
                  <option value="commercial">Commercial / Коммерческая / Comercial</option>
                  <option value="hvac">HVAC</option>
                </select>
                
                <button type="submit" className="w-full mt-3 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors"
                        disabled={submitted}>
                  {submitted ? (
                    currentLang === 'en' ? 'Sending...' : 
                    currentLang === 'ru' ? 'Отправляем...' : 
                    'Enviando...'
                  ) : (
                    <>
                      {currentLang === 'en' && 'Send Request'}
                      {currentLang === 'ru' && 'Отправить заявку'}
                      {currentLang === 'es' && 'Enviar solicitud'}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              {currentLang === 'en' && (
                <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
                  Frequently Asked Questions
                </h2>
              )}
              {currentLang === 'ru' && (
                <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
                  Часто задаваемые вопросы
                </h2>
              )}
              {currentLang === 'es' && (
                <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
                  Preguntas frecuentes
                </h2>
              )}
            </div>
            
            <div className="space-y-4">
              
              {/* FAQ 1 */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === 1 ? null : 1)} 
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                  {currentLang === 'en' && (
                    <span className="font-semibold text-navy">
                      Do you offer same-day service?
                    </span>
                  )}
                  {currentLang === 'ru' && (
                    <span className="font-semibold text-navy">
                      Предоставляете ли вы услуги в день обращения?
                    </span>
                  )}
                  {currentLang === 'es' && (
                    <span className="font-semibold text-navy">
                      ¿Ofrecen servicio el mismo día?
                    </span>
                  )}
                  <span className={`text-orange transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {openFaq === 1 && (
                  <div className="px-6 pb-4 text-gray-600">
                    {currentLang === 'en' && (
                      <p>
                        Yes, we offer same-day service when possible, depending on our schedule and your location within our service area.
                      </p>
                    )}
                    {currentLang === 'ru' && (
                      <p>
                        Да, мы предоставляем услуги в день обращения, когда это возможно, в зависимости от нашего расписания и вашего местоположения.
                      </p>
                    )}
                    {currentLang === 'es' && (
                      <p>
                        Sí, ofrecemos servicio el mismo día cuando es posible, dependiendo de nuestro horario y su ubicación dentro de nuestra área de servicio.
                      </p>
                    )}
                  </div>
                )}
              </div>
              
              {/* FAQ 2 */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === 2 ? null : 2)} 
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                  {currentLang === 'en' && (
                    <span className="font-semibold text-navy">
                      What brands do you service?
                    </span>
                  )}
                  {currentLang === 'ru' && (
                    <span className="font-semibold text-navy">
                      Какие бренды вы обслуживаете?
                    </span>
                  )}
                  {currentLang === 'es' && (
                    <span className="font-semibold text-navy">
                      ¿Qué marcas reparan?
                    </span>
                  )}
                  <span className={`text-orange transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {openFaq === 2 && (
                  <div className="px-6 pb-4 text-gray-600">
                    {currentLang === 'en' && (
                      <p>
                        We service all major brands including LG, Samsung, Whirlpool, GE, Bosch, KitchenAid, Maytag, Frigidaire, and many others.
                      </p>
                    )}
                    {currentLang === 'ru' && (
                      <p>
                        Мы обслуживаем все основные бренды, включая LG, Samsung, Whirlpool, GE, Bosch, KitchenAid, Maytag, Frigidaire и многие другие.
                      </p>
                    )}
                    {currentLang === 'es' && (
                      <p>
                        Reparamos todas las marcas principales incluyendo LG, Samsung, Whirlpool, GE, Bosch, KitchenAid, Maytag, Frigidaire y muchas otras.
                      </p>
                    )}
                  </div>
                )}
              </div>
              
              {/* FAQ 3 */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === 3 ? null : 3)} 
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                  {currentLang === 'en' && (
                    <span className="font-semibold text-navy">
                      How much is the diagnostic fee?
                    </span>
                  )}
                  {currentLang === 'ru' && (
                    <span className="font-semibold text-navy">
                      Сколько стоит диагностика?
                    </span>
                  )}
                  {currentLang === 'es' && (
                    <span className="font-semibold text-navy">
                      ¿Cuánto cuesta el diagnóstico?
                    </span>
                  )}
                  <span className={`text-orange transition-transform ${openFaq === 3 ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {openFaq === 3 && (
                  <div className="px-6 pb-4 text-gray-600">
                    {currentLang === 'en' && (
                      <p>
                        Our diagnostic fee is $60, which is applied toward your repair if you decide to proceed with our service.
                      </p>
                    )}
                    {currentLang === 'ru' && (
                      <p>
                        Стоимость диагностики составляет $60, которые засчитываются в стоимость ремонта при согласии на выполнение работ.
                      </p>
                    )}
                    {currentLang === 'es' && (
                      <p>
                        Nuestra tarifa de diagnóstico es de $60, que se aplica a su reparación si decide continuar con nuestro servicio.
                      </p>
                    )}
                  </div>
                )}
              </div>
              
              {/* FAQ 4 */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === 4 ? null : 4)} 
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                  {currentLang === 'en' && (
                    <span className="font-semibold text-navy">
                      What warranty do you provide?
                    </span>
                  )}
                  {currentLang === 'ru' && (
                    <span className="font-semibold text-navy">
                      Какую гарантию вы предоставляете?
                    </span>
                  )}
                  {currentLang === 'es' && (
                    <span className="font-semibold text-navy">
                      ¿Qué garantía proporcionan?
                    </span>
                  )}
                  <span className={`text-orange transition-transform ${openFaq === 4 ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {openFaq === 4 && (
                  <div className="px-6 pb-4 text-gray-600">
                    {currentLang === 'en' && (
                      <p>
                        We provide a 30-day warranty on labor and 90-day warranty on parts for all repairs.
                      </p>
                    )}
                    {currentLang === 'ru' && (
                      <p>
                        Мы предоставляем гарантию 30 дней на работу и 90 дней на запчасти для всех ремонтов.
                      </p>
                    )}
                    {currentLang === 'es' && (
                      <p>
                        Proporcionamos una garantía de 30 días en mano de obra y 90 días en piezas para todas las reparaciones.
                      </p>
                    )}
                  </div>
                )}
              </div>
              
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              {currentLang === 'en' && (
                <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
                  Request Service
                </h2>
              )}
              {currentLang === 'ru' && (
                <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
                  Оставить заявку
                </h2>
              )}
              {currentLang === 'es' && (
                <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
                  Solicitar servicio
                </h2>
              )}
              
              {currentLang === 'en' && (
                <p className="text-lg text-gray-600">
                  We reply within 15–30 minutes during business hours.
                </p>
              )}
              {currentLang === 'ru' && (
                <p className="text-lg text-gray-600">
                  Отвечаем в течение 15–30 минут в рабочие часы.
                </p>
              )}
              {currentLang === 'es' && (
                <p className="text-lg text-gray-600">
                  Respondemos en 15–30 minutos en horario laboral.
                </p>
              )}
            </div>
            
            <form onSubmit={submitFullForm} className="bg-gray-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  {currentLang === 'en' && <label className="block text-sm font-semibold text-navy mb-2">Name *</label>}
                  {currentLang === 'ru' && <label className="block text-sm font-semibold text-navy mb-2">Имя *</label>}
                  {currentLang === 'es' && <label className="block text-sm font-semibold text-navy mb-2">Nombre *</label>}
                  <input type="text" 
                         value={fullForm.name}
                         onChange={(e) => setFullForm({...fullForm, name: e.target.value})}
                         required
                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-colors" />
                </div>
                
                <div>
                  {currentLang === 'en' && <label className="block text-sm font-semibold text-navy mb-2">Phone *</label>}
                  {currentLang === 'ru' && <label className="block text-sm font-semibold text-navy mb-2">Телефон *</label>}
                  {currentLang === 'es' && <label className="block text-sm font-semibold text-navy mb-2">Teléfono *</label>}
                  <input type="tel" 
                         value={fullForm.phone}
                         onChange={(e) => setFullForm({...fullForm, phone: e.target.value})}
                         required
                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-colors" />
                </div>
                
                <div>
                  {currentLang === 'en' && <label className="block text-sm font-semibold text-navy mb-2">Address</label>}
                  {currentLang === 'ru' && <label className="block text-sm font-semibold text-navy mb-2">Адрес</label>}
                  {currentLang === 'es' && <label className="block text-sm font-semibold text-navy mb-2">Dirección</label>}
                  <input type="text" 
                         value={fullForm.address}
                         onChange={(e) => setFullForm({...fullForm, address: e.target.value})}
                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-colors" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">ZIP Code</label>
                  <input type="text" 
                         value={fullForm.zip}
                         onChange={(e) => setFullForm({...fullForm, zip: e.target.value})}
                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-colors" />
                </div>
                
                <div>
                  {currentLang === 'en' && <label className="block text-sm font-semibold text-navy mb-2">Appliance Type</label>}
                  {currentLang === 'ru' && <label className="block text-sm font-semibold text-navy mb-2">Тип техники</label>}
                  {currentLang === 'es' && <label className="block text-sm font-semibold text-navy mb-2">Tipo de electrodoméstico</label>}
                  <select value={fullForm.appliance}
                          onChange={(e) => setFullForm({...fullForm, appliance: e.target.value})}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-colors">
                    <option value="">
                      {currentLang === 'en' && 'Select appliance'}
                      {currentLang === 'ru' && 'Выберите технику'}
                      {currentLang === 'es' && 'Seleccione electrodoméstico'}
                    </option>
                    <option value="washer">Washer / Стиральная машина / Lavadora</option>
                    <option value="dryer">Dryer / Сушилка / Secadora</option>
                    <option value="oven">Oven / Духовка / Horno</option>
                    <option value="dishwasher">Dishwasher / Посудомойка / Lavavajillas</option>
                    <option value="commercial">Commercial / Коммерческая / Comercial</option>
                    <option value="hvac">HVAC</option>
                  </select>
                </div>
                
                <div>
                  {currentLang === 'en' && <label className="block text-sm font-semibold text-navy mb-2">Preferred Time</label>}
                  {currentLang === 'ru' && <label className="block text-sm font-semibold text-navy mb-2">Удобное время</label>}
                  {currentLang === 'es' && <label className="block text-sm font-semibold text-navy mb-2">Tiempo preferido</label>}
                  <select value={fullForm.time}
                          onChange={(e) => setFullForm({...fullForm, time: e.target.value})}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-colors">
                    <option value="">
                      {currentLang === 'en' && 'Select time'}
                      {currentLang === 'ru' && 'Выберите время'}
                      {currentLang === 'es' && 'Seleccione tiempo'}
                    </option>
                    <option value="morning">Morning / Утро / Mañana</option>
                    <option value="afternoon">Afternoon / День / Tarde</option>
                    <option value="evening">Evening / Вечер / Noche</option>
                    <option value="asap">ASAP / Как можно скорее / Lo antes posible</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                {currentLang === 'en' && <label className="block text-sm font-semibold text-navy mb-2">Problem Description</label>}
                {currentLang === 'ru' && <label className="block text-sm font-semibold text-navy mb-2">Описание проблемы</label>}
                {currentLang === 'es' && <label className="block text-sm font-semibold text-navy mb-2">Descripción del problema</label>}
                <textarea value={fullForm.description}
                          onChange={(e) => setFullForm({...fullForm, description: e.target.value})}
                          rows="4"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-colors"
                          placeholder="Describe the issue with your appliance..."></textarea>
              </div>
              
              <button type="submit" 
                      disabled={submitted}
                      className="w-full mt-6 cta-gradient text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50">
                {submitted ? (
                  currentLang === 'en' ? 'Sending...' : 
                  currentLang === 'ru' ? 'Отправляем...' : 
                  'Enviando...'
                ) : (
                  <>
                    {currentLang === 'en' && 'Send Service Request'}
                    {currentLang === 'ru' && 'Отправить заявку на ремонт'}
                    {currentLang === 'es' && 'Enviar solicitud de servicio'}
                  </>
                )}
              </button>
              
              {submitted && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
                  {currentLang === 'en' && <p>✅ Thank you! Your request has been sent. We'll contact you within 15-30 minutes.</p>}
                  {currentLang === 'ru' && <p>✅ Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в течение 15-30 минут.</p>}
                  {currentLang === 'es' && <p>✅ ¡Gracias! Su solicitud ha sido enviada. Nos pondremos en contacto en 15-30 minutos.</p>}
                </div>
              )}
            </form>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="https://customer-assets.emergentagent.com/job_ezfixable-landing/artifacts/1esvhsuc_photo_2025-09-11_23-07-46.jpg" 
                     alt="EZFixable Logo" className="h-10 w-10" />
                <div>
                  <h3 className="text-xl font-bold">EZFixable</h3>
                  {currentLang === 'en' && <p className="text-gray-300 text-sm">Appliance & HVAC Repair</p>}
                  {currentLang === 'ru' && <p className="text-gray-300 text-sm">Ремонт техники и HVAC</p>}
                  {currentLang === 'es' && <p className="text-gray-300 text-sm">Reparación de electrodomésticos y HVAC</p>}
                </div>
              </div>
              
              {currentLang === 'en' && (
                <p className="text-gray-300 mb-4">
                  Professional appliance repair in Woodland Hills and surrounding areas. Same-day service when possible.
                </p>
              )}
              {currentLang === 'ru' && (
                <p className="text-gray-300 mb-4">
                  Профессиональный ремонт техники в Woodland Hills и окрестностях. Выезд в день обращения, когда возможно.
                </p>
              )}
              {currentLang === 'es' && (
                <p className="text-gray-300 mb-4">
                  Reparación profesional de electrodomésticos en Woodland Hills y áreas circundantes. Servicio el mismo día cuando sea posible.
                </p>
              )}
            </div>
            
            <div>
              {currentLang === 'en' && <h4 className="font-bold mb-4">Services</h4>}
              {currentLang === 'ru' && <h4 className="font-bold mb-4">Услуги</h4>}
              {currentLang === 'es' && <h4 className="font-bold mb-4">Servicios</h4>}
              
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#services" className="hover:text-orange transition-colors">
                    {currentLang === 'en' && 'Washer Repair'}
                    {currentLang === 'ru' && 'Ремонт стиральных машин'}
                    {currentLang === 'es' && 'Reparación de lavadoras'}
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-orange transition-colors">
                    {currentLang === 'en' && 'Dryer Repair'}
                    {currentLang === 'ru' && 'Ремонт сушилок'}
                    {currentLang === 'es' && 'Reparación de secadoras'}
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-orange transition-colors">
                    {currentLang === 'en' && 'Oven Repair'}
                    {currentLang === 'ru' && 'Ремонт духовок'}
                    {currentLang === 'es' && 'Reparación de hornos'}
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-orange transition-colors">
                    {currentLang === 'en' && 'Dishwasher Repair'}
                    {currentLang === 'ru' && 'Ремонт посудомоек'}
                    {currentLang === 'es' && 'Reparación de lavavajillas'}
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              {currentLang === 'en' && <h4 className="font-bold mb-4">Contact</h4>}
              {currentLang === 'ru' && <h4 className="font-bold mb-4">Контакты</h4>}
              {currentLang === 'es' && <h4 className="font-bold mb-4">Contacto</h4>}
              
              <div className="space-y-2 text-gray-300">
                <a href="tel:+13233881315" className="block hover:text-orange transition-colors">
                  📞 +1 323-388-1315
                </a>
                <a href="mailto:ezfixable@gmail.com" className="block hover:text-orange transition-colors">
                  📧 ezfixable@gmail.com
                </a>
                {currentLang === 'en' && <p>🕐 Mon-Fri: 8:00 AM - 7:00 PM</p>}
                {currentLang === 'ru' && <p>🕐 Пн-Пт: 8:00 - 19:00</p>}
                {currentLang === 'es' && <p>🕐 Lun-Vie: 8:00 AM - 7:00 PM</p>}
              </div>
            </div>
          </div>
          
          <hr className="border-gray-600 my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
            <p>&copy; 2025 EZFixable. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-orange transition-colors">
                {currentLang === 'en' && 'Privacy Policy'}
                {currentLang === 'ru' && 'Политика конфиденциальности'}
                {currentLang === 'es' && 'Política de privacidad'}
              </a>
              <a href="#" className="hover:text-orange transition-colors">
                {currentLang === 'en' && 'Terms of Service'}
                {currentLang === 'ru' && 'Условия использования'}
                {currentLang === 'es' && 'Términos de servicio'}
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
