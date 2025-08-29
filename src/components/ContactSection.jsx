export default function ContactSection() {
  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6" style={{ backgroundColor: '#F5F5DC' }}>
      <div className="max-w-4xl mx-auto">
        <div className="fade-in text-center mb-12 lg:mb-16">
          <h2 className="serif-font text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">Vamos Conversar?</h2>
          <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-6 sm:mb-8" />
          <p className="sans-font text-lg sm:text-xl text-muted-foreground">
            Me chama e conta a sua ideia!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="fade-in">
            <div className="paper-texture vintage-border bg-card p-6 sm:p-8">
              <h3 className="serif-font text-xl sm:text-2xl font-semibold text-foreground mb-6">Informações de Contato</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground">📧</span>
                  </div>
                  <div>
                    <p className="sans-font font-medium text-foreground text-sm sm:text-base">Email</p>
                    <p className="sans-font text-muted-foreground text-sm sm:text-base">maria@exemplo.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground">📱</span>
                  </div>
                  <div>
                    <p className="sans-font font-medium text-foreground text-sm sm:text-base">WhatsApp</p>
                    <p className="sans-font text-muted-foreground text-sm sm:text-base">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground">📍</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="serif-font text-lg font-semibold text-foreground mb-4">Me siga nas redes</h4>
                <div className="flex flex-wrap gap-3">
                  {["Instagram", "Behance", "Pinterest"].map((social) => (
                    <button
                      key={social}
                      className="vintage-border bg-accent/10 hover:bg-accent/20 text-accent-foreground px-4 py-2 sans-font text-sm transition-colors duration-300"
                    >
                      {social}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in">
            <div className="paper-texture vintage-border bg-card p-6 sm:p-8">
              <h3 className="serif-font text-xl sm:text-2xl font-semibold text-foreground mb-6">Envie uma Mensagem</h3>

              <form className="space-y-6">
                <div>
                  <label className="sans-font font-medium text-foreground block mb-2 text-sm sm:text-base">Nome</label>
                  <input
                    type="text"
                    className="w-full vintage-border bg-input px-4 py-3 sans-font focus:outline-none focus:ring-2 focus:ring-ring text-sm sm:text-base"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="sans-font font-medium text-foreground block mb-2 text-sm sm:text-base">Email</label>
                  <input
                    type="email"
                    className="w-full vintage-border bg-input px-4 py-3 sans-font focus:outline-none focus:ring-2 focus:ring-ring text-sm sm:text-base"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="sans-font font-medium text-foreground block mb-2 text-sm sm:text-base">Projeto</label>
                  <select className="w-full vintage-border bg-input px-4 py-3 sans-font focus:outline-none focus:ring-2 focus:ring-ring text-sm sm:text-base">
                    <option>Identidade Visual</option>
                    <option>Design Editorial</option>
                    <option>Ilustração</option>
                    <option>Papelaria</option>
                    <option>Packaging</option>
                    <option>Consultoria</option>
                  </select>
                </div>

                <div>
                  <label className="sans-font font-medium text-foreground block mb-2 text-sm sm:text-base">Mensagem</label>
                  <textarea
                    rows={4}
                    className="w-full vintage-border bg-input px-4 py-3 sans-font focus:outline-none focus:ring-2 focus:ring-ring resize-none text-sm sm:text-base"
                    placeholder="Conte-me sobre seu projeto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full vintage-border bg-secondary text-secondary-foreground py-4 sans-font font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
