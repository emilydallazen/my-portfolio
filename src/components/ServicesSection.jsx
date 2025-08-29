export default function ServicesSection() {
  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ backgroundColor: '#F5F5DC' }}>
      <div className="max-w-6xl mx-auto">
        <div className="fade-in text-center mb-12 lg:mb-16">
          <h2 className="serif-font text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">Meus Serviços</h2>
          <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-6 sm:mb-8" />
        </div>
        <div className="fade-in text-center mb-12 lg:mb-16">
          <p className="sans-font text-muted-foreground leading-relaxed mb-6 px-4 text-sm sm:text-base">
            Ofereço uma variedade de serviços de design gráfico para ajudar você a comunicar sua mensagem de forma eficaz e visualmente atraente. 
            Cada projeto é tratado com cuidado e atenção aos detalhes, garantindo que o resultado final seja único e alinhado com seus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {[
            {
              title: "Site estático",
              description: "Crio um site de apresentação para o seu negócio, com design personalizado e responsivo.",
              price: "A partir de R$ 1000",
            },
            {
              title: "Artes para redes sociais",
              description: "Criação de artes visuais para Instagram, como stories e posts, alinhadas à sua identidade visual.",
              price: "A partir de R$ 45",
            },
            {
              title: "Logomarca",
              description: "Criação de logotipos personalizados que refletem a identidade da sua marca.",
              price: "A partir de R$ 150",
            },
            {
              title: "Convites e divulgações para eventos",
              description: "Crio artes personalizadas para o seu evento, seja um convite de aniversário, evento empresarial ou divulgação especial.",
              price: "A partir de R$ 80",
            }
          ].map((service, index) => (
            <div key={index} className="fade-in">
              <div className="paper-texture vintage-border bg-card p-6 sm:p-8 h-full hover:shadow-lg transition-shadow duration-300">
                <h3 className="serif-font text-xl sm:text-2xl font-semibold text-foreground mb-4 text-center">
                  {service.title}
                </h3>
                <p className="sans-font text-muted-foreground leading-relaxed mb-6 text-center text-sm sm:text-base">
                  {service.description}
                </p>
                <div className="text-center">
                  <span className="sans-font text-primary font-semibold text-sm sm:text-base">{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
