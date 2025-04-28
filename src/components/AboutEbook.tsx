const AboutEbook = () => {
  const chapters = [
    {
      number: 1,
      title: "A Ciência do Sono",
      description: "Entenda os mecanismos do sono, seus estágios e como ele afeta seu cérebro."
    },
    {
      number: 2,
      title: "Sono e Saúde Mental - Uma Relação Vital",
      description: "Descubra como o sono influencia diretamente seu equilíbrio emocional e saúde mental."
    },
    {
      number: 3,
      title: "Benefícios de um Sono de Qualidade",
      description: "Conheça os diversos benefícios que uma boa noite de sono traz para sua vida."
    },
    {
      number: 4,
      title: "Inimigos do Sono",
      description: "Identifique os fatores que prejudicam seu descanso noturno e aprenda a neutralizá-los."
    },
    {
      number: 5,
      title: "Estratégias Práticas para um Sono Melhor",
      description: "Técnicas e hábitos comprovados para melhorar a qualidade do seu sono desde hoje."
    }
  ];

  return (
    <section id="sobre" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Sobre o Ebook
            </h2>
            <p className="text-gray-600 mb-6">
              O ebook "Sono de Qualidade e Saúde Mental" é um guia completo e prático que revela como noites bem dormidas podem transformar sua vida. Com linguagem acessível e baseado em evidências científicas, este material oferece conhecimentos valiosos e estratégias eficazes para melhorar seu sono e, consequentemente, sua saúde mental.
            </p>
            <p className="text-gray-600 mb-6">
              Ricamente ilustrado e com design imersivo, o ebook torna a leitura uma experiência agradável e envolvente, facilitando a compreensão e aplicação das técnicas apresentadas.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-blue-700 font-medium">
                "O sono não é um luxo ou uma perda de tempo – é uma necessidade biológica fundamental que impacta profundamente nossa saúde mental e bem-estar geral."
              </p>
            </div>
            <p className="text-gray-600">
              Ao implementar as estratégias apresentadas neste guia, você estará investindo não apenas em noites mais tranquilas, mas em dias mais produtivos, relacionamentos mais saudáveis e uma mente mais equilibrada.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                O que você vai encontrar:
              </h3>
              <ul className="space-y-4">
                {chapters.map((chapter) => (
                  <li key={chapter.number} className="flex">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                      {chapter.number}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{chapter.title}</h4>
                      <p className="text-gray-600 text-sm">{chapter.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex justify-center">
                <img 
                  src="/images/meditacao_ilustracao.jpeg" 
                  alt="Ilustração de meditação para melhorar o sono" 
                  className="rounded-lg shadow-md max-w-full h-auto"
                  style={{ maxHeight: '200px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEbook;
