const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Professora",
      text: "Depois de aplicar as técnicas deste ebook, minha qualidade de sono melhorou drasticamente. Acordo mais disposta e minha ansiedade diminuiu consideravelmente.",
      image: "/images/meditacao_relaxamento.webp"
    },
    {
      name: "Carlos Mendes",
      role: "Empresário",
      text: "Como empreendedor, sempre sacrifiquei meu sono em nome da produtividade. Este ebook me mostrou que estava fazendo exatamente o contrário do que deveria. Agora durmo melhor e produzo mais!",
      image: "/images/relaxamento_musica.webp"
    },
    {
      name: "Juliana Costa",
      role: "Estudante de Medicina",
      text: "Conteúdo baseado em evidências científicas e apresentado de forma clara e prática. As estratégias são simples de implementar e os resultados aparecem rapidamente.",
      image: "/images/relaxamento_leitura.webp"
    }
  ];

  return (
    <section id="depoimentos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          O que dizem nossos leitores
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex-grow">
                <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
              </div>
              <div className="flex items-center mt-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
