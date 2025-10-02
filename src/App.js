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
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', margin: '0', padding: '0' }}>
      {/* Language Selector */}
      <div style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        zIndex: '50',
        display: 'flex',
        gap: '0.5rem'
      }}>
        <button 
          onClick={() => setCurrentLang('en')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.875rem',
            fontWeight: '500',
            transition: 'all 0.3s',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: currentLang === 'en' ? '#ea580c' : 'rgba(255,255,255,0.2)',
            color: currentLang === 'en' ? 'white' : '#374151'
          }}
        >
          EN
        </button>
        <button 
          onClick={() => setCurrentLang('ru')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.875rem',
            fontWeight: '500',
            transition: 'all 0.3s',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: currentLang === 'ru' ? '#ea580c' : 'rgba(255,255,255,0.2)',
            color: currentLang === 'ru' ? 'white' : '#374151'
          }}
        >
          RU
        </button>
        <button 
          onClick={() => setCurrentLang('es')}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.875rem',
            fontWeight: '500',
            transition: 'all 0.3s',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: currentLang === 'es' ? '#ea580c' : 'rgba(255,255,255,0.2)',
            color: currentLang === 'es' ? 'white' : '#374151'
          }}
        >
          ES
        </button>
      </div>

      {/* Header */}
      <header style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '40',
        backgroundColor: 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #e5e7eb',
        padding: '1rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1f2937'
            }}>
              EZFixable
            </span>
          </div>
          
          <button style={{
            background: 'linear-gradient(to right, #ea580c, #dc2626)',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '9999px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            {currentLang === 'en' && '📞 Call Now'}
            {currentLang === 'ru' && '📞 Звонить'}
            {currentLang === 'es' && '📞 Llamar'}
          </button>
        </div>
      </header>

      {/* Hero Section - БЕЗ WOODLAND HILLS */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #dbeafe, #ffffff, #fed7aa)',
        paddingTop: '5rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: '0',
          background: 'linear-gradient(to right, rgba(219,234,254,0.3), rgba(254,215,170,0.3))'
        }}></div>
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          position: 'relative',
          zIndex: '10'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
            padding: '2rem 0'
          }}>
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              {currentLang === 'en' && (
                <h1 style={{
                  fontSize: 'clamp(2rem, 8vw, 4rem)',
                  fontWeight: '900',
                  background: 'linear-gradient(135deg, #1e40af, #ea580c)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '2rem',
                  lineHeight: '1.2',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}>
                  Appliance & Commercial Oven Repair
                </h1>
              )}
              {currentLang === 'ru' && (
                <h1 style={{
                  fontSize: 'clamp(2rem, 8vw, 4rem)',
                  fontWeight: '900',
                  background: 'linear-gradient(135deg, #1e40af, #ea580c)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '2rem',
                  lineHeight: '1.2',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}>
                  Ремонт бытовой техники и коммерческих печей
                </h1>
              )}
              {currentLang === 'es' && (
                <h1 style={{
                  fontSize: 'clamp(2rem, 8vw, 4rem)',
                  fontWeight: '900',
                  background: 'linear-gradient(135deg, #1e40af, #ea580c)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '2rem',
                  lineHeight: '1.2',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}>
                  Reparación de electrodomésticos y hornos comerciales
                </h1>
              )}
              
              {currentLang === 'en' && (
                <p style={{
                  fontSize: '1.25rem',
                  color: '#374151',
                  marginBottom: '3rem',
                  fontWeight: '500',
                  lineHeight: '1.6'
                }}>
                  Same-day when possible. Transparent pricing.<br/>
                  30-day labor / 90-day parts warranty.
                </p>
              )}
              {currentLang === 'ru' && (
                <p style={{
                  fontSize: '1.25rem',
                  color: '#374151',
                  marginBottom: '3rem',
                  fontWeight: '500',
                  lineHeight: '1.6'
                }}>
                  Выезд в день обращения, когда возможно. Прозрачные цены.<br/>
                  30 дней на работу / 90 дней на запчасти гарантии.
                </p>
              )}
              {currentLang === 'es' && (
                <p style={{
                  fontSize: '1.25rem',
                  color: '#374151',
                  marginBottom: '3rem',
                  fontWeight: '500',
                  lineHeight: '1.6'
                }}>
                  Mismo día cuando sea posible. Precios transparentes.<br/>
                  30 días de mano de obra / 90 días de garantía de piezas.
                </p>
              )}

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                alignItems: 'center'
              }}>
                <button style={{
                  background: 'linear-gradient(to right, #ea580c, #dc2626)',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '1rem',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                  transform: 'scale(1)',
                  ':hover': { transform: 'scale(1.05)' }
                }}>
                  {currentLang === 'en' && '📞 Call Now'}
                  {currentLang === 'ru' && '📞 Звонить'}
                  {currentLang === 'es' && '📞 Llamar'}
                </button>
                
                <button style={{
                  background: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(12px)',
                  border: '2px solid #d1d5db',
                  color: '#1f2937',
                  padding: '1rem 2rem',
                  borderRadius: '1rem',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 8px 32px rgba(31,38,135,0.37)'
                }}>
                  {currentLang === 'en' && '⚡ Request Service'}
                  {currentLang === 'ru' && '⚡ Заказать ремонт'}
                  {currentLang === 'es' && '⚡ Solicitar servicio'}
                </button>
              </div>
            </div>
            
            <div style={{ position: 'relative' }}>
              <div style={{
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '1.5rem',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(31,38,135,0.37)'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1556909114-5bb329f6eb61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Professional Kitchen" 
                  style={{
                    width: '100%',
                    height: '16rem',
                    objectFit: 'cover',
                    borderRadius: '1rem',
                    marginBottom: '1.5rem'
                  }}
                />
                <div style={{
                  background: 'linear-gradient(to right, #2563eb, #ea580c)',
                  color: 'white',
                  padding: '1.5rem',
                  borderRadius: '1rem'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    margin: '0 0 0.5rem 0'
                  }}>
                    {currentLang === 'en' && '$60 diagnostic fee, applied to your repair.'}
                    {currentLang === 'ru' && 'Диагностика $60, засчитывается в стоимость ремонта.'}
                    {currentLang === 'es' && 'Tarifa de diagnóstico de $60, aplicada a su reparación.'}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{
            marginTop: '4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <a 
              href="https://www.google.com/maps/place/EZFixable/"
              target="_blank"
              rel="noopener noreferrer" 
              style={{
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(12px)',
                padding: '1rem 2rem',
                borderRadius: '1rem',
                border: '1px solid #e5e7eb',
                textDecoration: 'none',
                color: '#1f2937',
                boxShadow: '0 8px 32px rgba(31,38,135,0.37)',
                transition: 'all 0.3s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.5rem' }}>⭐⭐⭐⭐⭐</span>
                <span style={{ fontWeight: '600' }}>
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
              style={{
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(12px)',
                padding: '1rem 2rem',
                borderRadius: '1rem',
                border: '1px solid #e5e7eb',
                textDecoration: 'none',
                color: '#1f2937',
                boxShadow: '0 8px 32px rgba(31,38,135,0.37)',
                transition: 'all 0.3s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.5rem' }}>⭐⭐⭐⭐⭐</span>
                <span style={{ fontWeight: '600' }}>
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
      <section style={{
        padding: '5rem 0',
        background: 'linear-gradient(to bottom, #ffffff, #f9fafb)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            {currentLang === 'en' && (
              <h2 style={{
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                fontWeight: '900',
                color: '#1f2937',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #1e40af, #ea580c)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Our Repair Services
              </h2>
            )}
            {currentLang === 'ru' && (
              <h2 style={{
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                fontWeight: '900',
                color: '#1f2937',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #1e40af, #ea580c)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Наши услуги ремонта
              </h2>
            )}
            {currentLang === 'es' && (
              <h2 style={{
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                fontWeight: '900',
                color: '#1f2937',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #1e40af, #ea580c)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Nuestros servicios de reparación
              </h2>
            )}
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {/* Service Cards */}
            <div style={{
              background: 'rgba(255,255,255,0.8)',
              backdropFilter: 'blur(16px)',
              padding: '2rem',
              borderRadius: '1.5rem',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 8px 32px rgba(31,38,135,0.37)',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Washing Machine Repair" 
                style={{
                  width: '100%',
                  height: '12rem',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  marginBottom: '1.5rem'
                }}
              />
              {currentLang === 'en' && (
                <>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    marginBottom: '1rem'
                  }}>
                    Washers
                  </h3>
                  <p style={{
                    color: '#4b5563',
                    marginBottom: '1.5rem',
                    lineHeight: '1.6'
                  }}>
                    Not spinning, draining, or starting? We fix all washer issues quickly.
                  </p>
                  <button style={{
                    background: 'linear-gradient(to right, #ea580c, #dc2626)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.75rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    Request Service →
                  </button>
                </>
              )}
              {currentLang === 'ru' && (
                <>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    marginBottom: '1rem'
                  }}>
                    Стиральные машины
                  </h3>
                  <p style={{
                    color: '#4b5563',
                    marginBottom: '1.5rem',
                    lineHeight: '1.6'
                  }}>
                    Не крутит, не сливает или не запускается? Быстро устраним все неисправности.
                  </p>
                  <button style={{
                    background: 'linear-gradient(to right, #ea580c, #dc2626)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.75rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    Заказать ремонт →
                  </button>
                </>
              )}
              {currentLang === 'es' && (
                <>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    marginBottom: '1rem'
                  }}>
                    Lavadoras
                  </h3>
                  <p style={{
                    color: '#4b5563',
                    marginBottom: '1.5rem',
                    lineHeight: '1.6'
                  }}>
                    ¿No gira o no arranca? Reparamos todos los problemas de lavadoras rápidamente.
                  </p>
                  <button style={{
                    background: 'linear-gradient(to right, #ea580c, #dc2626)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.75rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    Solicitar servicio →
                  </button>
                </>
              )}
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.8)',
              backdropFilter: 'blur(16px)',
              padding: '2rem',
              borderRadius: '1.5rem',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 8px 32px rgba(31,38,135,0.37)',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Dryer Repair" 
                style={{
                  width: '100%',
                  height: '12rem',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  marginBottom: '1.5rem'
                }}
              />
              {currentLang === 'en' && (
                <>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    marginBottom: '1rem'
                  }}>
                    Dryers
                  </h3>
                  <p style={{
                    color: '#4b5563',
                    marginBottom: '1.5rem',
                    lineHeight: '1.6'
                  }}>
                    Not heating or taking too long? We restore proper drying function.
                  </p>
                  <button style={{
                    background: 'linear-gradient(to right, #ea580c, #dc2626)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.75rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    Request Service →
                  </button>
                </>
              )}
              {currentLang === 'ru' && (
                <>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    marginBottom: '1rem'
                  }}>
                    Сушилки
                  </h3>
                  <p style={{
                    color: '#4b5563',
                    marginBottom: '1.5rem',
                    lineHeight: '1.6'
                  }}>
                    Не греет или долго сушит? Восстановим правильную работу сушки.
                  </p>
                  <button style={{
                    background: 'linear-gradient(to right, #ea580c, #dc2626)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.75rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    Заказать ремонт →
                  </button>
                </>
              )}
              {currentLang === 'es' && (
                <>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    marginBottom: '1rem'
                  }}>
                    Secadoras
                  </h3>
                  <p style={{
                    color: '#4b5563',
                    marginBottom: '1.5rem',
                    lineHeight: '1.6'
                  }}>
                    ¿No calienta o tarda demasiado? Restauramos el funcionamiento adecuado del secado.
                  </p>
                  <button style={{
                    background: 'linear-gradient(to right, #ea580c, #dc2626)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.75rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    Solicitar servicio →
                  </button>
                </>
              )}
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.8)',
              backdropFilter: 'blur(16px)',
              padding: '2rem',
              borderRadius: '1.5rem',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 8px 32px rgba(31,38,135,0.37)',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1556909114-5bb329f6eb61?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Oven Repair" 
                style={{
                  width: '100%',
                  height: '12rem',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  marginBottom: '1.5rem'
                }}
              />
              {currentLang === 'en' && (
                <>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    marginBottom: '1rem'
                  }}>
                    Ovens & Ranges
                  </h3>
                  <p style={{
                    color: '#4b5563',
                    marginBottom: '1.5rem',
                    lineHeight: '1.6'
                  }}>
                    Temperature issues or burner problems? We handle all oven repairs.
                  </p>
                  <button style={{
                    background: 'linear-gradient(to right, #ea580c, #dc2626)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.75rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    Request Service →
                  </button>
                </>
              )}
              {currentLang === 'ru' && (
                <>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    marginBottom: '1rem'
                  }}>
                    Духовки и плиты
                  </h3>
                  <p style={{
                    color: '#4b5563',
                    marginBottom: '1.5rem',
                    lineHeight: '1.6'
                  }}>
                    Проблемы с температурой или конфорками? Ремонтируем все виды духовок.
                  </p>
                  <button style={{
                    background: 'linear-gradient(to right, #ea580c, #dc2626)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.75rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    Заказать ремонт →
                  </button>
                </>
              )}
              {currentLang === 'es' && (
                <>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    marginBottom: '1rem'
                  }}>
                    Hornos y Estufas
                  </h3>
                  <p style={{
                    color: '#4b5563',
                    marginBottom: '1.5rem',
                    lineHeight: '1.6'
                  }}>
                    ¿Problemas de temperatura o quemadores? Manejamos todas las reparaciones de hornos.
                  </p>
                  <button style={{
                    background: 'linear-gradient(to right, #ea580c, #dc2626)',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.75rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    Solicitar servicio →
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section style={{
        padding: '5rem 0',
        background: 'linear-gradient(to bottom, #ffffff, #fed7aa)'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            {currentLang === 'en' && (
              <h2 style={{
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                fontWeight: '900',
                color: '#1f2937',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #1e40af, #ea580c)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Get Quick Service
              </h2>
            )}
            {currentLang === 'ru' && (
              <h2 style={{
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                fontWeight: '900',
                color: '#1f2937',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #1e40af, #ea580c)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Получить быстрое обслуживание
              </h2>
            )}
            {currentLang === 'es' && (
              <h2 style={{
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                fontWeight: '900',
                color: '#1f2937',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #1e40af, #ea580c)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Obtener servicio rápido
              </h2>
            )}
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem'
          }}>
            {/* Quick Form */}
            <div style={{
              background: 'rgba(255,255,255,0.8)',
              backdropFilter: 'blur(16px)',
              padding: '2rem',
              borderRadius: '1.5rem',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 8px 32px rgba(31,38,135,0.37)'
            }}>
              {currentLang === 'en' && (
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '1.5rem'
                }}>
                  Quick Request
                </h3>
              )}
              {currentLang === 'ru' && (
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '1.5rem'
                }}>
                  Быстрый запрос
                </h3>
              )}
              {currentLang === 'es' && (
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '1.5rem'
                }}>
                  Solicitud rápida
                </h3>
              )}
              
              <form onSubmit={submitQuickForm} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <input
                  type="text"
                  placeholder={currentLang === 'en' ? "Your Name" : currentLang === 'ru' ? "Ваше имя" : "Su nombre"}
                  value={quickForm.name}
                  onChange={(e) => setQuickForm({...quickForm, name: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    border: '1px solid #d1d5db',
                    outline: 'none',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                />
                <input
                  type="tel"
                  placeholder={currentLang === 'en' ? "Phone Number" : currentLang === 'ru' ? "Номер телефона" : "Número de teléfono"}
                  value={quickForm.phone}
                  onChange={(e) => setQuickForm({...quickForm, phone: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    border: '1px solid #d1d5db',
                    outline: 'none',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                />
                <select
                  value={quickForm.appliance}
                  onChange={(e) => setQuickForm({...quickForm, appliance: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    border: '1px solid #d1d5db',
                    outline: 'none',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
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
                </select>
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(to right, #ea580c, #dc2626)',
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    fontSize: '1rem'
                  }}
                >
                  {currentLang === 'en' ? "Request Service" : currentLang === 'ru' ? "Заказать ремонт" : "Solicitar servicio"}
                </button>
              </form>
            </div>
            
            {/* Detailed Form */}
            <div style={{
              background: 'rgba(255,255,255,0.8)',
              backdropFilter: 'blur(16px)',
              padding: '2rem',
              borderRadius: '1.5rem',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 8px 32px rgba(31,38,135,0.37)'
            }}>
              {currentLang === 'en' && (
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '1.5rem'
                }}>
                  Detailed Request
                </h3>
              )}
              {currentLang === 'ru' && (
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '1.5rem'
                }}>
                  Подробный запрос
                </h3>
              )}
              {currentLang === 'es' && (
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  marginBottom: '1.5rem'
                }}>
                  Solicitud detallada
                </h3>
              )}
              
              <form onSubmit={submitFullForm} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <input
                    type="text"
                    placeholder={currentLang === 'en' ? "Name" : currentLang === 'ru' ? "Имя" : "Nombre"}
                    value={fullForm.name}
                    onChange={(e) => setFullForm({...fullForm, name: e.target.value})}
                    style={{
                      padding: '0.75rem',
                      borderRadius: '0.75rem',
                      border: '1px solid #d1d5db',
                      outline: 'none',
                      fontSize: '1rem',
                      boxSizing: 'border-box'
                    }}
                  />
                  <input
                    type="tel"
                    placeholder={currentLang === 'en' ? "Phone" : currentLang === 'ru' ? "Телефон" : "Teléfono"}
                    value={fullForm.phone}
                    onChange={(e) => setFullForm({...fullForm, phone: e.target.value})}
                    style={{
                      padding: '0.75rem',
                      borderRadius: '0.75rem',
                      border: '1px solid #d1d5db',
                      outline: 'none',
                      fontSize: '1rem',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <input
                  type="text"
                  placeholder={currentLang === 'en' ? "Address" : currentLang === 'ru' ? "Адрес" : "Dirección"}
                  value={fullForm.address}
                  onChange={(e) => setFullForm({...fullForm, address: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '0.75rem',
                    border: '1px solid #d1d5db',
                    outline: 'none',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                />
                <textarea
                  placeholder={currentLang === 'en' ? "Problem Description" : currentLang === 'ru' ? "Описание проблемы" : "Descripción del problema"}
                  value={fullForm.description}
                  onChange={(e) => setFullForm({...fullForm, description: e.target.value})}
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '0.75rem',
                    border: '1px solid #d1d5db',
                    outline: 'none',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    resize: 'vertical'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: 'linear-gradient(to right, #2563eb, #ea580c)',
                    color: 'white',
                    padding: '0.75rem',
                    borderRadius: '0.75rem',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    fontSize: '1rem'
                  }}
                >
                  {currentLang === 'en' ? "Send Detailed Request" : currentLang === 'ru' ? "Отправить подробный запрос" : "Enviar solicitud detallada"}
                </button>
              </form>
            </div>
          </div>
          
          {submitted && (
            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              backgroundColor: '#dcfce7',
              border: '1px solid #bbf7d0',
              borderRadius: '1rem',
              textAlign: 'center'
            }}>
              <p style={{
                color: '#166534',
                fontWeight: '600',
                margin: '0'
              }}>
                {currentLang === 'en' && "Thank you! We'll contact you soon."}
                {currentLang === 'ru' && "Спасибо! Мы свяжемся с вами в ближайшее время."}
                {currentLang === 'es' && "¡Gracias! Nos pondremos en contacto contigo pronto."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(to bottom, #111827, #000000)',
        color: 'white',
        padding: '4rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '3rem'
          }}>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  height: '3rem',
                  width: '3rem',
                  background: 'linear-gradient(to right, #2563eb, #ea580c)',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.25rem'
                  }}>
                    EZ
                  </span>
                </div>
                <span style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}>
                  EZFixable
                </span>
              </div>
              
              {currentLang === 'en' && (
                <p style={{
                  color: '#d1d5db',
                  marginBottom: '1rem',
                  lineHeight: '1.6'
                }}>
                  Professional appliance repair in San Fernando Valley and surrounding areas. Same-day service when possible.
                </p>
              )}
              {currentLang === 'ru' && (
                <p style={{
                  color: '#d1d5db',
                  marginBottom: '1rem',
                  lineHeight: '1.6'
                }}>
                  Профессиональный ремонт техники в San Fernando Valley и окрестностях. Выезд в день обращения, когда возможно.
                </p>
              )}
              {currentLang === 'es' && (
                <p style={{
                  color: '#d1d5db',
                  marginBottom: '1rem',
                  lineHeight: '1.6'
                }}>
                  Reparación profesional de electrodomésticos en San Fernando Valley y áreas circundantes. Servicio el mismo día cuando sea posible.
                </p>
              )}
            </div>
            
            <div>
              {currentLang === 'en' && (
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem'
                }}>
                  Contact Info
                </h3>
              )}
              {currentLang === 'ru' && (
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem'
                }}>
                  Контактная информация
                </h3>
              )}
              {currentLang === 'es' && (
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem'
                }}>
                  Información de contacto
                </h3>
              )}
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: '#ea580c' }}>📞</span>
                  <span>+1 (323) 388-1315</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: '#ea580c' }}>📧</span>
                  <span>ezfixable@gmail.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: '#ea580c' }}>🕒</span>
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
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem'
                }}>
                  Our Services
                </h3>
              )}
              {currentLang === 'ru' && (
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem'
                }}>
                  Наши услуги
                </h3>
              )}
              {currentLang === 'es' && (
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem'
                }}>
                  Nuestros servicios
                </h3>
              )}
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                color: '#d1d5db'
              }}>
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
          
          <div style={{
            borderTop: '1px solid #374151',
            marginTop: '3rem',
            paddingTop: '2rem',
            textAlign: 'center',
            color: '#9ca3af'
          }}>
            <p>&copy; 2024 EZFixable. {currentLang === 'en' ? 'All rights reserved.' : currentLang === 'ru' ? 'Все права защищены.' : 'Todos los derechos reservados.'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
