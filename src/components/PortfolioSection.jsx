export default function PortfolioSection() {
  const categories = [
    {
      title: "Sites",
      description: "Desenvolvimento de sites estáticos e modernos",
      page: "sites",
    },
    {
      title: "Convites e Divulgações",
      description: "Criação de materiais para eventos especiais",
      page: "convites",
    },
    {
      title: "Artes para Redes Sociais",
      description: "Conteúdo visual para Instagram e outras plataformas",
      page: "redes-sociais",
    },
    {
      title: "Logomarcas",
      description: "Identidade visual e branding personalizado",
      page: "logomarcas",
    }
  ]

  const handleCategoryClick = (page) => {
    if (window.navigateTo) {
      window.navigateTo(page)
    }
  }

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-accent">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="fade-in text-center mb-12 lg:mb-16">
          <h2 className="serif-font text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Meu Portfólio
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-6 sm:mb-8" />
          <p className="sans-font text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Conheça alguns dos meus projetos organizados por categoria
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div key={index} className="fade-in">
              <div className="paper-texture vintage-border bg-card p-6 sm:p-8 h-full hover:shadow-lg transition-shadow duration-300">
                <h3 className="serif-font text-xl sm:text-2xl font-semibold text-foreground mb-4 text-center">
                  {category.title}
                </h3>
                <p className="sans-font text-muted-foreground leading-relaxed mb-6 text-center text-sm sm:text-base">
                  {category.description}
                </p>
                <div className="text-center">
                  <button
                    onClick={() => handleCategoryClick(category.page)}
                    className="sans-font text-sm text-primary hover:text-accent transition-colors duration-300 bg-transparent border-none cursor-pointer focus:outline-none"
                  >
                    Ver projetos →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
