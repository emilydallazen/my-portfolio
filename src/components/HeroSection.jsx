import headerImage from "../assets/header.png"
import tituloHeader from "../assets/titulo_header.png"

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Imagem à esquerda (mobile: no topo) */}
        <div className="hero-image order-2 md:order-1">
          <div className="image-wrapper fade-in">
            <img
              src={headerImage}
              className="hero-img"
              alt="Imagem principal"
            />
          </div>
        </div>
        
        {/* Texto à direita (mobile: embaixo) */}
        <div className="hero-content fade-in order-1 md:order-2">
          <h1 className="hero-title sacramento-font">
            <img 
              src={tituloHeader} 
              alt="Desenvolvimento web e artes digitais" 
              className="max-w-full h-auto"
            />
          </h1>
          <p className="hero-subtitle sans-font">
            Ajudo você a ter presença digital com sites modernos e conteúdo visual envolvente.
          </p>
          <button className="hero-btn sans-font">
            Vamos conversar
          </button>
        </div>
      </div>
    </section>
  )
}
