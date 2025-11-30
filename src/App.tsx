import { useEffect, useState } from 'react';
import { Scissors, Phone, CheckCircle, Wrench, Zap } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = 'https://wa.me/5491126863911?text=Hola%20Maxi,%20necesitaría%20tus%20servicios.';

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l5 10-5 10-5-10zM0 30l10-5 10 5-10 5zM60 30l-10-5-10 5 10 5zM30 60l-5-10 5-10 5 10z' fill='%23166534' fill-opacity='1'/%3E%3C/svg%3E")`,
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      />

      <main className="relative">
        <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/image.png')`,
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center bottom'
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white/75 to-green-50/75" />

          <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
            <h2 className="text-xl md:text-2xl text-green-700 font-semibold mb-4 tracking-wide">
              Bienvenido a
            </h2>

            <h1 className="text-7xl md:text-8xl font-black text-green-900 mb-2">
              MAXI
            </h1>

            <div className="h-1 w-24 bg-green-600 mx-auto mb-8" />

            <h3 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Corto el pasto a domicilio
            </h3>

            <p className="text-2xl md:text-3xl text-green-700 mb-10">
              Solo en Ituzaingó, Zona Oeste
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white text-xl md:text-2xl font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
              Contactar por WhatsApp
            </a>

            <p className="mt-8 text-green-800 text-lg font-semibold">
              11 2686-3911
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-white relative">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l5 10-5 10-5-10zM0 30l10-5 10 5-10 5zM60 30l-10-5-10 5 10 5zM30 60l-5-10 5-10 5 10z' fill='%23166534' fill-opacity='1'/%3E%3C/svg%3E")`
            }}
          />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="bg-green-50 rounded-2xl p-8 md:p-12 shadow-lg animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
                Servicio Profesional de Corte de Pasto
              </h2>

              <p className="text-lg md:text-xl text-green-800 leading-relaxed mb-8">
                Cortador de pasto responsable, confiable y con herramientas propias.
                Atención rápida y segura.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-green-900 mb-2">Responsable</h3>
                  <p className="text-green-700 text-sm">Servicio confiable y puntual</p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <Wrench className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-green-900 mb-2">Herramientas Propias</h3>
                  <p className="text-green-700 text-sm">Equipamiento profesional</p>
                </div>

                <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <Zap className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-green-900 mb-2">Atención Rápida</h3>
                  <p className="text-green-700 text-sm">Respuesta inmediata</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8">
              ¿Necesitás cortar el pasto?
            </h2>

            <p className="text-xl text-green-800 mb-10">
              Contactá a Maxi ahora mismo y agendá tu servicio de corte de césped en Ituzaingó
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white text-xl md:text-2xl font-semibold px-10 py-5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
              Contactar a Maxi por WhatsApp
            </a>
          </div>
        </section>

        <footer className="py-8 px-4 bg-green-900 text-white text-center">
          <p className="text-lg">Servicio de corte de pasto en Ituzaingó, Zona Oeste</p>
          <p className="text-green-300 mt-2">Maxi - 11 2686-3911</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
