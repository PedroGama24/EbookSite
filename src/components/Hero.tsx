import React from 'react';

interface HeroProps {
  onClickCTA: () => void;
}

const Hero: React.FC<HeroProps> = ({ onClickCTA }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sono de Qualidade e Saúde Mental
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-600 mb-6">
            Como noites bem dormidas transformam sua vida
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Descubra os segredos para um sono reparador e como ele pode melhorar significativamente 
            sua saúde mental, produtividade e qualidade de vida.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={onClickCTA}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg"
            >
              Adquira agora
            </button>
            <a 
              href="#beneficios" 
              className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-full border border-blue-600 transition-colors text-center"
            >
              Saiba mais
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/images/sono_mulher_cama.webp" 
            alt="Pessoa dormindo tranquilamente" 
            className="rounded-lg shadow-xl max-w-full h-auto"
            style={{ maxHeight: '400px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
