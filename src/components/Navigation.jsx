import { useState } from "react"
import logo from "../assets/logo.png"

export default function Navigation({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-accent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 sm:h-12 w-auto" />
          </div>
          
          {/* Menu desktop */}
          <ul className="hidden md:flex sans-font">
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
                  className={`text-foreground hover:text-accent-foreground transition-colors duration-300 px-3 py-2 ${
                    activeSection === item.key ? "border-b-2 border-accent text-accent-foreground" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Botão hamburguer mobile */}
          <button 
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Menu mobile */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="pt-4 pb-2 space-y-2">
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
                  onClick={closeMenu}
                  className={`block text-foreground hover:text-accent-foreground transition-colors duration-300 py-2 px-4 ${
                    activeSection === item.key ? "bg-accent/20 text-accent-foreground font-semibold" : ""
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
  )
}
