const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Sono de Qualidade</h3>
            <p className="text-gray-400">Transforme suas noites, melhore sua vida</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Links</h4>
              <ul className="space-y-1">
                <li><a href="#beneficios" className="text-gray-400 hover:text-white transition-colors">Benefícios</a></li>
                <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors">Sobre o Ebook</a></li>
                <li><a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors">Depoimentos</a></li>
                <li><a href="#comprar" className="text-gray-400 hover:text-white transition-colors">Comprar</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Contato</h4>
              <ul className="space-y-1">
                <li className="text-gray-400">contato@sonodequalidade.com.br</li>
                <li className="text-gray-400">Política de Privacidade</li>
                <li className="text-gray-400">Termos de Uso</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Sono de Qualidade. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
