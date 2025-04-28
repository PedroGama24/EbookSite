import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import AboutEbook from './components/AboutEbook';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showThankYou, setShowThankYou] = useState(false);
  
  const handlePurchase = () => {
    setShowThankYou(true);
    // Em uma implementação real, aqui seria feita a integração com gateway de pagamento
    // e o envio do ebook por email
  };

  const scrollToComprar = () => {
    document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {showThankYou ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Obrigado pela sua compra!</h2>
            <p className="text-gray-600 mb-6">
              Seu ebook "Sono de Qualidade e Saúde Mental" foi enviado para o seu email.
              Você também pode baixá-lo diretamente clicando no botão abaixo.
            </p>
            <a 
              href="/ebook-sono-qualidade-imersivo.pdf" 
              download
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md"
            >
              Baixar Ebook
            </a>
            <button 
              onClick={() => setShowThankYou(false)}
              className="mt-4 text-blue-600 hover:text-blue-800 transition-colors block mx-auto"
            >
              Voltar para o site
            </button>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <Hero onClickCTA={scrollToComprar} />
          <Benefits />
          <AboutEbook />
          <Testimonials />
          <Pricing onPurchase={handlePurchase} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
