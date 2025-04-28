const Benefits = () => {
  const benefits = [
    {
      title: "Melhora da Saúde Mental",
      description: "O sono de qualidade ajuda a regular o humor, reduzir a ansiedade e prevenir a depressão.",
      icon: "🧠"
    },
    {
      title: "Aumento da Produtividade",
      description: "Dormir bem melhora a concentração, a memória e a capacidade de resolver problemas.",
      icon: "⚡"
    },
    {
      title: "Fortalecimento do Sistema Imunológico",
      description: "Durante o sono, o corpo produz proteínas que combatem infecções e inflamações.",
      icon: "🛡️"
    },
    {
      title: "Equilíbrio Emocional",
      description: "Um sono reparador ajuda a processar emoções e a lidar melhor com o estresse diário.",
      icon: "⚖️"
    },
    {
      title: "Longevidade e Qualidade de Vida",
      description: "Estudos mostram que pessoas que dormem bem vivem mais e com mais saúde.",
      icon: "🌱"
    },
    {
      title: "Estratégias Práticas e Eficazes",
      description: "Aprenda técnicas comprovadas para melhorar a qualidade do seu sono desde hoje.",
      icon: "🔑"
    }
  ];

  return (
    <section id="beneficios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Benefícios de um Sono de Qualidade
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
