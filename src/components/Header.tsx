import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Sono de Qualidade</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#beneficios" className="hover:text-blue-200 transition-colors">Benefícios</a></li>
            <li><a href="#sobre" className="hover:text-blue-200 transition-colors">Sobre o Ebook</a></li>
            <li><a href="#depoimentos" className="hover:text-blue-200 transition-colors">Depoimentos</a></li>
            <li><a href="#comprar" className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition-colors">Comprar</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
