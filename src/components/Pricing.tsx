import React, { useState } from 'react';

interface PricingProps {
  onPurchase: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onPurchase }) => {
  const [email, setEmail] = useState('');
  
  const features = [
    "Ebook completo em formato PDF",
    "5 capítulos com conteúdo prático",
    "Técnicas comprovadas para melhorar o sono",
    "Design visual imersivo com imagens de alta qualidade",
    "Acesso imediato após a compra",
    "Garantia de satisfação de 30 dias"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPurchase();
    // Em uma implementação real, aqui seria feita a integração com gateway de pagamento
  };

  return (
    <section id="comprar" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Invista na sua saúde mental
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Sono de Qualidade e Saúde Mental</h3>
              <div className="text-3xl font-bold mb-6">R$ 37,90</div>
              <p className="mb-6 opacity-90">
                Transforme suas noites e melhore sua saúde mental com este guia prático e completo.
              </p>
              
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-blue-200 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Adquira agora</h3>
              <p className="text-gray-600 mb-6">
                Preencha o formulário abaixo para receber o ebook imediatamente em seu email.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors shadow-md"
                >
                  Comprar agora
                </button>
              </form>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>Pagamento 100% seguro</p>
                <div className="flex justify-center mt-2 space-x-2">
                  <span className="px-2 py-1 bg-gray-100 rounded">Pix</span>
                  <span className="px-2 py-1 bg-gray-100 rounded">Cartão de crédito</span>
                  <span className="px-2 py-1 bg-gray-100 rounded">Boleto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
