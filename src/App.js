import React, { useState } from "react";
import "./App.css";

function App() {
  const [currentLang, setCurrentLang] = useState('en');

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
              <span className="text-2xl font-bold text-gray-800">EZFixable</span>
            </div>
            
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              {currentLang === 'en' && '📞 Call Now'}
              {currentLang === 'ru' && '📞 Звонить'}
              {currentLang === 'es' && '📞 Llamar'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            {currentLang === 'en' && (
              <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
                Appliance & Commercial Oven Repair
              </h1>
            )}
            {currentLang === 'ru' && (
              <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
                Ремонт бытовой техники и коммерческих печей
              </h1>
            )}
            {currentLang === 'es' && (
              <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
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

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-300">
                {currentLang === 'en' && '📞 Call Now'}
                {currentLang === 'ru' && '📞 Звонить'}
                {currentLang === 'es' && '📞 Llamar'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
🔍 КАК ПРОВЕРИТЬ:
Скопируйте код выше
Вставьте в GitHub App.js (заменить всё содержимое)
Commit changes
Идите в Vercel и смотрите логи
Если успешно - сайт покажет базовую версию без "Woodland Hills"
Пожалуйста, проверьте этот код и сообщите, если возникнут вопросы или потребуется дальнейшая помощь. Если этот код скомпилируется успешно, я помогу с дальнейшими шагами! 🎯

Sep 30, 11:14 PM

Copy
Scroll to bottom
Agent is waiting...
