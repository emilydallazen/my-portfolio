
import { useEffect, useState } from "react"
import headerImage from "../assets/header.png"
import logo from "../assets/logo.png"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    // Fade in animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const fadeElements = document.querySelectorAll(".fade-in")
    fadeElements.forEach((el) => observer.observe(el))

    // Smooth scrolling for navigation
    const handleNavClick = (e) => {
      const target = e.target 
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
          setActiveSection(target.hash.slice(1))
        }
      }
    }

    const navLinks = document.querySelectorAll('nav a[href^="#"]')
    navLinks.forEach((link) => link.addEventListener("click", handleNavClick))

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el))
      navLinks.forEach((link) => link.removeEventListener("click", handleNavClick))
    }
  }, [])

  return (
    <div className="min-h-screen vintage-texture">
      {/* Header with transparent background */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/vintage-floral-watercolor-pattern-soft-green-beige.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-border">
          <div className="max-w-6xl mx-auto px-6 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                Emily - Web Designer
              </div>
              <ul className="flex space-x-6 sans-font">
                {[
                  { key: "home", label: "Início" },
                  { key: "sobre", label: "Sobre" },
                  { key: "portfolio", label: "Portfólio" },
                  { key: "servicos", label: "Serviços" },
                  { key: "contato", label: "Contato" }
                ].map((item) => (
                  <li key={item.key}>
                    <a
                      href={`#${item.key}`}
                      className={`text-primary-foreground hover:text-accent transition-colors duration-300 ${
                        activeSection === item.key ? "border-b-2 border-accent" : ""
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="fade-in grid md:grid-cols-2 gap-12 items-center">
            {/* Imagem à esquerda */}
            <div className="flex justify-center md:justify-start">
              <div className="header-image-container">
                <img
                  src={headerImage}
                  alt="Maria Silva - Designer Gráfica"
                  className="w-full max-w-md h-auto object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Texto à direita */}
            <div className="text-center md:text-left">
              <h1 className="sacramento-font text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
                Olá, eu sou a Maria
              </h1>
              <p className="sans-font text-xl md:text-2xl text-muted-foreground mb-8 font-light">
                Designer gráfica apaixonada por criar experiências visuais únicas e memoráveis
              </p>
              <button className="vintage-border bg-primary text-primary-foreground px-8 py-4 sans-font font-medium hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 transform hover:scale-105 pulse-animation">
                Vamos conversar
              </button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 float-animation">
          <div className="w-16 h-16 bg-accent/30 rounded-full blur-sm" />
        </div>
        <div className="absolute bottom-32 right-16 float-animation" style={{ animationDelay: "1s" }}>
          <div className="w-12 h-12 bg-secondary/40 rounded-full blur-sm" />
        </div>
      </header>

      {/* About Section */}
      <section id="sobre" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in text-center mb-16">
            <h2 className="serif-font text-5xl font-bold text-foreground mb-6">Sobre Mim</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="vintage-border polaroid-shadow bg-card p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/professional-woman-designer-portrait-vintage-style.png"
                  alt="Maria Silva"
                  className="w-full h-80 object-cover rounded-lg mb-4"
                />
                <p className="serif-font text-center text-muted-foreground italic">
                  "Criando com amor e atenção aos detalhes"
                </p>
              </div>
            </div>

            <div className="fade-in">
              <div className="paper-texture bg-card vintage-border p-8">
                <h3 className="serif-font text-3xl font-semibold text-foreground mb-6">Minha História</h3>
                <p className="sans-font text-muted-foreground leading-relaxed mb-6">
                  Há mais de 8 anos, mergulhei no mundo do design com uma paixão genuína por criar experiências visuais
                  que tocam o coração das pessoas. Cada projeto é uma nova aventura, onde combino técnica, criatividade
                  e muito carinho.
                </p>
                <p className="sans-font text-muted-foreground leading-relaxed mb-8">
                  Especializo-me em identidade visual, design editorial e ilustração, sempre buscando aquele toque
                  especial que faz toda a diferença.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {["Identidade Visual", "Design Editorial", "Ilustração", "Branding"].map((skill) => (
                    <div key={skill} className="bg-accent/20 vintage-border p-3 text-center">
                      <span className="sans-font text-sm font-medium text-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in text-center mb-16">
            <h2 className="serif-font text-5xl font-bold text-primary-foreground mb-6">Meu Portfólio</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="sans-font text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Uma seleção cuidadosa dos meus trabalhos mais queridos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Identidade Visual Café Aroma",
                category: "Branding",
                image: "coffee shop branding vintage logo design",
              },
              {
                title: "Revista Natureza & Vida",
                category: "Editorial",
                image: "magazine layout design nature theme vintage",
              },
              {
                title: "Ilustrações Botânicas",
                category: "Ilustração",
                image: "botanical illustrations watercolor vintage style",
              },
              {
                title: "Papelaria Casamento",
                category: "Design Gráfico",
                image: "wedding stationery vintage floral design",
              },
              {
                title: "Embalagem Produtos Naturais",
                category: "Packaging",
                image: "natural products packaging organic design",
              },
              {
                title: 'Livro Infantil "Jardim Secreto"',
                category: "Ilustração",
                image: "children book illustration garden theme vintage",
              },
            ].map((project, index) => (
              <div key={index} className="fade-in group">
                <div className="vintage-border polaroid-shadow bg-card p-4 transform hover:scale-105 transition-all duration-300 hover:rotate-1">
                  <img
                    src={`/abstract-geometric-shapes.png?height=300&width=400&query=${project.image}`}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="text-center">
                    <span className="inline-block bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-xs sans-font font-medium mb-2">
                      {project.category}
                    </span>
                    <h3 className="serif-font text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                    <button className="sans-font text-sm text-primary hover:text-accent transition-colors duration-300">
                      Ver detalhes →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in text-center mb-16">
            <h2 className="serif-font text-5xl font-bold text-foreground mb-6">Meus Serviços</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Identidade Visual",
                description: "Criação completa de marca, desde o conceito até a aplicação",
                icon: "🎨",
                price: "A partir de R$ 1.500",
              },
              {
                title: "Design Editorial",
                description: "Revistas, livros, catálogos e materiais impressos únicos",
                icon: "📚",
                price: "A partir de R$ 800",
              },
              {
                title: "Ilustração",
                description: "Ilustrações personalizadas para diversos projetos",
                icon: "✨",
                price: "A partir de R$ 300",
              },
              {
                title: "Papelaria",
                description: "Convites, cartões e papelaria personalizada",
                icon: "💌",
                price: "A partir de R$ 200",
              },
              {
                title: "Packaging",
                description: "Design de embalagens que encantam e vendem",
                icon: "📦",
                price: "A partir de R$ 600",
              },
              {
                title: "Consultoria",
                description: "Orientação estratégica para seu projeto visual",
                icon: "💡",
                price: "R$ 150/hora",
              },
            ].map((service, index) => (
              <div key={index} className="fade-in">
                <div className="paper-texture vintage-border bg-card p-8 h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="serif-font text-2xl font-semibold text-foreground mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="sans-font text-muted-foreground leading-relaxed mb-6 text-center">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <span className="sans-font text-primary font-semibold">{service.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in text-center mb-16">
            <h2 className="serif-font text-5xl font-bold text-primary-foreground mb-6">Vamos Conversar?</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="sans-font text-xl text-primary-foreground/80">
              Adoraria conhecer seu projeto e criar algo incrível juntas!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="fade-in">
              <div className="paper-texture vintage-border bg-card p-8">
                <h3 className="serif-font text-2xl font-semibold text-foreground mb-6">Informações de Contato</h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-accent-foreground">📧</span>
                    </div>
                    <div>
                      <p className="sans-font font-medium text-foreground">Email</p>
                      <p className="sans-font text-muted-foreground">maria@exemplo.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-accent-foreground">📱</span>
                    </div>
                    <div>
                      <p className="sans-font font-medium text-foreground">WhatsApp</p>
                      <p className="sans-font text-muted-foreground">(11) 99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-accent-foreground">📍</span>
                    </div>
                    <div>
                      <p className="sans-font font-medium text-foreground">Localização</p>
                      <p className="sans-font text-muted-foreground">São Paulo, SP</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="serif-font text-lg font-semibold text-foreground mb-4">Me siga nas redes</h4>
                  <div className="flex space-x-4">
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
              <div className="paper-texture vintage-border bg-card p-8">
                <h3 className="serif-font text-2xl font-semibold text-foreground mb-6">Envie uma Mensagem</h3>

                <form className="space-y-6">
                  <div>
                    <label className="sans-font font-medium text-foreground block mb-2">Nome</label>
                    <input
                      type="text"
                      className="w-full vintage-border bg-input px-4 py-3 sans-font focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="sans-font font-medium text-foreground block mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full vintage-border bg-input px-4 py-3 sans-font focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="sans-font font-medium text-foreground block mb-2">Projeto</label>
                    <select className="w-full vintage-border bg-input px-4 py-3 sans-font focus:outline-none focus:ring-2 focus:ring-ring">
                      <option>Identidade Visual</option>
                      <option>Design Editorial</option>
                      <option>Ilustração</option>
                      <option>Papelaria</option>
                      <option>Packaging</option>
                      <option>Consultoria</option>
                    </select>
                  </div>

                  <div>
                    <label className="sans-font font-medium text-foreground block mb-2">Mensagem</label>
                    <textarea
                      rows={4}
                      className="w-full vintage-border bg-input px-4 py-3 sans-font focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Conte-me sobre seu projeto..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full vintage-border bg-secondary text-secondary-foreground py-4 sans-font font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="serif-font text-3xl font-bold mb-4">Maria Silva</h3>
            <p className="sans-font text-primary-foreground/80">
              Design com amor, atenção aos detalhes e um toque vintage especial
            </p>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="sans-font text-primary-foreground/60">
              © 2024 Maria Silva. Todos os direitos reservados. Feito com 💚 e muito carinho.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
