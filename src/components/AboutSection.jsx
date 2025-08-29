import myPicture from "../assets/imagem.png"

export default function AboutSection() {
  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-accent">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in text-center mb-12 lg:mb-16">
          <h2 className="serif-font text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">Sobre Mim</h2>
          <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-6 sm:mb-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="fade-in order-2 lg:order-1">
            <div className="vintage-border polaroid-shadow bg-card p-4 sm:p-6 transform rotate-1 lg:rotate-2 hover:rotate-0 transition-transform duration-300 max-w-md mx-auto lg:mx-0">
              <img
                src={myPicture}
                className="w-full h-80 sm:h-96 lg:h-100 object-cover rounded-lg mb-4"
                alt="Foto pessoal"
              />
            </div>
          </div>

          <div className="fade-in order-1 lg:order-2">
            <div className="paper-texture bg-card vintage-border p-6 sm:p-8">
              <h3 className="serif-font text-2xl sm:text-3xl font-semibold text-foreground mb-4 sm:mb-6">Quem sou eu?</h3>
              <p className="sans-font text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Sou uma pessoa criativa, apaixonada por cores, formas e colagens. 
                Tenho um forte senso estético e gosto de explorar novas maneiras de transmitir ideias de forma visual e autêntica. 
                Como estudante de Ciência da Computação e desenvolvedora front-end, busco unir esse meu lado criativo à lógica da programação, 
                criando designs que sejam atraentes e funcionais ao mesmo tempo.
              </p>
              <p className="sans-font text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                Movida por café e música, acredito que cada projeto é uma nova oportunidade para expressar autenticidade e essência.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
